import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const clientPet = document.getElementById("pet")
const clientTel = document.getElementById("tel")
const clientDescription = document.getElementById("description")

const selectedDate = document.getElementById("date")

// evento de adicionar apenas numeros no input
clientTel.addEventListener('input', (event) => {
    clientTel.value = clientTel.value.replace(/\D/g, '')
})

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    // Previne o comportamento padrão de carregar a página
    event.preventDefault()
     
    try {
       const name = clientName.value.trim()
       const pet = clientPet.value.trim()
       const tel = clientTel.value.trim()
       const description = clientDescription.value.trim()

       if(!name) {
        return alert("Informe o nome do cliente")
       }
       if(!pet) {
        return alert("Informe o pet do cliente")
       }
       if(!tel) {
        return alert("Informe o numero de telefone  do cliente")
       }
       if(!description) {
        return alert("Informe a descrição do agentamento do cliente")
       }

       // Recupera o horário selecionado.
       const currentlySelectedHour = document.querySelector(".hourSelect")
       const selectedOption = currentlySelectedHour.options[currentlySelectedHour.selectedIndex]
      
       //recupera somente a hora
       const [hour] = selectedOption.innerText.split(":")
 
       
     // Insere a hora da data
     const when = dayjs(selectedDate.value).add(hour,"hour")
     
    // Gera um ID
    const id = new Date().getMinutes()

    await scheduleNew({
        id,
        name,
        pet,
        tel,
        description,
        when
})
    } catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
    }

}