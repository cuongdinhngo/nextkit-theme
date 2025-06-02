<template>
  <div class="feature-wrapper">
    <v-container class="feature-container">
      <v-row class="justify-center">
        <v-col cols="12" lg="7" md="10">
          <div class="text-center">
            <v-chip class="bg-primary text-white">
              Feature 2
            </v-chip>
            <h2 class="front-weight-medium section-title">
              Awesome with Extra Ordinary Flexibility
            </h2>
            <p class="text-muted">
              You can relay on our amazing features list and also our customer
              services will be great experience for you without doubt and in
              no-time
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Features -->
      <v-row class="justify-center">
        <v-col cols="12" lg="6" md="6" v-for="(item, index) in feature2" :key="index">
          <v-card class="feature-item" :elevation="0">
            <div class="d-flex flex-column flex-sm-row">
              <v-col cols="12" sm="3" class="pa-2">
                <img
                  :src="`/images/feature/${item.img}`"
                  alt="Feature 2"
                  class="img-fluid rounded-lg"
                />
              </v-col>
              <v-col cols="12" sm="4" class="d-flex align-center pa-2">
                <p class="mb-0">{{ item.title }}</p>
              </v-col>
              <v-col cols="12" sm="5" class="py-0 px-0">
                <v-btn
                  block
                  class="linking bg-info feature-action-btn"
                >
                  Let's Talk <i class="mdi mdi-arrow-right"></i>
                </v-btn>
              </v-col>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { feature2 } from '@/config/data';
</script>
<style>
.feature-item {
  background-color: white;
}
.feature-action-btn {
  height: 100% !important;
}
</style>