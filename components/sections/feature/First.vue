<template>
  <div class="feature-wrapper">
    <v-container class="feature-container">
      <v-row justify="center">
        <v-col cols="12" lg="7" md="10">
          <div class="text-center">
            <v-chip class="bg-error text-white">
              Feature 1
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
      <v-row justify="center">
        <v-col cols="12" lg="10" md="10">
          <v-row>
            <v-col cols="12" sm="6" v-for="(item, index) in feature1" :key="index">
              <v-card :elevation="0">
                <v-card-item>
                  <div class="icon-round bg-light-info">
                    <v-icon class="icon-round">{{ item.icon }}</v-icon>
                  </div>
                  <v-card-title>{{ item.title }}</v-card-title>
                </v-card-item>
                <v-card-text>
                  <p class="text-muted">
                    {{ item.desc }}
                  </p>
                </v-card-text>
                <v-card-actions class="pl-4">
                  <a
                    href="#"
                    class="text-themecolor linking text-decoration-none d-flex align-center"
                  >
                    Explore More <i class="mdi mdi-arrow-right"></i>
                  </a>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { feature1 } from '@/config/data';
</script>
<style>
.icon-round {
  color: rgb(var(--v-theme-accent));
  display: inline-block;
  font-size: 45px;
  text-align: center;
  width: 90px;
  border-radius: 100%;
  margin: 20px 0px 30px;
}
.bg-light-info {
  background-color: #cfecfe;
}
.text-themecolor {
  color: rgb(var(--v-theme-accent));
}
.linking i {
  margin-left: 10px;
  transition: 0.2s ease-in;
  font-size: 16px;  
}
.linking:hover {
  i {margin-left: 15px;}
}
</style>
