var one = document.getElementById('one');
var two = document.getElementById('two');
var thr = document.getElementById('thr');
var fou = document.getElementById('fou');
var fiv = document.getElementById('fiv');
var six = document.getElementById('six');
var sev = document.getElementById('sev');
var eig = document.getElementById('eig');
var nin = document.getElementById('nin');

var winanounce = document.getElementById('winanounce');

var nextlvl = document.getElementById('nextlvl');

var occupy1 = -1, occupy2 = -1, occupy3 = -1, occupy4 = 0, occupy5 = 0, occupy6 = 0, occupy7 = 1, occupy8 = 1, occupy9 = 1;
var usermove = 0;
var randomnum = 0, randomdir = 0;
var confrmjinmove = 0;
var userdiamove = 0;

var user1 = 7, user2 = 8, user3 = 9, jin1 = 1, jin2 = 2, jin3 = 3; 
var user1p = 7, user2p = 8, user3p = 9, jin1p = 1, jin2p = 2, jin3p = 3; 

var stuck = 0, userstuck = 0, jinstuck = 0;

var stuckmover = 0;

var mlvar = '', ml1 = '', ml2 = '', ml3 = '', ml4 = '';
var fml1 = '', fml2 = '', fml3 = '', fml4 = '';
var x = 0, y = 0;

var move = 0, round = 1;
var currentpos = '';

var look1, look2, look3, look4;

var jinmovechangevar = 0, orkoicharanahi = 0;
var jinmovechangevar1 = 0, jinmovechangevar2 = 0, jinmovechangevar3 = 0, jinmovechangevar4 = 0, jinmovechangevar5 = 0, jinmovechangevar6 = 0, jinmovechangevar7 = 0, jinmovechangevar8 = 0, jinmovechangevar9 = 0;

var jinmovepermission = 1;

var userbg = "url('https://i.pinimg.com/originals/38/e4/01/38e40199907946610b54e86e8489bb58.png')";
var jinbg = "url('https://previews.123rf.com/images/memoangeles/memoangeles1707/memoangeles170700011/82005028-skeleton-warrior-in-attacking-pose-top-view-vector-clip-art-illustration-with-simple-gradients-all-i.jpg')";

function box1fun(){
    if(userdiamove === 513 ||userdiamove === 5130){
        fiv.style.background = 'none';
        one.style.background = userbg;

        occupy5 = 0;
        occupy1 = 1;

        jin1 = 0;
        if(user1 === 5){
            user1 = 1;
        }
        else if(user2 === 5){
            user2 = 1;
        }
        else if(user3 === 5){
            user3 = 1;
        }
        jinmovefun();
    }
    if(userdiamove === 42){
        fou.style.background = 'none';
        one.style.background = userbg;

        occupy4 = 0;
        occupy1 = 1;

        if(user1 === 4){
            user1 = 1;
        }
        else if(user2 === 4){
            user2 = 1;
        }
        jinmovefun();
    }
}
function box2fun(){
    if(userdiamove === 513){
        fiv.style.background = 'none';
        two.style.background = userbg;

        occupy5 = 0;
        occupy2 = 1;

        if(user1 === 5){
            user1 = 2;
        }
        else if(user2 === 5){
            user2 = 2;
        }
        else if(user3 === 5){
            user3 = 2;
        }
        jinmovefun();
    }
    if(userdiamove === 42){
        fou.style.background = 'none';
        two.style.background = userbg;

        occupy4 = 0;
        occupy2 = 1;

        jin2 = 0;
        if(user1 === 4){
            user1 = 2
        }
        else if(user2 === 4){
            user2 = 2;
        }
        jinmovefun();
    }
    if(userdiamove === 62){
        six.style.background = 'none';
        two.style.background = userbg;

        occupy6 = 0;
        occupy2 = 1;

        jin2 = 0;
        if(user2 === 6){
            user2 = 2;
        }
        else if(user3 === 6){
            user3 = 2;
        }
        jinmovefun();
    }
}
function box3fun(){
    if(userdiamove === 513 || userdiamove === 5130){
        fiv.style.background = 'none';
        thr.style.background = userbg;

        occupy5 = 0;
        occupy3 = 1;

        jin3 = 0;
        if(user1 === 5){
            user1 = 3;
        }
        else if(user2 === 5){
            user2 = 3;
        }
        else if(user3 === 5){
            user3 = 3;
        }
        jinmovefun();
    }
    if(userdiamove === 62){
        six.style.background = 'none';
        two.style.background = userbg;

        occupy6 = 0;
        occupy2 = 1;

        if(user2 === 6){
            user2 = 3;
        }
        else if(user3 === 6){
            user3 = 3;
        }
        jinmovefun();
    }
}
function box4fun(){

    if(occupy4 === 1){
        usermove = 4;
        usermovefun();
    }
    if(userdiamove === 846 || userdiamove === 8460){
        eig.style.background = 'none';
        fou.style.background = userbg;

        occupy8 = 0;
        occupy4 = 1;
        
        user2 = 4;
        if(jin1 === 4){
            jin1 = 0;
        }
        else if(jin2 === 4){
            jin2 = 0;
        }
        jinmovefun();
    }
    if(userdiamove === 75){
        sev.style.background = 'none';
        fou.style.background = userbg;

        occupy7 = 0;
        occupy4 = 1;

        user1 = 4;
        jinmovefun();
    }
}
function box5fun(){

    if(occupy5 === 1){
        usermove = 5;
        usermovefun();
    }
    if(userdiamove === 846){
        eig.style.background = 'none';
        fiv.style.background = userbg;

        occupy8 = 0;
        occupy5 = 1;

        user2 = 5;
        jinmovefun();
    }
    if(userdiamove === 75){
        sev.style.background = 'none';
        fiv.style.background = userbg;

        occupy7 = 0;
        occupy5 = 1;

        user1 = 5;
        if(jin1 === 5){
            jin1 = 0;
        }
        else if(jin2 === 5){
            jin2 = 0;
        }
        else if(jin3 === 5){
            jin3 = 0;
        }
        jinmovefun();
    }
    if(userdiamove === 95){
        nin.style.background = 'none';
        fiv.style.background = userbg;

        occupy9 = 0;
        occupy5 = 1;

        user3 = 5;
        if(jin1 === 5){
            jin1 = 0;
        }
        else if(jin2 === 5){
            jin2 = 0;
        }
        else if(jin3 === 5){
            jin3 = 0;
        }
        jinmovefun();
    }
}
function box6fun(){

    if(occupy6 === 1){
        usermove = 6;
        usermovefun();
    }
    if(userdiamove === 846 || userdiamove === 8460){
        eig.style.background = 'none';
        six.style.background = userbg;

        occupy8 = 0;
        occupy6 = 1;

        user2 = 6;
        if(jin2 === 6){
            jin2 = 0;
        }
        else if(jin3 === 6){
            jin3 = 0;
        }
        jinmovefun();
    }
    if(userdiamove === 95){
        nin.style.background = 'none';
        six.style.background = userbg;

        occupy9 = 0;
        occupy6 = 1;

        user3 = 6;
        jinmovefun();
    }
}
function box7fun(){

    if(occupy7 === 1){
        usermove = 7;
        usermovefun();
    }
}
function box8fun(){

    if(occupy8 === 1){
        usermove = 8;
        usermovefun();
    }
}
function box9fun(){

    if(occupy9 === 1){
        usermove = 9;
        usermovefun();
    }
}

function usermovefun(){
    picsize();

    jinmovechangevar = 0;
    orkoicharanahi = 0;
    jinmovepermission = 1;
   
    if(stuckmover === 0){

    userstuck = 1;
    jinstuck = 0;

    winreach();
    winkill();
    winstuck();
    confrmjinmove = 0;
    userdiamove = 0;
    
    switch(usermove){
        case 4:
            if(occupy1 === 0){
                if(occupy2 === -1){
                    userdiamove = 42;
                    ml.innerHTML = "Now you have two choices either you can move forward or kill the enemy in your diagonal..... so, if you want to move forward just click that forward vecant position or if you want to kill the enemy then click your diagonal enemy you want to kill";
                }
                else{
                    fou.style.background = 'none';
                    one.style.background = userbg;

                    occupy4 = 0;
                    occupy1 = 1;

                    if(user1 === 4){
                        user1 = 1;
                    }
                    else if(user2 === 4){
                        user2 = 1;
                    }
                    jinmovefun();
                }
            }
            else if(occupy1 === -1 && occupy2 === -1){
                fou.style.background = 'none';
                two.style.background = userbg;

                occupy4 = 0;
                occupy2 = 1;

                if(user1 === 4){
                    user1 = 2;
                    jin2 = 0;
                }
                else if(user2 === 4){
                    user2 = 2;
                    jin2 = 0;
                }
                jinmovefun();
            }
        break;
        case 5:
            if(occupy2 === 0){
                if(occupy1 === -1 || occupy3 === -1){
                    userdiamove = 513;
                    ml.innerHTML = "Now you have two choices either you can move forward or kill the enemy in your diagonal..... so, if you want to move forward just click that forward vecant position or if you want to kill the enemy then click your diagonal enemy you want to kill";
                }
                else{
                    fiv.style.background = 'none';
                    two.style.background = userbg;

                    occupy5 = 0;
                    occupy2 = 1;

                    if(user1 === 5){
                        user1 = 2;
                    }
                    else if(user2 === 5){
                        user2 = 2;
                    }
                    else if(user3 === 5){
                        user3 = 2;
                    }
                    jinmovefun();
                }
            }
            else if(occupy2 === -1){
                if(occupy1 === -1){
                    fiv.style.background = 'none';
                    one.style.background = userbg;

                    occupy5 = 0;
                    occupy1 = 1;

                    jin1 = 0;
                    if(user1 === 5){
                        user1 = 1;
                    }
                    else if(user2 === 5){
                        user2 = 1;
                    }
                    else if(user3 === 5){
                        user3 = 1;
                    }
                    jinmovefun();
                }
                else if(occupy3 === -1){
                    fiv.style.background = 'none';
                    thr.style.background = userbg;

                    occupy5 = 0;
                    occupy3 = 1;

                    jin3 = 0;
                    if(user1 === 5){
                        user1 = 3;
                    }
                    else if(user2 === 5){
                        user2 = 3;
                    }
                    else if(user3 === 5){
                        user3 = 3;
                    }
                    jinmovefun();
                }
            }
            else if(occupy1 === -1 && occupy2 === -1 && occupy3 === -1){
                userdiamove = 5130;
                ml.innerHTML = "Now you have two choices either you can kill any one of the enemy in your diagonal..... so, if you want to kill left diagonal enemy then just click on that left diagonal enemy position or if you want to kill the enemy on the right diagonal then click your right diagonal enemy position box";
            }
        break;
        case 6:
            if(occupy3 === 0){
                if(occupy2 === -1){
                    userdiamove = 62;
                    ml.innerHTML = "Now you have two choices either you can move forward or kill the enemy in your diagonal..... so, if you want to move forward just click that forward vecant position or if you want to kill the enemy then click your diagonal enemy you want to kill";
                }
                else{
                    six.style.background = 'none';
                    thr.style.background = userbg;

                    occupy6 = 0;
                    occupy3 = 1;

                    if(user2 === 6){
                        user2 = 3;
                    }
                    else if(user3 === 6){
                        user3 = 3;
                    }
                    jinmovefun();
                }
            }
            else if(occupy2 === -1 && occupy3 === -1){
                six.style.background = 'none';
                two.style.background = userbg;

                occupy6 = 0;
                occupy2 = 1;

                if(user2 === 6){
                    user2 = 2;
                    jin2 = 0
                }
                else if(user3 === 6){
                    user3 = 2;
                    jin2 = 0;
                }
                jinmovefun();
            }
        break;
        case 7:
            if(occupy4 === 0){
                if(occupy5 === -1){
                    userdiamove = 75;
                    ml.innerHTML = "Now you have two choices either you can move forward or kill the enemy in your diagonal..... so, if you want to move forward just click that forward vecant position or if you want to kill the enemy then click your diagonal enemy you want to kill";
                }
                else{
                    sev.style.background = 'none';
                    fou.style.background = userbg;

                    occupy7 = 0;
                    occupy4 = 1;

                    user1 = 4
                    jinmovefun();
                }
            }
            else if(occupy4 === -1 && (occupy5 === -1 || occupy4 === 1)){
                sev.style.background = 'none';
                fiv.style.background = userbg;

                occupy7 = 0;
                occupy5 = 1;

                user1 = 5;
                if(jin1 === 5){
                    jin1 = 0;
                }
                else if(jin2 === 5){
                    jin2 = 0;
                }
                else if(jin3 === 5){
                    jin3 = 0;
                }
                jinmovefun();
            }
        break;
        case 8:
            if(occupy5 === 0){
                if(occupy4 === -1 || occupy6 === -1){
                    userdiamove = 846;
                    ml.innerHTML = "Now you have two choices either you can move forward or kill the enemy in your diagonal..... so, if you want to move forward just click that forward vecant position or if you want to kill the enemy then click your diagonal enemy you want to kill";
                }
                else{
                    eig.style.background = 'none';
                    fiv.style.background = userbg;

                    occupy8 = 0;
                    occupy5 = 1;

                    user2 = 5;
                    jinmovefun();
                }
            }
            else if(occupy5 === -1){
                if(occupy4 === -1){
                    eig.style.background = 'none';
                    fou.style.background = userbg;

                    occupy8 = 0;
                    occupy4 = 1;

                    user2 = 4;
                    if(jin1 === 4){
                        jin1 = 0;
                    }
                    else if(jin2 === 4){
                        jin2 = 0;
                    }
                    jinmovefun();
                }
                else if(occupy6 === -1){
                    eig.style.background = 'none';
                    six.style.background = userbg;

                    occupy8 = 0;
                    occupy6 = 1;

                    user2 = 6;
                    if(jin2 === 6){
                        jin1 = 0;
                    }
                    else if(jin3 === 6){
                        jin2 = 0;
                    }
                    jinmovefun();
                }
            }
            else if(occupy4 === -1 && occupy5 === -1 && occupy6 === -1){
                userdiamove = 8460;
                ml.innerHTML = "Now you have two choices either you can kill any one of the enemy in your diagonal..... so, if you want to kill left diagonal enemy then just click on that left diagonal enemy position or if you want to kill the enemy on the right diagonal then click your right diagonal enemy position box";
            }
        break;
        case 9:
            if(occupy6 === 0){
                if(occupy5 === -1){
                    userdiamove = 95;
                    ml.innerHTML = "Now you have two choices either you can move forward or kill the enemy in your diagonal..... so, if you want to move forward just click that forward vecant position or if you want to kill the enemy then click your diagonal enemy you want to kill";
                }
                else{
                    nin.style.background = 'none';
                    six.style.background = userbg;

                    occupy9 = 0;
                    occupy6 = 1;

                    user3 = 6;
                    jinmovefun();
                }
            }
            else if(occupy5 === -1 && (occupy6 === -1 || occupy6 === 1)){
                nin.style.background = 'none';
                fiv.style.background = userbg;

                occupy9 = 0;
                occupy5 = 1;

                user3 = 5;
                if(jin1 === 5){
                    jin1 = 0;
                }
                else if(jin2 === 5){
                    jin2 = 0;
                }
                else if(jin3 === 5){
                    jin2 = 0;
                }
                jinmovefun();
            }
        break;
        
    }

    jinstuck = 1;
    userstuck = 0;
    winreach();
    winkill();
    winstuck();

    }
    
    
}

function randomfun(){
    randomnum = Math.floor(Math.random()*3)
    randomdir = Math.floor(Math.random()*3)
}

function jinmovefun(){
    ml.innerHTML = "You are done with your turn... now it's my turn"
    picsize();
    user1p = user1 ; user2p = user2 ; user3p = user3 ; jin1p = jin1 ; jin2p = jin2 ; jin3p = jin3; 

    
    jinstuck = 1;
    userstuck = 0;
    winreach();
    winkill();
    winstuck();

    if(stuckmover === 0){ 
    randomfun();
        
    userdiamove = 0;
    switch(randomnum){ 
        case 0:
            if(occupy4 === 0 && occupy1 === -1){
                if(occupy5 === 1){
                    if(randomdir === 0){
                        
                        jin1 = 4;
                        mlcheck();

                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy1 = 0;
                        occupy4 = -1;
                        setTimeout(function(){ 
                            one.style.background = 'none';
                            fou.style.background = jinbg;
                        picsize(); },900);
                    }
                            
                    }
                    else{
                        
                        jin1 = 5;
                        if(user1 === 5){
                            user1 = 0;
                        }
                        else if(user2 === 5){
                            user2 = 0;
                        }
                        else if(user3 === 5){
                            user3 = 0;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy1 = 0;
                        occupy5 = -1;

                        setTimeout(function(){
                            one.style.background = 'none';
                            fiv.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                }
                else{
                    jin1 = 4;
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy1 = 0;
                    occupy4 = -1;

                   
                    setTimeout(function(){
                        one.style.background = 'none';
                        fou.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
            else if(occupy4 === 1 && occupy5 === 1 && occupy1 === -1){
                    
                jin1 = 5;
                if(user1 === 5){
                    user1 = 0;
                }
                else if(user2 === 5){
                    user2 = 0;
                }
                else if(user3 === 5){
                    user3 = 0;
                }
                mlcheck();
                if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy1 = 0;
                    occupy5 = -1;

                    setTimeout(function(){
                        one.style.background = 'none';
                        fiv.style.background = jinbg;
                    picsize(); },900);
                }
            }
            else if(occupy7 === 0 && occupy4 === -1){
                if(occupy8 === 1){
                    if(randomdir === 0){
                        if(jin1 === 4){
                            jin1 = 7;
                        }
                        else if(jin2 === 4){
                            jin2 = 7;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy4 = 0;
                        occupy7 = -1;

                        
                        setTimeout(function(){
                            fou.style.background = 'none';
                            sev.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                    else{
                        user2 = 0;
                        if(jin1 === 4){
                            jin1 = 8;
                        }
                        else if(jin2 === 4){
                            jin2 = 8;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy4 = 0;
                        occupy8 = -1;

                        
                        setTimeout(function(){
                            fou.style.background = 'none';
                            eig.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                }
                else{
                    if(jin1 === 4){
                        jin1 = 7;
                    }
                    else if(jin2 === 4){
                        jin2 = 7;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy4 = 0;
                    occupy7 = -1;

                    
                    setTimeout(function(){
                        fou.style.background = 'none';
                        sev.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
            else if(occupy7 === 1 && occupy8 === 1 && occupy4 === -1){
                user2 = 0;
                if(jin1 === 4){
                    jin1 = 8;
                }
                else if(jin2 === 4){
                    jin2 = 8;
                }
                mlcheck();
                if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy4 = 0;
                    occupy8 = -1;

                   
                    setTimeout(function(){
                        fou.style.background = 'none';
                        eig.style.background = jinbg;
                    picsize(); },900);
                }
            }
        break;
        
        case 1:
            if(occupy5 === 0 && occupy2 === -1){
                if(occupy4 === 1 || occupy6 === 1){
                    if(randomdir === 0){
                        
                        jin2 = 5;
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy2 = 0;
                        occupy5 = -1;

                        setTimeout(function(){
                            two.style.background = 'none';
                            fiv.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                    else if(randomdir === 1 && occupy4 === 1){
                        jin2 = 4;
                        if(user1 === 4){
                            user1 = 0;
                        }
                        else if(user2 === 4){
                            user2 = 0;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy2 = 0;
                        occupy4 = -1;

                        
                        setTimeout(function(){
                            two.style.background = 'none';
                            fou.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                    else if(randomdir === 2 && occupy6 === 1){
                        jin2 = 6;
                        if(user2 === 6){
                            user2 = 0;
                        }
                        else if(user3 === 6){
                            user3 = 0;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy2 = 0;
                        occupy6 = -1;

                        
                        setTimeout(function(){
                            two.style.background = 'none';
                            six.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                }
                else{
                    jin2 = 5;
                    mlcheck(); 
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy2 = 0;
                    occupy5 = -1;

                   
                    setTimeout(function(){
                        two.style.background = 'none';
                        five.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
            else if(occupy4 === 1 && occupy5 === 1 && occupy6 === 1 && occupy2 === -1){
                if(randomdir === 1){
                    jin2 = 4;
                    if(user1 === 4){
                        user1 = 0;
                    }
                    else if(user2 === 4){
                        user2 = 0;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy2 = 0;
                    occupy4 = -1;

                    
                    setTimeout(function(){
                        two.style.background = 'none';
                        fou.style.background = jinbg;
                    picsize(); },900);
                }
                }
                else if(randomdir === 2){
                    
                    jin2 = 6;
                    if(user2 === 6){
                        user2 = 0;
                    }
                    else if(user3 === 6){
                        user3 = 0;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy2 = 0;
                    occupy6 = -1;

                    setTimeout(function(){
                        two.style.background = 'none';
                        six.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
            else if(occupy8 === 0 && occupy5 === -1){
                if(occupy7 === 1 || occupy9 ===1){
                    if(randomdir === 0){
                        if(jin1 = 5){
                            jin1 = 8;
                        }
                        else if(jin2 = 5){
                            jin2 = 8;
                        }
                        else if(jin3 = 5){
                            jin3 = 8;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy5 = 0;
                        occupy8 = -1;

                       
                        setTimeout(function(){
                            fiv.style.background = 'none';
                            eig.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                    else if(randomdir ===1 && occupy7 === 1){
                        user1 = 0;
                        if(jin1 = 5){
                            jin1 = 7;
                        }
                        else if(jin2 = 5){
                            jin2 = 7;
                        }
                        else if(jin3 = 5){
                            jin3 = 7;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy5 = 0;
                        occupy7 = -1;

                        
                        setTimeout(function(){
                            fiv.style.background = 'none';
                            sev.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                    else if(randomdir ===2 && occupy9 === 1){
                        user3 = 0;
                        if(jin1 = 5){
                            jin1 = 9;
                        }
                        else if(jin2 = 5){
                            jin2 = 9;
                        }
                        else if(jin3 = 5){
                            jin3 = 9;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy5 = 0;
                        occupy9 = -1;

                        
                        setTimeout(function(){
                            fiv.style.background = 'none';
                            nin.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                }
                else{
                    if(jin1 = 5){
                        jin1 = 8;
                    }
                    else if(jin2 = 5){
                        jin2 = 8;
                    }
                    else if(jin3 = 5){
                        jin3 = 8;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy5 = 0;
                    occupy8 = -1;

                    
                    setTimeout(function(){
                        fiv.style.background = 'none';
                        eig.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
            else if(occupy7 === 1 && occupy8 === 1 && occupy9 === 1 && occupy5 === -1){
                if(randomdir === 1){
                    user1 = 0;
                    if(jin1 = 5){
                        jin1 = 7;
                    }
                    else if(jin2 = 5){
                        jin2 = 7;
                    }
                    else if(jin3 = 5){
                        jin3 = 7;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy5 = 0;
                    occupy7 = -1;

                    
                    setTimeout(function(){
                        fiv.style.background = 'none';
                        sev.style.background = jinbg;
                    picsize(); },900);
                }
                }
                else if(randomdir === 2){
                    
                    user3 = 0;
                    if(jin1 = 5){
                        jin1 = 9;
                    }
                    else if(jin2 = 5){
                        jin2 = 9;
                    }
                    else if(jin3 = 5){
                        jin3 = 9;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy5 = 0;
                    occupy9 = -1;

                    setTimeout(function(){
                        fiv.style.background = 'none';
                        nin.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
        break;
        
        case 2:
            if(occupy6 === 0 && occupy3 === -1){ 
                if(occupy5 === 1){
                    if(randomdir === 0){
                       
                        jin3 = 6;
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy3 = 0;
                        occupy6 = -1;

                        setTimeout(function(){
                            thr.style.background = 'none';
                            six.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                    else{
                        jin3 = 5;
                        if(user1 === 5){
                            user1 = 0;
                        }
                        else if(user2 === 5){
                            user2 = 0;
                        }
                        else if(user3 === 5){
                            user3 = 0;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy3 = 0;
                        occupy5 = -1;

                        
                        setTimeout(function(){
                            thr.style.background = 'none';
                            fiv.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                }
                else{
                    jin3 = 6;
                    mlcheck(); 
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy3 = 0;
                    occupy6 = -1;

                    
                    setTimeout(function(){
                        thr.style.background = 'none';
                        six.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
            else if(occupy5 === 1 && occupy6 === 1 && occupy3 === -1){
                jin3 = 5;
                    if(user1 === 5){
                        user1 = 0;
                    }
                    else if(user2 === 5){
                        user2 = 0;
                    }
                    else if(user3 === 5){
                        user3 = 0;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy3 = 0;
                    occupy5 = -1;

                    
                    setTimeout(function(){
                        thr.style.background = 'none';
                        fiv.style.background = jinbg;
                    picsize(); },900);
                }
            }
            else if(occupy9 === 0 && occupy6 === -1){
                if(occupy8 === 1){
                    if(randomdir === 0){
                        if(jin2 === 6){
                            jin2 = 9;
                        }
                        else if(jin3 === 6){
                            jin3 = 9;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy6 = 0;
                        occupy9 = -1;

                        
                        setTimeout(function(){
                            six.style.background = 'none';
                            nin.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                    else{
                        user2 = 0;
                        if(jin2 === 6){
                            jin2 = 8;
                        }
                        else if(jin3 === 6){
                            jin3 = 8;
                        }
                        mlcheck();
                        if(jinmovepermission === 1){
                        confrmjinmove = 1;

                        occupy6 = 0;
                        occupy8 = -1;

                        
                        setTimeout(function(){
                            six.style.background = 'none';
                            eig.style.background = jinbg;
                        picsize(); },900);
                    }
                    }
                }
                else{
                    if(jin2 === 6){
                        jin2 = 9;
                    }
                    else if(jin3 === 6){
                        jin3 = 9;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){
                    confrmjinmove = 1;

                    occupy6 = 0;
                    occupy9 = -1;

                    
                    setTimeout(function(){
                        six.style.background = 'none';
                        nin.style.background = jinbg;
                    picsize(); },900);
                }
                }
            }
            else if(occupy8 === 1 && occupy9 === 1 && occupy6 === -1){
                user2 = 0;
                    if(jin2 === 6){
                        jin2 = 8;
                    }
                    else if(jin3 === 6){
                        jin3 = 8;
                    }
                    mlcheck();
                    if(jinmovepermission === 1){ 
                    confrmjinmove = 1;

                    occupy6 = 0;
                    occupy8 = -1;

                    
                    setTimeout(function(){
                        six.style.background = 'none';
                        eig.style.background = jinbg; 
                    picsize(); },900);
                }
            }
        break;
        
        
    }
    
    if(confrmjinmove === 0){ 
    
    jinmovepermission = 1;
        picsize();
        jinmovefun();
    }
    else{
        picsize();
        jinstuck = 0;
        userstuck = 1;
        setTimeout(function(){
            ml.innerHTML = "I am done man... Now it's your Turn"
        },860);

        move += 1;
        mlvar += jin1+""+jin2+""+jin3+""+user1+""+user2+""+user3+"####";
        mlthirdfun();
        winstuck();
    }

    winreach();
    winkill();
    }
}

function winreach(){
    if(occupy1 === 1 || occupy2 === 1 || occupy3 === 1){
        winanounce.innerHTML = "Player Win";
        ml.innerHTML = "You win because you reach at end <br> I never do same mistake twice... let's play again!!"
        mlsecondfun();
        restartfun();       
    }
    else if(occupy7 === -1 || occupy8 === -1 || occupy9 === -1){
        winanounce.innerHTML = "Jin Win"; 
        setTimeout(function(){
        ml.innerHTML = "I win because you reach at your end <br> HA! HA! HA! I am invincible "
    },900); 
        mlvar = '';    
        ml1 = ''; ml2 = ''; ml3 = ''; ml4 = '';
        restartfun(); 
    }
}

function winkill(){
    if(user1 === 0 && user2 === 0 && user3 === 0){
        winanounce.innerHTML = "Jin Win"; 
        setTimeout(function(){
        ml.innerHTML = "i win because i killed all your soldiers <br> HA! HA! HA! I am invincible "
    },900); 
        mlvar = ''; 
        ml1 = ''; ml2 = ''; ml3 = ''; ml4 = '';
        restartfun();     
    }
    else if(jin1 === 0 && jin2 === 0 && jin3 === 0){
        winanounce.innerHTML = "player Win"; 
        ml.innerHTML = "you win because you killed all your enemies <br> I never do same mistake twice... let's play again!!"
        mlsecondfun();
        restartfun();      
    }
}
function winstuck(){
    stuck = 0;
    if(occupy1 + occupy2 + occupy3 + occupy4 + occupy5 + occupy6 + occupy7 + occupy8 + occupy9 === 0){
        if(((user1 - 3 === jin1 || user1 - 3 === jin2 || user1 - 3 === user2) && (user1 - 2 !== jin1 && user1 - 2 !== jin2 && user1 -2 !== jin3)) || user1 ===0){
            stuck += 1; 
        }
        if(((user2 - 3 === jin1 || user2 - 3 === jin2 || user2 - 3 === jin3 || user2 - 3 === user1 || user2 - 3 === user3) && ((user2 - 2 !== jin2 && user2 - 2 !== jin3 ) || ( user2 - 4 !== jin1 && user2 - 4 !== jin2))) || user2 === 0){
            stuck += 1; 
        }
        if(((user3 - 3 === jin2 || user3 - 3 === jin3 || user3 - 3 === user2) && (user3 - 4 !== jin1 && user3 - 4 !== jin2 && user3 - 4 !== jin3)) || user3 === 0){
            stuck += 1; 
        }
    
    }

    if(stuck === 3){ 
        if(userstuck === 1){ 
            winanounce.innerHTML = "Jin Win"; 
            setTimeout(function(){
            ml.innerHTML = "i win because i left nothing you to move <br> HA! HA! HA! I am invincible "
        },900); 
            mlvar = '';
            ml1 = ''; ml2 = ''; ml3 = ''; ml4 = '';
            restartfun();
        }
        else if(jinstuck === 1){
            winanounce.innerHTML = "player Win";
            ml.innerHTML = "You win because you left nothing me to move <br> I never do same mistake twice... let's play again!!"
            mlsecondfun();
            restartfun();
        }
    }
}

function restartfun(){
    jinmovepermission = 1;
    jinmovechangevar1 = 0; jinmovechangevar2 = 0; jinmovechangevar3 = 0; jinmovechangevar4 = 0; jinmovechangevar5 = 0; jinmovechangevar6 = 0; jinmovechangevar7 = 0; jinmovechangevar8 = 0; jinmovechangevar9 = 0;
    orkoicharanahi = 0;
    jinmovechangevar = 0;
    round += 1;
    move = 0;
    occupy1 = -1; occupy2 = -1; occupy3 = -1; occupy4 = 0; occupy5 = 0; occupy6 = 0; occupy7 = 1; occupy8 = 1; occupy9 = 1;
    usermove = 0;
    randomnum = 0; randomdir = 0;
    confrmjinmove = 0;
    userdiamove = 0;
    user1 = 7; user2 = 8; user3 = 9; jin1 = 1; jin2 = 2; jin3 = 3; 
    stuck = 0, userstuck = 0, jinstuck = 0;

    stuckmover = 1;

    nextlvl.style.display = "block";
    
     
}

function nextlvlfun(){
    one.style.background = jinbg;
    two.style.background = jinbg;
    thr.style.background = jinbg;
    fou.style.background = 'none';
    fiv.style.background = 'none';
    six.style.background = 'none';
    sev.style.background = userbg;
    eig.style.background = userbg;
    nin.style.background = userbg;

    
    one.style.backgroundColor = 'white';
    two.style.backgroundColor = 'white';
    thr.style.backgroundColor = 'white';
    fou.style.backgroundColor = 'white';
    fiv.style.backgroundColor = 'white';
    six.style.backgroundColor = 'white';
    sev.style.backgroundColor = 'white';
    eig.style.backgroundColor = 'white';
    nin.style.backgroundColor = 'white';

    
    one.style.backgroundSize = '100% 100%';
    two.style.backgroundSize = '100% 100%';
    thr.style.backgroundSize = '100% 100%';
    fou.style.backgroundSize = '100% 100%';
    fiv.style.backgroundSize = '100% 100%';
    six.style.backgroundSize = '100% 100%';
    sev.style.backgroundSize = '100% 100%';
    eig.style.backgroundSize = '100% 100%';
    nin.style.backgroundSize = '100% 100%';
    
    occupy1 = -1; occupy2 = -1; occupy3 = -1; occupy4 = 0; occupy5 = 0; occupy6 = 0; occupy7 = 1; occupy8 = 1; occupy9 = 1;
    usermove = 0;
    randomnum = 0; randomdir = 0;
    confrmjinmove = 0;
    userdiamove = 0;
    user1 = 7; user2 = 8; user3 = 9; jin1 = 1; jin2 = 2; jin3 = 3; 
    stuck = 0, userstuck = 0, jinstuck = 0;

    stuckmover = 0;

    nextlvl.style.display = "none";
    winanounce.innerHTML = '';
    ml.innerHTML = "Let's Begin boi... it is your Turn";
 }

 function mlsecondfun(){
     fml1 += ml1;
     fml2 += ml2;
     fml3 += ml3;
     fml4 += ml4;

     ml1 = '';
     ml2 = '';
     ml3 = '';
     ml4 = '';

     
    
 }

 function mlthirdfun(){ 
    if(move === 1){
        ml1 += mlvar
    }
    else if(move === 2){
        ml2 += mlvar;
    }
    else if(move === 3){
        ml3 += mlvar;
    }
    else if(move === 4){
        ml4 += mlvar;
    }
    
    mlvar = '';
    
 }

var ml = document.getElementById('ml');

function mlcheck(){
    currentpos = jin1+""+jin2+""+jin3+""+user1+""+user2+""+user3;
    
    if(round > 1 && orkoicharanahi === 0){
        if(move === 0){ 
            look1 = fml1.includes(currentpos); 
            if(look1 === true){
                jinmovechangefun();
            }
        }
        else if(move === 1){
            look2 = fml2.includes(currentpos);
            if(look2 === true){
                jinmovechangefun();
            }
        }
        else if(move === 2){
            look3 = fml3.includes(currentpos);
            if(look3 === true){
                jinmovechangefun();
            }
        }
        else if(move === 3){
            look4 = fml4.includes(currentpos);
            if(look4 === true){
                jinmovechangefun();
            }
        }
    }
    
    
}

function jinmovechangefun(){  
    jinmovepermission = 0;
jinmovechangevar = jinmovechangevar1 + jinmovechangevar2 + jinmovechangevar3 + jinmovechangevar4 + jinmovechangevar5 + jinmovechangevar6 + jinmovechangevar7 + jinmovechangevar8 + jinmovechangevar9;

     
    if(randomnum === 0){
        if(randomdir === 0){
            jinmovechangevar1 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 

        }
        else if(randomdir === 1){
            jinmovechangevar2 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 

        }
        else if(randomdir === 2){
            jinmovechangevar3 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 
  
        }
    }

    else if(randomnum === 1){
        if(randomdir === 0){
            jinmovechangevar4 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 

        }
        else if(randomdir === 1){
            jinmovechangevar5 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 

        }
        else if(randomdir === 2){
            jinmovechangevar6 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 
            
        }
    }

    else if(randomnum === 2){
        if(randomdir === 0){
            jinmovechangevar7 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 

        }
        else if(randomdir === 1){
            jinmovechangevar8 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 

        }
        else if(randomdir === 2){
            jinmovechangevar9 += 1;
            user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 
            
        }
    }

    if(jinmovechangevar > 50){
        user1 = user1p ; user2 = user2p ; user3 = user3p ; jin1 = jin1p ; jin2 = jin2p ; jin3 = jin3p; 
        
    }
}

function picsize(){
    
    one.style.backgroundSize = '100% 100%';
    two.style.backgroundSize = '100% 100%';
    thr.style.backgroundSize = '100% 100%';
    fou.style.backgroundSize = '100% 100%';
    fiv.style.backgroundSize = '100% 100%';
    six.style.backgroundSize = '100% 100%';
    sev.style.backgroundSize = '100% 100%';
    eig.style.backgroundSize = '100% 100%';
    nin.style.backgroundSize = '100% 100%';
       
    one.style.backgroundColor = 'white';
    two.style.backgroundColor = 'white';
    thr.style.backgroundColor = 'white';
    fou.style.backgroundColor = 'white';
    fiv.style.backgroundColor = 'white';
    six.style.backgroundColor = 'white';
    sev.style.backgroundColor = 'white';
    eig.style.backgroundColor = 'white';
    nin.style.backgroundColor = 'white';
}
/*
 
*/






var menubarid = document.getElementById('menubarid');
var menucloseid = document.getElementById('menucloseid');
var gameid = document.getElementById('gameid');
var beforegameid = document.getElementById('beforegameid');
var tripledotid = document.getElementById('tripledotid');
var inst = document.getElementById('inst');

var instvar = 1;


function menuopenfun(){ 
    menubarid.style.display = 'block';
    menucloseid.style.display = 'block';
    tripledotid.style.display = 'none';
}

function menuclosefun(){
    menubarid.style.display = 'none';
    menucloseid.style.display = 'none';
    tripledotid.style.display = 'block';
}
function refreshfun(){
    window.open('chessLite.html' , '_self');
}
function newgamefun(){
    beforegameid.style.display = 'none';
    gameid.style.display = 'block';
}
function instructionfun(){
    if(instvar === 1){
        inst.style.display = 'block';
        instvar = 0
    }
    else{
        inst.style.display = 'none';
        instvar = 1;
    }
}