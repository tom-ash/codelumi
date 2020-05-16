import { coreIndexRoutes } from './core-index-routes'
import { coreNoIndexRoutes } from './core-noindex-routes'
import { blogRoutes } from './blog-routes'

export const routes = {
  ...coreIndexRoutes,
  ...coreNoIndexRoutes,
  ...blogRoutes  
}

export const emptyRoutes = (function() {
  const emptyRoutesObject = {}
  Object.keys(routes).map(key => emptyRoutesObject[key] = false)

  return emptyRoutesObject
})()
