let digitalElement=document.querySelector('.digital');
let sElement=document.querySelector('.p_s');
let mElement=document.querySelector('.p_m');
let hElement=document.querySelector('.p_h');


function updateClock(){

    const now=new Date();
    let hour =now.getHours();
    let minute=now.getMinutes();
    let second=now.getSeconds();
    let day=now.getDate();
    let month=now.getMonth();
    let year=now.getUTCFullYear();
    let semana=now.getDay()

    var mesExtenso = ["Janeiro", "Fevereiro", "Março", 
    "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", 
    "Outubro", "Novembro", "Dezembro"];

    let semanaExtenso=['domingo','segunda-feira','terça-feira','quarta-feira ','quinta-feira','sexta-feira','sabado'];
    let data_atual=`${semanaExtenso[semana]},${fixZero(day)} de ${mesExtenso[month]} de ${year}`;


    digitalElement.innerHTML=`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sdeg=((360/60)*second)-90;
    let mdeg=((360/60) * minute)-90;
    let hdeg=((360/12) * hour)-90;
    
    sElement.style.transform=`rotate(${sdeg}deg)`;
    mElement.style.transform=`rotate(${mdeg}deg)`;
    hElement.style.transform=`rotate(${hdeg}deg)`;

   
  document.querySelector('.data').innerHTML=data_atual;
    if (6<=hour && hour <12) {

        document.querySelector('#back').classList.add('manha');

    }else if (hour < 18) {

        document.querySelector('#back').classList.add('tarde');

    }else {

        document.querySelector('#imagen').classList.add('noite');

}
           
           

   }  
function fixZero(time){
    return time <10 ? `0${time}`:time;
}


setInterval(updateClock,1000);
updateClock();