import React from "react"

const Logo = (props) => 
{
  return (
    <div style={{ borderRight: '1px solid #5b5e5e' }}>
      <img 
        src="/static/logo_nobg.png" 
        alt="logo" 
        height={50} 
        width={50} 
        style={
          { 
            margin: '1rem'
          }
        } 
      />
    </div>
  )
}

export default Logo