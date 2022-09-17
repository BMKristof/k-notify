window.addEventListener('message', function (event) {
    let data = event.data
    switch (data.action) {
        case 'notify':
            ShowNotif(event.data);
            break;
    }
});

function ShowNotif(data) {
    var text = data.text;
    var type = data.type;
    var title = data.title;

    var color = "white";
    var textcolor = "white";
    var titlecolor = "white";

    if(type == "success"){
        color = "green";
        title = title;
        textcolor = "green"
        titlecolor = "green"
    }else if(type == "info"){
        color = "white";
        title = title
        textcolor = "white"
        titlecolor = "white"
    }else if(type == "error"){
        color = "red";
        title = title
        textcolor = "red"
        titlecolor = "red"
    }

    var randomNumber = "random" + (Math.random() + 1).toString(36).substring(7);

    var html = `
        <div class="notify notify-${color}" id="${randomNumber}" style="display:none;">
            <img src="img/type-${color}.png" alt="${color}" class="type">
            <h3 class="title-p${titlecolor}">${data.title}</h3>
            <p class="p${textcolor}">${data.text}</p>
        </div>
    `;



    $(".notification").append(html);
    
    $("#" + randomNumber).fadeIn();

    var audio = new Audio('sound/sound2.mp3');
    audio.volume = 0.3;  
    audio.play();

    if(data.length == undefined){
        data.length = 4500;
    }


anime({
    targets: "#" + randomNumber,
    translateY: 20,
    direction: 'alterante',
})


setTimeout(function () {
         
    anime({
        targets: "#" + randomNumber,
        translateY: -500,
        duration: 5000

          
    })
    setTimeout(function () {
        $("#" + randomNumber).remove();
    }, 900)
}, data.length);
}
