import React, { useState } from 'react'

function User() {

    let [content,setcontent] = useState('');
    
    function gettext(e){

        setcontent(e.target.value)
    }

  return (
    
    <>
      <h1>{content}</h1>
      <input type="text" onChange={gettext} />
    </>
  )
}

export default User