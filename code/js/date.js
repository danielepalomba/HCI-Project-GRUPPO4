function mostraDataOraAttuale() {
    const data = new Date();
    const giorno = String(data.getDate()).padStart(2, '0');
    const mese = String(data.getMonth() + 1).padStart(2, '0');
    const anno = data.getFullYear();
    
    // Ottieni l'ora attuale
    const ore = String(data.getHours()).padStart(2, '0');
    const minuti = String(data.getMinutes()).padStart(2, '0');
    
    const dataOraFormattata = `${giorno}/${mese}/${anno} ${ore}:${minuti}`;
    
    document.getElementById('dataAttuale').textContent = `${dataOraFormattata}`;
}

document.addEventListener('DOMContentLoaded', mostraDataOraAttuale);