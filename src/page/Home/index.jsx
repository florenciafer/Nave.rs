import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navers from "../../components/Navers/Navers";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Header from "../../components/Header";

const Home = () => {
  /*  const { token } = useLocalStorage() */
  const { token } = useLocalStorage();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function listNaver() {
      setIsLoading(true);
      await axios
        .get("https://navedex-api.herokuapp.com/v1/navers", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((results) => {
          setData(results.data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
        });
    }
    listNaver();
  }, []);

  if (isLoading) 
  //early return
  {
    return <div className="preloader"></div>;
  }
  if (data) {
    return (
      <div className="container-Home">
        <Header></Header>
        <div className="container-home">
          <div className="container-add">
            <h2 className="title-add">Navers</h2>
            <button
              className="link-add"
              onClick={() => history.push("/home/add")}
            >
              Adicionar Naver
            </button>
          </div>
          <div className="container-Navers">
            {data.map((dat,index) => (
              <Navers
              setData={setData}
               data={data[index]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Home;
