// Temukan semua elemen sosial media
const socialMediaElems = document.querySelectorAll('.sosial-media li a');

// Loop melalui setiap elemen dan tambahkan event listener untuk mengubah class
socialMediaElems.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    // Cegah perilaku default dari hyperlink
    e.preventDefault();
    
    // Jika elemen memiliki class "active", hapus class dan set ulang CSS
    if (elem.classList.contains('active')) {
      elem.classList.remove('active');
      elem.style.transform = '';
      elem.style.transition = '';
      elem.style.boxShadow = '';
    }
    // Jika elemen tidak memiliki class "active", tambahkan class dan terapkan CSS
    else {
      elem.classList.add('active');
      elem.style.transform = 'translateY(-4px)';
      elem.style.transition = 'all 0.3s ease-in-out';
      elem.style.boxShadow = '0px 3px 3px 1px #14b8a6';
      
      // Hapus class "active" dan reset CSS setelah 300ms (durasi transisi)
      setTimeout(() => {
        elem.classList.remove('active');
        elem.style.transform = '';
        elem.style.transition = '';
        elem.style.boxShadow = '';
      }, 2);
    }
  });
});
