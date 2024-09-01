import React from 'react'

function Posts({data}) {
  return (
    <div>
        <span>{data.id}</span>
        <h4>{data.title}</h4>
        <p>{data.body}</p>
    </div>
  )
}

export default Posts