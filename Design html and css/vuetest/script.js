
  const app = Vue.createApp({
    data() {
      return {
        showModal: false
      };
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      }
    }
  });
  
  
  app.mount('body');