import React, { useContext } from "react";

var style = {
  backgroundColor: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "1%",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  color: "white",
  fontSize: "large",
  fontFamily: "Times New Roman"
}

var phantom = {
display: 'block',
height: '2%',
width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              { children }
          </div>
      </div>
  )
}

export default Footer