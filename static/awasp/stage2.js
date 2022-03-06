function stage2() {
    div.innerHTML = "you are in the living room, it has a ton of chairs inside, a door to the bedroom and a TV that's flickering. you wonder what to do.<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom');\">go to the bedroom</a><br>\
    <a href =\"#\" onclick=\"stage('awasp', 'stage2__tv');\">examine the TV</a><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">go to the entrance</a>";
}

function stage2__tv() {
    div.innerHTML = "you look behind the TV, ";
    if (get('bug_acquired') === 'true') {
        div.innerHTML += "and don't find anything. you could feel the weight of that bug device thing in your pocket.<br><br>";
    } else {
        div.innerHTML += "and you see a huge robotic insect connected to the back of the TV, ";
        if (get('knife_acquired') === 'true') {
            div.innerHTML += "you pull out your knife, ready to disconnect it.<br><br>\
            <a href=\"#\" onclick=\"set('bug_acquired', 'true'); stage('awasp', 'stage2__tv');\">remove it and put it in your pocket</a><br>";
        } else {
            div.innerHTML += "but there isn't anything you could do about it, it's stuck very hard and only a knife would separate it.<br><br>";
        }
    }
    div.innerHTML += "<a href=\"#\" onclick=\"stage('awasp', 'stage2');\">return to the living room</a>"
}