<template>
  <div class="team-wrapper">
    <v-container class="team-container">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="display-1">Our Team</h1>
          <p class="subtitle">
            Meet the talented individuals behind our success, dedicated to delivering excellence.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3" v-for="(member, index) in teamMembers" :key="index">
          <v-card class="" elevation="0">
            <div class="team-img-wrapper social-overlay">
              <v-img :src="publicAsset(`images/team/${member.img}`)" class="team-img">
              </v-img>
              <div class="img-overlay">
                <ul>
                  <li v-for="social in member.socialicon" :key="social.icon">
                    <a :href="social.url">
                      <i :class="social.icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <v-card-title>{{ member.name }}</v-card-title>
            <v-card-subtitle>{{ member.subtitle }}</v-card-subtitle>
            <v-card-text class="text-muted">{{ member.desc }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { teamMembers } from '@/config/data';
</script>
<style>
.team-wrapper {
  padding: 45px 0;
  background-color: #f4f8fa;
}
.team-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.social-overlay {
  position: relative;
  .img-overlay {
    background: rgba(26, 139, 243, 0.87);
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
    border-radius: calc(0.25rem - 1px);
    ul {
      position: relative;
      top: 50%;
      display: flex;
      justify-content: center;
      list-style: none;
      padding-left: 0;
      li {
        a {
          color: rgb(var(--v-theme-white));
          transition: 0.2s ease-in;
          padding: 0 10px;
          display: block;
          &:hover {
            transform: translate3d(0px, -5px, 0px);
          }
        }
      }
    }
  }
  &:hover {
    .img-overlay {
      display: block;
    }
  }
}
</style>