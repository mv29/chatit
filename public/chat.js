
$(function () {

    let socket = io();
    let education = io('/education');
    let entertainment = io('/entertainment');
    let politics = io('/politics');
    let peace = io('/peace');
    let technology = io('/technology');
    let fitness = io('/fitness');
    let travelling = io('/travelling');
    let love = io('/love');
    let sports = io('/sports');


    let main=[];
    main['/education']=[education];
    main['/entertainment']=[entertainment];
    main['/politics']=[politics];
    main['/peace']=[peace];
    main['/technology']=[technology];
    main['/fitness']=[fitness];
    main['/travelling']=[travelling];
    main['/love']=[love];
    main['/sports']=[sports];

    var username;
    window.onload=function () {  // getting the username
        $.get(`/home/username`, function (data) {
            console.log(data);
            username =data;
        });
        console.log(username);
    };
    let lol = $(".hbs");

    lol.on('click', '#btn-send', function(){
        let mv=  document.getElementById('inp-msg').value; // message to be sent
        document.getElementById('inp-msg').value=null;// setting the value null so that new message can be inserted
        let lol= $(this).attr("value"); // getting the attribute value from button telling which topic message it is
        message(mv, lol);
        message1(mv, lol);
    });
    lol.keypress(function (e) { // for letting the enter key submit the message
        const code = e.keyCode || e.which;
        if (code === 13)
        {
            let mv=  document.getElementById('inp-msg').value;
            document.getElementById('inp-msg').value=null;
            let lol= document.getElementById('btn-send').value; // getting the attribute value from button
            message(mv, lol);
            message1(mv, lol);
        }
    });
    window.message=function(message,path){
        main[path][0].emit('chat', {
            message: message,
            author: username
        });
    };
    window.message1=function(message,path) {
        $.get(`${path}/message?x=${message}&y=${username}`, function () {
        })

    };
      education.on('chat', (data) => {
        let ul = document.getElementById("education");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

          li1.style.margin="10px";
          li1.style.marginLeft="80px";
          li1.style.padding="10px";
          li2.style.background="white";
          li3.style.background="white";
          li2.style.borderColor="black";
          li2.style.borderStyle="solid";
          li2.style.borderWidth="1px";
          li3.style.borderColor="black";
          li3.style.borderStyle="solid";
          li3.style.borderWidth="1px";
          li2.style.width="10%";
          li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
      });
    entertainment.on('chat', (data) => {
        let ul = document.getElementById("entertainment");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";
        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);

    });
    love.on('chat', (data) => {
        let ul = document.getElementById("love");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";

        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
    });
    peace.on('chat', (data) => {
        let ul = document.getElementById("peace");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";

        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
    });
    travelling.on('chat', (data) => {
        let ul = document.getElementById("travelling");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";

        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
    });
    technology.on('chat', (data) => {
        let ul = document.getElementById("technology");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";

        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
    });
    politics.on('chat', (data) => {
        let ul = document.getElementById("politics");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";
        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
    });
    sports.on('chat', (data) => {
        let ul = document.getElementById("sports");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";

        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
    });

    fitness.on('chat', (data) => {
        let ul = document.getElementById("fitness");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        let li4=  document.createElement("br");

        li1.style.margin="10px";
        li1.style.marginLeft="80px";
        li1.style.padding="10px";
        li2.style.background="white";
        li3.style.background="white";
        li2.style.borderColor="black";
        li2.style.borderStyle="solid";
        li2.style.borderWidth="1px";
        li3.style.borderColor="black";
        li3.style.borderStyle="solid";
        li3.style.borderWidth="1px";
        li2.style.width="10%";
        li3.style.width="90%";
        //li1.color=randomColor;
        li2.appendChild(document.createTextNode(data.author));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        li1.appendChild(li4);
        ul.appendChild(li1);
    })
});