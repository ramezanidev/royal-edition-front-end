import Vue from 'vue'

export default Vue.extend({
  computed: {
    navBarLinks () {
      return [
        {
          lable: this.$i18n.t('links.mainPage'),
          href: '/#main'
        },
        {
          lable: this.$i18n.t('links.serveces'),
          href: '/#services'
        },
        {
          lable: this.$i18n.t('links.aboutUs'),
          href: '/#about-us'
        },
        {
          lable: this.$i18n.t('links.calculator'),
          href: '/calculator'
        },
        {
          lable: this.$i18n.t('links.mag'),
          href: '/mag'
        },

        {
          lable: this.$i18n.t('links.contactUs'),
          href: '/contact-us'
        }
      ]
    }
  }
})

export const navI18nMessages = {
  en: {
    links: {
      mainPage: 'Main page',
      serveces: 'Serveces',
      aboutUs: 'About us',
      calculator: 'Calculator',
      mag: 'Mag',
      contactUs: 'Contact us'
    }
  },
  fa: {
    links: {
      mainPage: 'صفحه اصلی',
      serveces: 'خدمات',
      aboutUs: 'درباره ما',
      calculator: 'حساب گر',
      mag: 'مجله',
      contactUs: 'تماس با ما'
    }
  }
}
