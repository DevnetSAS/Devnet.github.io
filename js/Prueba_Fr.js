var encab= document.getElementById("encabezado");
var foot = document.getElementById("footer");

window.onload=function(){


    this.encab.innerHTML = 
    '<nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">'+

      '<a class="navbar-brand" href="index.html">'+
        '<img src="imagenes/Logo_Blanco.gif" class="img-fluid" alt=""></img>'+
        '<h6 id="ScriptFecha"></h6>'+
      '</a>'+

      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
      '</button>'+

      '<div class="collapse navbar-collapse" id="navbar1">'+

          '<ul class="navbar-nav mr-auto navbar-right">'+

            '<li class="nav-item active">'+
              '<a class="nav-link" href="#S2">Nuestro Equipo '+
              '<i class="fa fa-users" aria-hidden="true"></i>'+
              '</a>'+
            '</li>'+

              '<li class="nav-item active">'+
                '<a class="nav-link" href="#S3">Proyectos '+
                '<i class="fas fa-code-branch"></i>'+
                '</a>'+
              '</li>'+

              '<li class="nav-item active">'+
                '<a class="nav-link" href="#S4">Contáctanos '+
                '<i class="far fa-handshake"></i>'+  
                '</a>'+
              '</li>'+

              
          '</ul>'+          
      '</div>'+

  '</nav>';

  this.foot.innerHTML=
   '<footer class="page-footer bg-dark font-small blue">'+

    '<div class="footer-copyright text-center py-3 text-light"><b>© Dev_Net 2020</b><br><b>AFAP</b>'+
    '</div>'+

    '</footer>';



}
