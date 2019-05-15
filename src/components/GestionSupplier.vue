<template>

    <div>
        <form>

            <div class="form-group">
                <label>Fournisseur</label>
                <input v-model="name" type="name" class="form-control" placeholder="Fournisseur name">
            </div>
            <div class="form-group">
                <label>Status</label>
                <input v-model="status" type="text" class="form-control" placeholder="true or false">
            </div>
            <div class="form-group">
                <label>Coordonnées GPS</label>
                <input v-model="latitude" type="text" name="Latitude" placeholder="Latitude Gps"/>
                <input v-model="longitude" type="text" name="Longitude" placeholder="Longitude Gps"/>
            </div>

            <button
                    type="button"
                    style="background-color: #42b983"
                    class="btn m-1"
                    @click="addSupplier">
                Ajout Fournisseur
            </button>
           <!-- <button
                    type="button"
                    style="background-color: #b97703"
                    class="btn m-1"
                    @click="updateSupplier">
                Modifier
            </button>
-->
        </form>
    </div>

</template>


<script>

    const axios = require('axios');

    export default {

        name: 'gestionSupplier',

        data: function () {
            return {
                suppliers: [],
                name: "",
                checkedAt: "",
                status: "",
                latitude: "",
                longitude: "",

            }
        },
        methods: {
            addSupplier: function () {
                var objects = {
                    name: this.name,
                    status: this.status,
                    longitude: this.longitude,
                    latitude: this.latitude,
                    checkedAt: new Date(),
                };

                axios.post("https://api-suppliers.herokuapp.com/api/suppliers", objects);
            },

        }
    }
</script>