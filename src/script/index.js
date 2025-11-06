// Define a URL base da API de produtos
const baseUrl = "https://dummyjson.com/products"
// Seleciona o elemento HTML onde os produtos serão exibidos
const dadosDosProdutos = document.querySelector(".mostrar-produtos")
// Seleciona o template do card de produto oculto no HTML
const cardProduto = document.querySelector(".card-produto")

// Função assíncrona para buscar e exibir os produtos
async function buscarProdutos() {
    try {
        // Faz uma requisição à API para obter os produtos
        const response = await fetch (`${baseUrl}`)
        // Converte a resposta para JSON
        const data = await response.json();
        // Exibe os dados no console para depuração
        console.log(data)
        // Limpa o conteúdo atual da área de exibição de produtos
        dadosDosProdutos.innerHTML = "";

        // Itera sobre cada produto recebido da API
        data.products.forEach(products => {
            // Clona o template do card de produto
            const card = cardProduto.cloneNode(true);
            // Remove a classe 'card-produto' para que o card clonado seja visível e estilizado corretamente
            card.classList.remove('card-produto');
            // Torna o card visível (o template original pode estar com display: none)
            card.style.display = 'block';

            // Define a imagem do produto usando a primeira imagem do array 'images'
            card.querySelector('img').src = products.images[0]
            // Define o título do produto
            card.querySelector('h2').textContent = products.title;
            // Define o preço do produto
            card.querySelector('p').textContent = products.price;

            // Adiciona o card preenchido à área de exibição de produtos
            dadosDosProdutos.appendChild(card)
        });

    } catch (error) {
        // Em caso de erro na requisição, exibe uma mensagem de erro no console
        console.log("Error ao buscar o produto!", error)
    }

}

// Chama a função para buscar e exibir os produtos quando o script é carregado
buscarProdutos();