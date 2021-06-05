import React from "react";
import { useHistory } from "react-router-dom";

const EditBtn = ({id}) => {
  const history = useHistory();
  return (
    <div className="container-edit">
      <div>
        <h1>Navers</h1>
      </div>
      <div>
        <button onClick={() => history.push(`/home/edit/${id}`)}>
          Adicionar Naver
        </button>
      </div>
      )
    </div>
  );
};

export default EditBtn;
