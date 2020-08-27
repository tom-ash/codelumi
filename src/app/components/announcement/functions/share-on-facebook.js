export function shareOnFacebook(url, isMobile) {
  if (!screen) return

  const winWidth = 520
  const winHeight = 350
  const winTop = (screen.height / 2) - (winHeight / 2)
  const winLeft = (screen.width / 2) - (winWidth / 2)

  if (isMobile) return window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)

  window.open(
    'http://www.facebook.com/sharer.php?s=100&p[title]=' +
    '&p[url]=' + url,
    'sharer',
    'top=' + winTop +
    ',left=' + winLeft +
    ',toolbar=0,status=0,width=' + winWidth +
    ',height=' + winHeight
  )
}
