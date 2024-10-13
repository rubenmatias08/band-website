<template>
    <v-container class="home-container" fluid>
      <v-row>
        <v-col>
          <v-img :src="logo" class="band-logo"></v-img>
        </v-col>
      </v-row>
      <v-carousel hide-delimiter-background cycle>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-sheet
            class="d-flex align-center justify-center"
            elevation="5"
            height="300"
          >
            <v-icon large>{{ item.icon }}</v-icon>
            <h2>{{ item.title }}</h2>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
  
      <v-footer class="footer-icons">
        <v-icon large>mdi-facebook</v-icon>
        <v-icon large>mdi-instagram</v-icon>
        <v-icon large>mdi-spotify</v-icon>
        <v-icon large>mdi-apple</v-icon>
        <v-icon large>mdi-youtube</v-icon>
      </v-footer>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logo: '/path/to/logo.png', // Placeholder for band logo
        items: [
          { title: 'About Us', icon: 'mdi-account-group' },
          { title: 'Tickets', icon: 'mdi-ticket' },
          { title: 'Records', icon: 'mdi-disc' },
          { title: 'Multimedia', icon: 'mdi-video' },
          { title: 'Store', icon: 'mdi-cart' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    background-color: black;
    text-align: center;
  }
  .band-logo {
    width: 150px;
    margin-bottom: 20px;
  }
  .footer-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    color: white;
  }
  </style>
  