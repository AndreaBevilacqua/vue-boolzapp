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

        this.currentChat.push(newMessage)
      }
     }
})
app.mount('#root');

