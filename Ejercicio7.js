function incerteza(arreg){
    let prom=0, suma=0; suma2=0, cuadrado=0, incerteza=0;
    for(let i; i<length.arreg; i++){
        suma=suma+arreg[i];
    }
    prom=suma/length.arreg;
    for(let i; i<length.arreg;i++){
        cuadrado=Math.pow(arreg[i]-prom,2);
        suma2=suma+cuadrado;
        cuadrado=0;
    }
    incerteza=Math.sqrt()
}