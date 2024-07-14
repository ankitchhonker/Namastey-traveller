(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  // const filtersContainer = document.querySelector('.filters');
  //   const arrowRight = document.querySelector('.filter-arrow-right');
  //   const arrowLeft = document.querySelector(".filter-arrow-left");

  //   arrowRight.addEventListener('click', () => {
  //       // Scroll to the right by 200px (adjust as needed)
  //       filtersContainer.scrollBy({ left: -100, behavior: 'smooth' });
  //   });

  //   arrowLeft.addEventListener("click",()=>{
  //     filtersContainer.scrollBy({ left: 100, behavior: 'smooth' });
  //   });

  //   const Tax_switch = document.getElementById("flexSwitchCheckDefault");
  //   const tax_info = document.getElementsByClassName("tax-info");
  //   Tax_switch.addEventListener("click",()=>{
  //     for(info of tax_info){
  //       if(info.style.display!="inline"){
  //        info.style.display="inline"
  //     } else{
  //       info.style.display="none"
  //     }

  //     }
      
  //   });


     
      const Tax_switch = document.getElementById("flexSwitchCheckDefault");
    const tax_info = document.getElementsByClassName("tax-info");
    Tax_switch.addEventListener("click",()=>{
      for(info of tax_info){
        if(info.style.display!="inline"){
         info.style.display="inline"
      } else{
        info.style.display="none"
      }

      }
      
    });

    const filtersContainer = document.querySelector('.filters');
    const arrowRight = document.querySelector('.filter-arrow-right');
    const arrowLeft = document.querySelector(".filter-arrow-left");

    arrowRight.addEventListener('click', () => {
        // Scroll to the right by 200px (adjust as needed)
        filtersContainer.scrollBy({ left: -100, behavior: 'smooth' });
    });

    arrowLeft.addEventListener("click",()=>{
      filtersContainer.scrollBy({ left: 100, behavior: 'smooth' });
    });

    
    document.addEventListener('DOMContentLoaded', () => {
      const likeButtons = document.querySelectorAll('.toggle-like');
      
      likeButtons.forEach(button => {
        button.addEventListener('click', () => {
          button.classList.toggle('btn-danger');
          button.classList.toggle('btn-outline-danger');
        });
      });
    });
    
       
 
    
    


    

