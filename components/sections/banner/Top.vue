<template>
  <div class="banner-wrapper">
    <v-container class="banner-container">
      <v-row class="justify-center">
        <!-- Text banner -->
        <v-col cols="12" sm="7" lg="6" class="d-flex flex-column justify-center">
          <div class="text-sm-left text-center">
            <h1 class="banner-title font-weight-bold text-white">Build stunning websites with NuxtJs UI Kit</h1>
            <h4 class="banner-subTitle">Free Vuetify UI Kit with Lots of Ready to Use Sections</h4>
            <div class="banner-actions d-sm-flex d-block">
              <v-btn
                class="btn-download btn-custom-md mr-0 mr-sm-5 mb-5 mb-sm-0 btn-100"
                :elevation="0"
                size="large"
                flat
              >Download Free</v-btn>
              <v-btn
                class="btn-upgrade btn-custom-md btn-100"
                variant="outlined"
                size="large"
                flat
              >Upgrade to Pro</v-btn>
            </div>
          </div>
        </v-col>

        <!-- Image banner -->
        <v-col cols="12" sm="5" lg="6" class="text-center">
          <img
            src="/images/banner/banner-img.png"
            alt="Banner Image"
            class="img-fluid"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>

</style>