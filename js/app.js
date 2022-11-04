const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks: [
        {
          text: "Go shopping",
          done: false,
          tag: 'green'
        },
        {
          text: "Go shopping",
          done: false,
          tag: ''
        },
        {
          text: "Do homeworks",
          done: true,
          tag: ''
        },
        {
          text: "Wash the car",
          done: true,
          tag: 'red'
        },
        {
          text: "Eat the dog",
          done: false,
          tag: 'blue'
        },
      ]
    }
  },
  methods:{

  }
}).mount('#app');