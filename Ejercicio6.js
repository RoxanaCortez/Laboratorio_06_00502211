function encriptado(cadena){
    let cad="";
    for(let i; i<length.cadena; i++){
        if(cadena[i]==m){
            cad=cad+"0";
        }
        else if(cadena[i]==u){
            cad=cad+"1";
        }
        else if(cadena[i]==r){
            cad=cad+"2";
        }
        else if(cadena[i]==c){
            cad=cad+"3";  
        }
        else if(cadena[i]==i){
            cad=cad+"4";   
        }
        else if(cadena[i]==e){
            cad=cad+"5";   
        }
        else if(cadena[i]==l){
            cad=cad+"6";   
        }
        else if(cadena[i]==a){
            cad=cad+"7";   
        }
        else if(cadena[i]==g){
            cad=cad+"8";   
        }
        else if(cadena[i]==o){
            cad=cad+"9";   
        }
        else{
            cad=cad+cadena[i];
        }
    }
    console.log(cad);
}