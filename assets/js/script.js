class Tarefa {
    constructor(nome, dia, horario) {
        this.nome = nome
        this.dia = dia
        this.horario = horario
    }

    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true 
    }

}

class Bd {
    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarTarefa() {
    let nome = document.getElementById('tarefa_nome')
    let dia = document.getElementById('tarefa_dia')
    let horario = document.getElementById('tarefa_horario')

    let tarefa = new Tarefa(
        nome.value,
        dia.value,
        horario.value
    )

    if(tarefa.validarDados()) {
        bd.gravar(tarefa)
        alert('Sucesso!')
        // dialogo de sucesso
    }else {
        alert('Erro')
        //dialog de erro
    }

}