<template>
    <div class="header">
        <span @click="toggle">
            <el-icon-expand v-if="collapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
        </span>
    </div>
</template>

<script setup lang='ts'>
    let props = defineProps<{
        collapse: boolean;
    }>();
    // 修改父组件的数据
    let emit = defineEmits(['update:collapse']);
    let toggle = () => {
        emit('update:collapse', !props.collapse);
    }
</script>

<style lang="scss" scoped>
    .header {
        height: 60px;
        padding: 0 20px;
        display: flex;
        align-items: center;
    }
</style>