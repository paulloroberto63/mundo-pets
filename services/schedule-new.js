import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, pet, tel, description, when, }){
    try {
     await fetch(`${apiConfig.baseURL}/schedules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, name, pet, tel, description, when,}),
    })
    alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possivel agendar, tente novamente mais tarde")
    }
}