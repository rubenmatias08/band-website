<!-- src/views/Store.vue -->
<template>
    <v-container class="store-container" fluid>
      <v-row>
        <v-col v-for="(product, index) in products" :key="index" cols="12" md="4">
          <v-card class="product-card">
            <v-img :src="product.image" height="200px"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }}</v-card-subtitle>
            <v-btn @click="addToCart(product)" color="orange" dark>Add to Cart</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { name: 'T-Shirt', price: '$20', image: '/path/to/tshirt.jpg' },
          // To add more products then..
        ],
      };
    },
    methods: {
      addToCart(product) {
        // To add logic for actual e-commerce functionality
        alert(`Added ${product.name} to cart!`);
      },
    },
  };
  </script>
  
  <style scoped>
  .store-container {
    background-color: black;
    color: white;
  }
  .product-card {
    transition: transform 0.3s ease;
  }
  .product-card:hover {
    transform: scale(1.05);
  }
  </style>
  