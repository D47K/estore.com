$(document).ready(function() {
  /**
   * Seteamos el margin del carrito para posicionarlo mas a la derecha
   * var newW = $(this).width() - 105;
  $("#carrito").css("margin-left", newW + "px");

   */

  /**
   * Utilizizamos la funcion Resize de JQuery para detectar algun cambio en la resolucion y configuramos
   * para hacer que el carrito se adapte
   *  $(window).resize(function(e) {
    console.log($(this).width());
    var newW = $(this).width() - 120;
    $("#carrito").removeClass("d-none");
    $("#carrito").css("margin-left", newW + "px");
  });

   */

  /**
   * Funcion para sujetar el nav cuando llega al final del jumbotron
   *  
     var altura = $("#detallesProd").offset().top;
  var bottom =
    altura + $("#detallesProd").height() + $("#detallesProd").height() / 2;
  console.log(bottom);

  var derecha =
    $(window).width() -
    ($("#detallesProd").offset().left + $("#detallesProd").outerWidth());
  var actual = $("#detallesProd").width() + 30;
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > altura && $(window).width() > 768) {
      $("#detallesProd").addClass("hold-det-prod");
      $("#detallesProd").css("right", derecha + "px");
      $("#detallesProd").css("width", actual + "px");
      if ($(window).scrollTop() > bottom) {
        $("#detallesProd").addClass("d-none");
      } else {
        $("#detallesProd").removeClass("d-none");
      }
    } else {
      $("#detallesProd").removeClass("hold-det-prod");
      $("#detallesProd").css("right", "0px");
    }
  });
   */

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      960: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  /* 
  Funcion Owl para cambiar de item con la ruedita del mouse :v
  owl.on("mousewheel", ".owl-stage", function(e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });
  */
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  // Go to the next item
  $("#Der").click(function() {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $("#Izq").click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });
  $("#carp1").hover(
    function() {
      $(".direction-prod").removeClass("d-none");
    },
    function() {
      $(".direction-prod").addClass("d-none");
    }
  );
  $(".my-card").hover(
    function() {
      $(this)
        .find(".desc-prod")
        .removeClass("d-none");
    },
    function() {
      $(this)
        .find(".desc-prod")
        .addClass("d-none");
    }
  );
});
