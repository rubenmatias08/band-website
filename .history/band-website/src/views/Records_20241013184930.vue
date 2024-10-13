<template>
    <v-container class="records-container" fluid>
      <v-row>
        <v-col v-for="(record, index) in records" :key="index" cols="12" md="4">
          <v-card class="record-card" @click="redirectToStream(record)">
            <v-img :src="record.image" height="200px"></v-img>
            <v-card-title>{{ record.name }} ({{ record.year }})</v-card-title>
            <v-btn @click="redirectToStream(record.link)" color="orange" dark>
              Listen on Spotify/Apple Music
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        records: [
          { name: 'Album 1', year: 2020, image: '/path/to/image.jpg', link: 'https://spotify.com' },
          // More records here then...
        ],
      };
    },
    methods: {
      redirectToStream(link) {
        window.open(link, '_blank');
      },
    },
  };
  </script>
  
  <style scoped>
  .records-container {
    background-color: black;
    color: white;
  }
  .record-card {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .record-card:hover {
    transform: scale(1.05);
  }
  </style>
  