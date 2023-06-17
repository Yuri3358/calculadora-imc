const app = Vue.createApp({})

app
.component("header-component", pageHeader)
.component("calculator", calculator)

app.mount("#root")