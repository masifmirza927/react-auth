import React from 'react'

function Modal(props) {

const handleClose = () => {
    props.setIsOpen(false);
}   

  if(props.isOpen === true) {
    return (
        <div className='mWrapper'>
            <div className='mBox'>
                <button onClick={handleClose}>&#x2715;</button>
                modal
            </div>
        </div>
      )
  }  

}

export default Modal