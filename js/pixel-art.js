var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

nombreColores.forEach(paletaDeColores);
agregarPixel();
//setear evento click en cada div
var div = document.getElementsByClassName("color-paleta");
var cantidadcolores = div.length;
for (i = 0; i < cantidadcolores; i++) {
  div[i].addEventListener("click", setColor);
}


colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual

  })
);


//funcion para crear la paleta de colores
function paletaDeColores(color) {
  var divColor = document.createElement('div');
  divColor.className = "color-paleta";
  var estilo = divColor.style;
  estilo.background = color;
  paleta.appendChild(divColor);
  return divColor;
};

function obtenerNumeroDeColumnasGrilla(){
   //obtengo las medidas definidas por css para la grilla
   var estiloGrilla = window.getComputedStyle(grillaPixeles);
   var columnas = estiloGrilla.width;
   //obtengo el valor numerico de las medidas en pixels para poder agregar los div
   columnas = columnas.substr(0, columnas.search("px"));
}

function obtenerNumeroDeFilasGrilla(){
  //obtengo las medidas definidas por css para la grilla
  var estiloGrilla = window.getComputedStyle(grillaPixeles);
  var filas = estiloGrilla.height;
  //obtengo el valor numerico de las medidas en pixels para poder agregar los div
  filas = filas.substr(0, filas.search("px"));
}

//funcion para crear la grilla de pixels
function agregarPixel(filas,columnas) {
for (i = 0; i < filas; i++) {
    for (j = 0; j < columnas; j++) {
      grillaPixeles.appendChild(document.createElement('div'));
    }
  }
};

//setear color elegido
function setColor(e) {
  console.log("click!");
  var estiloDiv = window.getComputedStyle(e.target);
  var colorSeleccionado = estiloDiv.backgroundColor;
  console.log("colorSeleccionado: " + colorSeleccionado);
  var indicador = document.getElementById("indicador-de-color");
  indicador.style.backgroundColor = colorSeleccionado;
}

