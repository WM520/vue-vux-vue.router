<template>
    <div class="tab">
        <ul>
            <li>
                讲师区
            </li>
            <li>
                互动区
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scroped>
    .tab{
        width:100%;
        height:40px;
        border-bottom:1px solid #e5e5e5;
        ul{
            height:40px;
            margin:0;
            padding:0;
            li{
                float:left;
                width:50%;
                height:40px;
                line-height:40px;
                text-align:center;
                &:first-child{
                    border-right:1px solid #e5e5e5;
                }
            }
        }
    }
</style>

