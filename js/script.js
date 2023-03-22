const { createApp } = Vue;
const numEmail = 10;

  createApp({
    data() {
      return {
        emailList: [],
      }
    },

    created() {
        for(let i = 0; i < numEmail; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                this.emailList.push(res.data.response);
            });
        }
    },

    methods: {
        isListFull() {
            if(this.emailList.length >= numEmail) {
                return true;
            }
            else {
                return false;
            }
        }
    },
  }).mount('#app');