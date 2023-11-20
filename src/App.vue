<template>
  <div id="app" class="container">
    <div class="row" style="margin-top: 15px">
      <router-link class="three columns button button-primary" to="/"
        >Home</router-link
      >
      <router-link class="three columns button button-primary" to="/model"
        >Models</router-link
      >
      <router-link class="three columns button button-primary" to="/designer"
        >Designers</router-link
      >
      <router-link
        class="three columns button button-primary"
        to="/manufacturer"
        >Manufacturers</router-link
      >
    </div>
    <router-view />
    <div class="row" style="margin-top: auto">
      <!-- Align to the bottom -->
      <div class="four columns">
        <!-- Divide the width into three equal parts -->
        <button
          class="button button-primary"
          @click="runQueue('modelTasks', 'Models')"
        >
          Run Queues Models
        </button>
      </div>
      <div class="four columns">
        <button
          class="button button-primary"
          @click="runQueue('designerTasks', 'Designers')"
        >
          Run Queues Designers
        </button>
      </div>
      <div class="four columns">
        <button
          class="button button-primary"
          @click="runQueue('manufacturerTasks', 'Manufacturers')"
        >
          Run Queues Manufacturers
        </button>
      </div>
    </div>

    <div v-if="queueMessage" class="row">
      <div class="twelve columns">
        <p>{{ queueMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      queueMessage: "",
    };
  },
  methods: {
    runQueue(queueName, queueDisplayName) {
      fetch(
        `https://proyecto2-sd-backend.netlify.app/.netlify/functions/${queueName}`
      )
        .then((response) => {
          if (response.ok) {
            this.queueMessage = `${queueDisplayName} queue has run.`;

            // Clear the message after 3 seconds
            setTimeout(() => {
              this.queueMessage = "";
            }, 3000);

            return response.text();
          } else {
            throw new Error("Request failed");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Request error:", error);
        });
    },
  },
};
</script>
