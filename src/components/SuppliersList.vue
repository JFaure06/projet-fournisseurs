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
    import { format, render, cancel, register } from 'timeago.js';

    export default {
        //Supplier,

        name: 'SuppliersList',
        components: {Supplier},
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "CorrectCraft",
                        status: true,
                        checkedAt: format(Date.now() - 5 * 1000 * 60 * 60)
                    },
                    {
                        id: 2,
                        name: "Monte-Carlo SBM",
                        status: false,
                        checkedAt: format(Date.now())
                    },
                    {
                      id: 3,
                      name: "MWS",
                      status: true,
                      checkedAt: format(Date.now())
                    },
                    {
                        id: 4,
                        name: "Swiss Ski School",
                        status: false,
                        checkedAt: format(Date.now())
                    },

                ],
            };
        }

    }
</script>