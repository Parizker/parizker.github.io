window.onload = function() {
    document.querySelectorAll('.grid-images .grid-images_box').forEach(function(boxDiv) {
        boxDiv.addEventListener('click', function(event) {
            // var href = boxDiv.querySelector('a').href;
            
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://system-beta.b-cdn.net/api/event', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                name: 'ClickImageAlbum',
                url: window.location.href,
                domain: 'bunkr.la',
            }));
            
            // window.open(href, '_blank');
        });
    });
}
