import { ArrowDownLeft, ChevronRight, CircleHelp, FileText, LayoutGrid, LockKeyhole, SlidersHorizontal } from 'lucide-react'
import { application } from '../data/application'
import { VerificationRow } from './VerificationRow'
import { Wordmark } from './Wordmark'

export function FinanceDashboard() {
  return (
    <section className="finance-dashboard" aria-label="Lending team workspace, illustrative application">
      <div className="dashboard-topbar flex items-center justify-between">
        <Wordmark small />
        <span className="workspace-label">Lending workspace <span className="team-avatar">LM</span></span>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar" aria-label="Illustrative workspace context">
          <span className="sidebar-caption">WORKSPACE</span>
          <span className="sidebar-item"><LayoutGrid size={14} aria-hidden="true" /> Overview</span>
          <span className="sidebar-item sidebar-active"><FileText size={14} aria-hidden="true" /> Applications</span>
          <span className="sidebar-item"><SlidersHorizontal size={14} aria-hidden="true" /> Settings</span>
          <span className="sidebar-bottom"><CircleHelp size={14} aria-hidden="true" /> Help center</span>
        </aside>
        <div className="dashboard-content">
          <p className="dashboard-breadcrumb flex items-center gap-1">Applications <ChevronRight size={11} aria-hidden="true" /> <span>{application.id}</span></p>
          <h2>Equipment finance application</h2>
          <div className="applicant flex items-center gap-2.5">
            <span className="applicant-avatar">{application.initials}</span>
            <div><p>{application.name} · {application.company}</p><span>{application.id}</span></div>
          </div>
          <dl className="application-details">
            <div><dt>Application type</dt><dd>{application.type}</dd></div>
            <div><dt>Equipment</dt><dd>{application.equipment}</dd></div>
          </dl>
          <ul className="team-checks">{application.checks.map(check => <VerificationRow key={check.id} check={check} perspective="team" />)}</ul>
          <div className="review-status flex items-center gap-2"><span className="status-dot" />{application.status}</div>
          <p className="dashboard-note flex items-start gap-1.5"><LockKeyhole size={11} className="shrink-0" aria-hidden="true" /> Information organized for your team.</p>
        </div>
      </div>
      <div className="dashboard-bottom flex items-center justify-end gap-1.5"><ArrowDownLeft size={12} aria-hidden="true" /> One application. All in one place.</div>
    </section>
  )
}
