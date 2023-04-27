async function loadData(url){
    let req = await fetch(url)
    let res = await req.json()
    return [res,req];
}
function wichHourNow(){
    switch(new Date().getHours().toString()){
        case '08' : return 1;
        case '09' : return 2;
        case '10' : return 3;
        case '11' : return 4;
        case '14' : return 5;
        case '15' : return 6;
        case '16' : return 7;
        case '17' : return 8;
    }
}
function getDayName(day){
    switch(day){
        case '1' : return 'Lundi';
        case '2' : return 'Mardi';
        case '3' : return 'Mercredi';
        case '4' : return 'Jeudi';
        case '5' : return 'Vendredi';
        case '6' : return 'Samedi';
    }
}
export {loadData, wichHourNow, getDayName}