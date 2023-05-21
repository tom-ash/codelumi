interface LoadGtm {
  (gtmId: string): string
}

export const loadGtm: LoadGtm = (gtmId) => `
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}

  if(localStorage.getItem('consent') === null){
    // @ts-ignore
    gtag('consent', 'default', {
      'analytics_storage': 'declined',
      'ad_storage': 'declined',
    });
  } else {
    // @ts-ignore
    gtag('consent', 'default', JSON.parse(localStorage.getItem('consent')));
  }

  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', '${gtmId}');
`
