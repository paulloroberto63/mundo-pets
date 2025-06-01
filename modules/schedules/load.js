import {hoursLoad} from "../form/hours-load"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export function schedulesDay() {
// Obtém a data do input
const date = selectedDate.value

// Rederiza as horas disponíveis.
hoursLoad({date})
}