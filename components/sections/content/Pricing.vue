<template>
  <div class="pricing-wrapper">
    <v-container class="pricing-container">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="display-1">Pricing</h1>
          <p class="subtitle">
            Choose the plan that fits your needs. Flexible pricing options for every budget.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="(plan, index) in pricePlan" :key="index">
          <div class="text-center">
            <v-card class="price-card px-10 py-5" elevation="1" variant="plain">
              <v-card-title class="px-2">{{ plan.title }}</v-card-title>
              <sup>$</sup>
              <span class="price-text">{{ plan.price }}</span>
              <v-card-subtitle class="px-2">{{ plan.plan }}</v-card-subtitle>
              <v-card-text>{{ plan.desc }}</v-card-text>
            </v-card>
          </div>
          <div class="text-center price-action">
            <v-btn :color="plan.buttoncolor">Choose Plan</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script setup lang="ts">
import { pricePlan } from '@/config/data';
</script>
<style>
.pricing-wrapper {
  padding: 45px 0;
  background-color: #FFFFFF;
}
.pricing-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.price-card sup {
  font-size: 16px;
  top: -20px;
}
.price-card .price-text {
  color: rgb(var(--v-theme-dark));
  font-size: 48px;
  line-height: 72px;
}
.price-action {
  margin: 0 !important;
  .v-btn {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: auto !important;
    padding: 20px 0 !important;
  }
}
</style>