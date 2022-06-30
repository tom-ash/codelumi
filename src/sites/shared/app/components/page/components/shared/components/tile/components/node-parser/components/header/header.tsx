import React from 'react'

interface HeaderProps {
  rank: number,
  header: { c: string, n: number } | string
}

const Header = (props: HeaderProps) => {
  const {
    rank,
    header
  } = props

  const objectHeader = typeof header === 'object'
  const tag = `h${rank}`
  const headerText = objectHeader ? header.c : header

  return (
    <>
      <div className={`header-container ${tag}`}>
        {objectHeader && <span className='number'>{header.n}</span>} {React.createElement(tag, {}, headerText)}
      </div>
    </>
  )
}

export default Header
