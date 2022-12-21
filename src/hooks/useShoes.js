import { useState } from "react";
import { toast } from "react-toastify";
import baseUrl from "../Api/baseUrl";



export const useShoes = () => {

  const [products, setProducts] = useState([])

  const addImagenes = async ({ name, description, category, price, image}) => {
        
    try {

        const reader = new FileReader();
        reader.readAsDataURL(image[0])
        
    
            reader.onloadend = async () => {

                try{
                  const data = await baseUrl.post(`/shoes`,{ name, description,category, price, image: reader.result} )
                  if(data.status === 200) {
                    toast.success("Se ha subido su imagen", { position: "top-center"})
                  }
                }catch(error){
                  console.log(error)                
                }
            }
   
        
      } catch (error) {
        console.log(error)
    }
}



// Subir imagenes por id y aumentar el elemento (imagenes de la api)

const addImagenesForId = async ({ id,image}) => {
        
  try {

      const reader = new FileReader();
      reader.readAsDataURL(image[0])
      
      console.log(id , image)
  
          reader.onloadend = async () => {

              try{
                const data = await baseUrl.post(`/shoes/${id}`,{ image: reader.result } )
                  console.log(data)
                if(data.status === 200) {
                  toast.success("Se ha subido su imagen", { position: "top-center"})
                }
              }catch(error){
                console.log(error)                
              }
          }
 
      
    } catch (error) {
      console.log(error)
  }
}


const product = async (req, res) => {

  try {
    
    const { data } = await baseUrl.get("/shoes")
    setProducts(data.productos)

  } catch (error) {
    console.log(error)
  }
}


  return {
    
    // Métodos
    addImagenes,
    addImagenesForId,
    products,
    product
  };
};
