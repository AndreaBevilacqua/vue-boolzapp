console.log('vue ok', Vue);

const { user, contacts } = data;

const {createApp} = Vue;
const app = createApp({
    name: 'Boolzapp',
    data: () => ({ 
      user,
      contacts,
      currentId: 1,
      searchContact: ''
     }),

     computed: {

      currentContact(){
        return this.contacts.find((contact) => contact.id === this.currentId)
      },

      filteredContacts() {
        const searchTerm = this.searchContact.toLowerCase();

        const FilteredArray = this.contacts.filter(contact => 
          contact.name.toLowerCase().includes(searchTerm)
        );
        return FilteredArray;
      }
     },

     methods: {
      getAvatarUrl({ avatar }) {
        return `img/avatar${avatar}.jpg`
      },

      setCurrentId(id) {
        this.currentId = id
      },
     }
})
app.mount('#root');

