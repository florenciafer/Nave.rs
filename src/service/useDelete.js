import axios from "axios";



export const useDelete =  () => {
  const deleteNaver =(id,setData,token)=>{
   

     //llamar a la function cHooks sino me da error que no se puede mostrar en callbacks 
    axios.delete(`https://navedex-api.herokuapp.com/v1/navers/${id}`,{
      headers:{Authorization:"Bearer " + token}
     })
      .then((response) => {
       setData(prevdata=>prevdata.filter(dat=>dat.id !== id))
        console.log(response,"hola");
       
      })
      .catch((error) => {
        console.log(error.response)
         
      });
   }
   console.log(deleteNaver)
   //nombre:valor
  return { deleteNaver}
}