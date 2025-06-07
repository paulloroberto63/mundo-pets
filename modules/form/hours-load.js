import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("time")
export function hoursLoad({date}){
 //Limpa a lista de horários
 hours.innerHTML = ""
 
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":")
    
    // Adiciona a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    
    // Define se o horário está disponivel.
    return{
        hour,
        available: !isHourPast,
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
