
 export class Pessoa {
  constructor(nome, cpf, dataNascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  resumo() {
    return `${this.nome} (CPF: ${this.cpf}) - Nasc: ${this.dataNascimento}`;
  }
}


export class Aluno extends Pessoa {
  constructor(nome, cpf, dataNascimento, matricula, idioma, nivel) {
    super(nome, cpf, dataNascimento);
    this.matricula = matricula;
    this.idioma = idioma;
    this.nivel = nivel;
  }

  calcularMensalidade() {
    const base = 200;

    return base + 
      (this.nivel === "intermediario" ? 50 :
       this.nivel === "avancado" ? 100 : 0);
  }
}


 export class AlunoVip extends Aluno {
  constructor(nome, cpf, dataNascimento, matricula, idioma, nivel, descontoMensalidade) {
    super(nome, cpf, dataNascimento, matricula, idioma, nivel);
    this.descontoMensalidade = descontoMensalidade;
  }

  calcularMensalidade() {
    const mensalidade = super.calcularMensalidade();
    return mensalidade - (mensalidade * this.descontoMensalidade);
  }
}


 export class Professor extends Pessoa {
  constructor(nome, cpf, dataNascimento, registro, idiomas, salario) {
    super(nome, cpf, dataNascimento);
    this.registro = registro;
    this.idiomas = idiomas;
    this.salario = salario;
  }

  calcularSalario() {
    return this.salario;
  }
}
