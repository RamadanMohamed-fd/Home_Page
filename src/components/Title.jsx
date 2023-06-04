import React from 'react'

const Title = (props) => {
  return (
    <div className={`flex items-center justify-center flex-col w-full bg-white cursor-pointer  ${props.style}`}>
      <p className=' tracking-wider text-[var(--color-default)] font-semibold text-xl'>{props.sup}</p>
    <h2 className="text-[30px] sm:text-[36px] text-center duration-200 text-slate-700 font-bold w-full">{props.title}</h2>
    <div className="w-[200px] h-[1px] bg-[var(--color-default)] flex items-center justify-center mt-2 gap-2">
      <div className="topcollection-heading-line"></div>
      <div className="topcollection-heading-line"></div>
      <div className="topcollection-heading-line"></div>
      <div className="topcollection-heading-line"></div>
    </div>
  </div>
  )
}

export default Title