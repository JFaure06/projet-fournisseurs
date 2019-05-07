import Vue from 'vue'
import VueRouter from 'vue-router'
import SuppliersList from "../components/SuppliersList";
import SuppliersMap from "../components/SuppliersMap";
import Supplier from "../components/Supplier";

Vue.use(VueRouter)

const routes = [
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier}
];

export default new VueRouter({
    routes
})