import axios from "axios";

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE2MTczODc5Mjl9.OGhAKox8glTgADA3n5--pdlGV0l87O2LjIASuU7loHk"; // VARIABLE MAYUSCULA VARIABLE CONSTANTE QUE NO CAMBIA 
export const requestNavers = async (userEmail, password) => {
    let response;
 try {
     
   response = await axios.post("https://navedex-api.herokuapp.com/v1/users/login",{
    
      "email": userEmail,//DESDE ACA ENVIO LA INFORMACION DE MI INPUT
      "password": password
   })
     return response
   /* headers: *//* {Authorization:"Bearer " + TOKEN }}) */
    
 } catch (error) {
     
     console.log(error.response)
 }
 


}

