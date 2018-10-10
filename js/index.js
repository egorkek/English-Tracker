var aboutPlatform = document.getElementById('aboutPlatform');
var tmp = aboutPlatform.innerHTML;
var logInMenu = document.getElementById('logInMenu');
var article =  document.getElementById('firstArticle');



function x() {


    aboutPlatform.className +=' paddingTop';
    aboutPlatform.innerHTML = '<p>So Here You Are</p>' +
        '<p>Tap &laquo;Register&raquo; If You A New User</p> ' +
        '<p>Tap &laquo;Log in&raquo; If You&#8217;ve Already Used This Platform</p> ' +
        '<div><button class="getStarted" id="logIn">Log in</button></div>' +
        '<div><button class="getStarted whiteGetStarted" id="register">Register</button></div>';
    var logIn = document.getElementById('logIn');
    logIn.onclick = function () {
       var article =  document.getElementById('firstArticle');
       article.className += ' logInBackground2';
       setTimeout( function () {
            article.innerHTML ='<div id="logInMenu">\n' +
                '    <div>\n' +
                '        <h2>Log in <object data="img/enter.svg" type="image/svg+xml"></object></h2>\n' +
                '\n' +
                '        <form action="">\n' +
                '            <input type="text" placeholder="Username" class="input">\n' +
                '            <input type="password" placeholder="Password" class="input">\n' +
                '            <div>\n' +
                '            <button class="getStarted" id="enter">Enter</button>\n' +
                '            <button class="getStarted" id="cantLogIn">Can\'t to log in?</button>\n' +
                '            </div>\n' +
                '        </form>\n' +
                '    </div>\n' +
                '    </div>';


        }, 100);

    };
    var register = document.getElementById('register');
    register.onclick = function () {
        var article =  document.getElementById('firstArticle');
        article.className += ' logInBackground2';
        setTimeout(function () {
            article.innerHTML = '<div id="logInMenu">\n' +
                '    <div>\n' +
                '        <h2>Register  <object data="img/register.svg" type="image/svg+xml"></object></h2>\n' +
                '\n' +
                '        <form action="">\n' +
                '            <input type="text" placeholder="Username" class="input">\n' +
                '            <input type="password" placeholder="Password" class="input">\n' +
                '            <input type="password" placeholder="Confirm Password" class="input">\n' +
                '\n' +
                '            <div>\n' +
                '            <button class="getStarted" id="enter">Enter</button>\n' +
                '            </div>\n' +
                '        </form>\n' +
                '    </div>\n' +
                '    </div>';

        },500);
        
    }


};
var logoA = document.getElementById('logoA');
logoA.onclick = function () {
    aboutPlatform.innerHTML = tmp;
    aboutPlatform.className ='aboutPlatform';
    logInMenu.style.opacity = 0;
    article.className = 'logInBackground'





};


