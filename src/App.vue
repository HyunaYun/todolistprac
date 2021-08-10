<template>
  <div class="form">
    <v-app id="app">
      <Header></Header>
      <Input @addTodo="addTodo"></Input>
      <List :propsdata="todolists" @deleteTodo="deleteTodo"></List>
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
  components: {
    Header,
    Input,
    List,
    Footer
  },
  methods:{
    addTodo(){

    },
    deleteTodo(){

    },
    deleteAll(){

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
