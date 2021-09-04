import React from 'react'
import './Primal.css'
import { useStateValue } from './StateProvider'

function Primal() {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className="primal">
      <h1>Your Primal Info</h1>
      <p>
        <strong>Your email:</strong> {user?.email}
      </p>
      <p>
        <strong>User id:</strong> {user?.uid}
      </p>
    </div>
  )
}

export default Primal
