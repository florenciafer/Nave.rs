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
  setData,
  data,
}) => {
  console.log(data);
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
      deleteNaver(data.id, setData, token);
      await modalSubsets({
        title: "Excluir Naver",
        confirmation: "Naver Excluido com Sucesso!",
      });
    }

  };
 /*  const location = {pathName:`home/edit/${id}`,
                    state : data} */
  return (
    <div className="container-card">
      <div>
        <img
          className="card-img"
          onClick={() => setmodalIsOpen(true)}
          src={data.url}
          alt="Ilustracao"
        />
      </div>
      <div>
        <h1 className="card-name">{data.name}</h1>
      </div>
      <div>
        <p className="card-job">{data.job_role}</p>
      </div>
      <span>
        <button className="btn-naver" onClick={() => confirmDelete()}>
          <MdDelete className="icon-naver" />
        </button>
      </span>
      <span>
        <button className="btn-naver" onClick={() => history.push(`home/edit/${data.id}`,{data})}>
          <MdEdit className="icon-naver" />
        </button>
      </span>
 
      <Modal className="ReactModal__Content--after-open" isOpen={modalIsOpen}>
        <NaverModal
          key={data.id}
          id={data.id}
          url={data.url}
          name={data.name}
          job_role={data.job_role}
          admission_date={data.admission_date}
          project={data.project}
          birthdate={data.birthdate}
          setData={setData}
          confirmDelete={confirmDelete}
          setmodalIsOpen={setmodalIsOpen}
        />
      </Modal>
    </div>
  );
};

export default Navers;
