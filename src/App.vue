<template>
  <div class="section">
    <v-app ref="app">
      <todo-header></todo-header>
      <todo-input @addTodo="addTodo"></todo-input>
      <todo-list :propsdata="todolists" @deleteTodo="deleteTodo" @toggle="toggle"></todo-list>
      <todo-footer @removeAll="deleteAll"></todo-footer>
      <todo-pagination :pageSetting="pageDataSetting(total, limit, block, this.page)" @paging="pagingFn"></todo-pagination>
    </v-app>
  </div>
</template>

<script>
import todoFooter from './components/Footer.vue';
import todoHeader from './components/Header.vue';
import todoInput from './components/Input.vue';
import todoList from './components/List.vue';
import todoPagination from './components/TodoPagination.vue';

export default {
  name: 'App',
  data(){
    return {
      todolists : [],
      total: this.todolists.length,
      page: 1,
      limit: 5,
      block: 5
    }
  },
  components: {
    todoHeader,
    todoInput,
    todoList,
    todoFooter,
    todoPagination
  },
  created(){
    this.getData();
    this.pagingFn(this.page);
  },
  methods:{
    addTodo(newTodo){
      if(this.todolists != ''){
        let index = this.todolists[0].id+1;
        this.todolists.unshift({completed: 'false',id: index, title: newTodo, userId: 1});
      }else{
        this.todolists.push({completed: 'false',id: '1', title: newTodo, userId: 1});
        //console.log(this.todolists[this.todolists.length-1].id);
      }
    },
    toggle(id){
      let index = this.todolists.findIndex((todo)=>todo.id === id);
      this.todolists[index].completed = !this.todolists[index].completed;
    },
    deleteTodo(id){
      let index = this.todolists.findIndex((todo)=>todo.id === id);
      //console.log(index);
      this.todolists.splice(index, 1);
    },
    deleteAll(){
      this.todolists = [];
    },
    getData(){
      this.$axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response)=>{
          console.log(response.data);
          this.todolists = response.data.reverse();
      })
      .catch((err)=>{
          console.log(err);
      })
    },
    pagingFn(page){
      this.todolists = this.todolists.slice((page - 1) * this.limit, page*this.limit);
      this.page = page;
      this.pageDataSetting(this.total, this.limit, this.block, page);
    },
    pageDataSetting(total, limit, block, page){
      const totalPage = Math.ceil(total/limit);
      let currentPage = page;
      const prev = currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null;
      const next = totalPage !== currentPage ? parseInt(currentPage, 10) + parseInt(1, 10) : null;
      let start = (Math.ceil(currentPage/block) -1) * block + 1;
      let end = start + block > totalPage ? totalPage : start + block -1;
      let list = [];

      for(let i=start; i<=end; i++){
        list.push(i);
      }
      return{prev, next, list, currentPage}
    }
  }
};
</script>

<style>
.section{
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
