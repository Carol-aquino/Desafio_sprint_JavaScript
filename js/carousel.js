

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel { 

    constructor(image,title,url){
        this.image = image;
        this.title = title;
        this.url = url;


    }

    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

          if (!carouselArr || carouselArr.length === 0) return;

        document.getElementById("carousel").innerHTML=
        `<img src="img/${carouselArr[Carousel._sequence].image}" width="100%">`;

        document.getElementById("carousel-title").innerHTML=
        `<a href="${carouselArr[Carousel._sequence].url}">
        ${carouselArr[Carousel._sequence].title} 
        </a>`;

        Carousel._sequence++;

        if(Carousel._sequence >= Carousel._size){
        Carousel._sequence = 0;
        
        }

        
    }
     static NextManual(){

        clearInterval(Carousel._interval);

        Carousel.Next();

        Carousel._interval = setInterval(function(){

            Carousel.Next();

        }, 5000);
    }

static Prev(){

        clearInterval(Carousel._interval);

        Carousel._sequence--;

        if(Carousel._sequence < 0){

            Carousel._sequence = Carousel._size - 1;

        }

        document.getElementById("carousel").innerHTML =
        `<img src="img/${carouselArr[Carousel._sequence].image}" width="100%">`;

        document.getElementById("carousel-title").innerHTML =
        `<a href="${carouselArr[Carousel._sequence].url}">
            ${carouselArr[Carousel._sequence].title}
        </a>`;

        Carousel._interval = setInterval(function(){

            Carousel.Next();

        }, 5000);
    }

};


