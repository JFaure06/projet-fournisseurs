<template>
    <div class="map">
        <!-- <h1>{{ msg }}</h1> -->
        <h1>Carte des fournisseurs</h1>
        <div name="SuppliersMap">
            <GmapMap
                    :center="{lat:myPosition.latitude, lng:myPosition.longitude}"
                    :zoom="18"
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

    /*navigator.geolocation.getCurrentPosition(function (position) {
        const latgps = position.coords.latitude,
        const lnggps = position.coords.longitude,
            return latgps, lnggps,
    })*/

    export default {
        name: 'SuppliersMap',
        data: function () {
            return {
                suppliers: [], // au début la liste des fournisseurs est vide
                loading: false,
                error: null,
                myPosition: {
                    latitude: 46.603354,
                    longitude: 1.888334
                }
            }
        },
        created: function () {
            axios.get("https://api-suppliers.herokuapp.com/api/suppliers")
                .then(response => (
                    this.suppliers = response.data))
        },

        mounted() {
            // position request.
            navigator.geolocation.getCurrentPosition(position => {
                //console.log(position);
                this.myPosition = position.coords;
            });
        }

    }
</script>
