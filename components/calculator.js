const calculator = {
    template: calculatorTemplate,
    data() {
        return {
            weight: 0,
            height: 0,
            bmi: 0,
            bmiRate: "",
            infos: "" 
        }
    },
    methods: {
        getInfos() {
            if (this.weight == 1 || this.height == 1) {
                alert("Preencha todos os valores!")
            } else {
                this.bmi = (this.weight / this.height**2)*10000
                this.infos = `Seu IMC: ${this.bmi.toFixed(2)}kg/m²`
    
                if (this.bmi < 16) {
                    this.bmiRate = "Baixo Peso"
                } else if (this.bmi >= 18 && this.bmi < 25) {
                    this.bmiRate = "Adequado"
                } else if (this.bmi >= 25 && this.bmi < 30) {
                    this.bmiRate = "Sobrepeso"
                } else if (this.bmi >= 30) {
                    this.bmiRate = "Obesidade"
                }

                this.$refs.weightInput.focus()
            }
        }
    }
}

exports = { calculator }