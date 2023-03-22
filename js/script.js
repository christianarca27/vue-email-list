const { createApp } = Vue

  createApp({
    data() {
      return {
        emailList: [],
      }
    },

    created() {
        const newEmailList = [];

        for(let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                // this.emailList.push(res.data.response);
                newEmailList.push(res.data.response);
                // console.log(newEmailList[i]);
            });
        }
        console.log(newEmailList);

        // const arrayProva = ["uno", "due", "tre"];
        // this.emailList = this.emailList.concat(arrayProva);
        // this.emailList = this.emailList.concat(newEmailList);
        // console.log(this.emailList);
    },
  }).mount('#app')