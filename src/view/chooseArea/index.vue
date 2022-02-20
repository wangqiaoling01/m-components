<template>
    <choose-area @change="handleChange" />
</template>
    
<script setup lang='ts'>
    import { IAreaData } from '../../components/chooseArea/src/index.vue';
    let handleChange = (val: {
        [key: string]: IAreaData
    }) => {
        console.log(val)
    }
</script>
    
<style>
    
</style>