console.log('vue ok', Vue);

const { user, contacts } = data;

const {createApp} = Vue;
const app = createApp({
    name: 'Boolzapp',
    data: () => ({ 
      user,
      contacts,
      currentId: 1,
      searchContact: '',
      newMessageText: ''
     }),

     computed: {

      // Funzione per identificare l'id corrispondente alla chat

      currentContact(){
        return this.contacts.find((contact) => contact.id === this.currentId)
      },

      currentChat(){
        return this.currentContact.messages;
      },

      // Funzione per filtrare i contatti

      filteredContacts() {
        const searchTerm = this.searchContact.toLowerCase();

        const FilteredArray = this.contacts.filter(contact => 
          contact.name.toLowerCase().includes(searchTerm)
        );
        return FilteredArray;
      },

      getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        return hours + ':' + minutes;
      }
     },

     methods: {
  
      setCurrentId(id) {
        this.currentId = id
      },

      // Funzione per inviare un nuovo messaggio

      sendMessage(){
        if (!this.newMessageText) return;

        const newMessage = {
          id: new Date().getTime(),
          data: new Date().toLocaleTimeString(),
          status: 'sent',
          text: this.newMessageText
        }

        this.currentChat.push(newMessage);
        this.newMessageText= '';

        setTimeout(() => {
          const newMessage = {
            id: new Date().getTime(),
            data: new Date().toLocaleTimeString(),
            status: 'received',
            text: 'ok'
          }
  
          this.currentChat.push(newMessage);
        }, 1000);
      }
     }
})
app.mount('#root');

