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

    // percorrer a lista de elementos h5 inseridos na página, as tarefas
    for (let i=0; i < tarefas.length; i++){
        
        tarefas[i].className ="tarefaselecionada"
        
    }

})