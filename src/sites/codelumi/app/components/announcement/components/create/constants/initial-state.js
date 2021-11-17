const selectableSkills = [
  {
    tag: 'javascript',
    name: 'JavaScript'
  },
  {
    tag: 'ruby',
    name: 'Ruby'
  }
]

const selectedSkills = [
  {
    tag: 'javascript',
    name: 'JavaScript',
    selected: 3
  }
]
const initialState = {
  selectableSkills,
  // selectableSkills: [],
  // selectedSkills,
  selectedSkills: [],
  companyName: '',
  companyIndustry: '',
  companyDescription: '',
  companyOfficeCity: '',
  b2b: false,
  b2bMin: '',
  b2bMax: '',
  civilContract: false,
  civilContractMin: '',
  civilContractMax: '',
  employment: false,
  employmentMin: '',
  employmentMax: '',
  description: '',
  applicationEmail: '',
  applicationLink: '',
  cooperationMode: ''
}

export default initialState
