//cria referencia ao btCalcular e associa a função ao evento click
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularEquacao);

//clia a função calcularEquação
function calcularEquacao(){
    //cria referencia ao elementos de entrada da página
    var inX1 = document.getElementById("inX1");
    var inY1 = document.getElementById("inY1");
    var inX2 = document.getElementById("inX2");
    var inY2 = document.getElementById("inY2");

    var x1 = Number(inX1.value);
    var y1 = Number(inY1.value);
    var x2 = Number(inX2.value);
    var y2 = Number(inY2.value);

    //cria referencia ao elementos de saída da página
    var outAngular = document.getElementById("outAngular");
    var outEquacao = document.getElementById("outEquacao");
    var outTipo = document.getElementById("outTipo");

    //calcula o coeficiente angular da reta
    var a = (y2 - y1) / (x2 - x1);

    //calcular a equação da reta
    var b = (-a * x1) + y1; 
    
    if(b > 0){
        outEquacao.textContent = `y = ${a}.x + ${b}`; 
    }else{
        outEquacao.textContent = `y = ${a}.x ${b}`; 
    }
    outAngular.textContent = `${a}`;  
    
    //calcular o tipo de reta
    if( a > 0){
       outTipo.textContent = `Reta crescente`;
    }else if(a < 0){
        outTipo.textContent = `Reta decrescente`;
    }else if(a == 0){
        outTipo.textContent = `Reta horizontal`;
    }else{
        outTipo.textContent = `Reta vertical`;
    }
}

//cria referencia ao btLimparCampos e associa a função ao evento click
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);

//cria a função limparCampos
function limparCampos(){
    inX1.value = "";
    inX2.value = "";
    inY1.value = "";
    inY2.value = "";
    inX1.focus();
    outAngular.textContent = "";
    outEquacao.textContent = "";
    outTipo.textContent = "";
    return;
}