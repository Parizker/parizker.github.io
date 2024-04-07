



function openLink() {
            // Ganti URL_LINK_ANDA dengan URL yang ingin Anda buka
            var url = "index.html";
            window.open(url, "_blank"); // Buka link dalam tab baru
        }

        // Atur waktu tunggu sebelum membuka link (dalam milidetik)
        var WaktuBukaLink = 7000; // Contoh: buka link setelah 5 detik

        // Atur waktu tunggu sebelum menjalankan fungsi openLink
        setTimeout(openLink, WaktuBukaLink);
        
        
        // Array berisi URL gambar yang ingin diganti
// Mengambil referensi gambar
  var gambar = document.getElementById('hidegambar');
  
  // Mengatur waktu untuk menyembunyikan gambar setelah 5 detik (5000 milidetik)
  setTimeout(function() {
    gambar.style.display = 'none';
  }, 5500);
  
  
// Fungsi untuk menampilkan tombol
        function tampilkanTombol() {
            var tl = document.getElementById("tl");
            tl.style.display = "block"; // Menampilkan tombol
        }

        // Menunda tampilan tombol selama 3 detik (3000 milidetik)
        setTimeout(tampilkanTombol, 5500);
        
        
        
        // Fungsi untuk membuka link ketika tombol diklik
        function bukaLink() {
            // URL yang ingin dibuka
            var link = "../../../main/a/index.html";

            // Membuka link di jendela baru
            window.open(link, "_blank");
        }

        // Mendapatkan referensi tombol
        var tl = document.getElementById("tl");

        // Menambahkan event listener untuk menangani klik pada tombol
        tl.addEventListener("click", bukaLink);