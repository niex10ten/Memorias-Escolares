function showDetails(artifactId) {
    let details = '';
    
    switch (artifactId) {
        case 1:
            details = "O Amuleto do Tempo Perdido permite a manipulação do tempo, mas exige grande energia vital.";
            break;
        case 2:
            details = "A Lâmina de Luz Etérea corta as sombras mais profundas, mas enfraquece se usada por tempo prolongado.";
            break;
        case 3:
            details = "O Cálice da Eternidade concede juventude eterna, mas cada gole rouba uma lembrança importante.";
            break;
        default:
            details = "Artefato misterioso sem descrição disponível.";
    }
    
    alert(details);
}

function switchSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.remove('active-section');
        section.classList.add('hidden-section');
    });
    
    document.getElementById(sectionId).classList.remove('hidden-section');
    document.getElementById(sectionId).classList.add('active-section');
}
