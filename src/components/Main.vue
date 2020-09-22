<template>
    <div style="width: 100%; height:100%;">
        <app-header></app-header>
        <div class='contain'>main</div>
        <app-footer></app-footer>
    </div>
</template>
<style scoped>
    .contain{
        height: calc(100% - 120px);
        background-color: cornflowerblue;
    } 
</style>
<script>
import AppHeader from './common/Header'
import AppFooter from './common/Footer'
export default {
    name: 'Main',
    data() {

    },

    created() {

    },

    mounted() {

    },

    methods: {
        init: function() {

        }
    },

    components: {
        AppHeader,
        AppFooter
    }
}
</script>