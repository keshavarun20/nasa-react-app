import React from 'react'

export default function (props) {
  return (
    <div className='imgContainer'>
        <img src={props.data?.hdurl} alt={props.data?.title} className='bgImage'/>
    </div>
  )
}
