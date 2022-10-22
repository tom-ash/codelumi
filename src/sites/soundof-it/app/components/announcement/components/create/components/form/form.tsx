import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import SkillSelector from './components/skill-selector/skill-selector'
import SubmitButton from './components/submit-button'
import Location from './components/location/location'
import Contract from './components/contract/contract'

interface AnnouncementCreateFormProps {
  selectableSkills: object[]
  selectedSkills: object[]
  setStore(newStore: object): void
  remote: boolean
  hybrid: boolean
  office: boolean
  b2b: boolean
  b2bMax: number
  b2bMin: number
  employment: boolean
  employmentMax: number
  employmentMin: number
  civilContract: boolean
  civilContractMax: number
  civilContractMin: number
}

const AnnouncementCreateForm = (props: AnnouncementCreateFormProps) => {
  useStyles(styles)

  const {
    selectableSkills,
    selectedSkills,
    setStore,
    remote,
    hybrid,
    office,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin,
  } = props

  const locationProps = {
    remote,
    hybrid,
    office,
    setStore,
  }

  const skillSelectorProps = {
    selectableSkills,
    selectedSkills,
    setStore,
  }

  const contractProps = {
    setStore,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin,
  }

  const submitButtonProps = {
    selectedSkills,
    remote,
    hybrid,
    office,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin,
  }

  return (
    <div id='listing-create-form' className='form'>
      <h1>Post a Job</h1>
      <SkillSelector {...skillSelectorProps} />
      <Location {...locationProps} />
      <Contract {...contractProps} />
      <SubmitButton {...submitButtonProps} />
    </div>
  )
}

export default AnnouncementCreateForm
