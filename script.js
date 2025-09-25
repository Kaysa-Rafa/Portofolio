$(document).ready(function () {
  // Smooth scroll
  $('nav a, .btn').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 800);
  });

  // Inisialisasi EmailJS
  emailjs.init("8NvnaiU6hUJIodxVy");

  // Form interaktif dengan EmailJS
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    const templateParams = {
      from_name: $('#name').val(),
      from_email: $('#email').val(),
      message: $('#message').val()
    };

    emailjs.send("service_1vf267r", "template_30rlvug", templateParams)
      .then(function (response) {
        $('#responseMessage').text('✅ Pesan berhasil dikirim! Terima kasih, ' + templateParams.from_name + ' 🙌');
        $('#contactForm').trigger('reset');
      }, function (error) {
        $('#responseMessage').text('❌ Gagal mengirim pesan. Coba lagi ya.');
        console.error('EmailJS Error:', error);
      });
  });

  // Nether Mode Toggle
  $('#darkModeToggle').on('click', function () {
    $('body').toggleClass('nether-mode');
    if ($('body').hasClass('nether-mode')) {
      $(this).text('☀️ Normal');
    } else {
      $(this).text('🌑 Nether');
    }
  });
});