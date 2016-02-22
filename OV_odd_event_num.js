

var input_ = 5;

OE(input_);

function Ev(num) { return (num%2)==0; }
function Od(num) { return !Ev(num); }

function OE(input_){ 

  var OE = {
    odd: 0,
    even: 0
  };

  OE.odd = Od(input_);
  OE.even = Ev(input_);

  console.log(OE);

}
