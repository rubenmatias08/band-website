<template>
    <v-container class="home-container" fluid>
      <!-- Band logo at the top -->
      <v-row>
        <v-col class="d-flex justify-start">
          <v-img :src="logo" class="band-logo"></v-img>
        </v-col>
      </v-row>
  
      <!-- Category Cards -->
      <v-row class="categories">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          md="4"
          @click="navigateTo(item.route)"
          class="category-item d-flex flex-column align-center justify-center"
        >
          <v-icon class="category-icon">{{ item.icon }}</v-icon>
          <h3 class="category-title">{{ item.title }}</h3>
        </v-col>
      </v-row>
  
      <!-- Bottom Icons for Social Media -->
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
          { title: 'About Us', icon: 'mdi-account-group', route: '/about' },
          { title: 'Tickets', icon: 'mdi-ticket', route: '/tickets' },
          { title: 'Records', icon: 'mdi-disc', route: '/records' },
          { title: 'Multimedia', icon: 'mdi-video', route: '/multimedia' },
          { title: 'Store', icon: 'mdi-cart', route: '/store' },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route); // Navigate to the route on click
      },
    },
  };
  </script>
  
  <style scoped>
  /* General page styles */
  .home-container {
    background-color: black; /* Black background */
    color: white; /* White text */
    font-family: 'Playfair Display', serif; /* Elegant serif font */
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 20px;
  }
  
  /* Band logo */
  .band-logo {
    width: 150px;
    margin-bottom: 40px;
  }
  
  /* Categories styling */
  .categories {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  
  .category-item {
    transition: transform 0.3s ease;
    cursor: pointer;
    padding: 20px;
  }
  
  .category-item:hover {
    transform: scale(1.1); /* Slight zoom effect on hover */
  }
  
  .category-icon {
    color: orange;
    font-size: 60px; /* Larger icon size */
    margin-bottom: 15px;
  }
  
  .category-title {
    color: white;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }
  
  /* Social Media icons at the bottom */
  .bottom-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .social-icon {
    color: orange; /* Orange social icons */
    transition: transform 0.3s ease;
  }
  
  .social-icon:hover {
    transform: scale(1.2); /* Slightly enlarge on hover */
  }
  </style>
  