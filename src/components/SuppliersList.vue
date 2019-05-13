<template>
    <div>
        <!-- <h1>{{ msg }}</h1> -->
        <h1>Liste des fournisseurs</h1>

        <select id="statusFournisseurs" v-model="selected" style="background-color: #b9b8b8" class="btn m-1">
            <option value="true">OK</option>
            <option value="false">KO</option>
            <option value="*">*</option>
        </select>

        <!--<div id="statusFournisseurs">
            <select :options="options"></select>
        </div>-->

        <section v-if="errored">
            <p>Echec de la requête. Veuillez réessayer!</p>
        </section>
        <section v-else>
            <div v-if="loading">Chargement ....</div>

            <div id="id_of_supplierslist" v-else>
                <ul name="SuppliersList">
                    <li v-for="value in onFilterStatus()" :key="value.id" class="list-group-item border-dark m-3">

                        <Supplier
                                :name="value.name"
                                :status="value.status"
                                :checkedAt="value.checkedAt"
                        />
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>


<script>

    import Supplier from "./Supplier.vue";
    //import {format, render, cancel, register} from 'timeago.js';
    const axios = require('axios');

    /*
    function getSelectValue() {
        var selectedValue = document.getElementById("statusFournisseurs").value;
        console.log(selectedValue)
    }
    getSelectValue();
    */

    export default {
        //Supplier,

        name: 'SuppliersList',
        components: {Supplier},

        data: function () {
            return {
                suppliers: [], // au début la liste des fournisseurs est vide
                loading: false,
                errored: null,
                selected: '*',

            }
        },
        created: function () {
            axios.get("https://api-suppliers.herokuapp.com/api/suppliers")

                .then(response => (this.suppliers = response.data))
                .catch(error => {
                    this.errored = true
                })
        },

        methods: {
            onFilterStatus: function () {
                return this.suppliers.filter((supplier) => {
                    if (supplier.status.toString() === this.selected) {
                        return true
                    } else if (this.selected === '*'){
                        return true
                    }
                })
            }
        }
                /*
                 computed: {
                    filteredStatus: function () {
                        return this.status.filter(stats => {
                            return stats.type.toLowerCase().indexOf(this.selected.toLowerCase()) > -1
                        })
                    }
                },
                */

                /*
                myFunction: function () {
                var x = document.getElementById("statusFournisseurs").value;
                document.getElementById("SuppliersList").innerHTML = x;
            }
            */
                /*components: ('v-select', {
                data: {
                    options: [
                        'OK',
                        'KO',
                        '*'
                    ]
                }
            }*/

                /*computed: {
                  evenStatus : function () {
                      return this.SuppliersList.filter(function (status) {
                          return status
                      })
                  }
                },
                filters: {
                    capitalize: function (value) {
                        if (!value) return '#id_of_supplierslist';
                        value = value.toString();
                        return value.charAt(0).toUpperCase() + value.slice(1)
                    }
                }*/

            }
</script>