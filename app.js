//varible
    var audioList = [
        new Audio("audio/kuruto.mp3"),
        new Audio("audio/kuru1.mp3"),
        new Audio("audio/kuru2.mp3"),
    ];

    var audioList2 = [
        new Audio("audio/ta_ta_ta.mp3")
    ];

    for (const audio of audioList) {
        audio.preload = "auto";
    }

    for (const audio of audioList2) {
        audio.preload = "auto";
    }

    var firstSquish = true;
    //end varible

    if (!localStorage.getItem("count")) {
        localStorage.setItem("count", 0);
    }

    let temporaryCounter = parseInt(localStorage.getItem("count"));
    const counterElement = document.getElementById("counter");
    const counterTimesElement = document.getElementById("counter-times");
    
    displayCounter(temporaryCounter);

    //counter button
    function counterClick() {
        ++temporaryCounter;
        displayCounter(temporaryCounter);
        localStorage.setItem("count", temporaryCounter);
        var random = Math.floor(Math.random() * 2) + 1;
        
        if(random == 1){ playKuru(); animateHerta();}
        if(random == 2){ playNanana(); animateKlee();}
    }
    
    function displayCounter(value) {
        counterElement.innerText = value.toLocaleString();
        counterTimesElement.innerText = value === 1 ? "en total" : "totales";
    }

    function playKuru() {
        var audio;

        if (firstSquish) {
            firstSquish = false;
            audio = audioList[0].cloneNode();
        } else {
            var random = Math.floor(Math.random() * 2) + 1;
            audio = audioList[random].cloneNode();
        }

        audio.play();

        audio.addEventListener("ended", function () {
            this.remove();
        });
    }

    function animateHerta() {
        var counter_button = document.getElementById("counter-button");
        var id = null;

        var random = Math.floor(Math.random() * 2) + 1;
        var elem = document.createElement("img");
        elem.src = `img/hertaa${random}.webp`;
        elem.style.position = "absolute";
        elem.style.right = "-510px";
        elem.style.top = counter_button.getClientRects()[0].bottom + scrollY - 430 + "px"
        elem.style.zIndex = "-1";
        document.body.appendChild(elem);

        var pos = -510;
        var limit = window.innerWidth + 510;
        clearInterval(id);
        id = setInterval(frame, 12);
        function frame() {
            if (pos >= limit) {
                clearInterval(id);
                elem.remove()
            } else {
                pos += 20;
                elem.style.right = pos + 'px';
            }
        }
    }


    function playNanana() {
        var audio;
        audio = audioList2[0].cloneNode();      
        audio.play();

        audio.addEventListener("ended", function () {
            this.remove();
        });
    }

    function animateKlee() {
        var counter_button = document.getElementById("counter-button");
        var id = null;

        var elem = document.createElement("img");
        elem.src = `img/klee.webp`;
        elem.style.position = "absolute";
        elem.style.right = "-510px";
        elem.style.top = counter_button.getClientRects()[0].bottom + scrollY - 430 + "px"
        elem.style.zIndex = "-1";
        document.body.appendChild(elem);

        var pos = -510;
        var limit = window.innerWidth + 510;
        clearInterval(id);
        id = setInterval(frame, 12);
        function frame() {
            if (pos >= limit) {
                clearInterval(id);
                elem.remove()
            } else {
                pos += 20;
                elem.style.right = pos + 'px';
            }
        }
    }
    //end counter button