import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("time")
export function hoursLoad({date, dailySchedules}){
 //Limpa a lista de horários
 hours.innerHTML = ""

 // Obtém a lista de todos os horários ocupados.
 const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

 console.log(unavailableHours)
 
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":")
    
    // Adiciona a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast
    
    // Define se o horário está disponivel.
    return{
        hour,
        available,
    }
 })
   
   // Renderiza os horários.
   opening.forEach(({hour, available}) =>{
    const option = document.createElement("option")

    option.classList.add("hour")
    option.classList.add(available ? "hour-available" : "hour-unavailable" )

    option.textContent = hour
    
    hours.append(option)
   })

   // Adiciona o evento de clique nos horários disponível.
   hoursClick()
   
}
