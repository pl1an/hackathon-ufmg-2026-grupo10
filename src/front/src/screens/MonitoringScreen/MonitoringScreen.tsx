import { useNavigate } from 'react-router-dom';
import { performanceRows, recommendations, statsCards } from '../../data';
import { Icon } from '../../modules/ui/Icon';
import './MonitoringScreen.css';

export function MonitoringScreen() {
  const navigate = useNavigate();

  return (
    <main className="screen monitoring-screen">
      <div className="monitor-grid monitoring-screen__grid">
        <section className="panel panel-inner hero-banner monitoring-screen__hero" >
          <div className="title-kicker monitoring-screen__kicker">Executive Monitoring</div>
          <h1 className="headline monitoring-screen__headline">
            Bank UFMG <span className="accent">Operations</span>
          </h1>
          <p className="lede monitoring-screen__lede">
            Track adherence, savings, and high-risk cases in one control surface. Use the data to assess whether the agreement policy is working.
          </p>

          <div className="split-grid monitoring-screen__stats" style={{ marginTop: 28 }}>
            {statsCards.slice(0, 4).map((card, index) => (
              <article key={card.label} className={`metric-card monitoring-screen__stat-card ${index === 3 ? 'monitoring-screen__stat-card--accent' : ''}`}>
                <div className="section-heading" style={{ marginBottom: 10 }}>
                  <Icon name={card.icon} className={index === 3 ? 'monitoring-screen__stat-icon monitoring-screen__stat-icon--accent' : 'monitoring-screen__stat-icon'} />
                  <span className={`mini-pill monitoring-screen__note ${index === 3 ? 'monitoring-screen__note--accent' : ''}`}>{card.note}</span>
                </div>
                <div className={`metric-label ${index === 3 ? 'monitoring-screen__stat-label--accent' : ''}`}>{card.label}</div>
                <div className="metric-value monitoring-screen__stat-value">{card.value}</div>
              </article>
            ))}
          </div>
        </section>

      </div>

      <section className="panel panel-inner monitoring-screen__table-panel" style={{ marginTop: 24 }}>
        <div className="section-heading">
          <h3 className="section-title-strong monitoring-screen__table-title">Lawyer Performance Matrix</h3>
          <button type="button" className="ghost-button">Export Full Report</button>
        </div>

        <div className="table-wrap">
          <table className="data-table monitoring-screen__table">
            <thead>
              <tr>
                <th>Counsel Name</th>
                <th>Active Cases</th>
                <th>Adherence Score</th>
                <th>Recommended vs Actual (R$)</th>
              </tr>
            </thead>
            <tbody>
              {performanceRows.map((row) => (
                <tr key={row.name}>
                  <td>
                    <div className="row-head">
                      <div className="avatar">{row.initials}</div>
                      <div>
                        <div style={{ fontWeight: 800 }}>{row.name}</div>
                        <div className="muted" style={{ fontSize: '0.78rem' }}>{row.role}</div>
                      </div>
                    </div>
                  </td>
                  <td>{row.cases}</td>
                  <td>
                    <div className="row-head" style={{ gap: 10 }}>
                      <div className="bar"><span style={{ width: `${row.adherence}%` }} /></div>
                      <strong>{row.adherence}%</strong>
                    </div>
                  </td>
                  <td>
                    <span style={{ color: row.tone === 'warning' ? 'var(--warning)' : 'var(--success)' }}>{row.recommended}</span> / <strong>{row.actual}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}