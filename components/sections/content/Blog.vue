<template>
  <div class="blog-wrapper">
    <v-container class="blog-container">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="section-title">Latest Blog Posts</h1>
          <p class="text-muted">
            Stay updated with our latest news, articles, and insights from the industry.
          </p>
        </v-col>
      </v-row>
      <v-row class="blog-row">
        <v-col cols="12" md="4" sm="6" v-for="(post, index) in blogPosts" :key="index">
          <v-card variant="text" class="blog-card position-relative">
            <v-img :src="publicAsset(`/images/blog/${post.img}`)" height="240px"></v-img>
            <p class="createdAt">{{ post.createdAt }}</p>
            <v-card-text>
              <h3 class="font-weight-bold">{{ post.title }}</h3>
              <p class="text-muted py-2 line-clamp-3">{{ post.desc }}</p>
              <a href="#" class="text-primary font-weight-bold">
                Read More
                <i class="mdi mdi-arrow-right"></i>
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" setup>
import { blogPosts } from '@/config/data';
</script>
<style>
.blog-wrapper {
  padding: 40px 0;
  background-color: white;
}
.blog-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.blog-row {
  justify-content: center;
}
@media (min-width: 600px) and (max-width: 959px) {
  .blog-row .v-col:nth-child(3):nth-last-child(1) {
    margin: 0 auto;
  }
}
.blog-card {
  .v-card-text {
    padding: 10px 0px;
  }
  img {
    position: relative;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  &:hover {
    img {
      transform: translateY(-10px);
    }
  }
  .createdAt {
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 14px;
    background-color: #4293f0;
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
  }
  a {
    text-decoration: none;
    i {
      margin-left: 7px;
      transition: 0.2s ease-in;
    }
  }
  &:hover {
    i {margin-left: 15px;}
  }
}
</style>