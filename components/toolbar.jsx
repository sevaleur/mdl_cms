import React from "react"

const ToolBar = ( props ) => 
{
  const { renderDefault } = props

  return (
    <div style={
      { 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
        }
      }
    > 
      { 
        renderDefault({ ...props }) 
      } 
    </div>
  )
}

export default ToolBar