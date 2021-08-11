<template>
    <ul>
        <li v-for="todo in propsdata" :key="todo.id" :class="checked(todo.complated)">
            <span class="check" v-show="checked"><v-icon color="red lighten-2">fas fa-check</v-icon></span>
            <span class="list" @click="toggle(todo.id)" >{{todo.title}}</span>
            <span class="delete"><v-btn icon color="red lighten-2" @click="deleteTodo(todo.id)"><v-icon small>fas fa-times</v-icon></v-btn></span>
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
        checked(complated){
            if(complated) return {checked: true};
            else return {checked: false};
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
.check{
    padding: 0 20px 0 20px;
    float: left;
}
.list{
    float: left;
}
.delete{
    float: right;
    padding-right: 10px;
}
</style>