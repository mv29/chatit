
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

    /*
    if(!localStorage.getItem('education')){
        localStorage.setItem('education', JSON.stringify(education1));
    }
    if(!sessionStorage.getItem('entertainment')){
        sessionStorage.setItem('entertainment', JSON.stringify(entertainment1));
    }
    if(!sessionStorage.getItem('politics')){
        sessionStorage.setItem('politics', JSON.stringify(politics1));
    }
    if(!sessionStorage.getItem('peace')){
        sessionStorage.setItem('peace', JSON.stringify(peace1));
    }
    if(!sessionStorage.getItem('technology')){
        sessionStorage.setItem('technology', JSON.stringify(technology1));
    }
    if(!sessionStorage.getItem('fitness')){
        sessionStorage.setItem('fitness', JSON.stringify(fitness1));
    }
    if(!sessionStorage.getItem('travelling')){
        sessionStorage.setItem('travelling', JSON.stringify(travelling1));
    }
    if(!sessionStorage.getItem('love')){
        sessionStorage.setItem('love', JSON.stringify(love1));
    }
    if(!sessionStorage.getItem('sports')){
        sessionStorage.setItem('sports', JSON.stringify(sports1));
    }

*/
    var username;
    window.onload=function () {
        $.get(`/home/username`, function (data) {
            console.log(data);
            username =data;
        });
        console.log(username);
    };
    let lol = $(".hbs");

    lol.on('click', '#btn-send', function(){
        let mv=  document.getElementById('inp-msg').value;
        document.getElementById('inp-msg').value=null;
        let lol= $(this).attr("value"); // getting the attribute value from button
        message(mv, lol);
        message1(mv, lol);
    });
    lol.keypress(function (e) {
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
            message: message
        });
    };
    window.message1=function(message,path) {
        $.get(`${path}/message?x=${message}`, function () {
            return;
        })

    };
      education.on('chat', (data) => {
        let ul = document.getElementById("education");
        let li1 = document.createElement("tr");
        let li2 = document.createElement("td");
        let li3 = document.createElement("td");
        //li1.className="card col-12";
        //li2.className="card";
        //li3.className="card";
        li2.setAttribute("colspan", "4");
        li3.setAttribute("colspan", "8");
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li1.style.cssText="margin:10px;margin-left:50px";
        li2.style.cssText=" background-color:yellow;width:70px;";
        li3.style.cssText=" background-color:blue;width:770px;";
        li1.color=randomColor;
        li2.appendChild(document.createTextNode(username));
        li3.appendChild(document.createTextNode(data.message));
        li1.appendChild(li2);
        li1.appendChild(li3);
        ul.appendChild(li1);
        /*
        education1= JSON.parse(localStorage.getItem('education'));
          if(education1.length>50)
            education1.shift();
        education1.push(data.message);
        localStorage.setItem("education", JSON.stringify(education1));
        */
      });
    entertainment.on('chat', (data) => {
        let ul = document.getElementById("entertainment");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*
        entertainment1= JSON.parse(localStorage.getItem('entertainment'));
        if(entertainment1.length>50)
            entertainment1.shift();
        entertainment1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(entertainment1));
        */
    });
    love.on('chat', (data) => {
        let ul = document.getElementById("love");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*
        love1= JSON.parse(localStorage.getItem('love'));
        if(love1.length>50)
            love1.shift();
        love1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(love1));
        */
    });
    peace.on('chat', (data) => {
        let ul = document.getElementById("peace");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px:margin-left:0px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*
        peace1= JSON.parse(localStorage.getItem('peace'));
        if(peace1.length>50)
            peace1.shift();
        peace1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(peace1));
        */
    });
    travelling.on('chat', (data) => {
        let ul = document.getElementById("travelling");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*travelling1= JSON.parse(localStorage.getItem('travelling'));
        if(travelling1.length>50)
            travelling1.shift();
        travelling1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(travelling1));
        */
    });
    technology.on('chat', (data) => {
        let ul = document.getElementById("technology");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*technology1= JSON.parse(localStorage.getItem('technology'));
        if(technology1.length>50)
            technology1.shift();
        technology1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(technology1));
        */
    });
    politics.on('chat', (data) => {
        let ul = document.getElementById("politics");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*
        politics1= JSON.parse(localStorage.getItem('politics'));
        if(politics1.length>50)
            politics1.shift();
        politics1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(politics1));
        */
    });
    sports.on('chat', (data) => {
        let ul = document.getElementById("sports");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*sports1= JSON.parse(localStorage.getItem('sports'));
        if(sports1.length>50)
            sports1.shift();
        sports1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(sports1));
        */
    });

    fitness.on('chat', (data) => {
        let ul = document.getElementById("fitness");
        let li = document.createElement("p");
        li.className="card  col-11";
        let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        li.style.cssText="margin:10px; margin-left:50px";
        li.color=randomColor;
        li.appendChild(document.createTextNode(data.message));
        ul.appendChild(li);
        /*fitness1= JSON.parse(localStorage.getItem('fitness'));
        if(fitness1.length>50)
            fitness1.shift();
        fitness1.push(data.message);
        localStorage.setItem("education1", JSON.stringify(fitness1));
        */
    })
});