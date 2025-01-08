// Faça um algoritmo que, dado as 3 notas tiradas por um aluno em um semestre da faculdade,
// calcule e imprima a sua média, assim como sua classificação, conforme a tabela abaixo:

//     Classificação:
//         - Média < 5 -> Reprovado
//         - Média >= 5 e Média <= 7 -> Recuperação
//         - Média > 7 -> Aprovado

//     Média = (N1 + N2 + N3) / 3;


const N1 = 5;
const N2 = 3;
const N3 = 7;
const media = (N1 + N2 + N3) / 3;

if (media < 5) {
    console.log('Aluno reprovado.');
}
else if (media >= 5 && media <= 7) {
    console.log('Aluno está em recuperação.');
} else {
    console.log('Aluno aprovado! =D');
}
