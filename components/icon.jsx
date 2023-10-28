import React from "react"

const Icon = (props) => 
{
  return (
    <div style={{ }}>
      <img 
        src="/static/logo_nobg.png" 
        alt="logo" 
        height={40} 
        width={40} 
        style={
          { 
            objectFit: 'cover'
          }
        } 
      />,
    </div>
  )
}

export default Icon