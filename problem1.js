function func(a, b) {
  ans = 0;
  for (var x = a; x <= b; x++) {
    if (x % 3 === 0)
      ans += x;
    else if (x % 5 === 0)
      ans += x;
  }
  return ans;
};

var y = func(1, 1000);
console.log(y);