export function initializeCreate({ data, changePostCreateInputs }) {

  changePostCreateInputs({
    name: data.name,
    body: {
      en: JSON.stringify(data.body.en, null, 2),
      pl: JSON.stringify(data.body.pl, null, 2)
    }
  })
}
