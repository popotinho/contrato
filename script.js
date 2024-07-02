const dialogues = [
    { character: 1, text: "Bom dia, desejo contratar seus serviços de perturbação!" },
    { character: 2, text: "Olá, bom dia! Perfeito, vamos dar continuidade?!" },
    { character: 1, text: "Sim. Uma dúvida, seus serviços são mentirosos?" },
    { character: 2, text: "Não moça, trabalhamos para melhor atender as suas necessidades!" },
    { character: 1, text: "akakakakkakkk amei!" },
    { character: 2, text: "Contrato fechado ?" },
    { character:1,text: "Resposta no zap em 3,2,1...."}
];

let currentDialogueIndex = 0;

const bubble1 = document.getElementById('bubble1');
const bubble2 = document.getElementById('bubble2');
const nextButton = document.getElementById('next');

function showDialogue(index) {
    const dialogue = dialogues[index];
    if (dialogue.character === 1) {
        bubble1.textContent = dialogue.text;
        bubble1.style.visibility = 'visible';
        bubble2.style.visibility = 'hidden';
    } else {
        bubble2.textContent = dialogue.text;
        bubble2.style.visibility = 'visible';
        bubble1.style.visibility = 'hidden';
    }
}

nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
    if (currentDialogueIndex >= dialogues.length) {
        currentDialogueIndex = 0;
    }
    showDialogue(currentDialogueIndex);
});

// Mostrar a primeira fala ao carregar a página
showDialogue(currentDialogueIndex);
