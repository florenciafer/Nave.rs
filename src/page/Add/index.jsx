import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router";
import { useCreate } from "../../service/useCreate";
import { modalSubsets } from "../../components/ModalSubsets";
import Header from "../../components/Header";

const Add = () => {
  const { token } = useLocalStorage();
  const history = useHistory();
  const { createUser } = useCreate();
  const [error, seterror] = useState("");
  const [editform, seteditform] = useState({
    name: "",
    job_role: "",
    birthdate: "",
    admissionDate: "",
    proyect: "",
    url: "",
  });
  const handleChange = (e) => {
    seteditform({ ...editform, [e.target.name]: e.target.value });
  };

  const { name, admissionDate, birthdate, job_role, proyect, url } = editform;
  

  const confirmAdd = async () => {
    await modalSubsets({
      title: "Naver Criado",
      confirmation: "Naver Criado com Sucesso",
      
    });
    history.push("/home");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.values(editform).includes("")) {
      console.log("los campos deben estar completos");
      return;
    }
    try {
      //intenta
      createUser(token, job_role, admissionDate, birthdate, name, proyect, url);
      confirmAdd();
    } catch (e) {
      seterror("Error en el servidor");
      console.log(error);
    }
  };
  return (
    <div >
         <Header></Header>
         <div className="edit-container">
         <div className="navbar-Edit">
        <button className="arrowform" onClick={() => history.push(`/home`)}>
          <IoIosArrowBack />
        </button>
        <h1 className="title-forms">Adicionar Naver</h1>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div  className="container-input">
          <label className="form-label">Nome</label>
          <input
            className="edit-input"
            type="text"
            value={name}
            name="name"
            placeholder="nome"
            onChange={handleChange} //obtener nombre email
          />
        </div>
        <div  className="container-input">
          <label className="form-label">Idade</label>
          <input
            className="edit-input"
            type="text"
            value={birthdate}
            name="birthdate"
            placeholder="birthdate"
            onChange={handleChange} //obtener nombre del usuario
          />
        </div>
        <div  className="container-input">
          <label className="form-label">Cargo</label>
          <input
            className="edit-input"
            type="text"
            value={job_role}
            name="job_role"
            placeholder="Cargo"
            onChange={handleChange} //obtener nombre email
          />
        </div>
        <div  className="container-input">
          <label className="form-label">Tempo de Empresa</label>
          <input
            className="edit-input"
            type="text"
            value={admissionDate}
            name="admissionDate"
            placeholder="tempo de empresa"
            onChange={handleChange} //obtener nombre del usuario
          />
        </div>
        <div  className="container-input">
          <label className="form-label">projetos que participou</label>
          <input
            className="edit-input"
            type="text"
            value={proyect}
            name="proyect"
            placeholder="proyect"
            onChange={handleChange} //obtener nombre email
          />
        </div>
        <div  className="container-input" >
          <label className="form-label">url da foto do naver</label>
          <input
            className="edit-input"
            type="text"
            value={url}
            name="url"
            placeholder="url"
            onChange={handleChange} //obtener nombre del usuario
          />
        </div>
        <div className="container-btn-submit"> 
      <button type="submit" className="btn-edit">Salvar</button>
      </div>
      </form>
      
         </div>
     
    </div>
  );
};

export default Add;
