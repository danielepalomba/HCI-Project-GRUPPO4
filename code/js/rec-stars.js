document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numberInput').addEventListener('input', function() {

        const number = this.value;
        const image = document.getElementById('image');
        const text = document.getElementById('rec');
        const submit = document.getElementById('input-button');
    
        if (text != null || text.value.trim() != '') {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    
        switch (number) {
            case '1':
                image.src = 'img/one_star.png';
                image.alt = 'Descrizione immagine 1';
                break;
            case '2':
                image.src = 'img/two_star.png';
                image.alt = 'Descrizione immagine 2';
                break;
            case '3':
                image.src = 'img/three_star.png';
                image.alt = 'Descrizione immagine 3';
                break;
            case '4':
                image.src = 'img/four_star.png';
                image.alt = 'Descrizione immagine 4';
                break;
            case '5':
                image.src = 'img/five_star.png';
                image.alt = 'Descrizione immagine 5';
                break;
            default:
                image.src = '';
                image.alt = 'Nessuna immagine disponibile';
        }
    });
});
