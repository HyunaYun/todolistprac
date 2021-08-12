<template>
        <span><v-btn small class="delete-all" @click="deleteAll" title="Remove All"><v-icon small>far fa-trash-alt</v-icon></v-btn></span>
</template>

<script>
export default {
    name: 'TodoFooter',
    methods:{
        deleteAll(){
            if(confirm("진짜 다 지울꺼야?")){
                this.$emit('removeAll');
            }
        }
    }
}
</script>

<style scoped>
.delete-all{
    float: right;
    margin-right: 20px;
    width: 100px;
}
</style>
