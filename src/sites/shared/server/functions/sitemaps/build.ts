// // @ts-ignore TODO!
// import pretty from 'pretty'
import xmlFormat from 'xml-formatter';

interface Link {
  href: string
  hrefLang: string
  priority: string
  modifiedOn?: string
  changeFreq: string // TODO: Use enum!
}

type LinkGroup = Link[]

interface BuildSitemap {
  (attrs: {
    linkGroups: LinkGroup[]
    clientUrl: string
  }): string
}

const buildSitemap: BuildSitemap = ({ linkGroups, clientUrl }) => {
  return xmlFormat(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${buildXmlLinks({ linkGroups, clientUrl })}
    </urlset>`
  )
}

interface BuildXmlLinks {
  (attrs: {
    linkGroups: LinkGroup[]
    clientUrl: string
  }): string
}

const buildXmlLinks: BuildXmlLinks = ({ linkGroups, clientUrl }) => {
  let xmlLinks = ''

  linkGroups.map(linkGroup => {
    xmlLinks += buildXmlLink({ linkGroup, clientUrl })
  })

  return xmlLinks
}

interface BuildXmlLink {
  (attrs: {
    linkGroup: Link[]
    clientUrl: string
  }): string
}

const buildXmlLink: BuildXmlLink = ({ linkGroup, clientUrl }) => {
  let xmLlink = ''

  const linkAlternates = buildLinkAlternates({ linkGroup, clientUrl })

  linkGroup.map(link => {
    const { href, modifiedOn, changeFreq, priority } = link

    xmLlink += (
      `<url>
        <loc>${clientUrl}${href}</loc>
        ${modifiedOn ? `<lastmod>${modifiedOn}</lastmod>` : ''}
        <changefreq>${changeFreq}</changefreq>
        <priority>${priority}</priority>
        ${linkAlternates}
      </url>`
    )
  })

  return xmLlink
}

interface BuildLinkAlternates {
  (attrs: {
    linkGroup: Link[]
    clientUrl: string
  }): string
}

const buildLinkAlternates: BuildLinkAlternates = ({ linkGroup, clientUrl }) => {
  if (linkGroup.length < 2) return ''

  let altLocalizedUrls = ''

  linkGroup.map(link => {
    altLocalizedUrls += (
      `<xhtml:link
        rel="alternate"
        href="${clientUrl}${link.href}"
        hreflang="${link.hrefLang}"
      />`
    )
  })

  return altLocalizedUrls
}

export default buildSitemap
