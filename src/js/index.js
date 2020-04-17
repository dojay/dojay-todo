$(document).ready(function () {
  const index = {
    init: function() {
      this.initData()
      this.bind()
    },

    initData: function() {

    },

    bind: function() {
      $('.todo-box').on('click', '.icon', function() {
        const $this = $(this)
        const checked = $this.data('checked')
        if (!checked) {
          $this.removeClass('icon-check').addClass('icon-checked').siblings('.list-txt').addClass('finished')
        } else {
          $this.removeClass('icon-checked').addClass('icon-check').siblings('.list-txt').removeClass('finished')
        }
        $this.data('checked', !checked)
      })
      $('.todo-box').on('click', '.list-txt', function() {
        const $this = $(this)
      })
    }
  }

  index.init()
});