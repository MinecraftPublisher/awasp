function forgot_password() {
    div.innerHTML = `<div class="black"><br>
        <h3>there is no way of recovering your password, please do not check the source code.</h3>
        <a href="#" onclick="stage('stagelogin', 'awasp')">return to login</a>
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
<button class="login" onclick="window.name = document.getElementsByClassName('username')[0].value; window.pass = document.getElementsByClassName('password')[0].value;stage('stage0a0', 'awasp');">Login</button><br><br>
<a href="#" onclick="stage('forgot_password', 'awasp');">Forgot Password</a>
</div>`
}

function stage0a0() {
    if (window.name == "admin" && pass == "1234") {
        stage("stage0", "awasp");
    } else {
        alert('wrong')
        stage('stagelogin', "awasp");
    }
}

function stage0() {
    document.title = "Awasp";
    div.innerHTML = "you are in front of a house<br>\
    <a href=\"#\" onclick=\"stage('stage1', 'awasp');\">go inside</a>";
}

function stage1() {
    div.innerHTML = "you are in a house<br><br>\
    <a href=\"#\" onclick=\"stage('stage1_kitchen', 'awasp');\">go to kitchen</a><br>\
    <a href=\"#\" onclick=\"stage('stage1_basement', 'awasp');\">go to basement</a><br>\
    <a href=\"#\" onclick=\"stage('stage1_bedroom', 'awasp');\">go to bedroom</a><br>\
    <a href=\"#\" onclick=\"stage('stage0', 'awasp');\">go out</a>";
}

function stage1_kitchen() {
    div.innerHTML = "you are in the kitchen<br><br>\
    <a href=\"#\" onclick=\"stage('stage1_kitchen_closet', 'awasp');\">look in closet</a><br>\
    <a href=\"#\" onclick=\"stage('stage1', 'awasp');\">go to living room</a>";
}

function stage1_kitchen_closet() {
    div.innerHTML = "you look in the closet<br>\
    you see a cute kitty plush<br><br>\
    <a href=\"#\" onclick=\"stage('stage1_kitchen', 'awasp');\">close the closet door</a>";
}

function stage1_bedroom() {
    div.innerHTML = "you are now in the bedroom<br><br>\
    <a href=\"#\" onclick=\"stage('stage1_bedroom_bed', 'awasp');\">look under the bed</a><br>\
    <a href=\"#\" onclick=\"stage('stage1', 'awasp');\">back to the living room</a>";
}

function stage1_basement() {
    div.innerHTML = "you go to the basement and " + (get('login_card_acquired') == 'true' || get('basement_visit') == 'true' ? 'find nothing' : 'find a strange keycard on the ground.') + "<br><br>\
    <a href=\"#\" onclick=\"set('basement_visit', 'true'); stage('stage1', 'awasp');\">return to the living room</a><br>"
    if (get('basement_visit') == 'true' || get('login_card_acquired', 'true')) {
        return;
    } else {
        div.innerHTML += "<a href=\"#\" onclick=\"set('login_card_acquired', 'true'); alert('picked up the card');\">pick up the keycard</a><br>"
    }
}

function stage1_bedroom_bed() {
    div.innerHTML = "you look under the bedroom and find a knife down there that has blood on it<br><br>\
    <a href=\"#\" onclick=\"set('knife_acquired', 'true'); stage('stage1', 'awasp');\">pick it up i need it</a><br>\
    <a href=\"#\" onclick=\"stage('stage1_bedroom', 'awasp');\">back to the bedroom</a>"
}
