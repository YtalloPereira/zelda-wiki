const numberOfCards = 32;

async function fetchGameNames() {
    try {
        const response = await fetch('http://localhost:3000/games/names');
        
        if (!response.ok) {
            throw new Error('Não foi possível obter os nomes dos jogos');
        }
        const games = await response.json(); // Converte a resposta para JSON

        // Mapear os nomes dos jogos para incluir o caminho das imagens
        const gamesWithImages = games.map((game, index) => ({
            name: game,
            image: `./assets/${index + 1}.png` // Exemplo: assets/1.jpg, assets/2.jpg, etc.
        }));

        return gamesWithImages; // Retorna os nomes dos jogos com imagens
    } catch (error) {
        console.error('Erro ao obter os nomes dos jogos:', error);
        return []; // Retorna um array vazio em caso de erro
    }
}

async function createCards() {
    const cardContainer = document.getElementById("cardContainer");

    try {
        // Obter os nomes dos jogos e imagens utilizando fetchGameNames
        const gamesWithImages = await fetchGameNames();

        // Criar cards com base nos nomes dos jogos e imagens
        gamesWithImages.slice(0, numberOfCards).forEach((game, index) => {
            const { name, image } = game || { name: 'Jogo Desconhecido', image: 'assets/default.jpg' };

            const card = document.createElement("div");
            card.className = "card";
            card.style.backgroundImage = `url(${image})`; // Define a imagem como plano de fundo
            card.setAttribute("data-card", index + 1); // Adiciona 1 para começar de 1

            // Adicionar título do jogo ao card
            const cardTitle = document.createElement("h3");
            cardTitle.textContent = name;
            card.appendChild(cardTitle);
            
            cardContainer.appendChild(card);
        });

        // Event listeners para abrir o modal ao clicar em um card
        cardContainer.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                const cardNumber = this.getAttribute('data-card');
                openModal(cardNumber);
            });
        });

    } catch (error) {
        console.error('Erro ao criar os cards:', error);
    }
}


// Função para abrir o modal (mantida como antes)
async function openModal(cardNumber) {

    const modal = await createModal(cardNumber); 
    console.log(modal);

    document.getElementById('modal-title').textContent = modal.name;
    document.getElementById('modal-content').textContent = modal.description;
    document.getElementById('modal-developer').textContent = modal.developer;
    document.getElementById('modal-publisher').textContent =  modal.publisher;
    document.getElementById('modal-release-date').textContent = modal.released_date;

    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
}
async function createModal(cardNumber){
    try {
        const response = await fetch('http://localhost:3000/games');
        
        if (!response.ok) {
            throw new Error('Não foi possível obter os nomes dos jogos');
        }
        const games = await response.json(); // Converte a resposta para JSON
        
        return games[cardNumber-1];
    } catch (error) {
        console.error('Erro ao obter os nomes dos jogos:', error);
        return []; // Retorna um array vazio em caso de erro
    }
}

// Função para fechar o modal (mantida como antes)
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners para fechar o modal (mantidos como antes)
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Chamada para criar os cards ao carregar a página
createCards();
