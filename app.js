const app = Vue.createApp({})

app
.component("pageHeader", headerComponent)
.component("calculator", calcComponent)

app.mount("#root")