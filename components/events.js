import React from 'react'

export default function Events() {
    const onbtnclick = ()=>{
        console.log('yesh')
    }
  return (
    <div className='container'>
        <h2>events test</h2>
        <button onClick = {onbtnclick}>click1</button>
        <button onClick={()=>{alert('s')   }}>click2</button>
    </div>
  )
}
