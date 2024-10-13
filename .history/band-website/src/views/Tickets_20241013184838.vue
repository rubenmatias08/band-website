<template>
    <v-container class="tickets-container" fluid>
      <v-row v-if="!shows.length">
        <v-col cols="12">
          <p class="no-data">No data available</p>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" v-for="(show, index) in shows" :key="index">
          <h3>{{ show.city }} - {{ show.place }} ({{ show.date }})</h3>
          <v-btn @click="redirectToBuy(show.link)" color="orange" dark>Buy Tickets</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shows: [] // Then I have to put API data or static data
      };
    },
    methods: {
      redirectToBuy(link) {
        window.open(link, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .tickets-container {
    background-color: black;
    color: white;
  }
  .no-data {
    text-align: center;
    color: white;
  }
  </style>
  