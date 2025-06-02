<template>
  <div class="sub-navi-wrapper">
    <v-app-bar
      class="sub-navi-bar position-relative"
      color="primary"
      app
      flat
    >
      <v-container class="d-flex align-center justify-space-between pa-0 sub-navi-container">
        <div class="logo-section d-flex align-center justify-center ml-2">
          <div class="logo-icon">
            <span class="logo-text">N</span>
          </div>
        </div>

        <!-- Navigation Menu -->
        <div class="navbar-nav d-none d-md-flex">
          <ul class="nav-list d-flex align-center ma-0 pa-0">
            <li 
              v-for="(item, index) in subNav" 
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

      </v-container>
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        variant="text"
        @click.stop="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <div class="sub-nav-drawer">
      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        :elevation="0"
      >
      <div>
        <v-list class="mobile-nav-list">
          <v-list-item
            v-for="(item, index) in subNav"
            :key="index"
            :to="item.link"
            @click="drawer = false"
          >
            <v-list-item-title :class="item.isBtn ? 'drawer-btn-link' : ''">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
      </v-navigation-drawer>
    </div>
  </div>
</template>
<script lang="ts" setup>
const drawer = ref(false);
const subNav = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Contact', link: '/contact' },
  { title: 'Hire me', link: '/hire-me', isBtn: true }
]
</script>
<style>
.sub-navi-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.position-relative {
  position: relative !important;
}
.sub-nav-drawer .v-navigation-drawer {
  margin-top: -128px !important;
  height: 110vh !important;
}
</style>