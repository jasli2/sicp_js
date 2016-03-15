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

// interval interfaces from book
function add_interval(x, y) {
  return make_interval(
    (lower_bound(x) + lower_bound(y)),
    (upper_bound(x) + upper_bound(y))
    );
};

function mul_interval(x, y) {
  var p1 = lower(x) * lower(y);
  var p2 = lower(x) * upper(y);
  var p3 = upper(x) * lower(y);
  var p4 = upper(x) * upper(y);
  
  return make_interval(
    Math.min(p1, p2, p3, p4),
    Math.max(p1, p2, p3, p4)
    );
}

// exercise 2.8
function sub_interval(x, y) {
  return make_interval(
    (lower_bound(x) - upper_bound(y)),
    (upper_bound(x) - lower_bound(y))
    );
};

// exercise 2.9

// exercise 2.10
function div_interval(x, y){
  if(lower_bound(y) == 0 || upper_bound(y) == 0) {
    throw "Cannot dividor interval spans 0";
  }
  
  return mul_interval(x,
    make_intveral(
      (1.0/upper_bound(y)),
      (1.0/lower_bound(y))
      )
  );
};

// exercise 2.11
function mul_inverval_optimize(x, y) {
  if(lower_bound(x) > upper_bound(y)) {
    
  }else if(upper_bound(x) < lower_bound(y)) {
    
  }
}
