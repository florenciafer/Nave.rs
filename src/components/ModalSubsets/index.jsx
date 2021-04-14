import React from 'react'
import Modal from "react-modal"
import { confirmable, createConfirmation } from 'react-confirm';

const ModalSubsets = ({show, proceed, confirmation, options,title}) => {
   console.log(confirmation,show,proceed,options)

   return( <Modal className="ReactModal__Content--after-open" isOpen={show} >
     <div className="container-confirm" >
       <div className="container-btnsubsets">
       <button className="close-subsets" onClick={() => proceed(false)}>x</button>
       </div>

       <div>
       <h1 className="title-confirm" > {title}</h1>   
       </div>
      <div>
      <p className="alert-confirm" >{confirmation}</p>
   
     
      </div>
     </div>
  

  </Modal>
    )}
  


    export const modalSubsets= createConfirmation(confirmable(ModalSubsets)); // CONFIRMABLE crea - pasa props  (COMPONENTE)