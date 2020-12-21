import { coreIndexRoutes } from './core-index-routes'
import { coreNoIndexRoutes } from './core-noindex-routes'
// import { postRoutes } from './post-routes'

export const routes = {
  ...coreIndexRoutes,
  ...coreNoIndexRoutes,
  // ...postRoutes  
}

export const emptyRoutes = (function() {
  const emptyRoutesObject = {}
  Object.keys(routes).map(key => emptyRoutesObject[key] = false)

  return emptyRoutesObject
})()
