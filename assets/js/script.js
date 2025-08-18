class Tarefa {
    constructor(nome, dia, horario) {
        this.nome = nome
        this.dia = dia
        this.horario = horario
    }

}

function cadastrarTarefa() {
    let nome = document.getElementById('tarefa_nome')
    let dia = document.getElementById('tarefa_dia')
    let horario = document.getElementById('tarefa_horario')

    let tarefa = new Tarefa(
        nome.value,
        dia.value,
        horario.value
    )

    console.log(tarefa)
}