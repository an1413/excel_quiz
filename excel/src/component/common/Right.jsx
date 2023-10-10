import React from 'react'
import Swal from "sweetalert2";

export default function Right({text}) {

  const RightModal = Swal.fire(`${text}`)
      
  return (
    <div>정답</div>
  )
}
