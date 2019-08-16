export function showHeader() { 
  if (window.location.pathname.indexOf('resethasla') != -1) return true
  if (window.location.pathname.indexOf('resetpassword') != -1) return true
}