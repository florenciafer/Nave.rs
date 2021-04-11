import {useState, useEffect} from 'react'
import { requestNavers } from '../../service/UseLogin';
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";



const Login = () => {
    const { token, setToken } = useLocalStorage();
    const [userEmail, setuserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterror] = useState("");
    const history = useHistory();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            //intenta 
            const response = await  requestNavers(userEmail,password);
            
           
            //aca usar el localsotrage y guardar el token //
            if(response.status === 200){
              setToken(response.data.token)
              history.push(`/home`);
            } else{
                seterror("Datos Incorrectos");
            }
           
         /*    const token =localStorage.getItem("token"); */
        } 
        catch(e){
            seterror("Error en el servidor");
            console.log(e)
        }
    }
    useEffect(() => {
    if(token){
        history.push(`/home`);
    }else{
        history.push('/');
    }
    }, [token])//viendo si cambia el token  si no paso valor el use efect solo se ejecuta una vez cuando  es null 
    return (
        <div className="login-container">
            <div className="login-card">
            <div className="login-img">
                <img src="data:image/png;base64,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" alt="logo" />
            </div>
       <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <label className="form-label">E-mail</label>
            <input className="login-input" type="text"
               value={userEmail}
               name="userEmail"
               placeholder="E-mail"
               onChange={({target})=>setuserEmail(target.value)}  //obtener nombre email
            />
            </div>
          <div>
              <label className="form-label" >Senha</label>
          <input className="login-input" type="password"
               value={password}
               name="Password"
               placeholder="Senha"
               onChange={({target})=>setPassword(target.value)}  //obtener nombre del usuario 
            />
          </div>
            
           <button className="btn-submit" type="submit">Entrar</button>
           {error && error}
        </form>
        </div>
       
            </div>
            
    )
}

export default Login
