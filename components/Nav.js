import React from 'react'
import Link from 'next/link'
const nav = () => {
  return (
    <>
        <div >
            <br />
            <Link href="/Home/posts">Posts</Link>
            <br />
            <Link href="/Home/timeline">Timeline</Link>
        </div>
    </>
  )
}

export default nav