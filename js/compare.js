
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       
        this.nome= nome;
        this.preco= preco;
        this.alturaCacamba= alturaCacamba;
        this.alturaVeiculo= alturaVeiculo;
        this.alturaSolo= alturaSolo;
        this.capacidadeCarga= capacidadeCarga;
        this.motor= motor;
        this.potencia= potencia;
        this.volumeCacamba= volumeCacamba;
        this.roda= roda;
        this.image= image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){

            if(carArr.length >=2){
                alert("Máximo de 2 carros.");
                el.checked = false;
                return;
            }

            carArr.push(carClass);
                
            
        } else {
            let position = GetCarArrPosition(carArr,carClass);

            if(position >= 0) {
                carArr.splice(position, 1);
            }
          
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }


    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
     
    }

    

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    console.log("Entrou");

    for(let i = 0; i < carArr.length; i++){

        console.log("Imagem");
        document.getElementById(`compare_image_${i}`).innerHTML =
        `<img src="${carArr[i].image}" width="200">`;

        console.log("Modelo");
        document.getElementById(`compare_modelo_${i}`).innerHTML =
        carArr[i].nome;

        console.log("Altura cacamba");
        document.getElementById(`compare_alturacacamba_${i}`).innerHTML =
        carArr[i].alturaCacamba;

        console.log("Altura veiculo");
        document.getElementById(`compare_alturaveiculo_${i}`).innerHTML =
        carArr[i].alturaVeiculo;

        console.log("Altura solo");
        document.getElementById(`compare_alturasolo_${i}`).innerHTML =
        carArr[i].alturaSolo;

        console.log("Capacidade");
        document.getElementById(`compare_capacidadecarga_${i}`).innerHTML =
        carArr[i].capacidadeCarga;

        console.log("Motor");
        document.getElementById(`compare_motor_${i}`).innerHTML =
        carArr[i].motor;

        console.log("Potencia");
        document.getElementById(`compare_potencia_${i}`).innerHTML =
        carArr[i].potencia;

        console.log("Volume");
        document.getElementById(`compare_volumecacamba_${i}`).innerHTML =
        carArr[i].volumeCacamba;

        console.log("Roda");
        document.getElementById(`compare_roda_${i}`).innerHTML =
        carArr[i].roda;

        console.log("Preco");
        document.getElementById(`compare_preco_${i}`).innerHTML =
        carArr[i].preco;
    }
}