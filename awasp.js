function forgot_password() {
    div.innerHTML = `<div class="black"><br>
        <h3>password recovery</h3>
        <p>
        username: admin<br>
        password: 1234
        </p>
        <a href="#" onclick="stage('awasp', 'stagelogin')">return to login</a>
        </div>`
}

function stagelogin() {
    div.innerHTML = `
    <div class="black">
        <br>
        <img src="https://i.postimg.cc/TPRRfccw/download-2.png" width="100" height="100" style="margin-bottom: -10px;">
    <h1>awasp login</h1>
username: <input autocomplete="off" class="username" />
<br>
<div style="margin-top: 10px;">password: <input style="margin-left: 4px;" class="password" autocomplete="off" /></div>
<br><br>
<button class="login" onclick="window.name = document.getElementsByClassName('username')[0].value; window.pass = document.getElementsByClassName('password')[0].value;stage('awasp', 'stage0a0');">Login</button><br><br>
<a href="#" onclick="stage('awasp', 'forgot_password');">Forgot Password</a>
</div>`
}

function stage0a0() {
    if (window.name == "admin" && pass == "1234") {
        stage('awasp', 'stage0');
    } else {
        div.innerHTML += '<br>Incorrect passcode';
        setTimeout(() => { stage("awasp", "stagelogin"); }, 300);
    }
}

function stage0() {
    document.title = "Awasp";
    div.innerHTML = "you are in front of a house<br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">go inside</a>";
}

function stage1() {
    div.innerHTML = "you are in a house<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_kitchen');\">go to kitchen</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_basement');\">go to basement</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom');\">go to bedroom</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage0');\">go out</a>";
}

function stage1_kitchen() {
    div.innerHTML = "you are in the kitchen<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_kitchen_closet');\">look in closet</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">go to living room</a>";
}

function stage1_kitchen_closet() {
    div.innerHTML = "you look in the closet<br>\
    you see a cute kitty plush<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_kitchen');\">close the closet door</a>";
}

function stage1_bedroom() {
    div.innerHTML = "you are now in the bedroom<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom_bed');\">look under the bed</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">back to the living room</a>";
}

function stage1_basement() {
    div.innerHTML = "you go to the basement and " + (get('login_card_acquired') == 'true' || get('basement_visit') == 'true' ? 'find nothing' : 'find a strange keycard on the ground.') + "<br><br>\
    <a href=\"#\" onclick=\"set('basement_visit', 'true'); stage('awasp', 'stage1');\">return to the living room</a><br>"
    if (get('basement_visit') == 'true' || get('login_card_acquired', 'true')) {
        return;
    } else {
        div.innerHTML += "<a href=\"#\" onclick=\"set('login_card_acquired', 'true'); alert('picked up the card');\">pick up the keycard</a><br>"
    }
}

function stage1_bedroom_bed() {
    div.innerHTML = "you look under the bedroom and find a knife down there that has blood on it<br><br>\
    <a href=\"#\" onclick=\"set('knife_acquired', 'true'); stage('awasp', 'stage1');\">pick it up i need it</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom');\">back to the bedroom</a>"
}
