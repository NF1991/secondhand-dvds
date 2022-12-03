// load more button

let loadMoreBtn = document.querySelector('#loadMore');
let currentItem = 8;

loadMoreBtn.onclick = () =>{
    let cards =  [...document.querySelectorAll('.card-column')];
    for (var i = currentItem; i < currentItem +8; i++){
        cards[i].style.display = 'inline-block';
    }

    currentItem += 8;

    if(currentItem >= cards.length){
        loadMoreBtn.style.display = 'none';
    }
}

// slider functionality

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }



// cart functionality

// let cart = document.querySelectorAll('.add-cart');

// let products = [
//     {
//         name: 'Ash vs Evil Dead - (Season One)',
//         tag: 'ashvevildead',
//         price: 6.69,
//         inCart: 0
//     },

//     {
//         name: 'Animaniacs - (Vol 3)',
//         tag: 'animaniacs',
//         price: 9.99,
//         inCart: 0
//     },

//     {
//         name: 'Doom Patrol - (Season One)',
//         tag: 'doompatrol',
//         price: 19.99,
//         inCart: 0
//     },

//     {
//         name: 'My Fair Lady',
//         tag: 'myfairlady',
//         price: 2.99,
//         inCart: 0
//     },

    

// ]

// for (let i=0; i < cart.length; i++) {
//   cart[i].addEventListener('click', () => {
//     cartNumbers(products[i]);
//   })
// }

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers){
//         document.querySelector ('.fa-layers-counter').textContent = productNumbers;
//     }
// }
// function cartNumbers(product) {
//     let productNumbers = localStorage.getItem('cartNumbers')

//     productNumbers = parseInt(productNumbers)

//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector ('.fa-layers-counter').textContent = productNumbers + 1;
//     } else  {
//         localStorage.setItem('cartNumbers', 1);
//     document.querySelector ('.fa-layers-counter').textContent =1;
// }

//     setItems(product);
// }
//   function setItem(product) {
//     let cartItems = localStorage.getItem('productsInCart')
//     cartItems = JSON.parse(cartItems);
//     if (cartItems != null) {
//         cartItems[product.tag].inCart += 1;
//     }
//     product.inCart = 1;
//     cartItems = {
//         [product.tag]: product
//     }
    
//     localStorage.setItem("productsInCart", JSON.stringify (cartItems));
//   }

// onLoadCartNumbers();