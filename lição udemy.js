const { Console } = require("console");
const { getDefaultHighWaterMark } = require("stream");

console.log ('Estou ficando com fome');

let firstname = 'sorvete'; 

let lastname = 'Morango';

console.log(firstname); 
console.log(lastname);

let FirstName = 'sorvete 2';
console.log(FirstName)

//criando variáveis


//Constantes

const idade = 23;
//idade = 24;
console.log(idade);

//ASI sou a favor da ponto e virgula >w< 


// objetos

let itemName = 'Caneta';
let itemOne = 3;
let itemAvailable = true;
let itemColor = 'Green';

let Caneta = {
    itemName: 'Caneta', 
    itemOne: 3,
    itemAvailable: true,
    itemColor: 'Green'
};

console.log(Caneta);



//Arrays

let Escritores = ['Sylvia', 'Edgar Allan Poe', 'Anne Frank']; //declaração do array
//Arrays são declarados com colchetes [], ai deve usar o sinal de atribuição = ao inicializar um array com elementos.
let escritor = Escritores[2];

console.log(Escritores); // Mostra todo o array


//function - funções 

function saleStatus (status) {
    console.log('Transaction'+ status);  
}
saleStatus('Aprovado',30) 


function porcentagem10(price) {
    return price - (price * 10 / 100);
 }
 
 console.log(porcentagem10(40));


 //operações ariti 

 let num1 = 3 ;
 let num2 = 2;

 console.log(num1 / num2)

 //Switch e Case

 let airport = 'MCO';

switch (airport) {
    case 'MCO':
        console.log('Orlando');
        break;
    case 'JFK':
        console.log('John F. Kennedy doidão');
        break;
    case 'SEA':
        console.log('Seattle The Last Of Us');
        break;
    default:
        console.log('Aeroporto desconhecido');
}


//While Loops 
//while verifica pra deppois executar

while (i <= 10) {
    console.log('numero' , 1);
    1++
}
 //Do while loops 

//executar para depois verificar
i = 1
 do {
    console.log('numero', i);
    i++
 } while(i <=10)

 //for in loop
    const myCar = {
        model: 'Car Beetle',
        year: 1991
    };
    
    for (let i in myCar) {
        console.log(i);
    }


    ////Switch e Case

 let ghibli = 'Totoro';

 switch (ghibli) {
    case 'Kiki' :
        console.log('jiji');
        break;

    case 'chihiro' :
        console.log('sem rosto');
        break

    case 'mei' :
        console.log('totoro');
        break
 }


 //Objeto
 //objeto é uma variável

 let bookTitle = 'The bell jar'
 let bookAuthor ='Sylvia Plath'
 let bookPages = 306

 const book = {
    bookTitle: 'The bell jar', 
    bookAuthor: 'Sylvia Plath',
    bookPages: 306,
    booksChapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    
    printBook: function() {
        console.log('Printing');
    }
};



//function printBook: () {
    //função dentro de um objeto 
//console.log('printing...')

console.log(book)


//Factory
// é uma função que cria e retorna um objeto

//o código define uma função no caso... createBook

function createBook(title, author, pages) {
    const book = {
        bookTitle: title, 
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...');
        }
    }
    return book
}
const book1 = createBook('The bell jar', 'Sylvia Plath', 306);
const book2 = createBook('corvo',' edgar allan poe', 405);

book1.color = 'Green' //Add Propriedade, ela só pode ser add depois que objeto foi adicionado pq é estático 

console.log(book1)
console.log(book2)


//Garbage Collector
//é identificar e liberar memória que não está mais sendo utilizada pelo programa, ou seja, limpar o "lixo" da memória.


//Objetos Built In



//O string

let menssage = 'Hello, my name is Carol'

console.log(menssage.startsWith('Hello'))



//Template Literals

let = 'joel'

const email = 'Hi joel, The meeting is confirmed!'
const email2 = ' Hi Ellie, the meeting is confirmed'

console.log(email)
console.log(email2)



// Arry 
 //arry é um objeto no js, pode ser números, boorleans, 

//criando uma arry 

const friends = ['Lucas', 'Fátima', 'Guts']; // Lista de amigos
const num = ['1', '2', '3']; // Lista de números como strings

console.log(friends); // Exibe a lista de amigos
console.log(num); // Exibe a lista de números

const movies = [
    {id: 1, movieName: 'The Hobbit'},
    {id: 2, movieName: 'Star Wars'},
    {id: 3, movieName: 'Edward Mãos de Tesoura'},
];

console.log(movies.find(movie => movie.id === 1)); // Retorna o filme com id 1

// Esta aqui usa 'find' para buscar um filme pelo nome 'Star Wars'
console.log(movies.find(function(movie) {
    return movie.movieName === 'Star Wars';
}));


const number = [5, 6, 7, 8];

// Usando splice para esvaziar a array
num.splice(0, num.length);

console.log(number); // Saída: [] 



//concatenando uma array- duas array em uma só 

let numbers =[5, 6, 7, 8]
let letters = ['a', 'b', 'c']

//criando uma variável 
all = numbers.concat(letters) //concatenei numeros
half = all.slice(3, 5)

console.log(all)
console.log(half)


//utilizando join array 

// Declarando a array family
let family = ['Fatima', 'Geraldo', 'Lucas', 'Murilo', 'Guts'];

// Exibindo a array family
console.log(family);

// Utilizando join para transformar a array em uma string, separando os elementos por vírgulas
let familyJoin = family.join(', ');
console.log(familyJoin); // Saída: 'Fatima, Geraldo, Lucas, Murilo, Guts'

// Revertendo a array
// Declarando a array family novamente
family = ['Fatima', 'Geraldo', 'Lucas', 'Murilo', 'Guts'];

// Revertendo a ordem dos elementos na array
family.reverse();

// Exibindo a array revertida
console.log(family); // Saída: ['Guts', 'Murilo', 'Lucas', 'Geraldo', 'Fatima']

//Testando elementos de uma array

const tempLondon = [18, 13, 8, 2]
// every checando todos os valores dentro da array
const tempPositive = tempLondon.every(function (value){
    return value >= 0

})
console.log(tempPositive) 


// declarando as variaveis 
function outcome() {
    let num1 = document.getElementById('num-one').value
    let num2 = document.getElementById('num-two').value
    let total = 0

    if (document.getElementById('box1').checked) {
        total = num1 + num2;
    } else if (document.getElementById('box2').checked) {
        total = num1 - num2;
    }
    // exibir o resultado em um elemento HTML
    document.getElementById('result').textContent = 'Resultado: ' + total;
} 

// adicionando uma função ao botão html 

const colors = ['red', 'blue', 'yellow', 'pink']
const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    document.body.style.background = colors[3]
})