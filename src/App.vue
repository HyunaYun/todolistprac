<template>
  <div class="section">
    <v-app ref="app">
      <todo-header></todo-header>
      <todo-input @addTodo="addTodo"></todo-input>
      <todo-list :propsdata="todolists" @deleteTodo="deleteTodo" @toggle="toggle" :currentPage="currentPage"></todo-list>
      <todo-footer @removeAll="deleteAll"></todo-footer>
      <div class="pagination">
        <span class="page" @click="movePrev()" >
            <v-icon>fas fa-chevron-left</v-icon>
        </span>
        <span class="page">
            <ul class="pageUl">
                <li class="pageLi" v-for="page in list" :key="page" @click="movePage(page.index)">{{page.index}}</li>
            </ul>
        </span>
        <span class="page" @click="moveNext()">
            <v-icon>fas fa-chevron-right</v-icon>
        </span>
    </div>
    </v-app>
  </div>
</template>

<script>
import todoFooter from './components/Footer.vue';
import todoHeader from './components/Header.vue';
import todoInput from './components/Input.vue';
import todoList from './components/List.vue';

export default {
  name: 'App',
  data(){
    return {
      todolists : [],
      list: [],
      totalTodo: null,
      currentPage: 1,
      range: 1,
      pageSize: 5,
      block: 5,
      totalPage: null,
      start: null,
      end: null,
      countData: null
    }
  },
  components: {
    todoHeader,
    todoInput,
    todoList,
    todoFooter,
  },
  created(){
    this.getData();
  },
  beforeUpdate(){
    this.list = [];
    this.pagination(this.countData, this.totalTodo, this.currentPage, this.range);
  },
  methods:{
    // axios
    getData(){
      /*
      this.$axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response)=>{
        console.log(response.data);
        let reverseData = [];
        reverseData = response.data.reverse();
        for(let i=(this.currentPage*this.pageSize)-this.pageSize; i<this.currentPage*this.pageSize; i++){
          this.todolists.push(reverseData[i]);
        }
        //this.todolists = response.data.reverse();
        this.countData = response.data.length;

        this.pagination(this.countData, this.totalTodo, this.currentPage, this.range);
      })
      .catch((err)=>{
          console.log(err);
      })
      */
      if(localStorage.length > 0){
        for(let i=0; i<localStorage.length; i++) {
          this.todolists.push(localStorage.getItem(localStorage.key(i)));
        }
      }
    },
    // input data
    addTodo(newTodo){
      if(this.todolists != ''){
        let value = {todo: newTodo, completed: false};
        localStorage.setItem(this.newTodo, JSON.stringify(value));
        this.todolists = [];
        this.currentPage = 1;
        this.getData();
      }/*else{
        this.todolists.push({completed: false, id: 1, title: newTodo, userId: 1});
      }*/
    },
    // toggle listtodo
    toggle(id){
      let index = this.todolists.findIndex((todo)=>todo.id === id);
      this.todolists[index].completed = !this.todolists[index].completed;
    },
    // delete data
    deleteTodo(key, index){
      console.log(key, index);
      localStorage.removeItem(key)
      this.todolists.splice(index, 1);
    },
    deleteAll(){
      this.todolists = [];
      localStorage.clear();
    },
    // pagination
    pagination(countData, totalTodo, page, range){
      this.totalTodo = countData;
      this.currentPage = page;
      this.range = range;

      this.totalPage = Math.ceil(this.totalTodo / this.pageSize);
      this.start = ((this.range - 1)/this.block) * this.block + 1;
      this.end = this.start + this.pageSize -1;

      if(this.end > this.totalPage) this.end = this.totalPage;
      else this.end;

      for(let i=this.start; i<=this.end; i++){
        this.list.push({index: i});
      }
    },
    movePage(index){
      this.currentPage = index;
      console.log(this.currentPage);
      this.todolists = [];
      this.getData();
    },
    /*
    movePrev(){
      if(this.currentPage != 1){
        this.currentPage--;
        return {visiblePrev: true};
      }else return {visiblePrev: false};
    },
    moveNext(){
      if(this.currentPage !== this.totalPage){
        this.currentPage++;
        return {visibleNext: true};
      }else return {visibleNext: false};
    }
*/
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
.pagination{
    height: 50px;
    text-align: center;
    margin-top: 20px;
}
.page{
    display: inline-block;
}
.pageUl .pageLi{
    list-style: none;
    text-align: center;
    padding-right: 24px;
    display: inline-block;
    cursor: pointer;
}
</style>
