import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { apiNavers } from '../../service/useHome';

const Navers = () => {
    const { token } = useLocalStorage();
    const {response} = apiNavers(token);
   
    
    return (
        <div>
          <h1>hola</h1>
        </div>
    )
}

export default Navers
