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
            console.log(response)
           
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
            <div>
                <img src="" alt="" />
            </div>
       <form onSubmit={handleSubmit}>
            <div>
                <label>E-mail</label>
            <input type="text"
               value={userEmail}
               name="userEmail"
               placeholder="E-mail"
               onChange={({target})=>setuserEmail(target.value)}  //obtener nombre email
            />
            </div>
          <div>
              <label>Senha</label>
          <input type="password"
               value={password}
               name="Password"
               placeholder="Senha"
               onChange={({target})=>setPassword(target.value)}  //obtener nombre del usuario 
            />
          </div>
            
           <button type="submit">Entrar</button>
           {error && error}
        </form>
        </div>
       
    )
}

export default Login
