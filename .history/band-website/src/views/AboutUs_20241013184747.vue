<template>
    <v-container class="about-container" fluid>
      <v-row align="center">
        <v-col cols="12">
          <v-img :src="photo" class="band-photo" width="300"></v-img>
          <p class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus...
          </p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photo: '/path/to/band-photo.jpg',
      };
    },
  };
  </script>
  
  <style scoped>
  .about-container {
    text-align: center;
    background-color: black;
    color: white;
  }
  .about-text {
    font-size: 18px;
    margin-top: 20px;
  }
  .band-photo {
    margin-bottom: 20px;
  }
  </style>
  