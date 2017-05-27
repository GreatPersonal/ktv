new Vue({
  el: 'body',
  components: {Swiper},
  methods: {
    onSlideChangeStart (currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd (currentPage) {
      console.log('onSlideChangeEnd', currentPage);
    }
  }
});
