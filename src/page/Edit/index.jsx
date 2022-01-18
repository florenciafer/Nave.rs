import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useUpdate } from "../../service/useUpdate";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory, useRouteMatch } from "react-router";
import Header from "../../components/Header";
import { modalSubsets } from "../../components/ModalSubsets";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const { token } = useLocalStorage();
  const { updateNaver } = useUpdate();
  const [error, seterror] = useState("");

  //
  const [editform, seteditform] = useState({
    name: "",
    job_role: "",
    birthdate: "",
    admissionDate: "",
    proyect: "",
    url: "",
  });
  const route = useRouteMatch();

  const history = useHistory();

  const location = useLocation();
  useEffect(() => {
     const date = new Date(location.state.data.birthdate);
    const birthdate= date.getDate()+'/' + (date.getMonth()+1) + '/'+date.getFullYear();//
    
    const date2 = new Date(location.state.data.admission_date);
    const admissionDate= date2.getDate()+'/' + (date2.getMonth()+1) + '/'+date2.getFullYear();//
    const editData = {
      name: location.state.data.name,
      job_role: location.state.data.job_role,
      birthdate: birthdate,
      admissionDate:admissionDate,
      proyect: location.state.data.project,
      url: location.state.data.url,
    };
    console.log(editData);
    seteditform(editData); // actualizame con esta data traida de location desde use effect
    // te debería mostrar el objeto/array que le enviaste desde el componente anterior
  }, [location]);
  const confirmEdit = async () => {
    await modalSubsets({
      title: "Naver atualizado",
      confirmation: "Naver atualizado com sucesso",
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
      updateNaver(
        route,
        token,
        job_role,
        admissionDate,
        birthdate,
        name,
        proyect,
        url
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
    } catch (error) {
      seterror("Error en el servidor");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    seteditform({ ...editform, [e.target.name]: e.target.value });
  };

  const { name, admissionDate, birthdate, job_role, proyect, url } = editform;

  return (
    <div>
      <Header></Header>
      <div className="edit-container">
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
          <div className="container-input">
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
          <div className="container-input">
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
          <div className="container-input">
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
          <div className="container-input">
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
          <div className="container-input">
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
            <button type="submit" className="btn-edit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
