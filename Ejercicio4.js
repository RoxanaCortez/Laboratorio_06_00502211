function suma(arreg){
    let suma1=0, suma2=0, ultimo=length.arreg-1;
    if(length.arreg%2==0){
        for(let i; i<=length.arreg/2;i++){
            suma1=arreg[i]+arreg[ultimo];
            document.writeln(suma1+" ");
            ultimo=ultimo-1;
        }
    }
    else{
        for(let i; i<=length.arreg/2;i++){
            if(i===length.arreg/2){
                suma2= arreg[length.arreg/2]*2;
            }
            else{
                suma2=arreg[i]+arreg[ultimo];
                ultimo=ultimo-1;
            }
            document.writeln(suma2+" ");
        }
    }
}