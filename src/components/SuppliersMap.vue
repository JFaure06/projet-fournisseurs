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
                        :position="{lat: m.latitude, lng: m.longitude}"
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
    export default {
        name: 'SuppliersMap',
        data() {
            return {
                suppliers: [
                    {
                        id: 1,
                        latitude: 43.566448,
                        longitude: 7.077057
                    },
                    {
                        id: 2,
                        latitude: 43.7311424,
                        longitude: 7.4197576
                    },
                    {
                        id: 3,
                        latitude: 43.407511,
                        longitude: 6.694751
                    },
                    {
                        id: 4,
                        latitude: 28.5494,
                        longitude: -81.77289999999999
                    }
                ]
            }
        }

    }
</script>