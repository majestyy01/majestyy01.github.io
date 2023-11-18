const form = document.querySelector('#contact'); // İletişim formunu seçtik
form.addEventListener('submit', e => {
  e.preventDefault(); // Formun varsayılan davranışını önlemek

  const formData = new FormData(form); // Form verileri
  const email = formData.get('exampleInputEmail1'); // E-posta adresi
  const name = formData.get('name');
  const message = formData.get('message');// Mesajı alın
  const subject = 'İletişim Formu Mesajı'; // E-posta konusu

  const body = `E-posta: ${email}\n\nMesaj:\n${message}`; // E-posta gövdesi

  const mailToLink = `mailto:ornek@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; // E-posta gönderme bağlantısını oluşturun

  window.location.href = mailToLink;('buraya link') // E-posta gönderme bağlantısını açın

});
// yanlış olabilir sen bizim siteye göre ayarlarsın kaptan