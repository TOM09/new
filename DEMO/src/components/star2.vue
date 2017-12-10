<template>
    <div id="shoplist">
        <p class="all" >
            <span v-for="i in 6">☆</span>
        </p>
    </div>
</template>
<script>
    export default {
        name:'shoplist',
        data(){
           return {
               inputdata:'5'
           }
        },
        methods:{
        },
        watch: {
            inputdata(value) {
                console.log(value)
            }
        }
    }
</script>
<style>
    .all>input{opacity:0;position:absolute;width:2em;height:2em;margin:0;}
    .all>input:nth-of-type(1),
    .all>span:nth-of-type(1){display:none;}
    .all>span{font-size:0.5em;color:gold;
        -webkit-transition:color .2s;
        transition:color .2s;
    }
    .all>input:checked~span{color:#666;}
    .all>input:checked+span{color:gold;}
</style>