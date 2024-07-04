/* função anonima nao tem nome e é utilizada para funções especificas. 
também é possível utilizar uma arrow function "=> {}" 

isso é o mesmo do abaixo: 
 function mensagem() {
    console.log('Essa mensagem aparece após 3 segundos!');
}

setTimeout(mensagem, 3000); 

setTimeout(function() {
    console.log ('Essa mensagem aparece após 3 segundos!')
},3000); 
ctrl  + d = seleciona "tudo" */

const shoes = [
    { name: 'Nike' , price: 200, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { name: 'Adidas' , price: 120, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { name: 'Puma', price: 100, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { name: 'Reebok', price: 80, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { name: 'Vans', price: 60, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { name: 'Converse', price: 40, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { name: 'Crocs', price: 1, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
]

const shoesList = document.getElementById('shoes-list')

shoes.forEach((shoe) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = shoe.imagem
    img.width = 100
    li.textContent = `${shoe.name} - $${shoe.price}`
    shoesList.appendChild(li);
})