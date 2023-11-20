<!-- DesignerDetails.vue -->
<template>
  <div class="row">
   <div class="eleven column" style="margin-top: 5%">
    <h2>{{title}}</h2>
     <form>
     <div class="row">
      <div class="six columns">
       <label for="designerInput">Designer</label>
       <input class="u-full-width" type="text"
         v-model="designer.nombre">
      </div>
      <div class="six columns">
       <label for="fundacionInput">Fundación</label>
       <input class="u-full-width" type="text"
          v-model="designer.fundacion">
      </div>
     </div>
     <div class="row">
      <div class="six columns">
       <label for="sedeInput">Sede</label>
       <input class="u-full-width" type="text"
          v-model="designer.sede">
      </div>

     </div>
     <div class="row">
      <router-link class="button button-primary" 
        to="/designer">Back</router-link>
       <a v-if='edit' class="button button-primary" style="float: right"
         v-on:click="updateDesigner(designer._id)">Update</a>
       <a v-if='create' class="button button-primary" style="float: right"
         v-on:click="createDesigner()">Create</a>
     </div>
    </form>
  </div>
</div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "Designer Details",
  props: ['create','edit','create'],
  data() {
    return {
      title: "Designer Data",
      designer: {}
    }
  },
  mounted() {
    const route = useRoute()
    if (route.params.id != null)
      this.findDesigner(route.params.id);
    else {
      this.designer = {
       
        '_id': Math.floor(Math.random()*100000000),'nombre':'','fundacion':'','sede':''};
    }
  },
  methods: {
    findDesigner: function(id) {
      fetch(this.url+'/.netlify/functions/designerFind/'+id,
      { headers: {'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((items) => {
       this.designer = items[0];
      })
    },
    updateDesigner: function(id) {
      fetch(this.url+'/.netlify/functions/designerUpdate/'+id,
        { headers: {'Content-Type':'application/json'},
          method: 'PUT',
          body: JSON.stringify(this.designer)})
        .then((data) => {
          this.$router.push('/designer');
        }
      )
    },
    createDesigner: function() {
      fetch(this.url+'/.netlify/functions/designerInsert',
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.designer)})
        .then((data) => {
           this.$router.push('/designer');
        }
      )
    }
  }
};
</script>


