let generatecode = (n) =>{
    let code = "";
    let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

    for(let i = 0; i<n; i++){
        code+= random.charAt(Math.floor(Math.random() * random.length));
        
    }
    return code;
}
console.log(generatecode(5));