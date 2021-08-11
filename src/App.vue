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
  data(){
    return {
      todolists : []
    }
  },
  components: {
    Header,
    Input,
    List,
    Footer
  },
  created:function(){
    this.getData();
  },
  methods:{
    addTodo(newTodo){
      if(this.todolists != ''){
        var index = this.todolists[this.todolists.length-1].id+1;
        this.todolists.push({completed: 'false',id: index, title: newTodo, userId: 1});
      }else{
        this.todolists.push({completed: 'false',id: '1', title: newTodo, userId: 1});
        //console.log(this.todolists[this.todolists.length-1].id);
      }
    },
    toggle(id){
      var index = this.todolists.findIndex((todo)=>todo.id === id);
      this.todolists[index].completed = !this.todolists[index].completed;
    },
    deleteTodo(id){
      var index = this.todolists.findIndex((todo)=>todo.id === id);
      //console.log(index);
      this.todolists.splice(index, 1);
    },
    deleteAll(){
      this.todolists = [];
    },
    getData(){
      this.$http.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response)=>{
          console.log(response.data);
          this.todolists = response.data;
      })
      .catch((err)=>{
          console.log(err);
      })
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
