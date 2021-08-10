<template>
    <div>
        <input type="text" placeholder="할 일 입력" @keyup.enter="addTodo" />
        <v-btn elevation="2">+</v-btn>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.plusBtn{
    width: 15px;
    height: 15px;
}
</style>