<template>
    <div>
        <v-btn class="delete-all" @click="deleteAll" title="Remove All"><v-icon>far fa-trash-alt</v-icon></v-btn>
    </div>
</template>

<script>
export default {
    methods:{
        deleteAll: function(){
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
