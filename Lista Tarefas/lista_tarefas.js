//obter os elementos da página html
const frm = document.querySelector("form")
const dvQuadro = document.getElementById("dvQuadro")

frm.addEventListener("submit", (e) => {

    e.preventDefault(); //previne o envio do formulário

    console.log("submit ok")

    const tarefa = frm.inTarefa.value // obtem o conteúdo digitado

    const h5 = document.createElement("h5") 
    const texto = document.createTextNode(tarefa)
    h5.appendChild(texto) //define que o texto será filho de h5
    dvQuadro.appendChild(h5); //define que h5 será filho da div Quadro

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})

frm.btnSelecionar.addEventListener("click", () =>{
    const tarefas = document.querySelectorAll("h5") //cata todos os h5 do form e armazena num vetor
    if (tarefas.length==0){
        alert("Não há tarefas")
        return
    }

    let auxiliar = -1 //auxiliar para indicar linha selecionada

    // Percorre a lista de elementos h5 inseridos na página, as tarefas

    for (let i=0; i < tarefas.length; i++){

        // Verifica se a tag é a a selecionada 
        if( tarefas[i].className == "tarefaselecionada"){
            
            //Se for a class retorna para tarefa normal

            tarefas[i].className = "tarefanormal" 

            auxiliar = i //auxiliar marca a linha selecionada   

            break       
        }
                     
    }

    //Mas se a tag não for a selecionada, ele muda o estilo da próxima linha
    tarefas[auxiliar+1].className="tarefaselecionada" 

    // E se a linha selecionada for a última, ele reseta a auxiliar
    if (auxiliar == tarefas.length-1){
        auxiliar= -1
    }
    
   

})


frm.btnRetirar.addEventListener("click", () =>{
    const tarefas = document.querySelectorAll("h5") //cata todos os h5 do form e armazena num vetor

    let aux=0

    if (aux==-1){
        alert("Selecione uma tarefa para retirar")
        return
    }

    // Percorre a lista de elementos h5 inseridos na página, as tarefas

    for (let i=0; i < tarefas.length; i++){

        // Verifica se a tag é a a selecionada

        if(tarefas[i].className == "tarefaselecionada"){
            
            //Se for, retira a linha

            tarefas.Splice(i)  
            
            aux=1

            return 
        }
        
        if (aux==0){
            return
        }
                     
    }
  
   

})