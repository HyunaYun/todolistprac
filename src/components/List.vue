<template>
    <ul>
        <li>
            <span class="check"><v-icon color="red lighten-2">fas fa-check</v-icon></span>
            <span class="list">입력된 할 일 출력</span>
            <span class="delete"><v-btn icon color="red lighten-2"><v-icon>fas fa-times</v-icon></v-btn></span>
        </li>
    </ul>
</template>

<script>
export default {

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
    background: #F6F5C7; /**배경 색 변경하기 */
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    padding-left: 0;
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
    padding: 0 20px;
}
</style>