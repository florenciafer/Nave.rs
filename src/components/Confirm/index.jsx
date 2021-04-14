import React from 'react'
import Modal from "react-modal"
import { confirmable, createConfirmation } from 'react-confirm';

const Confirm = ({show, proceed, confirmation, options,title}) => {
   console.log(confirmation,show,proceed,options)

   return( <Modal className="ReactModal__Content--after-open" isOpen={show} >
     <div className="container-confirm">
       <div>
       <h1 className="title-confirm"> {title}</h1> 
       </div>
      
  <div>
      <p className="alert-confirm">{confirmation}</p>
      <div class="btn-confirm">
      <button className="btn-confirm-cancelar" onClick={() => proceed(false)}>Cancelar</button>
      <button className="link-add" onClick={() => proceed(true)}>Excluir</button>
      </div>
     
     </div>
  
      </div>

  </Modal>
    )}
  


    export const confirm = createConfirmation(confirmable(Confirm)); // CONFIRMABLE crea - pasa props  (COMPONENTE)
