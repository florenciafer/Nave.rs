import axios from "axios";

export const useUpdate = () => {
  //put actualizar
  //post para crear 
  const updateNaver = (id, setData, token) => {
    axios({
      url: ` https://navedex-api.herokuapp.com/v1/navers/${id}`,
      method: "PUT",
      headers: { Authorization: "Bearer " + token },
      data:{
        job_role: "Desenvolvedor",
        admission_date: "28/12/2019",
        birthdate: "12/04/1992",
        name: "Florencia Fernández",
        project: "Recrutamento",
        url: "test-path/image-test.png",
      },
    })
      .then((response) => {
        setData((prevdata) => prevdata);
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return { updateNaver };
};
