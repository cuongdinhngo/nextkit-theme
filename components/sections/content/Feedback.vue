<template>
  <div class="feedback-wrapper">
    <v-container class="feedback-container">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="section-title">Check what our Customers are Saying</h1>
          <p class="text-muted">
            You can relay on our amazing features list and also our customer 
            services will be great experience for you without doubt and in no-time
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="(feedback, index) in feedbacks" :key="index">
          <v-card variant="text" class="feedback-card">
            <v-card-text class="font-italic">"{{ feedback.desc }}"</v-card-text>
            <div class="mt-3 d-flex align-center ml-4">
              <v-avatar :image="publicAsset(`/images/team/${feedback.img}`)" size="50"></v-avatar>
              <h3 class="font-weight-bold ml-3">{{ feedback.name }}</h3>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" setup>
import { feedbacks } from '@/config/data';
</script>
<style>
.feedback-wrapper {
  padding: 45px 0;
  background-color: white;
}
.feedback-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.feedback-card {
  background-color: #f4f8fa;
  padding: 10px;
}
</style>