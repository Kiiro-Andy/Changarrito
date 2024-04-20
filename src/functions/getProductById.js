import { db } from "../firebase/credenciales";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";

async function getProductById(id) {
  try {
    const docRef = doc(db, "products", id);
    const snapDoc = await getDoc(docRef);
    
    if (snapDoc.exists()) {
      const producto = snapDoc.data();
      
      const precioSnaps = await getDocs(collection(docRef, "prices"));
      producto.price = precioSnaps.docs[0].data();
      producto.priceId = precioSnaps.docs[0].id;
      
      return producto;
    } else {
      console.log("El producto no existe");
      return null;
    }
  } catch (error) {
    console.log("Error al obtener el producto:", error);
    return null;
  }
  }
  
  export default getProductById;