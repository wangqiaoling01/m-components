<template>
    <div>
        <el-select clearable placeholder="请选择省份" v-model="province">
            <el-option
                v-for="(item) in areasData"
                :key="item.code"
                :value="item.code"
                :label="item.name"
            />
        </el-select>
        <el-select clearable :disabled="!province" placeholder="请选择城市" v-model="city">
            <el-option
                v-for="item in selectCity"
                :key="item.code"
                :value="item.code"
                :label="item.name"
            />
        </el-select>
        <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
            <el-option
                v-for="item in selectArea"
                :key="item.code"
                :value="item.code"
                :label="item.name"
            />
        </el-select>
    </div>
</template>

<script setup lang='ts'>
    import allAreas from '../lib/pca-code.json';
    import {ref, watch} from 'vue';

    export interface IAreaItem {
        name: string;
        code: string;
        children?: IAreaItem[];
    }

    export interface IAreaData {
        name: string;
        code: string;
    }

    // 下拉框选择省份的值
    let province = ref<string>('');
    // 下拉框选择城市的值
    let city = ref<string>('');
    // 下拉框选择区域的值
    let area = ref<string>('');
    // 所有数据
    let areasData = ref(allAreas);
    // 分发时间给父组件
    let emit = defineEmits(['change']);
    // 城市下拉框的所有的值
    let selectCity = ref<IAreaItem[]>([]);
    // 监听选择省份
    watch(() => province.value, val => {
        if (val) {
            selectCity.value = areasData.value.find(item => item.code === val)!.children!;
        }
        city.value = '';
        area.value = '';
    });

    // 区域下拉框的所有的值
    let selectArea = ref<IAreaItem[]>([]);
    // 监听选择城市
    watch(() => city.value, val => {
        if (val) {
            selectArea.value = selectCity.value.find(item => item.code === val)!.children!;
        }
        area.value = '';
    });

    // 监听选择区域的值
    watch(() => area.value, val => {
        if (!val) return;
        let provinceRes: IAreaData = {
            code: province.value,
            name: province.value && allAreas.find(item => item.code === province.value)!.name
        };
        let cityRes: IAreaData = {
            code: city.value,
            name: city.value && selectCity.value.find(item => item.code === city.value)!.name
        };
        let areaRes: IAreaData = {
            code: val,
            name: val && selectArea.value.find(item => item.code === val)!.name
        };
        emit('change', {
            province: provinceRes,
            city: cityRes,
            area: areaRes
        });
    });
</script>

<style>

</style>