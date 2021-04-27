import metaDataParser from '../../../../shared/functions/parsers/meta-data.js'

function metaSetter(meta) {
  console.log(meta)
  const parsedMeta = metaDataParser(meta)
  const { lang, title, description, keywords, image } = parsedMeta

  document.documentElement.lang = lang
  document.title = title
  document.querySelector('meta[name="description"]').setAttribute("content", description)
  document.querySelector('meta[name="keywords"]').setAttribute("content", keywords)
}

export default metaSetter
