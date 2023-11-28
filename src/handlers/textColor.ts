export const textColorHandler = (x : string) =>{
    if(x==="in stock"){
      return("text-pastelgreen")
    }
    else if(x==="weekend special"){
      return("text-pastelorange")
    }
    else if(x==="limited stock"){
      return("text-amaranth")
    }
  }