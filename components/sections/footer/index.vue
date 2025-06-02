<template>
  <div class="footer-wrapper">
    <v-container class="footer-container">
      <v-row>
        <v-col cols="12" md="3" v-for="(item, index) in items" :key="index">
          <h3 class="footer-title">{{ item.title }}</h3>
          <div v-for="(data, idx) in item.data" :key="idx">
            <span class="text-muted mr-1">{{ data.key }}:</span>
            <span class="text-muted">{{ data.value }}</span>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <h3 class="footer-title">Social</h3>
          <ul class="list-unstyled d-flex align-center social-links">
            <li v-for="(item, index) in socialLinks" :key="index" class="mr-4 social-icon-item">
              <v-icon
                :icon="item.icon"
                class="text-primary social-icon"
                size="24"
              />
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row class="footer-copyright text-muted d-md-flex">
        <v-col cols="12" md="6">
          <p>All Rights Reserved by wrappixel.com</p>
        </v-col>
        <v-col cols="12" md="6" class="footer-terms">
          <ul class="list-unstyled d-flex text-md-right text-sm-left">
            <li class="mr-4"><a href="#" class="text-muted">Privacy Policy</a></li>
            <li class="mr-4"><a href="#" class="text-muted">Terms of Use</a></li>
            <li><a href="#" class="text-muted">Contact Us</a></li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" setup>
const items = [
  {
    title: 'Address',
    data: [
      {
        key: 'Full address',
        value: '1234 Street Name, City, State, 12345, Country',
      },
      {
        key: 'Zip Code',
        value: '12345'
      }
    ]
  },
  {
    title: 'Phone',
    data: [
      {
        key: 'Reception',
        value: '+1 234 567 8900',
      },
      {
        key: 'Office',
        value: '+1 234 567 8901',
      }
    ]
  },
  {
    title: 'Email',
    data: [
      {
        key: 'Office',
        value: 'nextkit-theme@theme.global'
      },
      {
        key: 'Site',
        value: 'nextkit-theme.global',
      }
    ]
  },
];

const socialLinks = [
  {
    icon: 'mdi-facebook',
    link: 'https://www.facebook.com/nextkit-theme'
  },
  {
    icon: 'mdi-twitter',
    link: 'https://twitter.com/nextkit-theme'
  },
  {
    icon: 'mdi-instagram',
    link: 'https://www.instagram.com/nextkit-theme'
  },
  {
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/company/nextkit-theme'
  }
];
</script>
<style>
.footer-wrapper {
  padding: 40px 0;
  background-color: white;
  border-top: 1px solid #e0e0e0;
}
.footer-container {
  max-width: 1170px !important;
  width: 100%;
  margin: 0 auto;
}
.footer-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 17px;
}
.social-links {
  list-style: none !important;
  padding-left: 0 !important;
}
.social-links li {
  list-style: none !important;
}
.social-icon-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.social-icon-item:hover {
  transform: translateY(-5px);
}
.social-icon {
  transition: transform 0.3s ease;
}
.footer-copyright {
  font-size: 15px;
}
.footer-terms li{
  list-style: none !important;
  a { text-decoration: none; }
}
</style>