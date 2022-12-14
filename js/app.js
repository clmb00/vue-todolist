const { createApp } = Vue;

createApp({
  data(){
    return{
      warningMsg: "",
      tempTask: "",
      numbTasks: 0,
      tasks: [
        {
          text: "Go shopping",
          done: false,
          tag: 'green',
          toggleTag: false
        },
        {
          text: "Help Joe",
          done: false,
          tag: '',
          toggleTag: false
        },
        {
          text: "Do homeworks",
          done: true,
          tag: '',
          toggleTag: false
        },
        {
          text: "Wash the car",
          done: true,
          tag: 'red',
          toggleTag: false
        },
        {
          text: "Eat the dog",
          done: false,
          tag: 'blue',
          toggleTag: false
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
        this.warningMsg = "Please enter a task of at least 5 characters";
        return;
      }
      this.tasks.unshift({
        text: this.tempTask,
        done: false,
        tag: ""
      })
      this.tempTask = "";
    },
    changeTag(color, elem){
      switch(color){
        case 'green':
          elem.tag = "green";
          elem.toggleTag = false;
          break;
        case 'red':
          elem.tag = "red";
          elem.toggleTag = false;
          break;
        case 'blue':
          elem.tag = "blue";
          elem.toggleTag = false;
          break;
        default:
          elem.tag = '';
          elem.toggleTag = false;
      }
    },
    moveTask(down, index){
      if (down){
        if (index == this.tasks.length - 1) return;
        [ this.tasks[index], this.tasks[index+1] ] = [ this.tasks[index+1], this.tasks[index] ];
      } else {
        if (index == 0) return;
        [ this.tasks[index], this.tasks[index-1] ] = [ this.tasks[index-1], this.tasks[index] ];
      }
    }
  },
  mounted(){
    this.numbTasks = this.tasks.filter((elem)=>elem.done == false).length;
  },
  updated(){
    this.numbTasks = this.tasks.filter((elem)=>elem.done == false).length;
  }
}).mount('#app');