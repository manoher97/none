export function add(product){
    return { type:"ADD", payload : product}  
}
export function Delete(product){
    return { type:"DELETE", payload : product}  
}
export function remove(product){
    return { type:"REMOVE", payload : product}  
}
export function visite(product){
    return { type:"VESITE", payload : product}  
}