import React, { useState } from "react";
import Modal from "react-modal";


import { MdDelete,MdEdit } from "react-icons/md";
import NaverModal from "../NaverModal/NaverModal";
import { useDelete } from "../../service/useDelete";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useHistory } from "react-router";
import  { confirm } from "../Confirm";
import { modalSubsets } from "../ModalSubsets";

const Navers = ({
  id,
  admission_date,
  project,
  birthdate,
  job_role,
  name,
  url,
  setData,
}) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const { token } = useLocalStorage();
  const { deleteNaver } = useDelete();
  const history = useHistory();
  const confirmDelete = async () => {
    if (
      await confirm({
        title: "Excluir Naver",
        confirmation: "Tem certeza que deseja excluir este naver?",
      })
    ) {
      deleteNaver(id, setData, token);
      await modalSubsets({
        title: "Excluir Naver",
        confirmation: "Naver Excluido com Sucesso!",
      });
    }
  };
  return (
    <div className="container-card">
      <div>
        <img
          className="card-img"
          onClick={() => setmodalIsOpen(true)}
          src={url}
          alt="Ilustracao"
        />
      </div>
      <div>
        <h1 className="card-name">{name}</h1>
      </div>
      <div>
        <p className="card-job">{job_role}</p>
      </div>
      <span>
        <button className="btn-naver" onClick={() => confirmDelete()}>
          <MdDelete className="icon-naver" />
        </button>
      </span>
      <span>
        <button className="btn-naver" onClick={() => history.push(`/home/edit/${id}`)}>
          <MdEdit className="icon-naver" />
        </button>
      </span>

      <Modal className="ReactModal__Content--after-open" isOpen={modalIsOpen}>
        <NaverModal
          key={id}
          id={id}
          url={url}
          name={name}
          job_role={job_role}
          admission_date={admission_date}
          project={project}
          birthdate={birthdate}
          setData={setData}
          confirmDelete={confirmDelete}
          setmodalIsOpen={setmodalIsOpen}
        />
      </Modal>
    </div>
  );
};

export default Navers;
