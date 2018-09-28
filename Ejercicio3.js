function tipo(arreg){
    let cont1=0,cont2=0,cont3=0;
    for(let i;i<length.arreg;i++){
        if(typeof arreg[i]=='Object'){
            cont1=cont1+1;
        }
        else if(typeof arreg[i]=='string'){
            cont2=cont2+1;
        }
        else if(typeof arreg[i]=='number'){
            cont3=cont3+1;
        }
    }
    console.log("Existen ",cont1 +" de tipo object, ", cont2 +" de tipo string y existen ", cont3 + " de tipo number.")
}