const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const historyScreenHTML = `

      <!-- ================= SCREEN: HISTORY ================= -->
      <div id="screen-history" class="screen hidden">
        <h2 style="margin-bottom: 8px;" data-t="historyTitle">Payment History</h2>
        <p style="color: var(--text-muted); margin-bottom: 24px;" data-t="historySub">Your locally saved split payments.</p>
        
        <div id="history-list-container" class="history-list">
          <!-- Populated by JS -->
        </div>
      </div>
`;

const navHTML = `
    <!-- BOTTOM NAVIGATION -->
    <nav class="bottom-nav">
      <button class="nav-item active" id="nav-home">
        <i data-lucide="home"></i>
        <span data-t="navHome">Home</span>
      </button>
      <button class="nav-item" id="nav-history">
        <i data-lucide="clock-3"></i>
        <span data-t="navHistory">History</span>
      </button>
    </nav>
`;

if (!html.includes('screen-history')) {
  // Insert before </main>
  html = html.replace('</main>', historyScreenHTML + '\n    </main>');
  // Insert before </div> at the end of app
  html = html.replace('    </main>\n  </div>', '    </main>\n' + navHTML + '\n  </div>');
  
  fs.writeFileSync('index.html', html);
  console.log("HTML updated.");
} else {
  console.log("Already updated.");
}
