const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css += `
/* Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--surface);
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  padding-bottom: calc(12px + env(safe-area-inset-bottom));
  box-shadow: 0 -4px 20px rgba(0,0,0,0.04);
  z-index: 100;
  border-top: 1px solid var(--border-color);
}
@media (min-width: 600px) {
  .bottom-nav {
    left: 50%;
    transform: translateX(-50%);
    max-width: 480px;
    border-radius: 20px 20px 0 0;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  background: transparent;
  border: none;
  width: 80px;
}
.nav-item i {
  width: 24px;
  height: 24px;
  stroke-width: 2;
}
.nav-item.active {
  color: var(--primary);
}

/* History Screen */
.history-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}
.history-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: var(--surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}
.history-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  margin-right: 16px;
}
.history-details {
  flex: 1;
}
.history-name {
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.history-date {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.history-badge {
  display: inline-block;
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 6px;
}
.empty-state {
  text-align: center;
  padding: 64px 20px;
  color: var(--text-muted);
}
.empty-state i {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: var(--border-color);
}
`;

fs.writeFileSync('style.css', css);
