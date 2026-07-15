/* AeroCater cookie consent — blocks non-essential cookies until the visitor chooses. */
(function () {
  const STORAGE_KEY = 'aerocater_cookie_consent';

  function getConsent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function setConsent(choice) {
    const record = {
      essential: true,
      analytics: !!choice.analytics,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    applyConsent(record);
    hideBanner();
  }

  function applyConsent(record) {
    // Wire actual analytics initialization here once an analytics provider is chosen.
    // Nothing loads unless record.analytics === true.
    window.__aerocaterConsent = record;
  }

  function hideBanner() {
    const el = document.getElementById('cookie-banner');
    if (el) el.classList.remove('cookie-banner--visible');
  }

  function showBanner() {
    const el = document.getElementById('cookie-banner');
    if (el) el.classList.add('cookie-banner--visible');
  }

  function buildBanner() {
    if (document.getElementById('cookie-banner')) return;
    const el = document.createElement('div');
    el.id = 'cookie-banner';
    el.className = 'cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Cookie preferences');
    el.innerHTML = `
      <div class="cookie-banner-inner">
        <p>We use essential cookies to run AeroCater, and optional analytics cookies to understand usage.
        See our <a href="/cookies">Cookie Policy</a>.</p>
        <div class="cookie-banner-actions">
          <button type="button" class="cookie-btn cookie-btn-ghost" data-action="reject">Reject non-essential</button>
          <button type="button" class="cookie-btn cookie-btn-primary" data-action="accept">Accept all</button>
        </div>
      </div>
    `;
    document.body.appendChild(el);

    el.querySelector('[data-action="accept"]').addEventListener('click', function () {
      setConsent({ analytics: true });
    });
    el.querySelector('[data-action="reject"]').addEventListener('click', function () {
      setConsent({ analytics: false });
    });
  }

  function init() {
    buildBanner();
    const existing = getConsent();
    if (existing) {
      applyConsent(existing);
    } else {
      showBanner();
    }
  }

  // Exposed so the footer "Manage cookie preferences" link can reopen the banner at any time.
  window.aerocaterOpenCookiePrefs = function () {
    buildBanner();
    showBanner();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
