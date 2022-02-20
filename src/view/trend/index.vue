<template>
    <div class="demo">
        <div><trend text="营业额" /></div>
        <div><trend text="销售额" type="down" /></div>
    </div>
    <br>

    <div class="demo">
        <div><trend text="营业额" upIconColor="green" /></div>
        <div><trend text="销售额" type="down" downIconColor="purple" /></div>
    </div>
    <br>

    <div class="demo">
        <div><trend text="营业额" reverseColor /></div>
        <div><trend text="销售额" type="down" reverseColor /></div>
    </div>
    <br>

    <div>
        <div><trend>hhh</trend></div>
    </div>
    <br>

    <div>
        <div><trend text="ajkshd"></trend></div>
    </div>
    <br>

    <div>
        <div><trend text="123" reverseColor /></div>
        <div><trend text="123" reverseColor type="down" /></div>
    </div>
    <br>

    <div>
        <div>
            <trend text="6777" upIcon="check" />
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style lang="scss" scoped>
    .demo {
        display: flex;
        div {
            margin-right: 10px;
        }
    }
</style>