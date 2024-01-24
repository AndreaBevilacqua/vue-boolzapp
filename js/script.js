console.log('vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Boolzapp',
    data: () => ({ 
        users,
        contacts
    })
})
app.mount('#root');