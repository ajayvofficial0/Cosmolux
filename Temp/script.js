particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 260,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

class Card {

  constructor(id, title, description, image) {
    this.idCard = id
    this.titre = title
    this.description = description
    this.image = image
  }

  initCard() {
    this.updateDom();
    this.activateListeners();
  }

  updateDom() {
    var cardDom = document.getElementById(this.idCard)
    if(cardDom.hasChildNodes()){
      var cardDomImage = cardDom.getElementsByClassName('card-image')[0]
      cardDomImage.src = this.image;

      var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
      cardDomTitle.innerHTML = this.titre;

      var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
      cardDomDesc.innerHTML = this.description;
    }
  }

  activateListeners() {
    var cardDom = document.getElementById(this.idCard)
    cardDom.addEventListener("mouseover", function( event ) {
      var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
      var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
      var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
      var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
      cardDomMiddle.style.height = cardMiddleHeight + 50 + "px";
    }, false);

    cardDom.addEventListener("mouseout", function( event ) {
      var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
      cardDomMiddle.style.height = 50 + "px";
    }, false);
  }
}

var card1 = new Card("card1", "3D Orrery", "Discover our interactive 3D orrery, showcasing the mesmerizing movements of planets and moons in our solar system. Explore the cosmos like never before!", "/data/3DOR.png")
card1.initCard();

var card2 = new Card("card2", "2D Orrery", "Experience the beauty of our solar system with our 2D orrery, illustrating the harmonious movements of planets and moons in an engaging visual format!", "/data/2DOR.png");
card2.initCard();

