function stage0a0() {
    div.innerHTML = "you are in front of a house<br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">go inside</a>";
}

function stage1() {
    div.innerHTML = "you are in a house<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_kitchen');\">go to the kitchen</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_basement');\">go to the basement</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom');\">go to the bedroom</a><br>\
    "+(get('basement_visit') === 'true' ? "<a href=\"#\" onclick=\"stage('awasp', 'stage2');\">go to the living room</a><br>" : "")+"\
    <a href=\"#\" onclick=\"stage('awasp', 'stage0a0');\">go out</a>";
}

function stage1_kitchen() {
    div.innerHTML = "you are in the kitchen<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_kitchen_closet');\">look in the closet</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">go to the entrance</a>";
}

function stage1_kitchen_closet() {
    div.innerHTML = "you look in the closet<br>\
    you see a cute kitty plush<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_kitchen');\">close the closet door</a>";
}

function stage1_bedroom() {
    div.innerHTML = "you are now in the bedroom<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom_bed');\">look under the bed</a><br>\
    "+(get('basement_visit') === 'true' ? "<a href=\"#\" onclick=\"stage('awasp', 'stage2');\">go to the living room</a><br>" : '')+"
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">back to the entrance</a>";
}

function stage1_basement() {
    div.innerHTML = "you go to the basement and " + (get('login_card_acquired') === 'true' || get('basement_visit') === 'true' ? 'find nothing' : 'find a strange keycard on the ground.') + "<br><br>\
    <a href=\"#\" onclick=\"set('basement_visit', 'true'); stage('awasp', 'stage1');\">return to the entrance</a><br>";
    if (get('basement_visit') === 'true' || get('login_card_acquired', 'true')) {
        return;
    } else {
        div.innerHTML += "<a href=\"#\" onclick=\"set('login_card_acquired', 'true'); alert('picked up the card');\">pick up the keycard</a><br>";
    }
}

function stage1_bedroom_bed() {
    div.innerHTML = "you look under the bedroom and find "+(get('knife_acquired') === 'true' ? 'nothing there' : 'a knife down there that has blood on it')+".<br><br>\
    "+(get('knife_acquired') === 'true' ? "" : "<a href=\"#\" onclick=\"set('knife_acquired', 'true'); stage('awasp', 'stage1');\">pick it up i need it</a><br>")+"\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom');\">back to the bedroom</a>";
}

function stage2() {
    div.innerHTML = "you are in the living room, it has a ton of chairs inside, a door to the bedroom and a TV that's flickering. you wonder what to do.<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom');\">go to the bedroom</a><br>\
    <href =\"#\" onclick=\"stage('awasp', 'stage2_tv');\">examine the TV</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">go to the entrance</a>";
}

function stage2_tv() {
    div.innerHTML = "you look behind the TV, ";
    if(get('bug_acquired') === 'true') {
        div.innerHTML += "and don't find anything. you could feel the weight of that bug device thing in your pocket.<br><br>";
    } else {
        div.innerHTML += "and you see a huge robotic insect connected to the back of the TV, ";
        if(get('knife_acquired') === 'true') {
            div.innerHTML += "you pull out your knife, ready to disconnect it.<br><br>\
            <a href=\"#\" onclick=\"set('bug_acquired', 'true'); stage('awasp', 'stage2_tv');\">remove it and put it in your pocket</a>";
        } else {
            div.innerHTML += "but there isn't anything you could do about it, it's stuck very hard and only a knife would separate it.<br><br>";
        }
    }
    div.innerHTML += "<a href=\"#\" onclick=\"stage('awasp', 'stage2');\">return to the living room</a>"
}
