import Vue from 'vue'

export const sectionNavigate = Vue.extend({
  methods: {
    next () {
      this.$emit('next')
    },
    previous () {
      this.$emit('previous')
    }
  }
})
