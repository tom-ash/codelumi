export function showHeader() { 
  if (typeof window === 'undefined') return
  
  if (window.location.pathname.indexOf('resethasla') != -1) return true
  if (window.location.pathname.indexOf('resetpassword') != -1) return true
}