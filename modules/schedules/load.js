import { scheduleFetchByDay } from "../../services/schedule.fetch-by-day.js"
import {hoursLoad} from "../form/hours-load"
import { schedulesShow } from "./show.js"
// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export  async function schedulesDay() {
// Obtém a data do input
const date = selectedDate.value

// Busca na API os agentamentos
const dailySchedules = await scheduleFetchByDay({date})

// exibe os agentamentos
schedulesShow({ dailySchedules })

// Rederiza as horas disponíveis.
hoursLoad({date, dailySchedules})
}