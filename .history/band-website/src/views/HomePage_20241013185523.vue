<template>
    <v-container class="home-container" fluid>
      <v-row>
        <v-col>
          <v-img :src="logo" class="band-logo"></v-img>
        </v-col>
      </v-row>
  
      <!-- Carousel for the categories -->
      <v-carousel hide-delimiter-background cycle class="carousel-style">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-sheet
            class="carousel-item-sheet d-flex align-center justify-center"
            elevation="5"
            height="300"
          >
            <v-icon large class="carousel-icon">{{ item.icon }}</v-icon>
            <h2 class="carousel-text">{{ item.title }}</h2>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
  
      <!-- Icons at the bottom of the page (not styled as a footer) -->
      <div class="bottom-icons">
        <v-icon large class="social-icon">mdi-facebook</v-icon>
        <v-icon large class="social-icon">mdi-instagram</v-icon>
        <v-icon large class="social-icon">mdi-spotify</v-icon>
        <v-icon large class="social-icon">mdi-apple</v-icon>
        <v-icon large class="social-icon">mdi-youtube</v-icon>
      </div>
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
  /* General container styles */
  .home-container {
    background-color: black; /* Black background */
    color: white; /* White text color */
    text-align: center;
    padding-top: 20px;
    min-height: 100vh; /* Ensure it takes full viewport height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  /* Band logo styles */
  .band-logo {
    width: 150px;
    margin-bottom: 20px;
  }
  
  /* Custom styles for the carousel */
  .carousel-style {
    background: linear-gradient(45deg, orange, black); /* Black-orange gradient background */
    padding: 20px;
    border-radius: 10px;
  }
  
  /* Carousel item styles */
  .carousel-item-sheet {
    background-color: rgba(0, 0, 0, 0.8); /* Transparent black */
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .carousel-item-sheet:hover {
    background-color: rgba(255, 165, 0, 0.7); /* Orange tint on hover */
  }
  
  .carousel-icon {
    color: orange; /* Orange icon color */
    margin-right: 15px;
  }
  
  .carousel-text {
    color: white; /* Keep text white */
  }
  
  /* Icons at the bottom of the page */
  .bottom-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px; /* Small margin from bottom */
  }
  
  .social-icon {
    color: orange; /* Orange icons for social media */
    transition: transform 0.3s ease;
  }
  
  .social-icon:hover {
    transform: scale(1.2); /* Slightly enlarge icon on hover */
  }
  </style>
  