$(document).ready(function() {
    // Carousel
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  
    // Validation
    $('#myForm').validate({
      rules: {
        nome: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        nome: {
          required: "Por favor, informe seu nome",
          minlength: "O nome deve ter pelo menos 2 caracteres"
        },
        email: {
          required: "Por favor, informe seu email",
          email: "Por favor, informe um email válido"
        },
        telefone: {
          required: "Por favor, informe seu telefone",
          minlength: "O telefone deve ter pelo menos 10 caracteres"
        }
      }
    });
  
    // Mask
    $('#telefone').mask('(00) 00000-0000');
  });