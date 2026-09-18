const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const historyJS = `

// ==========================================
// HISTORY & NAVIGATION
// ==========================================
document.getElementById('nav-home').addEventListener('click', () => {
  document.getElementById('nav-home').classList.add('active');
  document.getElementById('nav-history').classList.remove('active');
  showScreen('screen-home');
});

document.getElementById('nav-history').addEventListener('click', () => {
  document.getElementById('nav-history').classList.add('active');
  document.getElementById('nav-home').classList.remove('active');
  renderHistory();
  showScreen('screen-history');
});

function saveTransaction() {
  const history = JSON.parse(localStorage.getItem('upi_split_history') || '[]');
  const txn = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    name: state.name || state.vpa || 'Merchant',
    vpa: state.vpa || '',
    totalPaise: state.totalPaise,
    chunks: state.chunks.length
  };
  history.unshift(txn); // Add to top
  localStorage.setItem('upi_split_history', JSON.stringify(history));
}

function renderHistory() {
  const container = document.getElementById('history-list-container');
  container.innerHTML = '';
  
  const history = JSON.parse(localStorage.getItem('upi_split_history') || '[]');
  const t = translations[currentLang] || translations['en'];
  
  if (history.length === 0) {
    container.innerHTML = \`
      <div class="empty-state">
        <i data-lucide="receipt"></i>
        <div>\${t.historyEmpty || 'No past payments yet.'}</div>
      </div>
    \`;
    lucide.createIcons();
    return;
  }
  
  history.forEach(txn => {
    const d = new Date(txn.date);
    const dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    
    const div = document.createElement('div');
    div.className = 'history-item';
    
    const initial = txn.name.charAt(0).toUpperCase();
    
    div.innerHTML = \`
      <div class="history-icon">\${initial}</div>
      <div class="history-details">
        <div class="history-name">
          <span>\${txn.name}</span>
          <span>\${formatPaise(txn.totalPaise)}</span>
        </div>
        <div class="history-date">\${dateStr}</div>
        <div class="history-badge">\${t.historySplit || 'Split in'} \${txn.chunks}</div>
      </div>
    \`;
    container.appendChild(div);
  });
}
`;

if (!js.includes('function saveTransaction()')) {
  js += historyJS;
  
  // Also we must call saveTransaction() inside initScreenDone()
  js = js.replace('function initScreenDone() {\n  showScreen(\'screen-done\');', 'function initScreenDone() {\n  showScreen(\'screen-done\');\n  saveTransaction();');
  
  fs.writeFileSync('app.js', js);
  console.log("app.js updated.");
} else {
  console.log("Already updated.");
}
