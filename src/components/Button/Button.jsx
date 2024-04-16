import React from 'react'

function Button({text, onClick, classes}) {
  console.log(classes, 'ss')
  return (
  <button type="button" className={`text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 ` +classes}
  onClick={onClick}
  >{text}</button>
  )
}

export default Button