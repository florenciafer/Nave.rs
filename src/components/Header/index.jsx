import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useHistory } from "react-router-dom";
import logo from  "../../assets/img/logo.png";

const Header = () => {
    const { token,logout } = useLocalStorage();
    const history = useHistory();
     
    const handleRemoveToken =()=>{
    logout(token) 
      history.push(`/`);
    }
    return (
        <div>
                <div className="container-header">
                  <div>
              <img className="logo-header" src={logo} alt="logo" />
                  </div>
                  <div>
                  <button className="btn-header" onClick={handleRemoveToken} type="submit">Sair</button>
                  </div>
              </div>
              </div>
    )
}

export default Header
