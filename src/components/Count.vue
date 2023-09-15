<template>
    <h1>我是Count组件</h1>
    <h2>Count:{{ count }}</h2>
    <h2>{{ name }}</h2>
    <button @click="addCount">+</button>&nbsp;
    <button @click="decCount">-</button>&nbsp;
    <button @click="getAxiosData">获取axios的数据</button>
    <button @click="resetInitial">重置初始状态</button>&nbsp;
    <ul>
        <li v-for="item in userInfo " :key="item.id">{{ item.name }}</li>
    </ul>
</template>
    
<script setup lang='js'>
import { useCountStore } from '../store/count';
import { storeToRefs } from "pinia"
const countStore = useCountStore();
//结构赋值需要利用storeToRefs否则结构出来的值不会产生响应式效果
const { count, name, userInfo } = storeToRefs(countStore)
const addCount = () => {
    countStore.addition()
    name.value = "Nike"
}
const decCount = () => {
    countStore.subtraction()
    // count.value--
}
const getAxiosData = () => {
    countStore.getUserData()
}
const resetInitial = () => {
    //调用store身上的$reset(),可以重置state身上所有属性的初始值
    countStore.$reset()
}
</script>
    
<style></style>