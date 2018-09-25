(function () {
    var selectedPictureUrl = null;

    document.getElementById('download-button').addEventListener('click', function () {
        var link = document.createElement('a');
        link.setAttribute('href', selectedPictureUrl);
        link.setAttribute('download', 'my_filename.jpg');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    var pictures = document.getElementsByTagName('img');

    for (var i = 0; i <= pictures.length - 1; i++) {

        pictures[i].addEventListener('click', function () {
            for (var j = 0; j <= pictures.length - 1; j++) {

                if (pictures[j].classList.contains('selected')) {
                    pictures[j].classList.remove('selected');
                    pictures[j].parentNode.childNodes[3].style.display = 'none';
                }
            }
            this.classList.add('selected');
            this.parentNode.childNodes[3].style.display = 'block';
            selectedPictureUrl = this.src;
        });
    }
})()