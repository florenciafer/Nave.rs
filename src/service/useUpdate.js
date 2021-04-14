import axios from "axios";

export const useUpdate = () => {
  //put actualizar
  //post para crear
  const updateNaver = (
    route,
    token,
    job_role,
    admissionDate,
    birthdate,
    name,
    proyect,
    url
  ) => {
    axios({
      url: ` https://navedex-api.herokuapp.com/v1/navers/${route.params.id}`,
      method: "PUT",
      headers: { Authorization: "Bearer " + token },
      data: {
        job_role: job_role,
        admission_date: admissionDate,
        birthdate: birthdate,
        name: name,
        project: proyect,
        url: url,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return { updateNaver };
};
