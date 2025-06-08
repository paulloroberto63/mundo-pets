import { schedulesDay } from "./load.js";
import { scheduleCancel } from "./schedule-cancel.js";
const periods = document.querySelectorAll(".period");

//gerar evento de lista para cada lista (manha, tarde e noite):

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel")) {
      const item = event.target.closest("li");

      //pega o id do agendamento para remover:
      const { id } = item.dataset;

      //confirma que o id foi selecionado:
      if (id) {
        //confirma se o usuario quer remover:
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          //Faz a requisicao na API para cancelar:
          await scheduleCancel({ id });

          //recarrega os agendamentos:
          schedulesDay();
        }
      }
    }
  });
});