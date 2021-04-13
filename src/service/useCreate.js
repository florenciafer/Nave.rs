import axios from "axios";

export const useCreate = () => {
  //put actualizar
  //post para crear
  const createUser = ( token) => {
    axios({
      url: ` https://navedex-api.herokuapp.com/v1/navers`,
      method: "POST",
      headers: { Authorization: "Bearer " + token },
      data: {
        job_role: "Desenvolvedor",
        admission_date: "19/08/2018",
        birthdate: "12/04/1992",
        project: "Project Backend Test",
        name: "Florencia Fernandez",
        url: "https://vejasp.abril.com.br/wp-content/uploads/2020/05/Foto-Sarah-Becker-1.jpg.jpg",
      },
    }).then((response)=>{
       console.log(response)
    })
   
      .catch((error) => {
        console.log(error.response);
      });
      
  };
  return { createUser };
};
