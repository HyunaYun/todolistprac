<template>
    <ul>
        <li v-for="todo in propsdata" :key="todo.id" :class="checked(todo.completed)" @click="toggle(todo.id)">
            <span class="check" v-if="!todo.completed"><v-icon color="#969696">fas fa-check</v-icon></span>
            <span class="notCheck" v-else><div></div></span>
            <span class="list" >{{todo.title}}</span>
            <span class="delete"><v-btn icon color="red lighten-2" @click.stop="deleteTodo(todo.id)"><v-icon small>fas fa-times</v-icon></v-btn></span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        deleteTodo(id){
            this.$emit('deleteTodo',id);
        },
        toggle(id){
            this.$emit('toggle', id);
        },
        checked(completed){
            if(completed) return {checked: false};
            else return {checked: true};
        },
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
.delete{
    float: right;
    padding-right: 10px;
}
</style>