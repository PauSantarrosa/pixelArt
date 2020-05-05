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
var totalFilas = 55;
var totalColumnas = 32;
var totalPixels = totalFilas * totalColumnas;
//lleno la paleta de colores
nombreColores.forEach(paletaDeColores);

//agrego los pixeles a la grilla
agregarPixel();

//setear evento click en cada div de la paleta de colores
//DOM JS: var div = document.getElementsByClassName("color-paleta");
//div[i].addEventListener("click", setColor);
//***** con jquery ******************//
var div = $(".color-paleta");
var cantidadcolores = div.length;
for (i = 0; i < cantidadcolores; i++) {
  //con jquery
  $(div[i]).click(setColor);
}

//pintar con clicks
pintar();

var mousedown = false;
//****************+CON JQUERY **********************//
$(grillaPixeles).mousedown(function () {
  mousedown = true;
});

$(grillaPixeles).mouseup(function () {
  mousedown = false;
});

$(grillaPixeles).mousemove(function (event) {
  if (mousedown) {
    console.log("pintar");
    pintarPixel(event);
    /*   var $colorPaleta = $("#indicador-de-color").css("background-color");
      $(event.target).css("background-color", $colorPaleta); */
  } else {
    console.log("no pintar");
    mousedown = false;
  }
});

/* DOM: 
grillaPixeles.addEventListener("mousedown", function () {
  mousedown = true;
});
grillaPixeles.addEventListener("mouseup", function () {
  mousedown = false;
}); 
grillaPixeles.addEventListener("mousemove", function (e) {

  var divGrilla = e.target;
  if (mousedown) {
    console.log("pintar");
    var indicadorColor = document.getElementById("indicador-de-color");
    var indicadorStyle = window.getComputedStyle(indicadorColor);
    var colorPaleta = indicadorStyle.backgroundColor;
    divGrilla.style.backgroundColor = colorPaleta;
  } else {
    console.log("no pintar");
    mousedown = false;
  }
});*/

/* grillaPixeles.addEventListener("mouseover",function(e){
  var divGrilla = e.target;
  if(mousedown){
    console.log("pintar");
    var divGrilla = e.target;
    var indicadorColor = document.getElementById("indicador-de-color");
    var indicadorStyle = window.getComputedStyle(indicadorColor);
    var colorPaleta = indicadorStyle.backgroundColor;
    divGrilla.style.backgroundColor = colorPaleta;
    }else{
      console.log("no hago nada");
      mousedown = false;
    
  }
}); */



colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    //Completar para que cambie el indicador-de-color al colorActual
    //con jquery: 
    $("#indicador-de-color").css("background-color", colorActual);
    mousedown = false;
    /* DOM: var indicadorColor = document.getElementById("indicador-de-color");
       styleIndicador = indicadorColor.style;
       styleIndicador.backgroundColor = colorActual; */
  })
);

//funcion para crear la paleta de colores
function paletaDeColores(color) {
  //con jquery
  var $divColor = $("<div></div>").attr({ "class": "color-paleta" });
  $($divColor).css("background-color", color);
  $(paleta).append($divColor);
  return $divColor;
  /* var divColor = document.createElement('div');
 divColor.className = "color-paleta";
 var estilo = divColor.style;
 estilo.background = color;
 paleta.appendChild(divColor);
 return divColor; */
};

/*  function obtenerNumeroDeColumnasGrilla() {
  //obtengo las medidas definidas por css para la grilla
  var columnas = $(grillaPixeles).css("width");
 
 //DOM:  var estiloGrilla = window.getComputedStyle(grillaPixeles);
 // var columnas = estiloGrilla.width; 
//obtengo el valor numerico de las medidas en pixels para poder agregar los div
return Number(columnas.substr(0, columnas.search("px")));
};

 function obtenerNumeroDeFilasGrilla() {
  //obtengo las medidas definidas por css para la grilla
  // DOM: var estiloGrilla = window.getComputedStyle(grillaPixeles); 
  var filas = $(grillaPixeles).css("height"); --> //ojo con esto aqui le erre porque cree 300.000 div!! 
  estuvo mal basarme en esta propiedad para armar la grilla!
  //obtengo el valor numerico de las medidas en pixels para poder agregar los div
  return Number(filas.substr(0, filas.search("px")));
};  */

//funcion para crear la grilla de pixels
function agregarPixel() {
  for (i = 0; i < totalPixels; i++) {
    $(grillaPixeles).append($("<div></div>"));
    //grillaPixeles.appendChild(document.createElement('div'));
  }
};

//funcion para pintar pixeles en la grilla
function pintarPixel(event) {
  var $colorPaleta = $("#indicador-de-color").css("background-color");
  $(event.target).css("background-color", $colorPaleta);
  /*DOM var divGrilla = e.target;
  var indicadorColor = document.getElementById("indicador-de-color");
  var indicadorStyle = window.getComputedStyle(indicadorColor);
  var colorPaleta = indicadorStyle.backgroundColor;
  divGrilla.style.backgroundColor = colorPaleta; */
};

function pintar() {
  for (i = 0; i < totalPixels; i++) {
    $(grillaPixeles).click(pintarPixel);
  }
};

//setear color elegido
function setColor(event) {
  // ************ con jquery *********************************// 
  //busco el color seleccionado
  var $colorSeleccionado = $(event.target).css("background-color");
  //seteo el color seleccionado en el pincel
  $("#indicador-de-color").css("background-color", $colorSeleccionado);
  /* DOM: 
  var estiloDiv = window.getComputedStyle(e.target);
  var colorSeleccionado = estiloDiv.backgroundColor;
  var indicador = document.getElementById("indicador-de-color");
  indicador.style.backgroundColor = colorSeleccionado; */
};

$("#borrar").click(function () {
  var divsGrilla = $("#grilla-pixeles div");
  console.log(divsGrilla);
  $(divsGrilla).each(function () {
    $(this).animate({ "backgroundColor": "white" }, 5000);
  });
});

// evento para cargar imagen seleccionada en la grilla
$("ul.imgs li img").each(function () {
  $(this).click(function () {
    var superheroe = $(this).attr("id");
    switch (superheroe) {
      case "batman":
        cargarSuperheroe(batman);
        break;
      case "wonder":
        cargarSuperheroe(wonder);
        break;

      case "flash":
        cargarSuperheroe(flash);
        break;
      case "invisible":
        cargarSuperheroe(invisible);
        break;
      default:
        break;
    }
  });
});

//evento para el boton Guardar 
$("#guardar").click(function(){
  console.log("click guardar");
  guardarPixelArt();
});





