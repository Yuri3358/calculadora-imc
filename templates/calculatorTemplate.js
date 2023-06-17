const calculatorTemplate = `
    <section id="calculator" @keyup.enter="getInfos">
        <label class="labels" for="height-input">Altura (cm):</label>
        <input class="inputs" type="number" id="height-input" v-model="height" ref="weightInput" min="1">
        <span class="units">cm</span> <br/>

        <label class="labels" for="weight-input">Peso (Kg):</label>
        <input class="inputs" type="number" id="weight-input" v-model="weight" min="1">
        <span class="units">Kg</span> <br/>
        
        <button class="btn btn-success" @click="getInfos">Calcular IMC</button>
        <hr>
        <div id="infos">
            {{ infos }}
            {{ bmiRate }}
        </div>
    </section>
`