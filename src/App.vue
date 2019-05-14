<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Que voulez vous faire ?"/>
        <router-link to="/suppliers">
            <button type="button" style="background-color: #42b983" class="btn m-1" @click="onSuppliersListClick">
                Consulter la liste des fournisseurs
            </button>
        </router-link>
        <router-link to="/map">
            <button type="button" style="background-color: #42b983" class="btn m-1" @click="onMapClick">Voir la carte
            </button>
        </router-link>
        <router-link to="/addsupplier">
            <button type="button" style="background-color: #42b983" class="btn" @click="onMapClick">Ajout Fournisseurs</button>
        </router-link>
        <router-view></router-view>
        <!--<SuppliersList msg="Liste des fournisseurs"/>
        <SuppliersMap msg="Carte des fournisseurs"/>-->
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    //import SuppliersList from './components/SuppliersList.vue';
    //import SuppliersMap from "./components/SuppliersMap.vue";

    export default {
        name: 'app',
        components: {
            HelloWorld,
            //SuppliersList,
            //SuppliersMap,
        },
        methods: {
            onSuppliersListClick: function () {
                //alert('click on fournisseur list')

            },
            onMapClick: function () {
                //alert('click on map')
            },
            onSelectedClick: function () {

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
