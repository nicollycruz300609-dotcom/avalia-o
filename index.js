
import { Pessoa, Aluno, AlunoVip, Professor } from "./pessoa.js";
 
const aluno1 = new Aluno("Nicolly Cruz", "123.456.789-00", "30/06/2009", "A001", "Inglês", "basico");
const aluno2 = new AlunoVip("Bianca Cruz da Silva", "987.654.321-00", "20/04/2014", "A002", "Espanhol", "avancado", 0.2);

const professor1 = new Professor("Gislaine Tavares", "131.262.373-44", "03/07/1984", "P001", ["Inglês", "Português"], 3000);
const professor2 = new Professor("Lucas Alves", "595.566.707-88", "17/05/1998", "P002", ["Espanhol"], 2800);

function gerarRelatorio(alunos, professores) {
  console.log("===== RELATÓRIO DA ESCOLA =====\n");

  console.log("---- ALUNOS ----");
  alunos.forEach(aluno => {
    console.log(aluno.resumo());
    console.log(`Matrícula: ${aluno.matricula}`);
    console.log(`Idioma: ${aluno.idioma}`);
    console.log(`Nível: ${aluno.nivel}`);
    console.log(`Mensalidade: R$ ${aluno.calcularMensalidade()}\n`);
  });

  console.log("---- PROFESSORES ----");
  professores.forEach(prof => {
    console.log(prof.resumo());
    console.log(`Registro: ${prof.registro}`);
    console.log(`Idiomas: ${prof.idiomas.join(", ")}`);
    console.log(`Salário: R$ ${prof.calcularSalario()}\n`);
  });
}


gerarRelatorio([aluno1, aluno2], [professor1, professor2]);
