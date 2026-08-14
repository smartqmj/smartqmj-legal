(function () {
  var STORAGE_KEY = 'smartqmj_lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem(STORAGE_KEY) || 'rus';
    applyLang(saved);

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
    });
  });
})();
