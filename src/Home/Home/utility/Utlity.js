const addtoDb=(id)=>{

   let shopingCart ={}
    const stordCart= localStorage.getItem('shoping-cart')
    if(stordCart){
         shopingCart= JSON.parse(stordCart)
    }

    let quantity=shopingCart[id] 
    if(quantity){
        quantity= quantity + 1
        shopingCart[id]= quantity
    }
    else{
        shopingCart[id]= 1
    }
   localStorage.setItem('shoping-cart' ,JSON.stringify(shopingCart) )
}


const getstordcart=()=>{
     let shopingCart={}
      const stordCart = localStorage.getItem('shoping-cart')
      if(stordCart){
        shopingCart= JSON.parse(stordCart)
      }
      return(shopingCart)

}

export {getstordcart, addtoDb}