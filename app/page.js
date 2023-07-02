"use client"
import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>

      <h1>hello i am khilesh</h1>

      <Link href="/Login">Login</Link>
      <br />
      <Link href="/Register">Register</Link>
    </div>
  )
}
// dynamic componenet 

export default page