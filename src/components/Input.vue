<template>
    <div class="input-todo">
        <input type="text" placeholder="    할 일 입력" @keyup.enter="addTodo" />
        <v-btn elevation="2" class="mx-2" fab small @click="addTodo">
             <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
input{
    border: 1px solid gray;
    height: 36px;
    width: 70%;
}
.v-btn{
    margin-bottom: 3px;
}
.input-todo{
    padding-bottom: 20px;
}
</style>