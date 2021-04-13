import React from 'react'
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useUpdate } from '../../service/useUpdate';


const Edit = ({id,setData}) => {
    const { token } = useLocalStorage();
    const {updateNaver}=useUpdate();
    return (
        <div>
       <h2>soy edit</h2>
        <button   onClick={()=>updateNaver(id,setData,token)}
          className="btn-submit"></button>
        </div>
 
    )
}

export default Edit
