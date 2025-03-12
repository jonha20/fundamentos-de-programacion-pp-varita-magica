/*1.Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.*/

const enlaces = document.querySelectorAll("a");
for (let i = 0; i < enlaces.length; i++) {
  console.log(enlaces[i].innerHTML);
  enlaces[i].href = "";
}

/*2.Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:*/

/*2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.*/
document
  .getElementsByClassName("kg-image")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("kg-image")[0]
      .setAttribute("src", ["assets/magic-1.gif"]);
  });

/*2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.*/
/*document.querySelector("body main article section p").addEventListener("click", function(){
    document.querySelector("body main article section p").style.color = "white";
    document.querySelector("body main article section p").style.backgroundColor = "green";*/

document.querySelectorAll("p").forEach(function (parrafo) {
  parrafo.addEventListener("click", function () {
    parrafo.style.color = "white";
    parrafo.style.backgroundColor = "green";
  });
});
/*2.3 Bloques de article o section: Cambia el color de fondo.*/
document.querySelectorAll("article").forEach(function (article) {
  article.addEventListener("click", function () {
    article.style.background = "red";
  });
});
/*3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.*/

/*3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.*/
document
  .getElementsByTagName("img")[2]
  .addEventListener("mouseover", function () {
    document
      .getElementsByTagName("img")[2]
      .setAttribute("src", "assets/abracadabra.gif");
  });
/*3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.*/

document.querySelectorAll("p").forEach(function (parrafo) {
  parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "white";
    parrafo.style.backgroundColor = "black";
  });
});
document.querySelectorAll("p").forEach(function (parrafo) {
  parrafo.addEventListener("mouseout", function () {
    parrafo.style.color = "black";
    parrafo.style.backgroundColor = "white";
  });
});

/*3.3 Bloques de article o section: Color de fondo distinto al de párrafo.*/
const pallete = [
  "#669bbc",
  "#003049",
  "#fdf0d5",
  "#c1121f",
  "#780000",
];
const getRandomFondo = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
    document.getElementsByTagName("section")[0].style.color =
      getRandomFondo(pallete);
    document.getElementsByTagName("section")[0].style.backgroundColor =
      getRandomFondo(pallete);
  

/*document.getElementsByTagName("section")[0].addEventListener("mouseover", function () {
    document.getElementsByTagName("section")[0].style.color = "blue";
    document.getElementsByTagName("section")[0].style.backgroundColor =
      "yellow";
  });
/*4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.*/

const colors = ["red", "blue", "green"];
/*let num = Math.floor(Math.random() * colors.length);
console.log(colors[num]);*/
const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
console.log(getRandom(colors));

/*5.Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.*/

/*6.Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.*/
