var parrafoHora = document.getElementById("ScriptFecha");
var fechaIngreso = document.getElementById("FechaIngresoRes");
var habRes = document.getElementById("HabitacionesRes");
var checkboxVal = document.getElementById("Check1");
var opcionS = document.getElementById("SelecAcomodRes");

meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
mesesNum = new Array("01","02","03","04","05","06","07","08","09","10","11","12");
diasemana=new Array("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo");
data = new Date();
var any = data.getYear();
var anio = data.getFullYear();
var mes = data.getMonth();
var mes_a = mes+1;
var dia =  data.getDay();
var dia_a=data.getDate();
if(dia_a<10)
  dia='0'+dia_a; //agrega cero si el menor de 10
if(mes<10)
  mes_a='0'+mes_a //agrega cero si el menor de 10
var diaAct=anio+"-"+mes_a+"-"+dia_a;


checkboxVal.onclick = function(){

  if (checkboxVal.checked == true){

    habRes.value = 0;
    habRes.disabled= true;
    opcionS.value = 3;
    opcionS.children[0].hidden = true;
    opcionS.children[1].hidden = true;
    opcionS.children[2].hidden = false;



  }else if(checkboxVal.checked == false){

    habRes.value = 1;
    habRes.disabled= false;
    opcionS.value = 1;
    opcionS.children[0].hidden = !true;
    opcionS.children[1].hidden = !true;
    opcionS.children[2].hidden = !false

  }

}


window.onload=function (){

    if (dia == 0){
        dia = 7;
    }
    if (any < 1900){
      any = 1900 + any;
    }
      parrafoHora.innerHTML="<strong>"+diasemana[dia-1]+ "</strong>," + ' '+dia_a+ " de " + meses[mes] + " de " + any;
      fechaIngreso.min = diaAct;
      checkboxVal.defaultChecked = false;
      opcionS.children[2].hidden =true;

}



fechaIngreso.onchange = function (){
  var input = document.getElementById("FechaEgresoRes");
  input.min = this.value;
}


//jQuerry
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});
//jQuery
