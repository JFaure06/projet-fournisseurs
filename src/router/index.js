import Vue from 'vue'
import VueRouter from 'vue-router'
import SuppliersList from "../components/SuppliersList";
import SuppliersMap from "../components/SuppliersMap";
import Supplier from "../components/Supplier";
import GestionSupplier from "../components/GestionSupplier";
import updatesupplier from "../components/UpdatesSupplier"

Vue.use(VueRouter);

const routes = [
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier},
    {path: '/addsupplier', component: GestionSupplier},
    {path: '/updatesupplier', component: updatesupplier}
];

export default new VueRouter({
    routes
})