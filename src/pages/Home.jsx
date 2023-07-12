import React, { useContext, useState } from 'react'
import Modal from '../components/Modal'
import { authContext } from '../App';
import Nav from '../components/Nav';



function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const data  = useContext(authContext);
console.log(data);
  return (
    <>
    <Nav />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1>heloo </h1>
      </Modal>
     
      

      <div>Home</div>
    </>

  )
}

export default Home