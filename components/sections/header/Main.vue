<template>
  <v-app-bar 
    class="header-bar"
    :elevation="0"
    absolute
    dark
    app
  >
    <v-container class="d-flex align-center justify-space-between pa-0 custom-container">
      <!-- Logo Section -->
      <div class="logo-section pl-4 d-flex align-center">
        <div class="logo-icon">
          <span class="logo-text">N</span>
        </div>
        <span class="brand-name ml-2">Next-kit</span>
      </div>

      <!-- Navigation Menu -->
      <div class="navbar-nav d-none d-md-flex">
        <ul class="nav-list d-flex align-center ma-0 pa-0">
          <li 
            v-for="(item, index) in headerNav" 
            :key="index"
            class="nav-item"
          >
            <NuxtLink
              :class="['nav-link', item.isBtn ? 'btn-link' : '']"
              :to="item.link"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        variant="text"
        @click.stop="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    :elevation="0"
  >
    <v-list class="mobile-nav-list">
      <v-list-item
        v-for="(item, index) in headerNav"
        :key="index"
        :to="item.link"
        @click="drawer = false"
      >
        <v-list-item-title :class="item.isBtn? 'drawer-btn-link' : ''">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { headerNav } from '@/config/header-nav'

const drawer = ref(false)
</script>
