//@ts-ignore
import React from 'react'

interface HeaderProps {
  t: string,
  c: string | undefined,
  n: string | undefined
}

const Header = (props: HeaderProps) => {
  const { t: tag, c: content, n: number } = props

  return (
    <>
      <div className={`header-container ${tag}`}>
        {number &&
        <span className='number'>
          {number}
        </span>}
        {React.createElement(
          tag,
          { key: content },
          content
        )}
      </div>
    </>
  )
}

export default Header
