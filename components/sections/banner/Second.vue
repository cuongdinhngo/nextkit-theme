<template>
  <div class="sub-banner-wrapper">
    <v-container class="sub-banner-container">
      <v-row class="justify-center">
        <v-col cols="12" sm="7" lg="6" class="d-flex flex-column justify-center">
          <div class="text-sm-left text-center">
            <v-chip class="bg-dark text-white">
              Creating Brands
            </v-chip>
            <h2 class="ui-title text-white">
              ONE BILLON PEOPLE USE FACEBOOK
            </h2>
            <p class="text-white">
              Pellentesque vehicula eros a dui pretium ornare. Phasellus congue vel 
              quam nec luctus.In accumsan at eros in dignissim. Cras sodales nisi nonn accumsan.
            </p>
            <div class="banner-actions">
              <NuxtLink
                to="/"
                class="btn-100 btn-question"
              >
                Do you need Help?
              </NuxtLink>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="5" lg="6" class="text-center">
          <img src="/images/banner/banner1.jpg" alt="Sub Banner Image" class="img-fluid" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.sub-banner-wrapper {
  margin-top: 50px;
  padding: 45px 0;
  background-color: #fdbfa8; /* Light background for contrast */
}
.sub-banner-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.v-chip {
  font-size: .75rem !important;
  padding: 0 10px !important;
}
.banner-actions {
  margin-top: 50px;
}
.btn-question {
  padding: 20px 40px;
  background-color: #FFFFFF;
  color: black;
  border-radius: 30px;
  text-decoration: none;
}
</style>