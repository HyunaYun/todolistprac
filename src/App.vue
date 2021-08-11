<template>
  <div class="form">
    <v-app id="app">
      <Header></Header>
      <Input @addTodo="addTodo"></Input>
      <List :propsdata="todolists" @deleteTodo="deleteTodo" @toggle="toggle"></List>
      <Footer @removeAll="deleteAll"></Footer>
    </v-app>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Input from './components/Input.vue';
import List from './components/List.vue';

export default {
  name: 'App',
  data: function(){
      return{
        todolists:[
            {"id":1, "title": "delectus aut autem", "completed": false},
            {"id":2, "title": "delectus", "completed": false},
            {"id":3, "title": "aut autem", "completed": true},
            {"id":4, "title": "autem", "completed": false},
            {"id":5, "title": "aut", "completed": false}
        ]
      }
    },
  components: {
    Header,
    Input,
    List,
    Footer
  },
  methods:{
    addTodo(newTodo){
      this.todolists.push(newTodo);
    },
    toggle(id){
      var index = this.todolist.findIndex((item)=>item.id === id);
      this.todolist[index].complated = !this.todolist[index].complated;
    },
    deleteTodo(id){
      this.todolists.splice(id, 1);
    },
    deleteAll(){
      this.todolists = [];
    }
  }
};
</script>

<style>
.form{
  width: 60%;
  height: 80%;
  display: block;
  margin: 0px auto;
}
#app{
  text-align: center;
  margin: 40px auto;
  padding-left: 0;
}
</style>
