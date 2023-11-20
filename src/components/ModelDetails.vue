<!-- ModelDetails.vue -->
<template>
  <div class="row">
    <div class="eleven column" style="margin-top: 5%">
      <h2>{{ title }}</h2>
      <form>
        <div class="row">
          <div class="six columns">
            <label for="modelInput">Model</label>
            <input class="u-full-width" type="text" v-model="model.nombre" />
          </div>
          <div class="six columns">
            <label for="potencia_hpInput">Potencia hp</label>
            <input
              class="u-full-width"
              type="text"
              v-model="model.potencia_hp"
            />
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="velocidad_maxima_mphInput">Velocidad Maxima Mph</label>
            <input
              class="u-full-width"
              type="text"
              v-model="model.velocidad_maxima_mph"
            />
          </div>
          <div class="six columns">
            <label for="aceleracion_0_60_mphInput">Aceleracion 0 60 Mph</label>
            <input
              class="u-full-width"
              type="text"
              v-model="model.aceleracion_0_60_mph"
            />
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <label for="precio_usdInput">Precio Usd</label>
            <input
              class="u-full-width"
              type="text"
              v-model="model.precio_usd"
            />
          </div>
        </div>
        <div class="row">
          <router-link class="button button-primary" to="/model"
            >Back</router-link
          >
          <a
            v-if="edit"
            class="button button-primary"
            style="float: right"
            v-on:click="updateModel(model._id)"
            >Update</a
          >
          <a
            v-if="create"
            class="button button-primary"
            style="float: right"
            v-on:click="createModel()"
            >Create</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "Model Details",
  props: ["create", "edit", "create"],
  data() {
    return {
      title: "Model Data",
      model: {},
    };
  },
  mounted() {
    const route = useRoute();
    if (route.params.id != null) this.findModel(route.params.id);
    else {
      this.model = {
        _id: Math.floor(Math.random() * 100000000),
        nombre : "",
        potencia_hp: "",
        velocidad_maxima_mph: "",
        aceleracion_0_60_mph: "",
        precio_usd: "",
        imagen: ""
        
      };
    }
  },
  methods: {
    findModel: function (id) {
      fetch(this.url + "/.netlify/functions/modelFind/" + id, {
        headers: { Accept: "application/json" },
      })
        .then((response) => response.json())
        .then((items) => {
          this.model = items[0];
        });
    },
    updateModel: function (id) {
      fetch(this.url + "/.netlify/functions/modelUpdate/" + id, {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(this.model),
      }).then((data) => {
        this.$router.push("/model");
      });
    },
    createModel: function () {
      fetch(this.url + "/.netlify/functions/modelInsert", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(this.model),
      }).then((data) => {
        this.$router.push("/model");
      });
    },
  },
};
</script>
