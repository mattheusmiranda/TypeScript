// FUNÇÃO NO TYPE COM ARROW FUNCTION
const soma = (a: number, b: number): number => a + b

// UNION (PODE SER UM OU O OUTRO)
type Id = number | string

let id1: Id
let id2: Id
let id3: Id
let id4: Id

type Usuario = { nome: string, idade: number }
let user: Usuario

interface Usuario2 {
    nome: string
    idade: number
}

interface Pessoa {
    nome: string
    idade: number
    carro?: string
}

interface Aluno extends Pessoa {
    curso: string
    ira: number
}

type AlunoT = Pessoa & {
    curso: string
    ira: number
}

let aluno: Aluno
aluno = {
    nome: 'Daniel',
    idade: 18,
    ira: 46,
    curso: 'Engenharia de Software'
}

// GENERICS
type Pessoa2<T> = {
    nome: string
    idade: number
    carro?: string
    profissao: T
}

interface Aluno3 {
    matricula: string
}

interface Engenheiro {
    crea: string
}

interface Medico {
    crm: string
}

let aluno4: Pessoa2<Aluno3>
let engenheiro: Pessoa2<Engenheiro>
let medico: Pessoa2<Medico>

type Lista<T> = T[]
let lista: Lista<string>