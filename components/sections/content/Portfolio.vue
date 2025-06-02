<template>
  <div class="portfolio-wrapper">
    <v-container class="portfolio-container">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="display-1">Portfolio</h1>
          <p class="subtitle">
            Explore our diverse range of projects showcasing our expertise and creativity.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="(project, index) in portfolio" :key="index">
          <v-card class="pb-4" elevation="0">
            <div class="portfolio-img-wrapper">
              <v-img :src="`/images/portfolio/${project.img}`" class="portfolio-img"></v-img>
            </div>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.subtext }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { portfolio } from '@/config/data';
</script>
<style>
.portfolio-wrapper {
  padding: 45px 0;
  background-color: #f4f8fa;
}
.portfolio-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}

.portfolio-img-wrapper {
  overflow: hidden;
  max-height: 255px;
}
.portfolio-img {
  transition: 0.1s ease-in;
  cursor: pointer;
}
.portfolio-img:hover {
  transform: scale(1.1);
}
.v-card-title {
  font-size: 1 rem;
  font-weight: bold;
  padding: 5px 10px 0px 15px !important;
}
</style>