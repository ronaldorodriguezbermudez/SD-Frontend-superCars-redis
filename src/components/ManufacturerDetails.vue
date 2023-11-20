<!-- ManufacturerDetails.vue -->
<template>
  <div class="row">
   <div class="eleven column" style="margin-top: 5%">
    <h2>{{title}}</h2>
     <form>
     <div class="row">
      <div class="six columns">
       <label for="manufacturerInput">Manufacturer</label>
       <input class="u-full-width" type="text"
         v-model="manufacturer.nombre">
      </div>
      <div class="six columns">
       <label for="fundacionInput">Fundación</label>
       <input class="u-full-width" type="text"
          v-model="manufacturer.fundacion">
      </div>
     </div>
     <div class="row">
      <div class="six columns">
       <label for="sedeInput">Sede</label>
       <input class="u-full-width" type="text"
          v-model="manufacturer.sede">
      </div>

     </div>
     <div class="row">
      <router-link class="button button-primary" 
        to="/manufacturer">Back</router-link>
       <a v-if='edit' class="button button-primary" style="float: right"
         v-on:click="updateManufacturer(manufacturer._id)">Update</a>
       <a v-if='create' class="button button-primary" style="float: right"
         v-on:click="createManufacturer()">Create</a>
     </div>
    </form>
  </div>
</div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "Manufacturer Details",
  props: ['create','edit','create'],
  data() {
    return {
      title: "Manufacturer Data",
      manufacturer: {}
    }
  },
  mounted() {
    const route = useRoute()
    if (route.params.id != null)
      this.findManufacturer(route.params.id);
    else {
      this.manufacturer = {
       
        '_id': Math.floor(Math.random()*100000000),'nombre':'','fundacion':'','sede':''};
    }
  },
  methods: {
    findManufacturer: function(id) {
      fetch(this.url+'/.netlify/functions/manufacturerFind/'+id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((items) => {
       this.manufacturer = items[0];
      })
    },
    updateManufacturer: function(id) {
      fetch(this.url+'/.netlify/functions/manufacturerUpdate/'+id,
        { headers: {'Content-Type':'application/json'},
          method: 'PUT',
          body: JSON.stringify(this.manufacturer)})
        .then((data) => {
          this.$router.push('/manufacturer');
        }
      )
    },
    createManufacturer: function() {
      fetch(this.url+'/.netlify/functions/manufacturerInsert',
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.manufacturer)})
        .then((data) => {
           this.$router.push('/manufacturer');
        }
      )
    }
  }
};
</script>


