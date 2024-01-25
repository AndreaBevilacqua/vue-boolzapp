console.log('vue ok', Vue);

const { user, contacts } = data;

const {createApp} = Vue;
const app = createApp({
    name: 'Boolzapp',
    data: () => ({ 
      user,
      contacts,
      currentId: 1,
      newMessage: ''
     }),

     computed: {
      currentContact() {

      }
     },

     methods: {
      getAvatarUrl({ avatar }) {
        return `img/avatar${avatar}.jpg`
      }
     }
})
app.mount('#root');

