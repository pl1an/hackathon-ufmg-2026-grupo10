import { Icon } from '../Icon';

export function SideBar({
  currentPath,
  onNavigate,
}: {
  currentPath: string;
  onNavigate: (nextPath: string) => void;
}) {

  const savedRole = window.localStorage.getItem('enteros-role');
  const isAdmin = savedRole === 'Bank Administrator';
  const quickAction = isAdmin
    ? { label: 'Monitoring', path: '/monitoring' }
    : { label: 'New Analysis', path: '/upload' };

  const navigationItems = [
    { label: 'Home', icon: 'home', path: '/home' },
    { label: 'Process Autos', icon: 'description', path: '/upload' },
    { label: 'Bank Evidence', icon: 'account_balance', path: '/upload' },
    { label: 'Decision Outcome', icon: 'gavel', path: '/dashboard' },
    { label: 'Adherence', icon: 'analytics', path: '/monitoring' },
  ];


  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <Icon name="account_balance" />
        </div>
        <div>
          <h1 className="brand-name">EnterOS</h1>
          <p className="brand-subtitle">Legal Division</p>
        </div>
      </div>

      <ul className="nav-list">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <button className={`nav-button ${currentPath === item.path ? 'active' : ''}`} type="button" onClick={() => onNavigate(item.path)}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <button className="sidebar-cta" type="button" onClick={() => onNavigate(quickAction.path)}>
        {quickAction.label}
      </button>
    </aside>
  );
}