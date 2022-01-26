/* eslint-disable no-console */
import Vue from 'vue'

export const sectionNavigate = Vue.extend({
  methods: {
    next () {
      console.log('next')
      this.$emit('next')
    },
    previous () {
      console.log('previous')
      this.$emit('previous')
    }
  }
})
