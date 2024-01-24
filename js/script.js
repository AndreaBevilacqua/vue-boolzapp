console.log('vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Boolzapp',
    data: () => ({ 
       contacts,
       user
    })
})
app.mount('#root');

