<!-- ModelIndex.vue -->
<template>
  <div class="row">
   <div style="margin-top: 5%">
     <h2>{{title}}</h2>
     <table><thead>
       <tr>
        <th>Name</th>
        <th>Power</th>
        <th>Speed</th>
        <th>Acceleration</th>
        <th>Price</th>
      
        <th class="text-center">Actions</th>
	   </tr>
       </thead><tbody>
       <tr v-for='model in models'>
       <td>{{model.nombre}}</td>
       <td>{{model.potencia_hp}}</td>
       <td>{{model.velocidad_maxima_mph}}</td>
       <td>{{model.aceleracion_0_60_mph}}</td>
       <td>{{model.precio_usd}}</td>
       <td>
       <router-link class="button"
         :to="'/model/show/'+model._id">Show</router-link>
       &nbsp;
       <router-link class="button"
         :to="'/model/edit/'+model._id">Edit</router-link>
       &nbsp;
       <a class="button"
         v-on:click="deleteModel(model._id)">Erase</a>
       </td>
       </tr></tbody>
     </table>
     <router-link class="button button-primary" 
       to="/model/create">New</router-link>
   </div>
  </div>
</template>

<script>
	
export default {
  name: "Model Index",
  data() {
    return {
      title: 'Model List',
      models: []
    };
  },
  mounted() {
    this.allModels()
  },
  methods: {
    allModels() {
      fetch(this.url+'/.netlify/functions/modelFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.models = items;
        })
     },
     deleteModel(id) {
       fetch(this.url+'/.netlify/functions/modelDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allModels();
          }
        )
     }
  }
};
</script>