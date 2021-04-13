import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useLocalStorage } from '../../hooks/useLocalStorage';


const NaverModal = ({id,setData,name,job_role,url,birthdate,admission_date,project,deleteNaver}) => {
    const { token } = useLocalStorage();
    return (
        <div className="container-modal">
        <div>
    <img className="img-naver" src={url} alt="Ilustracao"/>
    </div>
    <div>
        <h1>{name}</h1>
    </div>
    <div>
        <p>{job_role}</p>
        <h3>idade</h3>
        <p>{birthdate}</p>
        <h3>Tempo de empresa</h3>
        <p>{admission_date}</p>
        <h3>Proyecto que Participou</h3>
        <p>{project}</p>
    </div>
    <span><button  onClick={()=> deleteNaver(id,setData,token)}><AiFillDelete/></button></span><span><button><AiFillEdit/></button></span>
        </div>
    )
}

export default NaverModal
