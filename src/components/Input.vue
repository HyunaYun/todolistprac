<template>
    <div class="input-todo">
        <input type="text" v-model="newTodo" placeholder="    할 일 입력" @keyup.enter="addTodo" />
        <v-btn elevation="2" class="mx-2" fab small @click="addTodo">
             <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'TodoInput',
    data(){
        return {
            newTodo: '',
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo.trim() != ''){
                this.$emit('addTodo', this.newTodo.trim());
                this.clearInput();
            }else{
                alert("할 일을 입력하세요");
            }
         },
        clearInput(){
            this.newTodo = '';
        }
    }
}
</script>

<style scoped>
input{
    border: 1px solid gray;
    height: 36px;
    width: 70%;
}
.input-todo{
    margin-bottom: 20px;
    height: 40px;
    line-height: 40px;
}
</style>