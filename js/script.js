document.addEventListener('DOMContentLoaded', function() {
    // Adicionado: Inicializa o Flickity em cada elemento com a classe .gallery
    var galleries = document.querySelectorAll('.gallery');
    galleries.forEach(function(gallery) {
        new Flickity(gallery, {
            cellAlign: 'center',
            contain: true,
            pageDots: false,
            prevNextButtons: true
        });
    });

    // Lógica do Modal
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');

    // Adicionado: Adiciona evento de clique a todas as células do carrossel
    // ...existing code...

// Abrir modal ao clicar em uma imagem da galeria
document.querySelectorAll('.gallery-cell img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');
        modalImg.src = this.src;
        modal.style.display = 'flex';
    });
});

// Fechar modal ao clicar na imagem expandida ou fora dela
document.getElementById('modal').addEventListener('click', function () {
    this.style.display = 'none';
    document.getElementById('modalImg').src = '';
});

    function atualizarDiasEstagio() {
        const inicio = new Date(2025, 2, 6); // Março é mês 2 (zero-based)
        const hoje = new Date();
        inicio.setHours(0,0,0,0);
        hoje.setHours(0,0,0,0);
        const diffMs = hoje - inicio;
        const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        document.getElementById('dias-numero').textContent = diffDias;
    }
    atualizarDiasEstagio();
    setInterval(atualizarDiasEstagio, 1000 * 60 * 60);

})
// ...existing code...