https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript?fbclid=IwAR16I1IWdpqzk9a7cE5joqPfqQQPwBQ7bhDwbEOl81hdDXgRat_iuyt15XI


function stringToArray(string) {
  const mySplit = string.split(" ", string.length);
  return mySplit;
}


https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript?fbclid=IwAR3C3WVyVuG9CxUPZ5kBmCidcNk2UL_KipDSSXB_7w3w306muY2R8vfOJsc


function DNAtoRNA(dna) {
  let repl = /T/gi;
  return dna.replace(repl, "U");
}


https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript?fbclid=IwAR09xl_nPRxJVYAX69pwR9ZHSfwYz-kUX4jAKhep1WNj3iFTkLveTsgDNcU

var min = function(list) {
   return Math.min(...list);
};

var max = function(list) {
   return Math.max(...list);
};


https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript?fbclid=IwAR1MXNhiy2aG6nSlNGzCe-XmlyTKMm_NimvGgTfCRX83qx5nKfYjYrwdBUw

function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min(...arr);
  }
  return arr.indexOf(Math.min(...arr));
}

