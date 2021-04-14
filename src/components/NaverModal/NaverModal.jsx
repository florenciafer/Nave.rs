import moment from "moment";
import React from "react";
import { useHistory } from "react-router";
import { MdDelete,MdEdit } from "react-icons/md";


const NaverModal = ({
  id,
  name,
  job_role,
  url,
  birthdate,
  admission_date,
  project,
  confirmDelete,
  setmodalIsOpen
}) => {
 
  const history = useHistory();
  const calcYears = (date) => {
    return moment().year() - moment(date).year();
  };
  console.log(birthdate);
  const age = calcYears(birthdate);
  const admission = calcYears(admission_date);

  return (
    <div className="container-modal">
            <button className="close-modal" onClick={() => setmodalIsOpen(false)}>x</button>
      <div>
        <img className="card-img" src={url} alt="Ilustracao" />
      </div>
      <div className="container-info-modal">

        <div>
          <h1 className="card-name">{name}</h1>
        </div>
        <div>
          <p className="card-job">{job_role}</p>
          <h3 className="card-info-modal">idade</h3>
          <p>{age} anos</p>
          <h3 className="card-info-modal">Tempo de empresa</h3>
          <p>{admission} anos</p>
          <h3 className="card-info-modal">Proyecto que Participou</h3>
          <p>{project}</p>
        </div>
        <div className="container-btn-modal">
          <span className="btn-modal">
        <button className="btn-naver" onClick={() => confirmDelete()}>
          <MdDelete className="icon-naver" />
        </button>
      </span>
      <span  className="btn-modal">
        <button className="btn-naver" onClick={() => history.push(`/home/edit/${id}`)}>
          <MdEdit className="icon-naver" />
        </button>
      </span>
        </div>
       
      </div>
    </div>
  );
};

export default NaverModal;
