function cons(a, b) {
  return (m) => {
    if(m == 0) return a;
    else if(m == 1) return b;
    else throw `Argument is not 0 or 1. CONS ${m}`;
  };
};

function car(c) {
  c(0);
};

function cdr(c) {
  c(1);
};

// exercise 2.7
function make_interval(a, b) {
  return a < b ? cons(a, b) : cons(b, a);
};

function lower_bound(i) {
  car(i);
};

function upper_bound(i) {
  cdr(i);
};

// exercise 2.8
