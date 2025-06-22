import React from 'react'
import { ReactTyped } from "react-typed";

function ContactSection() {
  return (
      <MyComponent />
  )
}

export default ContactSection

const MyComponent = () => (
  <div className='my-20'>
    <ReactTyped strings={["I'Am Ichwal"]} typeSpeed={40}  backSpeed={50} loop cursor={false} />
    <br />
    <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
  </div>
);