import { ConcessionariaInterface } from './ConcessionariaInterface'
import Carro from './Carro'


export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listadeCarro: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listadeCarro
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string{
        return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00'
    }
}