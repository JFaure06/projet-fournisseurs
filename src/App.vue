<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Que voulez vous faire ?"/>
        <button type="button" class="btn btn-success md-4" @click="onSuppliersListClick">Consulter la liste des fournisseurs</button>
        <button type="button" class="btn btn-success md-4" @click="onMapClick">Voir la carte</button>
        <SuppliersList msg="Liste des fournisseurs"/>
        <SuppliersMap msg="Carte des fournisseurs"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import SuppliersList from './components/SuppliersList.vue';
    import SuppliersMap from "./components/SuppliersMap.vue";

    export default {
        name: 'app',
        components: {
            HelloWorld,
           SuppliersList,
           SuppliersMap,
        },
        methods: {
            onSuppliersListClick: function () {
                alert('click on fournisseur list')
            },
            onMapClick: function () {
                alert('click on map')
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
