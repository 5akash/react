import { getstordcart } from "./Utlity"

export const productsCart= async ()=>{
    const productData= await fetch('prouducts.json')
    const products= await productData.json()

    
    const saveCart= getstordcart()
    const initalCart=[]
    for(const id in saveCart){
      const  foundProducts= products.find(product=> product.id === id)
        if(foundProducts){
           const quantity=saveCart[id]
            foundProducts.quantity= quantity
            initalCart.push(foundProducts)
        }
    }
    return initalCart

}