var closeNotice = function () {
  $(".notice").hide();
  setCookie("d21_notice", 3 * 60 * 60 * 1000);
};

$(document).ready(function () {
  $("#notice-text").html(
    '<a rel="nofollow" target="_blank" href="https://github.com/layarkaca21/lk21-apk/releases/tag/Latest"><strong>Install Android App LK21</strong></a>'
  );
  if (isMobile()) {
    if (!getCookie("d21_notice")) {
      $(".notice").show();
    }
  }
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("smart") == -1) {
    $("#btop-left").html(
      '<a href="https://klik4.me/dunia21headerluxury777" target="_blank" rel="nofollow"><img src="https://s1.lk21static.xyz/assets/ux777-header.gif" class="img-responsive"></a>'
    );
    $("#btop-right").html(
      '<a href="https://klik4.me/dunia21headerluxury111" target="_blank" rel="nofollow"><img src="https://s1.lk21static.xyz/assets/lux111.gif" class="img-responsive"></a>'
    );
    $("#bmid-left").html(
      '<a href="https://klik4.me/dunia21terpopulerluxury777" target="_blank" rel="nofollow"><img src="https://s1.lk21static.xyz/assets/top-left-jun.gif" class="img-responsive"></a>'
    );
    $("#bmid-right").html(
      '<a href="https://klik4.me/dunia21terpopulerluxury138" target="_blank" rel="nofollow"><img src="https://s1.lk21static.xyz/assets/top-right.gif" class="img-responsive"></a>'
    );
    $("#bplayer-single").html(
      '<a href="https://klik4.me/dunia21uploadluxury777" target="_blank" rel="nofollow"><img src="https://s1.lk21static.xyz/assets/player-single.gif" class="img-responsive"></a>'
    );
    $("#bsquare").html(
      (function(d,z,s){s.src = 'https://' + d + '/400/' + z;try{(document.body || document.documentElement).appendChild(s)}catch(e){ }})('autchoog.net',7297834,document.createElement('script'))
    );   
    $("#player-below-b").html(
      '<a href="https://klik4.me/dunia21playerqq338" target="_blank" rel="nofollow"><img src="https://s1.lk21static.xyz/assets/below-player-jun.gif" class="img-responsive"></a>'
    );
    $(
      '<div class="alert alert-success alert-dismissible" style="margin-bottom:10px"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Gabung bersama group telegram Lk21 di <a href="https://t.me/lk21officialchat" target="_blank" rel="nofollow">https://t.me/lk21officialchat</a> dan dapatkan informasi terkini. Untuk request movie ke <a href="https://web.facebook.com/groups/dunia21official/" target="_blank" rel="nofollow">Facebok Group</a>. Download dan Install <a href="https://1.1.1.1/" target="_blank" rel="nofollow">Cloudflare Warp (VPN Gratis)</a></div>'
    ).insertBefore(".featured");
  }
});