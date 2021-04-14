import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useUpdate } from "../../service/useUpdate";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory, useRouteMatch } from "react-router";
import Header from '../../components/Header';
import { modalSubsets } from "../../components/ModalSubsets";

const Edit = () => {
  const { token } = useLocalStorage();
  const { updateNaver } = useUpdate();
  const [error, seterror] = useState("");
  

  const [editform, seteditform] = useState({
    name: "",
    job_role: "",
    birthdate: "",
    admissionDate: "",
    proyect: "",
    url: "",
  });
  const route = useRouteMatch();

  /*    const [data, setData] = useState([]); */
  const history = useHistory();

  const confirmEdit = async () => {
    await modalSubsets({
      title: "Naver atualizado",
      confirmation: "Naver atualizado com sucesso",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     
    if (Object.values(editform).includes("")) {
      console.log("los campos deben estar completos");
      return;
    }
    try {
      //intenta
      updateNaver(
        route,
        token,
        job_role,
        admissionDate,
        birthdate,
        name,
        proyect,
        url,
       
      );
      confirmEdit();
      seteditform({
        name: "",
        job_role: "",
        birthdate: "",
        admissionDate: "",
        proyect: "",
        url: "",
      });
    } catch (e) {
      seterror("Error en el servidor");
      console.log(e);
    }
  };

  const handleChange = (e) => {
    seteditform({ ...editform, [e.target.name]: e.target.value });
  };

  const { name, admissionDate, birthdate, job_role, proyect, url } = editform;

 
  return (
    
    <div className="edit-container">
          <Header></Header>
      <div className="navbar-Edit">
        <button className="arrowform" onClick={() => history.push(`/home`)}>
          <IoIosArrowBack />
        </button>
        <h1 className="title-forms">Editar Naver</h1>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="container-input">
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
        <div  className="container-input">
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
  );
};

export default Edit;