<template>
    <div>
        <!-- <h1>{{ msg }}</h1> -->
        <h1>Liste des fournisseurs</h1>
        <ul name="SuppliersList">
            <li v-for="value in suppliers" :key="value.id" class="list-group-item border-dark m-3">
                <Supplier
                        :name="value.name"
                        :status="value.status"
                        :checkedAt="value.checkedAt"
                />
            </li>
        </ul>
    </div>
</template>


<script>

    import Supplier from "./Supplier.vue";
    //import {format, render, cancel, register} from 'timeago.js';
    const axios = require('axios');

    export default {
        //Supplier,

        name: 'SuppliersList',
        components: {Supplier},

        data: function () {
            return {
                suppliers: [], // au début la liste des fournisseurs est vide
                loading: false,
                error: null,
            }
        },
        created: function () {
            axios.get("https://api-suppliers.herokuapp.com/api/suppliers")
                .then(response => (this.suppliers = response.data))
                .catch(error => console.log(error))
        }

    }
</script>