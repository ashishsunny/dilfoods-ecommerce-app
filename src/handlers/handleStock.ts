export const handleStock = (x:number, y:number) =>{
    if((x-y)>=0){
        return x-y
    }
    else{
        return 0
    }
}