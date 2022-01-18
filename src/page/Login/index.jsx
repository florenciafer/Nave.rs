import { useState, useEffect } from "react";
import { requestNavers } from "../../service/UseLogin";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import logo from "../../assets/img/logo.png";

const Login = () => {
  const { token, setToken } = useLocalStorage();
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (userEmail === "" || password === "") {
        return seterror("falta llenar campos");
      } else {
        const response = await requestNavers(userEmail, password);

        if (response.status === 200) {
          setToken(response.data.token);
          history.push(`/home`);
        } else {
          seterror("Datos Incorrectos");
        }
      }
    } catch (e) {
      seterror("Error en el servidor");
      console.log(e);
    }
  };
  useEffect(() => {
    if (token) {
      history.push(`/home`);
    } else {
      history.push("/");
    }
  }, [token]);
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-img">
          <img src={logo} alt="logo" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">E-mail</label>
            <input
              className="login-input"
              type="text"
              value={userEmail}
              name="userEmail"
              placeholder="E-mail"
              onChange={({ target }) => setuserEmail(target.value)} 
              required
            />
          </div>
          <div>
            <label className="form-label">Senha</label>
            <input
              className="login-input"
              type="password"
              value={password}
              name="Password"
              placeholder="Senha"
              onChange={({ target }) => setPassword(target.value)} 
              required
            />
          </div>

          <button className="btn-submit" type="submit">
            Entrar
          </button>
          {error && error}
        </form>
      </div>
    </div>
  );
};

export default Login;
