// // import React from 'react'
// // import { ManagedLink } from 'managed-inputs'
// // import { linkManager } from './functions/managers.js'

// // const CodeLink = props => <ManagedLink {...linkManager(props)}/>

// // import React from 'react'
// // import { ManagedLink } from 'managed-inputs'
// // import { linkManager } from './functions/managers.js'

// // const CodeLink = props => <ManagedLink {...linkManager(props)}/>

// // export default CodeLink


// // export default CodeLink

// import React from 'react'
// import prettifyDate from '../../../../../../../../shared/app/functions/time/prettify-date'

// export const linkManager = props => {
//   const {
//     clientUrl,
//     changeRoute,
//     pathname,
//     hrefLang,
//     title,
//     modifiedOn,
//     description,
//     category
//   } = props

//   const classNames = { container: `code-link` }  
//   const href = `${clientUrl}/${pathname}`
//   const label = (
//     <>
//       <div className={`category ${category}`}>
//         {category}
//       </div>
//         <div className='title'>
//           {title}
//         </div>
//         <div className='last-updated-at'>
//           {modifiedOn && prettifyDate({ date: modifiedOn, lang: 'en' })}
//         </div>
//         <div className='description'>
//           {description}
//         </div>
//     </>
//   )
//   const onClick = () => changeRoute({ href })

//   return { classNames, href, hrefLang, title, label, onClick }
// }
