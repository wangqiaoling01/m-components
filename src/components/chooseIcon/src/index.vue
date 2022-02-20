<template>
    <el-button type="primary" @click="handleBtnClick">
        <slot></slot>
    </el-button>

    <div class="choose-icon-dialog-body-height">
        <el-dialog :title="title" v-model="dialogVisible">
            <div class="container">
                <div
                    class="item"
                    v-for="(item, index) in Object.keys(EleIcons)"
                    :key="index"
                    @click="handleIconItem(item)"
                >
                    <div class="icon-com">
                        <!-- 动态组件 -->
                        <component :is="`el-icon-${toLine(item)}`"></component>
                    </div>
                    <div class="text">{{item}}</div>
                </div>
            </div>
        </el-dialog>
    </div>

</template>

<script setup lang='ts'>
    import {watch, ref} from 'vue';
    import * as EleIcons from '@element-plus/icons';
    import {toLine} from '../../../utils/index';
    import {useCopy} from '../../../hooks/useCopy';
    let props = defineProps<{
        // 弹窗的标题
        title: string;
        // 控制弹窗的显示与隐藏
        visible: boolean;

    }>();

    let emit = defineEmits(['update:visible']);

    // 拷贝一份副组件传递过来的 visible
    let dialogVisible = ref<boolean>(props.visible);

    // 点击图标
    let handleIconItem = (item: string) => {
        let text = `<el-icon-${toLine(item)} />`;
        useCopy(text);
        dialogVisible.value = false;
    };
    // 点击 btn
    let handleBtnClick = () => {
        emit('update:visible', !props.visible);
    };
    // 监听 visible 的变化 只能监听第一次的变化
    watch(() => props.visible, val => {
        dialogVisible.value = val;
    });
    // 监听组件内部的 dialogVisible 变化，通知父组件 visible 变化
    watch(() => dialogVisible.value, val => {
        emit('update:visible', val);
    });
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .item {
            width: 25%;
            height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            cursor: pointer;
            .icon-com {
                font-size: 14px;
            }
            .text {
                flex: 1;
            }
        }
    }
    svg {
        height: 2em;
        width: 2em;
    }
</style>