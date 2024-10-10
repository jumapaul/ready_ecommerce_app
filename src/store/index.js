import {createStore} from "vuex";
import {db} from '../firebase';
import 'firebase/firestore'
import {collection, getDocs} from 'firebase/firestore'
import axiosClient from "../axiosClient.js";
import * as url from "node:url";

export default createStore({
    state: {
        slidingImages: [],
        services: [],
        categories: [],
        categoryProducts: []
    },

    mutations: {
        set_sliding_images(state, images) {
            state.slidingImages = images
        },

        set_services(state, services) {
            state.services = services
        },

        set_categories(state, categories) {
            state.categories = categories
        },

        set_categories_products(state, products) {
            state.categoryProducts = products
        }
    },
    getters: {},
    actions: {
        async fetchSlidingImages({commit}) {
            try {
                const querySnapShot = await getDocs(collection(db, 'sliding_images'));
                const images = [];
                querySnapShot.forEach((doc) => {
                    images.push(doc.data());
                });

                commit('set_sliding_images', images);
            } catch (error) {
                console.error("Error fetching images", error);
            }
        },

        async fetchServices({commit}) {
            try {
                const querySnapShot = await getDocs(collection(db, 'services'));
                const services = [];
                querySnapShot.forEach((doc) => {
                    services.push(doc.data());
                });

                commit('set_services', services);
            } catch (error) {
                console.log('Error fetching services', error)
            }
        },

        async fetchCategories({commit}) {
            try {
                const querySnapShot = await getDocs(collection(db, 'categories'));
                const categories = []
                querySnapShot.forEach((doc) => {
                    categories.push(doc.data());
                });

                commit('set_categories', categories);
            } catch (error) {
                console.log("Error fetching categories", error)
            }
        },

        async fetchCategoryProducts({commit}, categoryName) {

            console.log("-----> category product called")
            try {
                const {data} = await axiosClient.get(`products/category/${categoryName}`)

                console.log("-------->data", data)
                if(data){
                    commit('set_categories_products', data)
                }else{
                    console.error('No data retrieved')
                    commit('set_categories_products', [])
                }
            } catch (error) {
                console.log("Exception:", error)
                commit('set_categories_products', [])
            }
        }
    }
})