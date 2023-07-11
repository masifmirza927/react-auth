import React, { useState } from 'react'
import Modal from '../components/Modal'

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={ () => setIsOpen(true)}>Open Modal</button>
      <div>Home</div>
    </>

  )
}

export default Home