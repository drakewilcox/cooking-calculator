var toLiters = function (gallons) {
  return gallons * 3.78541;
  };
  
  var toGallons = function (liters) {
  return liters * .264172;
  };
  
  
  var gallons = parseInt(prompt("Amount in Gallons"));
  //var liters = parseInt(prompt("Amount in Liters"));
  
  
  var result = toLiters(gallons);
  //var result = toGallons(liters);
  
  alert(result);