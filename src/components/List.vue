<template>
    <ul>
        <li v-for="todo in propsdata" :key="todo.key" :class="checked()" @click="toggle(todo.key)">
            <span class="check" v-if="!todo.completed"><v-icon color="#969696">fas fa-check</v-icon></span>
            <span class="notCheck" v-else><div></div></span>
            <span class="list" >{{todo.value}}</span>
            <span class="delete"><v-btn icon color="red lighten-2" @click.stop="deleteTodo(todo.key, index)"><v-icon small>fas fa-times</v-icon></v-btn></span>
            <span class="update"><v-btn icon @click.stop="updateTodo(todo.key)"><v-icon small>far fa-edit</v-icon></v-btn></span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        propsdata: {
            key : String,
            value: String
        }
    },
    methods:{
        deleteTodo(key, index){
            this.$emit('deleteTodo',key, index);
        },
        toggle(key){
            this.$emit('toggle', key);
        },
        checked(){
            // if(completed) return {checked: false};
            // else return {checked: true}
        },
        updateTodo(key){
            this.$emit('updataTodo`', key);
        }
    }

}
</script>

<style scoped>
ul{
    margin-bottom: 30px;
    display: block;
    padding-left: 0;
}
ul li{
    list-style: none;
    background: #FFEBED;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    padding-left: 0;
}
ul li:hover{
    background: #F9C8CC;
}
ul li.checked{
    background: #E2E2E2;
    color: #969696;
}
.check{
    padding: 0 20px 0 20px;
    float: left;
}
.notCheck div{
    float: left;
    width: 64px;
    height: 40px;
}
.list{
    float: left;
}
.update, .delete{
    float: right;
    padding-right: 10px;
}
</style>