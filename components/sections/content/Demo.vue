<template>
  <div class="demo-wrapper">
    <v-container class="demo-container">
      <v-row class="justify-center">
        <v-col cols="12" sm="7" class="text-center d-flex flex-column justify-center">
          <h2 class="demo-title text-sm-left">Give your Business Real boost Now!</h2>
          <p class="demo-description text-sm-left text-muted">To accomplish great things, we must not only act, but also dream; 
            not only plan, but also believe.
          </p>
          <div class="subscribe-form d-flex align-center">
            <v-text-field
              placeholder="Enter Email Address"
              variant="solo"
              class="subscribe-input"
              hide-details
            ></v-text-field>
            <v-btn
              class="subscribe-button bg-primary text-white"
              variant="contained"
              size="large"
            >
              GET STARTED
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="5" class="text-center">
          <img
            src="/images/banner/demo.png"
            alt="Demo Image"
            class="img-fluid"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.demo-wrapper {
  padding: 50px 0;
  background-color: #e9f3f8;
}
.demo-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.demo-title {
  font-size: 48px;
  letter-spacing: -1px;
  line-height: 1;
  margin: 20px 0 15px;
}
.subscribe-form {
  gap: 0;
  max-width: 500px;
  margin-top: 20px;
  border-radius: 28px !important;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Target Vuetify components without scoped */
.subscribe-input .v-field {
  padding: 10px 15px !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-right: none !important;
  border-bottom: none !important;
}

.subscribe-input .v-field__field {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.subscribe-input .v-field__overlay {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.subscribe-input .v-field__outline {
  border: none !important;
}

.subscribe-input .v-field--variant-solo {
  border: none !important;
  box-shadow: none !important;
}

.subscribe-button.v-btn {
  /* padding: 10px 15px !important; */
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  height: 78px !important;
  min-width: 140px;
  text-transform: none;
  font-weight: 600;
}
</style>