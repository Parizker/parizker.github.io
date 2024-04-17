var video = document.getElementById("myVideo");
var seekbar = document.getElementById("seek-bar");

// Atur nilai maksimum seekbar saat metadata video dimuat
video.addEventListener("loadedmetadata", function() {
  seekbar.max = video.duration;
});

// Atur waktu video saat seekbar digeser
seekbar.addEventListener("input", function() {
  var seekValue = parseFloat(this.value);
  video.currentTime = seekValue;
});

// Perbarui nilai seekbar saat waktu video berubah
video.addEventListener("timeupdate", function() {
  seekbar.value = video.currentTime;
});

var video = document.getElementById("myVideo");
var jumpButton = document.getElementById("jumpButton");

jumpButton.addEventListener("click", function() {
    var jumpTime = parseFloat(this.getAttribute("data-time"));
    video.currentTime += jumpTime;
});



  document.getElementById("myVideo").addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Mencegah tindakan konteks standar (biasanya muncul saat klik kanan)
        window.location.href = "a.html"; // Mengarahkan ke halaman a.html
    });
    
   // Ambil elemen button
const button = document.getElementById('download-btn');

// Inisialisasi status button
let isClicked = false;

// Tambahkan event listener untuk button
button.addEventListener('click', function() {
    // Jika belum diklik sebelumnya
    if (!isClicked) {
        // Redirect ke halaman iklan
        window.location.href = 'halaman-iklan.html';
        // Ubah status menjadi sudah diklik
        isClicked = true;
    } else {
        // Redirect ke halaman download
        window.location.href = 'halaman-download.html';
    }
});
