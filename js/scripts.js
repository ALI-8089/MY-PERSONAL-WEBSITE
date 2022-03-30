/*!
* Start Bootstrap - Creative v7.0.2 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

 $('#submit').on('click', (e) => {
    e.preventDefault();
    $('#my-form').submit();
    console.log('Form submitted');
})

$("#my-form").validate({
    errorClass: "my-error-class",
    validClass: "my-valid-class",
    rules: {
        fullName: {
            required: true,
            minlength:3
        },
        userEmail: {
            required: true
        },
        mobile:{
            required:true,
           number:true,
           minlength: 10,
           maxlength: 10

        },
      
        msg: {
            required: true
        }
    },
    submitHandler: function(form) {
      console.log('Form is valid');
      $.ajax({
          url: 'https://script.google.com/macros/s/AKfycbyzlWs-yObSwDPcPHZfBJvfkA7njP4hmHAPr0M9EoXCDBL26_vsRlrauPhxybLoNPFL/exec',
          
          data:$("#my-form").serialize(),
          method:"post",
          data: $(form).serialize(),
          success: function(data) {
            document.getElementById('success').innerHTML="SUMBITED SUCCESSFULL"
            setTimeout(function() {
                
                window.location = 'index.html';
            }, 1500);
            //window.location.href="https://google.com"
              
          },
          error: function(data) {
            
          }
      });
    }
})