<template>
    <div v-if="pageSetting.list.length" class="page-list">
        <v-btn class="prev" v-if="pageSetting.prev !== null" @click="pageSetting.prev !== null ? sendPage(pageSetting.prev) : ''">

        </v-btn>
        <ul>
            <li :class="{active: page === pageSetting.currentPage}" v-for="page in pageSetting.list" :key="page" @click="sendPage(page)">
                {{page}}
            </li>
        </ul>
        <v-btn class="next" v-if="pageSetting.next !== null" @click="pageSetting.next !== null ? sendPage(pageSetting.next) : ''">

        </v-btn>
    </div>
</template>

<script>
export default{
    name: 'TodoPagination',
    props: ['pageSetting'],
    methods:{
        sendPage(page){
            this.$emit('paging', page);
        }
    }
}
</script>

<style scoped>

</style>