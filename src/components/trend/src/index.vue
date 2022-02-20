<template>
    <div class="trend">
        <div class="text" :style="{color: textColor}">
            <!-- 匿名插槽 slots.default -->
            <slot v-if="slots.default"></slot>
            <div v-else>{{text}}</div>
        </div>
        <div class="icon">
            <component
                :is='`el-icon-${toLine(upIcon)}`'
                :style="{color: !reverseColor ? upIconColor : '#52c41a'}"
                v-if="type === 'up'"
            />
            <component
                :is='`el-icon-${toLine(downIcon)}`'
                :style="{color: !reverseColor ? upIconColor : '#f5222d'}"
                v-else
            />
        </div>
    </div>
</template>

<script setup lang='ts'>
    import {computed, useSlots} from 'vue';
    import {toLine} from '../../../utils/index';
    let props = defineProps({
        // 标记当前趋势 上升(up) 下降(down)
        type: {
            type: String,
            default: 'up'
        },
        /**
         * 显示的文字
         * 1. 父组件传递过来的数据
         * 2. 插槽
         */
        text: {
            type: String,
            default: '文字'
        },
        // 上升趋势的图标
        upIcon: {
            type: String,
            default: 'ArrowUp'
        },
        // 下降趋势的图标
        downIcon: {
            type: String,
            default: 'ArrowDown'
        },
        // 上升趋势的图标颜色
        upIconColor: {
            type: String,
            default: '#f5222d'
        },
        // 下降趋势的图标颜色
        downIconColor: {
            type: String,
            default: '#52c41a'
        },
        // 上升趋势的文字颜色
        upTextColor: {
            type: String,
            default: '#f5222d'
        },
        // 下降趋势的文字颜色
        downTextColor: {
            type: String,
            default: '#52c41a'
        },
        // 颜色反转 只在默认的颜色下生效 自定义颜色 不生效
        reverseColor: {
            type: Boolean,
            default: false
        }
    });
    // 获取插槽内容
    let slots = useSlots();
    // 文字颜色
    let textColor = computed(() => {
        return props.type === 'up' ? props.upTextColor : props.downTextColor;
    });
</script>

<style lang="scss" scoped>
    .trend {
        display: flex;
        align-items: center;
        .text {
            font-size: 12px;
            margin-right: 4px;
        }
        .icon {
            svg {
                height: 0.8em;
                width: 0.8em;
            }
        }
    }
</style>