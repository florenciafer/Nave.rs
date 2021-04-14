import axios from "axios";


export const requestNavers = async (userEmail, password) => {
    let response;
 try {
     
   response = await axios.post("https://navedex-api.herokuapp.com/v1/users/login",{
    
      "email": userEmail,//DESDE ACA ENVIO LA INFORMACION DE MI INPUT
      "password": password//desde aca envio  la info a mi input y lo compara con la informacion que viene de axios 
   })
     return response
  
    
 } catch (error) {
     
     console.log(error.response)
 }
 


}

