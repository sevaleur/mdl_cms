import React from "react"

const ToolBar = ( props ) => 
{
  const { renderDefault } = props

  return (
    <div> 
      { 
        renderDefault({ ...props }) 
      } 
    </div>
  )
}

export default ToolBar