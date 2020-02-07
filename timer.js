const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
let countDown = new Date();
let    x = setInterval(function() {

      let now = new Date(),
          distance =countDown-now;
          if (distance <= 0) {
            //clearInterval(x);
           // document.getElementById('done').innerText="Set Time";
          }
          else{
            document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
          }   
    }, second)
    
    function take(){
       countDown = new Date(document.getElementById("id_date").value+"T00:00");
       var x= document.getElementById('user').value;
       document.getElementById('done').innerHTML=x;

    }

    