export function getAnnouncementsListRouteState() {
  fetch(API_URL + `/announcements`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {

    announcements = JSON.stringify(json)

    console.log(announcements)


    res.send(renderFullPage(html, preloadedState))
  })
}
