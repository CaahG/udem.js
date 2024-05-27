//declaração do array

//Arrays são declarados com colchetes [], ai deve usar o sinal de atribuição = ao inicializar um array com elementos.

// Array de objetos, cada um representando um livro
const livros = [
    { titulo: "Harry Potter e a Pedra Filosofal", ano: 1997, lido: true },
    { titulo: "Harry Potter e a Câmara Secreta", ano: 1998, lido: false },
    { titulo: "Harry Potter e o Prisioneiro de Azkaban", ano: 1999, lido: true },
    { titulo: "Harry Potter e o Cálice de Fogo", ano: 2000, lido: false },
    { titulo: "Harry Potter e a Ordem da Fênix", ano: 2003, lido: true },
    { titulo: "Harry Potter e o Enigma do Príncipe", ano: 2005, lido: false },
    { titulo: "Harry Potter e as Relíquias da Morte", ano: 2007, lido: true }
];

// Função listar todos os livros
function listarLivros() {
    livros.forEach(livro => {
        console.log(`${livro.titulo} (${livro.ano}) - Lido: ${livro.lido ? 'Sim' : 'Não'}`);
    });
}

// Função para filtrar livros não lidos
function listarLivrosNaoLidos() {
    const naoLidos = livros.filter(livro => !livro.lido);
    naoLidos.forEach(livro => {
        console.log(`${livro.titulo} - Ainda não lido`);
    });
}

// Função para encontrar livros lançados após um determinado ano
function listarLivrosAposAno(ano) {
    const filtrados = livros.filter(livro => livro.ano > ano);
    filtrados.forEach(livro => {
        console.log(`${livro.titulo} - Lançado após ${ano}`);
    });
}

// Executando as funções
console.log("Todos os Livros:");
listarLivros();

console.log("\nLivros Não Lidos:");
listarLivrosNaoLidos();

console.log("\nLivros Lançados Após 2000:");
listarLivrosAposAno(2000);



    