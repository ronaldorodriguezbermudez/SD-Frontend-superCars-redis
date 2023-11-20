<!-- DesignerIndex.vue -->
<template>
  <div class="row">
   <div style="margin-top: 5%">
     <h2>{{title}}</h2>
     <table><thead>
       <tr>
        <th>Designer</th>
        <th>Foundation</th>
        <th>Sede</th>
        <th class="text-center">Actions</th>
	   </tr>
       </thead><tbody>
       <tr v-for='designer in designers'>
       <td>{{designer.nombre}}</td>
       <td>{{designer.fundacion}}</td>
       <td>{{designer.sede}}</td>
       <td>
       <router-link class="button"
         :to="'/designer/show/'+designer._id">Show</router-link>
       &nbsp;
       <router-link class="button"
         :to="'/designer/edit/'+designer._id">Edit</router-link>
       &nbsp;
       <a class="button"
         v-on:click="deleteDesigner(designer._id)">Erase</a>
       </td>
       </tr></tbody>
     </table>
     <router-link class="button button-primary" 
       to="/designer/create">New</router-link>
   </div>
  </div>
</template>

<script>
	
export default {
  name: "Designer Index",
  data() {
    return {
      title: 'Designer List',
      designers: []
    };
  },
  mounted() {
    this.allDesigners()
  },
  methods: {
    allDesigners() {
      fetch(this.url+'/.netlify/functions/designerFindAll',
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((items) => {
          this.designers = items;
        })
     },
     deleteDesigner(id) {
       fetch(this.url+'/.netlify/functions/designerDelete/'+id,
         { headers: {'Content-Type': 'application/json'},
           method: 'DELETE'})
          .then((items) => {
            this.allDesigners();
          }
        )
     }
  }
};
</script>