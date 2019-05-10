<template>
    <div>
        <!-- <h1>{{ msg }}</h1> -->
        <h1>Liste des fournisseurs</h1>
        <section v-if="errored">
            <p>Echec de la requête. Veuillez réessayer!</p>
        </section>
        <section v-else>
        <div v-if="loading">Chargement ....</div>

        <div v-else>
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
        </section>

        <select id="" v-model="selected" style="background-color: #42b983" class="btn m-1"">
            <option :value="OK"></option>
            <option :value="KO"></option>
            <option :value="*"></option>
        </select>

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
                .catch(error => {
                    this.errored = true
                })
        }

    }
</script>