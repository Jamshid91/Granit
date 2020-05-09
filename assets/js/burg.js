// $(function () {
//   $('.nav-mobile').hide()

//   $('.burg-item').on('click', function () {
//     $('.nav-mobile').slideToggle(0)
//   })
// })

$(document).ready(function () {
  $('.mobile').hide()

  $('.burg-item').click(function () {
    $('.mobile').slideToggle(1000)
  })
})