import React from 'react'
import Nav from '@/components/Nav'

const layout = (props) => {

    const {children} = props;
  return (
    <div>

        <Nav />
        {children}
    </div>
  )
}

export default layout