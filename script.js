let clientes = []
let voos = []
let pacotesdeviagem = []
let passagensaereas = []
let contador = 0

class Cliente {
    #Nome
    #Cpf
    #DataDeNascimento

    constructor(nome, cpf, datadenascimento) {
        this.setNome(nome)
        this.setCpf(cpf)
        this.setDataDeNascimento(datadenascimento)
    }

    setNome(nome) {
        while (nome.length > 50) {
            alert("Nome excede o limite de 50 caracteres insira novamente")
            nome = prompt("Insira o nome com até 50 caracteres")
        }

        this.#Nome = nome
    }

    setCpf(cpf) {
        while (cpf.length > 11) {
            alert("Cpf excede o limite de 11 números, insira novamente")
            cpf = prompt("Insira o CPF até 11 números")
        }

        this.#Cpf = cpf
    }

    setDataDeNascimento(datadenascimento) {
        this.#DataDeNascimento = datadenascimento
    }

    getNome() {
        return this.#Nome
    }

    getCpf() {
        return this.#Cpf
    }

    getDataDeNascimento() {
        return this.#DataDeNascimento
    }
}

class PacoteViagem {
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal

    constructor(passagemida, passagemvolta) {
        this.setTitular(passagemida)
        this.setPassagemIda(passagemida)
        this.setPassagemVolta(passagemvolta)
        this.setValorTotal()
    }

    setTitular(passagemida) {
        this.#Titular = passagemida.getPassageiro()
    }

    setPassagemIda(passagemida) {
        this.#PassagemIda = passagemida
    }

    setPassagemVolta(passagemvolta) {
        this.#PassagemVolta = passagemvolta
    }

    setValorTotal() {
        this.#ValorTotal = this.#PassagemIda.getValor() + this.#PassagemVolta.getValor()
    }

    getTitular() {
        return this.#Titular
    }

    getPassagemIda() {
        return this.#PassagemIda
    }

    getPassagemVolta() {
        return this.#PassagemVolta
    }

    getValor() {
        return this.#ValorTotal
    }
}

class Voo {
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa, numero, data, horario, localpartida, localdestino) {
        this.setEmpresa(empresa)
        this.setNumero(numero)
        this.setData(data)
        this.setHorario(horario)
        this.setLocalPartida(localpartida)
        this.setLocalDestino(localdestino)
    }

    setEmpresa(empresa) {
        this.#Empresa = empresa
    }

    setNumero(numero) {
        this.#Numero = numero
    }

    setData(data) {
        this.#Data = data
    }

    setHorario(horario) {
        this.#Horario = horario
    }

    setLocalPartida(localpartida) {
        this.#LocalPartida = localpartida
    }

    setLocalDestino(localdestino) {
        this.#LocalDestino = localdestino
    }

    getEmpresa() {
        return this.#Empresa
    }

    getNumero() {
        return this.#Numero
    }

    getData() {
        return this.#Data
    }

    getHorario() {
        return this.#Horario
    }

    getLocalPartida() {
        return this.#LocalPartida
    }

    getLocalDestino() {
        return this.#LocalDestino
    }
}

class PassagemAerea {
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo

    constructor(assento, primeiraclasse, valor, passageiro, voo) {
        this.setAssento(assento)
        this.setPrimeiraClasse(primeiraclasse)
        this.setValor(valor)
        this.setVoo(voo)
        this.setPassageiro(passageiro)
        if (this.#PrimeiraClasse == "true") {
            this.CalcularValor()
        }
    }

    setAssento(assento) {
        this.#Assento = assento
    }

    setPrimeiraClasse(primeiraclasse) {
        while (primeiraclasse != "true" && primeiraclasse != "false") {
            alert("A propriedade primeira classe só aceita valor true ou false! Insira novamente")
            primeiraclasse = prompt("Insira true ou false para primeira classe: ")
        }
        this.#PrimeiraClasse = primeiraclasse
    }

    setValor(valor) {
        while (valor <= 0) {
            alert("O valor tem que ser acima de R$0, insira novamente")
            valor = parseInt("Insira o valor novamente: ")
        }

        this.#Valor = valor
    }

    setPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }

    setVoo(voo) {
        this.#Voo = voo
    }

    getAssento() {
        return this.#Assento
    }

    getPrimeiraClasse() {
        return this.#PrimeiraClasse
    }

    getValor() {
        return this.#Valor
    }

    getPassageiro() {
        return this.#Passageiro
    }

    getVoo() {
        return this.#Voo
    }

    CalcularValor() {
        this.#Valor = this.#Valor * 1.50
    }

    ExibirResumo() {
        alert("Passagem em nome de " + this.Passageiro.Nome + "no assento " + this.Assento + "do voo " + this.voo + "com destino para " + this.Voo.LocalDestino)
    }
}

function CadastrarPassagem() {
    for (let i = 0; i < voos.length; i++) {
        console.log("Número do voo: " + voos[i].getNumero() + "\n"
            + "Local de partida: " + voos[i].getLocalPartida() + "\n"
            + "Local de destino: " + voos[i].getLocalDestino() + "\n"
            + "-----------------------------------------------------")
    }

    for (let i = 0; i < 2; i++) {
        let condicao = true
        let escolha = prompt("Insira o número do voo desejado: ")
        let assento = prompt("Insira o assento desejado: ")
        // Verificar se o voo escolhido existe,em caso positivo atribuir o objeto dele a escolha, e se o assento está disponível 
        // caso tenha mais de uma passagem cadastrada.
        while (condicao == true) {
            for (let j = 0; j < voos.length; j++) {
                if (voos[j].getNumero() == escolha) {
                    escolha = voos[j]
                    if (contador > 0) {
                        for (let j = 0; j < voos.length; j++) {
                            let voo = passagensaereas[j].getVoo()
                            if (voos[index2].getNumero() == voo.getNumero() && assento == passagensaereas[j].getAssento()) {
                                alert("Este assento neste voo já foi escolhido por favor insira outro: ")
                                assento = prompt("Insira o assento desejado: ")
                            }
                        }
                    }
                    contador++
                    condicao = false
                }
            }
            if (condicao == true) {
                alert("Voo não encontrado, insira novamente")
                escolha = prompt("Insira o número do voo desejado: ")
            }
        }
        
        let primeiraclasse = prompt("Insira se o assento é primeira clase: true/false")
        let valor = parseInt(prompt("Insira o valor da passagem: "))
        let passageiro = prompt("Insira o titular da passagem: ")
        clientes.forEach(x => {
            if (x.getNome() == passageiro) {
                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].getNome() == passageiro) {
                        passageiro = clientes[i]
                    }
                }
            }
        })
        if (i == 0) {
            passagemida = new PassagemAerea(assento, primeiraclasse, valor, passageiro, escolha)
        } else {
            passagemvolta = new PassagemAerea(assento, primeiraclasse, valor, passageiro, escolha)
        }
    }
    passagensaereas.push(passagemida, passagemvolta)
}

function CadastrarNome() {
    let nome = prompt("Insira o nome do cliente: ")
    let cpf = prompt("Insira o CPF do cliente: ")
    let datadenascimento = prompt("Insira a data de nascimento do cliente: (dd/mm/aaaa)")
    let cliente = new Cliente(nome, cpf, datadenascimento)
    clientes.push(cliente)
}

function CadastrarVoo() {
    let empresa = prompt("Informe o nome da empresa: ")
    let numero = prompt("Informe o número do voo: ")
    let data = prompt("Informe a data do voo: (dd/mm/aaaa/)")
    let horario = prompt("Informe o horário do voo: ")
    let localpartida = prompt("Informe o local de partida do voo: ")
    let localdestino = prompt("Informe o local de destino do voo: ")
    let voo = new Voo(empresa, numero, data, horario, localpartida, localdestino)
    voos.push(voo)
}

let posicao
let passagemida
let passagemvolta

let continuar = true
while (continuar == true) {
    let opcao = prompt("Insira a opção desejada: " + "\n"
        + "1- Cadastrar um cliente." + "\n"
        + "2- Cadastrar um voo." + "\n"
        + "3- Cadastrar um pacote de viagem." + "\n"
        + "4- Encerrar programa.")

    switch (opcao) {
        case "1":
            CadastrarNome()
            break;
        case "2":
            CadastrarVoo()
            break;
        case "3":
            CadastrarPassagem()
            let pacotedeviagem = new PacoteViagem(passagemida, passagemvolta,)
            pacotesdeviagem.push(pacotedeviagem)
            break;
        case "4":
            continuar = false
            break;
    }
}