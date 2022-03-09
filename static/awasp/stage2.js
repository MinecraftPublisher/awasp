function stage2() {
    div.innerHTML = "you are in the living room, it has a ton of chairs inside, a door to the bedroom and a TV that's flickering. you wonder what to do.<br><br>\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1_bedroom');\">go to the bedroom</a><br>\
    <a href =\"#\" onclick=\"stage('awasp', 'stage2__tv');\">examine the TV</a><br>\
    " + (get('bug_acquired') === 'true' ? "<a href=\"#\" onclick=\"stage('awasp', 'stage2__box')\">drop the bug device on the floor</a><br>" : "") + "\
    <a href=\"#\" onclick=\"stage('awasp', 'stage1');\">go to the entrance</a>";
}

function stage2__tv() {
    div.innerHTML = "you look behind the TV, ";
    if (get('bug_acquired') === 'true') {
        div.innerHTML += "and don't find anything. you could feel the weight of that bug device thing in your pocket.<br><br>";
    } else {
        div.innerHTML += "and you see a huge robotic insect connected to the back of the TV, ";
        if(get('bug_dropped') === 'true') {
            div.innerHTML += `and you look for something on the TV. what you find is a switch that reads "BOOT DEVICE INTO SETUP MODE". it seems to be able to turn off the insect and enable that feature.<br><br>
<a href="#" onclick="set('bug_acquired', 'true'); set('tv_off', 'true'); stage('awasp', 'stage2');">click the button</a><br>`;
        } else if (get('knife_acquired') === 'true') {
            div.innerHTML += "you pull out your knife, ready to disconnect it.<br><br>\
            <a href=\"#\" onclick=\"set('bug_acquired', 'true'); stage('awasp', 'stage2__tv');\">remove it and put it in your pocket</a><br>";
        } else {
            div.innerHTML += "but there isn't anything you could do about it, it's stuck very hard and only a knife would separate it.<br><br>";
        }
    }
    div.innerHTML += "<a href=\"#\" onclick=\"stage('awasp', 'stage2');\">return to the living room</a>"
}

function stage2__trap() {
    div.innerHTML = "gotta wait some more. you're scared of the dark.<br><br><a href=\"#\" onclick=\"stage('awasp', 'stage2');\">return to the living room</a>";
}

function stage2__box() {
    set('bug_acquired', 'false');
    set('bug_dropped', 'true');
    if(get('tv_off') === 'true') {
        div.innerHTML = `you drop the bug device on the ground, patiently waiting for something`;
        setTimeout(()=>{
            div.innerHTML += `.`;
            setTimeout(()=>{
                div.innerHTML += `.`;
                setTimeout(()=>{
                    div.innerHTML += `.`;
                    setTimeout(()=>{
                        div.innerHTML += `<br>and finally, it snaps to life. the bug starts to carve out a circle on the ground, revealing a hidden trapdoor.<br><br>
<a href="#" onclick="stage('awasp', 'stage2__trap');">go through the trapdoor</a><br>
<a href="#" onclick="stage('awasp', 'stage2');">return to the living room</a>`;
                    },800);
                },800);
            },800);
        },800);
    } else {
        div.innerHTML = `you drop the bug device on the ground, waiting for something to happen. suddenly, it goes back and sticks to the TV again. seems like there is some switch that needs to be flicked on the TV.<br><br>
        <a href="#" onclick="stage('awasp', 'stage2');">return to the living room</a>`;
    }
}