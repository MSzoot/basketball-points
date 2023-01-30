// Get Ids

const homeCount = document.getElementById("home-count");
const guestCount = document.getElementById("guest-count");
const homeFauls = document.getElementById("home-fauls");
const guestFauls = document.getElementById("guest-fauls");

//Set counts to 0

let hCount = 0;
let gCount = 0;
let hFauls = 0;
let gFauls = 0;

// update html elements 

const setHtml = () => {
    homeFauls.innerText = hFauls;
    guestFauls.innerText = gFauls;
    guestCount.innerText = gCount;
    homeCount.innerText = hCount;
    
}

setHtml(); // set all elements to 0 

// Add points function

const addPoints = (side,points) => {
    if (side == "home" && points === 1){
        hCount++;
    } else if (side == "home" && points === 2){
        hCount += 2;
    } else if (side == "home" && points === 3){
        hCount += 3;   
    } else if ( side == "guest" && points === 1){
        gCount++
    } else if  (side == "guest" && points === 2){
        gCount +=2
    }else if (side == "guest" && points === 3) {
        gCount +=3
    }
    setHtml();
}


const addFaul = (side) => {
    if (side == "home"){
        hFauls++;
    } else if ( side == "guest"){
        gFauls++;
    }
    setHtml();
}


const reset = () => {
    hCount = 0;
    gCount = 0;
    hFauls = 0;
    gFauls = 0;
    setHtml();
}

 //// Timer 


function countdown( elementName, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;
    var twoDigits = (n) =>
    
    {return (n <= 9 ? "0" + n : n);}

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();


    function updateTimer()
    {
        msLeft = endTime - (+new Date);

        if ( msLeft < 1000 ) {
            element.innerHTML = "End";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
}


// countdown( 'timer', 12, 0 )

