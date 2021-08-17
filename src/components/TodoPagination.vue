<template>
    <div class="pagination">
        <span :class="visiblePrev" @click="paging(pageSetting.prev)">
            <v-icon>fas fa-chevron-left</v-icon>
        </span>
        <span>
            <ul>
                <li @click="paging(page)" v-for="page in pageSetting.currentPage" :key="page">{{page.list.index}}</li>
            </ul>
        </span>
        <span :class="visibleNext" @click="paging(pageSetting.next)">
            <v-icon>fas fa-chevron-right</v-icon>
        </span>
    </div>
</template>

<script>
export default{
    name: 'pagination',
    props: {
        pageSetting : {
            prev : null,
            next: null,
            list : [],
            cPage: null
        }
    },
    methods:{
        paging(page){
            this.$emit('paging', page);
        },
        visiblePrev(){
            if(this.cPage == 1) return {visiblePrev: false}
            else return {visiblePrev: true}
        },
        visibleNext(){
            if(this.cPage == )
        }
    }
}
</script>

<style scoped>
.pagination{
    height: 50px;
    text-align: center;
    margin-top: 20px;
}
span{
    display: inline-block;
}
ul li{
    list-style: none;
    text-align: center;
    padding-right: 24px;
    display: inline-block;
}
</style>