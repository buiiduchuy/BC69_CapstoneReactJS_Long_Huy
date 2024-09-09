// import React from 'react'

type Props = {
  color?: string
  handleClick: ()=> void
  handleClick1: (a:number)=> void
}

export const DemoComponent = (props: Props) => {
  const {color , handleClick,handleClick1} = props
  console.log("color: ", color);
  return (
    <>
      <div onClick = {handleClick}>DemoComponent</div>
      <div onClick = {()=>handleClick1(123)}>Handle click 1</div>

      <h1 className="text-red-800 bg-[#ebd06c] text-[100px] hover:bg-green-400 transition-all cursor-pointer">Demo taildwind css</h1>
    </>
  )
}
