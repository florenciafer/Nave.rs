import React from 'react'
import { useHistory } from "react-router-dom";
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Home = () => {
   /*  const { token } = useLocalStorage() */
    const { token,logout } = useLocalStorage();
    const history = useHistory();
     
    const handleRemoveToken =()=>{
    logout(token) 
      history.push(`/`);
    }
     return (
        <div>
              <div>
                <div>
            <img src="" alt="logo"/>
                </div>
                <div>
                <button onClick={handleRemoveToken} type="submit">Sair</button>
                </div>
            </div>
        
            <h1>Soy home</h1>
        </div>
    )
}

export default Home
