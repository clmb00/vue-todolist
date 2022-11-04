const { createApp } = Vue;

createApp({
  data(){
    return{
      warningMsg: "",
      tempTask: "",
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
    removeTask(index){
      this.warningMsg = ""
      if(this.tasks[index].done){
        this.tasks.splice(index, 1);
      } else{
        this.warningMsg = "You must complete a task before deleting it";
      }
    },
    addTask(){
      this.warningMsg = ""
      if (this.tempTask.length < 5){
        this.warningMsg = "Please enter a tesk of at least 5 characters";
        return;
      }
      this.tasks.unshift({
        text: this.tempTask,
        done: false,
        tag: ""
      })
    }
  }
}).mount('#app');