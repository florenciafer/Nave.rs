import React ,{useState}from 'react';
import Modal from "react-modal";

import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import NaverModal from '../NaverModal/NaverModal';
import { useDelete } from '../../service/useDelete';
import { useUpdate } from '../../service/useUpdate';
import { useLocalStorage } from '../../hooks/useLocalStorage';



const Navers = ({id, admission_date,project, birthdate, job_role ,name,url , setData}) => {
     const [modalIsOpen, setmodalIsOpen] = useState(false);
     const { token } = useLocalStorage();
     const  {deleteNaver}= useDelete();
     const {updateNaver}=useUpdate();
    return (
<div>
    <div>
    <img className="avatar" onClick={()=>setmodalIsOpen(true)} src={url} alt="Ilustracao"/>
    </div>
    <div>
        <h1>{name}</h1>
    </div>
    <div>
        <p>{job_role}</p>
    </div>
    <span><button onClick={()=> deleteNaver(id,setData,token)}><AiFillDelete/></button></span><span><button onClick={()=>updateNaver(id,setData,token)}><AiFillEdit/></button></span>
    <Modal isOpen={modalIsOpen}>
        
    <button onClick={()=>setmodalIsOpen(false)}>x</button>
    <NaverModal
      key={id} 
      id={id}
       url={url}
       name={name} 
       job_role={job_role } 
       admission_date={admission_date} 
       project={project} 
        birthdate={birthdate}
        setData={setData}
        deleteNaver={deleteNaver}/>
     </Modal>
    </div>

    )
    
}

export default Navers
