import MostPopular from "../views/MostPopular.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Shops from "../views/Shops.vue";
import BestDeals from "../views/BestDeals.vue";
import Contact from "../views/Contact.vue";
import CategoryProducts from "../views/CategoryProductsView.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },

            {
                path: '/shops',
                name: 'shops',
                component: Shops
            },

            {
                path: '/most_popular',
                name: 'most_popular',
                component: MostPopular
            },

            {
                path: '/best_deals',
                name: 'best_deals',
                component: BestDeals
            },

            {
                path: '/contact',
                name: 'contact',
                component: Contact
            },

            {
                path: '/category/:category_title',
                name: 'by_category',
                component: CategoryProducts
            }
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router