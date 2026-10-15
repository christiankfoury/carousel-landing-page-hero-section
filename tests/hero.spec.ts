import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const widths = [320, 375, 390, 768, 1024, 1440]
const demoUrl = 'https://oncarousel.com/book-a-demo/?product=Equipment+Finance'

for (const width of widths) {
  test(`content, CTA destinations, accessible layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText("The equipment is ready. The paperwork isn't.")
    await expect(page.locator('.eyebrow')).toHaveText('CAROUSEL FOR EQUIPMENT LENDERS')
    await expect(page.locator('.hero-description')).toContainText('one mobile-first flow to verify their identity, connect their bank, and submit business details')
    await expect(page.locator('.hero-description')).toContainText('everything organized in one place, ready to review without the document chase')
    await expect(page.getByRole('heading', { name: 'Equipment finance application', exact: true })).toBeVisible()
    await expect(page.locator('.handoff-note')).toHaveText('From the jobsite.To your review queue.')
    await expect(page).toHaveTitle('Equipment Finance Intake & Verification | Carousel')
    const ctas = page.getByRole('link', { name: 'Book a demo' })
    await expect(ctas).toHaveCount(2)
    for (const cta of await ctas.all()) await expect(cta).toHaveAttribute('href', demoUrl)
    const announcement = page.getByRole('img', { name: /Carousel announces/ })
    await expect(announcement).toBeVisible()
    expect(await announcement.evaluate(img => img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0 && img.naturalHeight > 0)).toBe(true)
    await expect(page.getByText('Ready for review', { exact: true })).toBeVisible()
    await expect(page.getByText('Identity verified', { exact: true })).toBeVisible()
    await expect(page.getByText('Bank account connected', { exact: true })).toBeVisible()
    await expect(page.getByText('Business details submitted', { exact: true })).toBeVisible()
    await expect(page.getByText('YOUR EQUIPMENT FINANCE APPLICATION', { exact: true })).toBeVisible()
    await expect(page.getByText('FOR YOUR CONTRACTOR', { exact: false })).toBeVisible()
    await expect(page.getByText('Your application has been', { exact: false })).toBeVisible()
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
    expect(overflow).toBe(false)

    // Hit-test essential application content so the foreground phone cannot obscure it.
    for (const label of ['Equipment finance application', 'Identity verification', 'Bank connection', 'Business details', 'Ready for review']) {
      const target = page.getByText(label, { exact: true })
      await target.scrollIntoViewIfNeeded()
      expect(await target.evaluate(el => {
        const box = el.getBoundingClientRect()
        const top = document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2)
        return top === el || el.contains(top)
      })).toBe(true)
    }
    expect(errors).toEqual([])
    // Scan each viewport for WCAG A/AA accessibility violations.
    const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    expect(a11y.violations).toEqual([])
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.screenshot({ path: `test-results/hero-${width}.png`, fullPage: true, animations: 'disabled' })
  })
}

test('keyboard skip link and focus indicators', async ({ page }) => {
  // Keep the skip link and demo CTAs reachable with visible keyboard focus.
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skip = page.getByRole('link', { name: 'Skip to content' })
  await expect(skip).toBeFocused()
  await expect(skip).toBeInViewport()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Carousel home' })).toBeFocused()
  await page.keyboard.press('Tab')
  const headerCta = page.getByRole('link', { name: 'Book a demo' }).first()
  await expect(headerCta).toBeFocused()
  await expect(headerCta).toHaveCSS('outline-style', 'solid')
  expect(await headerCta.evaluate(el => parseFloat(getComputedStyle(el).outlineWidth))).toBeGreaterThan(0)
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Book a demo' }).last()).toBeFocused()
})

test('reduced motion preserves the complete product illustration', async ({ page }) => {
  // Disabling entrance animations must leave the screens and their labels fully visible.
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  for (const selector of ['.finance-dashboard', '.buyer-phone', '.buyer-label', '.team-label', '.handoff-note']) {
    await expect(page.locator(selector)).toBeVisible()
    await expect(page.locator(selector)).toHaveCSS('animation-name', 'none')
    await expect(page.locator(selector)).toHaveCSS('opacity', '1')
  }
})

test('local fonts and initial layout stability', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  // Capture loading shifts before navigation, excluding shifts caused by user input.
  await page.addInitScript(() => {
    const shifts: number[] = []
    Object.assign(window, { measuredLayoutShifts: shifts })
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const shift = entry as PerformanceEntry & { value: number; hadRecentInput: boolean }
        if (!shift.hadRecentInput) shifts.push(shift.value)
      }
    }).observe({ type: 'layout-shift', buffered: true })
  })
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(1200)
  expect(await page.evaluate(() => document.fonts.check('16px "Newsreader Variable"'))).toBe(true)
  expect(await page.evaluate(() => document.fonts.check('16px "Hanken Grotesk Variable"'))).toBe(true)
  const cls = await page.evaluate(() => {
    const measured = window as unknown as { measuredLayoutShifts: number[] }
    return measured.measuredLayoutShifts.reduce((total, value) => total + value, 0)
  })
  console.log(`Initial layout shift total (local Chromium, unthrottled): ${cls}`)
  expect(cls).toBeLessThan(0.1)
})
