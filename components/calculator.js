const calculator = {
    template: calculatorTemplate,
    data() {
        return {
            weight: 0,
            height: 0,
            bmi: 0,
            infos: "" 
        }
    },
    methods: {
        getInfos() {
            this.bmi = (this.weight / this.height**2)*10000
            this.infos = `Seu IMC: ${this.bmi.toFixed(2)}kg/cm²`
        }
    }
}

exports = { calculator }