
class Calculadora {
    constructor(textoOperandoAnterior, textoOperandoAtual){
        this.textoOperandoAnterior = textoOperandoAnterior;
        this.textoOperandoAtual = textoOperandoAtual;
        this.resetaValor = false;
        this.limpar()
    }

    limpar(){
        this.operandoAtual = '';
        this.operandoAnterior = '';
        this.operador = undefined;
    }

    incluirNumero(numero){
        this.operandoAtual = this.operandoAtual.toString() + numero.toString();
    }

    escolherOperacao(operador){
        if(this.operandoAtual === '') return;
        if(this.operandoAnterior !== '' && this.operandoAtual !== ''){
            this.calcular()
        }
        this.operador = operador;
        this.operandoAnterior = this.operandoAtual;
        this.operandoAtual = '';
    }

    calcular(){
        let resultado;
        const anterior = parseFloat(this.operandoAnterior);
        const atual = parseFloat(this.operandoAtual);
        if(isNaN(anterior) || isNaN(atual)){
            return
        }
        switch(this.operador) {
            case '+': 
                resultado = anterior + atual;
            break;

            case '-': 
                resultado = anterior - atual;
            break;

            case '÷': 
                resultado = anterior / atual;
            break;

            case '×': 
                resultado = anterior * atual;
            break;

            default:
            return;
        }
        this.resetaValor = true;
        this.operandoAtual = resultado;
        this.operador = undefined;
        this.operandoAnterior = '';
    }

    verNumeroVisor(numero){
        const numFloat = parseFloat(numero);
        if(isNaN(numFloat)) return '';
        return numFloat.toLocaleString('pt-BR');
    }

    atualizarVisor(){
        this.textoOperandoAtual.innerText = this.verNumeroVisor(this.operandoAtual);
        if(this.operador != null) {
            this.textoOperandoAnterior.innerText = `${this.verNumeroVisor(this.operandoAnterior)} ${this.operador}`;
        } else {
            this.textoOperandoAnterior.innerText = '';
        }
    }
}

const botoesNumericos = document.querySelectorAll('[data-numero]');
const botoesOperadores = document.querySelectorAll('[data-operador]');
const botaoIgual = document.querySelector('[data-igual]');
const botaoLimpar = document.querySelector('[data-limpar]');
const textoOperandoAnterior = document.querySelector('[data-operador-anterior]');
const textoOperandoAtual = document.querySelector('[data-operador-atual]');

const calculadora = new Calculadora(textoOperandoAnterior, textoOperandoAtual);



botoesNumericos.forEach(button => {
    button.addEventListener('click', () => {
       
        if(calculadora.operandoAnterior === "" &&
            calculadora.operandoAtual !== "" &&
            calculadora.resetaValor) {
                calculadora.operandoAtual = "";
                calculadora.resetaValor = false;
        }
        calculadora.incluirNumero(button.innerText);
        calculadora.atualizarVisor();
    });
});

botoesOperadores.forEach(button => {
    button.addEventListener('click', () => {
        
        calculadora.escolherOperacao(button.innerText);
        calculadora.atualizarVisor();
    });
});

botaoIgual.addEventListener('click', button => {
    calculadora.calcular();
    calculadora.atualizarVisor();
});

botaoLimpar.addEventListener('click', button => {
    calculadora.limpar();
    calculadora.atualizarVisor();
});