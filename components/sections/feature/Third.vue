<template>
  <div class="feature-wrapper-third">
    <v-container class="feature-container position-relative">
      <v-row>
        <v-col cols="12" md="10">
          <img
            src="/images/feature/feature-img.jpg"
            alt="Feature 3"
            class="img-fluid rounded-lg"
          />
        </v-col>
        <v-col cols="12" lg="5" md="2" sm="7" class="feature-card py-10">
          <div class="text-center px-7">
            <v-chip class="bg-success text-white">
              Feature 3
            </v-chip>
            <h2 class="front-weight-medium section-title">
              Awesome with Extra Ordinary Flexibility
            </h2>
            <p class="text-muted">
              You can rely on our amazing features list and also our customer
              services will be a great experience for you without doubt and in
              no-time.
            </p>
            <v-btn
              class="bg-error text-white text-none mt-10"
            >
              Explore More
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.feature-wrapper-third {
  padding: 45px 0;
  background-color: white;
}
.feature-card {
  background-color: white;
  position: absolute;
  right: 0;
  top: 17%;
  border-radius: 10px;
}
.position-relative {
  position: relative !important;
}

@media (min-width: 768px) and (max-width: 991px) {
  .feature-card {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 45%;
  }
}

@media (max-width: 767px) {
  .feature-card {
    position: relative;
  }
}

</style>