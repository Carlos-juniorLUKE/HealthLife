// Exemplo de interatividade simples
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Obrigado por entrar em contato! Responderemos em breve.");
});
var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach( function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
}

)

// Atividades sugeridas para cada dia da semana
const weeklyActivities = {
    segunda: [
        "Exercício: 30 minutos de caminhada ou corrida leve.",
        "Alimentação: Inclua uma porção extra de vegetais verdes nas refeições.",
        "Auto-cuidado: Faça uma lista de 3 coisas pelas quais você é grato."
    ],
    terca: [
        "Exercício: Sessão de ioga de 20 minutos.",
        "Alimentação: Troque um lanche industrializado por frutas frescas.",
        "Auto-cuidado: Dedique 15 minutos para leitura ou meditação."
    ],
    quarta: [
        "Exercício: Treino de resistência com pesos por 20 minutos.",
        "Alimentação: Beba 2 litros de água ao longo do dia.",
        "Auto-cuidado: Pratique respiração profunda antes de dormir."
    ],
    quinta: [
        "Exercício: Caminhada ao ar livre por 30 minutos.",
        "Alimentação: Adicione uma fonte de proteínas em todas as refeições.",
        "Auto-cuidado: Experimente escrever seus pensamentos em um diário."
    ],
    sexta: [
        "Exercício: Aula de dança ou treino aeróbico de 30 minutos.",
        "Alimentação: Evite bebidas açucaradas e prefira água ou chá.",
        "Auto-cuidado: Reserve 20 minutos para cuidar da pele ou do cabelo."
    ],
    sabado: [
        "Exercício: Atividade de lazer ao ar livre, como ciclismo.",
        "Alimentação: Prepare uma refeição saudável em casa.",
        "Auto-cuidado: Desconecte-se das telas por algumas horas."
    ],
    domingo: [
        "Exercício: Alongamento leve ou ioga para relaxar os músculos.",
        "Alimentação: Planeje suas refeições para a semana.",
        "Auto-cuidado: Tire um tempo para refletir e relaxar."
    ]
};

// Função para mostrar as atividades do dia selecionado
function showActivities(day) {
    const activitiesDiv = document.getElementById("activities");
    const activities = weeklyActivities[day];

    // Exibe as atividades do dia escolhido
    activitiesDiv.innerHTML = `<h3>Atividades para ${day.charAt(0).toUpperCase() + day.slice(1)}-feira</h3>`;
    activitiesDiv.innerHTML += `<ul>${activities.map(activity => `<li>${activity}</li>`).join('')}</ul>`;
}
