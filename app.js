const app = Vue.createApp({})

app
.component("header-component", pageHeader)
//.component("calculator", calcComponent)

app.mount("#root")