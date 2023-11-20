import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import DesignerIndex from "./components/DesignerIndex.vue";
import DesignerDetails from "./components/DesignerDetails.vue";
import ModelIndex from "./components/ModelIndex.vue";
import ModelDetails from "./components/ModelDetails.vue";
import ManufacturerIndex from "./components/ManufacturerIndex.vue";
import ManufacturerDetails from "./components/ManufacturerDetails.vue";

const routes = [
  { path: "/", component: Home },
	
  { path: "/designer", component: DesignerIndex },
  { path: "/designer/show/:id", 
    component: DesignerDetails, props: {show:true} },
  { path: "/designer/edit/:id", 
    component: DesignerDetails, props: {edit:true} },
  { path: "/designer/create", 
    component: DesignerDetails, props: {create:true} },
  { path: "/designer/delete/:id", 
    component: DesignerDetails, props: {delete:true} },

  { path: "/model", component: ModelIndex },
  { path: "/model/show/:id", 
    component: ModelDetails, props: {show:true} },
  { path: "/model/edit/:id", 
    component: ModelDetails, props: {edit:true} },
  { path: "/model/create", 
    component: ModelDetails, props: {create:true} },
  { path: "/model/delete/:id", 
    component: ModelDetails, props: {delete:true} },


  { path: "/manufacturer", component: ManufacturerIndex },
  { path: "/manufacturer/show/:id", 
    component: ManufacturerDetails, props: {show:true} },
  { path: "/manufacturer/edit/:id", 
    component: ManufacturerDetails, props: {edit:true} },
  { path: "/manufacturer/create", 
    component: ManufacturerDetails, props: {create:true} },
  { path: "/manufacturer/delete/:id", 
    component: ManufacturerDetails, props: {delete:true} },
    
  
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;