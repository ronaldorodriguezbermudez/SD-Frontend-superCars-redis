<!-- ManufacturerIndex.vue -->

<template>
  <div class="row">
   <div style="margin-top: 5%">
     <h2>{{title}}</h2>
     <table><thead>
       <tr>
        <th>Manufacturer</th>
        <th>Foundation</th>
        <th>Sede</th>
        <th class="text-center">Actions</th>
	   </tr>
       </thead><tbody>
       <tr v-for='manufacturer in manufacturers'>
       <td>{{manufacturer.nombre}}</td>
       <td>{{manufacturer.fundacion}}</td>
       <td>{{manufacturer.sede}}</td>
       <td>
       <router-link class="button"
         :to="'/manufacturer/show/'+manufacturer._id">Show</router-link>
       &nbsp;
       <router-link class="button"
         :to="'/manufacturer/edit/'+manufacturer._id">Edit</router-link>
       &nbsp;
       <a class="button"
         v-on:click="deleteManufacturer(manufacturer._id)">Erase</a>
       </td>
       </tr></tbody>
     </table>
     <router-link class="button button-primary" 
       to="/manufacturer/create">New</router-link>
   </div>
  </div>
</template>

<script>
	
export default {
  name: "Manufacturer Index",
  data() {
    return {
      title: 'Manufacturer List',
      manufacturers: []
    };
  },
  mounted() {
    this.allManufacturers()
  },
  methods: {
    allManufacturers() {
      fetch(this.url+'/.netlify/functions/manufacturerFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.manufacturers = items;
        })
     },
     deleteManufacturer(id) {
       fetch(this.url+'/.netlify/functions/manufacturerDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allManufacturers();
          }
        )
     }
  }
};
</script>