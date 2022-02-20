<template>
    <el-container>
        <el-aside width="auto">
            <nav-side :collapse='isCollapse' />
        </el-aside>
        <el-container>
            <el-header>
                <nav-header v-model:collapse='isCollapse' />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
    import NavHeader from './navHeader/index.vue';
    import NavSide from './navSide/index.vue';
    import {ref} from 'vue'
    let isCollapse = ref(true);
</script>
<style lang='scss' scoped>
.el-header {
    padding: 0;
    border-bottom: 1px solid #eee;
}
</style>