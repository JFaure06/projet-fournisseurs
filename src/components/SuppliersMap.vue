<template>
    <div class="map">
        <!-- <h1>{{ msg }}</h1> -->
        <h1>Carte des fournisseurs</h1>
        <div name="SuppliersMap">
            <GmapMap
                    :center="{lat:46.603354, lng:1.888334}"
                    :zoom="7"
                    style="width: 100%; height: 800px"
            >
                <GmapMarker
                        :key="index"
                        v-for="(m, index) in suppliers"
                        :position="{lat: parseFloat(m.latitude) , lng: parseFloat(m.longitude) }"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                />
            </GmapMap>
        </div>

        <!-- <div v-for="value in suppliers" :key="value.id">
             <suppliers
                 :latitude="value.latitude",
                 :longitude="value.longitude"
         </div>
 -->
    </div>
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'SuppliersMap',
        data: function () {
            return {
                suppliers: [], // au début la liste des fournisseurs est vide
                loading: false,
                error: null,
            }
        },
        created: function() {
            axios.get("https://api-suppliers.herokuapp.com/api/suppliers")
                .then( response => (this.suppliers = response.data))
                .catch( error => console.log(error))
    }
</script>