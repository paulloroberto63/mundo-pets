import dayjs from "dayjs";

const PeriodMorning = document.getElementById("period-morning")
const PeriodAfternoon = document.getElementById("period-afternoon")
const PeriodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }){
    try {
        PeriodMorning.innerHTML = ""
        PeriodAfternoon.innerHTML = ""
        PeriodNight.innerHTML = ""

        dailySchedules.forEach((schedule) => {
             const item = document.createElement("li")
            const time = document.createElement("span")
            const pet = document.createElement("strong")
            const name = document.createElement("p")
            const remove = document.createElement("a")
            const description = document.createElement("p")
            item.setAttribute("data-id", schedule.id) 

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name
            pet.textContent = schedule.pet
            description.textContent = schedule.description
            remove.textContent = "Remover agendamento"
            remove.classList.add("cancel")

            

            item.append(time, pet, name, description, remove )

            const hour = dayjs(schedule.when).hour()

            if(hour <= 12){
                PeriodMorning.appendChild(item)
            } else if(hour > 12 && hour <= 18) {
                PeriodAfternoon.appendChild(item)
            } else {
                PeriodNight.appendChild(item)
            }
        })
        

    } catch (error) {
        alert("Não foi possivel exibir os agendamentos") 
        console.log(error)
    }
}