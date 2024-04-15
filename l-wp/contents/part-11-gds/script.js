// Mendapatkan elemen tombol dan jendela modal
var modalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");

// Menambahkan event listener untuk tombol
modalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Menutup jendela modal ketika tombol close diklik
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  modal.style.display = "none";
});

// Menutup jendela modal ketika area di luar jendela modal diklik
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

let clickCount = 10;
function gens(){
  clickCount++;
  if (clickCount-- > 0){
    let element =
    document.getElementById("butol")
    element.innerHTML =""+clickCount +" KLIK.";
    clickCount--;
  } else {
    window.location.href =
    "https://milkshake.bunkr.ru/kk-18--OtWixACV.mp4"

  }
}
