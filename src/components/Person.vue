<template>
    <h1>我是Person组件</h1>
    <ul>
        <li v-for="item in userInfo" :key="item.id">{{
            item.name
        }}</li>
    </ul>
</template>
    
<script setup lang='js'>
import { useCountStore } from "../store/count"
import { storeToRefs } from "pinia"
const CountStore = useCountStore()
const { userInfo } = storeToRefs(CountStore) 
</script>
    
<style></style>