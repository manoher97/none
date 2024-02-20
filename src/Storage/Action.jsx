export function add(product){
    return { type:"ADD", payload : product}  
}
export function Delete(id){
    return { type:"DELETE", payload : id}  
}