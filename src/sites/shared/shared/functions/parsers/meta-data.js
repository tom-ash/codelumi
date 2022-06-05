import openGraphGenericParser from './open-graph-generic.js'

function metaDataParser({
  lang,
  title,
  description,
  keywords
}) {

  return {
    lang,
    title,
    description,
    keywords
  }
}

export default metaDataParser
