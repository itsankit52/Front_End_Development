
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {

  const params = useParams(); // Jo bhi route pa jaa rahe hain uska information dega 
  console.log(params);

  return (
    <h1>Contact Us</h1>
  )
}
