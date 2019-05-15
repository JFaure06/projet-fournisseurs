<template>
    <div>
        <h1>Fournisseur :{{ name }}</h1>
        <h3 v-if="status === true" class="text-success">A du stock ? OK</h3>
        <h3 v-else class="text-danger">A du stock ? KO</h3>
        <h5>Date de dernière relevé des stocks: {{ checkedAt }}</h5>
        <button
                type="button"
                style="background-color: #b90509"
                class="btn m-1"
                @click="deleteSupplier">
            Supprimer
        </button>

    </div>

</template>


<script>

    const axios = require('axios');

    export default {
            name: 'Supplier',
            props: {
                name: String,
                status: Boolean,
                checkedAt: String,
                id: String,
            },
            methods:{
                // fonction de suppression                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                deleteSupplier: function () {
                    axios
                        .delete("https://api-suppliers.herokuapp.com/api/suppliers/" + this.id)
                        .then(function (response) {
                            // eslint-disable-next-line no-console
                            console.log(response);
                            location.reload()
                        }).catch(function (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    });
                },
            }
    }
</script>