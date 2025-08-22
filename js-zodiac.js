alert('This might be harmful to your device?')
let birthdate; let Umonth; let Uday ; let zodaic_sign;
function mysign(){
    document.getElementById('yourzodiac').style.width = "80%"
    document.getElementById('yourzodiac').style.color = "white"
    document.getElementById('yourzodiac').innerHTML = "Your zodiac sign is" + " " + zodaic_sign
}
function invaild(){
    document.getElementById('yourzodiac').style.width = "80%"
    document.getElementById('yourzodiac').style.color = "red"
    document.getElementById('yourzodiac').innerHTML = zodaic_sign
}

function yoursign() {
     birthdate = new Date(document.getElementById('userbyear').value);
     Umonth = birthdate.getMonth() + 1; 
     Uday = birthdate.getDate();
    if ((Umonth === 1 && Uday >= 20) || (Umonth === 14 && Uday <= 18)) {
        zodaic_sign = "Aquarius"
        mysign()
    }
    else if ((Umonth === 2 && Uday >= 19) || (Umonth === 15 && Uday <= 20)) {
        zodaic_sign = "Pisces"
        mysign()
    }
    else if ((Umonth === 3 && Uday >= 21) || (Umonth === 4 && Uday <= 19)) {
        zodaic_sign = "Aries"
        mysign()
    } 
    else if ((Umonth === 4 && Uday >= 20) || (Umonth === 5 && Uday <= 20)) {
        zodaic_sign = "Tarus"
        mysign()
    }
    else if ((Umonth === 5 && Uday >= 21) || (Umonth === 6 && Uday <= 20)) {
        zodaic_sign = "Gemini"
        mysign()
    }
    else if ((Umonth === 6 && Uday >= 21) || (Umonth === 7 && Uday <= 22)) {
        zodaic_sign = "Cancer"
        mysign()
    }
    else if ((Umonth === 7 && Uday >= 23) || (Umonth === 8 && Uday <= 22)) {
        zodaic_sign = "Leo"
        mysign()
    }
    else if ((Umonth === 8 && Uday >= 23) || (Umonth === 9 && Uday <= 22)) {
        zodaic_sign = "Virgo"
        mysign()
    }
    else if ((Umonth === 9 && Uday >= 23) || (Umonth === 10 && Uday <= 22)) {
        zodaic_sign = "Libra"
        mysign()
    }
    else if ((Umonth === 10 && Uday >= 23) || (Umonth === 11 && Uday <= 21)) {
        zodaic_sign = "Scorpio"
        mysign()
    }
    else if ((Umonth === 11 && Uday >= 22) || (Umonth === 12 && Uday <= 21)) {
        zodaic_sign = "Sagittarius"
        mysign()
    }
    else if ((Umonth === 12 && Uday >= 22) || (Umonth === 13 && Uday <= 19)) {
        zodaic_sign = "Capricon"
        mysign()
    }
    else if ((Umonth == null ) || (Uday == null)){
        zodaic_sign = "Input your date of birth"
        invaild()
    }
        else  {
        zodaic_sign = "Unknown"
    }

}
function moreinfo(){
    
}

