
  (function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const body = document.body;
    const STORAGE_KEY = 'theme-preference';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') {
      body.classList.add('dark-mode');
      btn.textContent = '☀️';
      btn.setAttribute('aria-pressed', 'true');
    } else {

      body.classList.remove('dark-mode');
      btn.textContent = '🌙';
      btn.setAttribute('aria-pressed', 'false');
    }

    btn.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      btn.textContent = isDark ? '☀️' : '🌙';
      btn.setAttribute('aria-pressed', String(isDark));
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
  })();

