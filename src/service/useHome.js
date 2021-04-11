import axios from "axios";

export const apiNavers = async (token) => {
     let response;
 try {
     
  const
   response = await axios.get("https://navedex-api.herokuapp.com/v1/navers",{
    headers:{Authorization:"Bearer " + token}
   })
   console.log(token)
   console.log(response)

     return response
    
   
    
 } catch (error) {
     
     console.log(error.data)
 }
 


}