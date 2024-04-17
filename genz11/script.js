const checkbox = document.getElementById('togl');
    const targetBox = document.getElementById('drawer-menu');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Checkbox aktif, tambahkan CSS
            targetBox.style.left = '0'; // Misalnya
        } else {
            // Checkbox tidak aktif, hapus CSS
            targetBox.style.left = '-300px'; // Misalnya
        }
    });

    document.getElementById('mn1').onclick = function(){
      change('mn-1');};
    document.getElementById('mn1').onclick = function(){
      change('cat-ng');};
    document.getElementById('mn1').onclick = function(){
      change('cat-keroyokan');};

      function change(itemid){
        document.getElementById(itemid).classList.toggle('mnm');
      }


