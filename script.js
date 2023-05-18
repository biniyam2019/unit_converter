const units = document.getElementById("units");
const from = document.getElementById("from");
const to = document.getElementById("to");
const output = document.getElementById("output");
const input = document.getElementById("input");
const reset = document.getElementById("reset");
units.addEventListener("change", function () {

  if (units.value == "length") {
    from.innerHTML = `
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="mi">Mile</option>
                <option value="yd">Yard</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
                `;
    to.innerHTML = `
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="mi">Mile</option>
                <option value="yd">Yard</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
                `;
  } else if (units.value == "area") {
    from.innerHTML = `
                <option value="m2">Meter Square</option>
                <option value="km2">Kilometer Square</option>
                <option value="cm2">Centimeter Square</option>
                <option value="mm2">Millimeter Square</option>
                <option value="mi2">Mile Square</option>
                <option value="yd2">Yard Square</option>
                <option value="ft2">Foot Square</option>
                <option value="in2">Inch Square</option>
                `;
    to.innerHTML = `
                <option value="m2">Meter Square</option>
                <option value="km2">Kilometer Square</option>
                <option value="cm2">Centimeter Square</option>
                <option value="mm2">Millimeter Square</option>
                <option value="mi2">Mile Square</option>
                <option value="yd2">Yard Square</option>
                <option value="ft2">Foot Square</option>
                <option value="in2">Inch Square</option>
                `;
  } else if (units.value == "volume") {
    from.innerHTML = `
               <option value="l">Liters</option>
  <option value="ml">Milliliters</option>
  <option value="gal">Gallons</option>
  <option value="qt">Quarts</option>
  <option value="pt">Pints</option>
  <option value="cup">Cups</option>
  <option value="oz">Ounces</option>
  <option value="tbsp">Tablespoons</option>
  <option value="tsp">Teaspoons</option>
                `;
    to.innerHTML = `
                <option value="l">Liters</option>
  <option value="ml">Milliliters</option>
  <option value="gal">Gallons</option>
  <option value="qt">Quarts</option>
  <option value="pt">Pints</option>
  <option value="cup">Cups</option>
  <option value="oz">Ounces</option>
  <option value="tbsp">Tablespoons</option>
  <option value="tsp">Teaspoons</option>
                `;
  } else if (units.value == "mass") {
    from.innerHTML = `
              <option value="kg">Kilogram</option>
              <option value="g">Gram</option>
              <option value="mg">Miligram</option>
              <option value="lb">Pound</option>
              <option value="oz">Ounce</option>
              `;
    to.innerHTML = `
              <option value="kg">Kilogram</option>
              <option value="g">Gram</option>
              <option value="mg">Miligram</option>
              <option value="lb">Pound</option>
              <option value="oz">Ounce</option>
              `;
  } else if (units.value == "temperature") {
    from.innerHTML = `
             <option value="C">Celsius</option>
  <option value="F">Fahrenheit</option>
  <option value="K">Kelvin</option>
              `;
    to.innerHTML = `
             <option value="C">Celsius</option>
  <option value="F">Fahrenheit</option>
  <option value="K">Kelvin</option>
              `;
  } else if (units.value == "time") {
    from.innerHTML = `
         <option value='sec' >Second</option>
             <option value="min">Minutes</option>
  <option value="hr">Hours</option>
  <option value="day">Days</option>
  <option value="week">Weeks</option>
  <option value="month">Months</option>
  <option value="year">Years</option>
              `;
    to.innerHTML = `
               <option value='sec' >Second</option>
             <option value="min">Minutes</option>
  <option value="hr">Hours</option>
  <option value="day">Days</option>
  <option value="week">Weeks</option>
  <option value="month">Months</option>
  <option value="year">Years</option>
              `;
  } else if (units.value == "speed") {
    from.innerHTML
      = `
              <option value="mps">Meter/Second</option>
              <option value="kph">Kilometer/Hour</option>
              <option value="mph">Mile/Hour</option>
              <option value="fps">Foot/Second</option>
              <option value="knot">Knot</option>
              `;
    to.innerHTML = `
              <option value="mps">Meter/Second</option>
              <option value="kph">Kilometer/Hour</option>
              <option value="mph">Mile/Hour</option>
              <option value="fps">Foot/Second</option>
              <option value="knot">Knot</option>
              `;

  }
  console.log(units.value);
});
//convert units based on input value

  //calculate units
 
  //length take the value from from and to
  function Lengthconverter(fromValue, fromUnit, toUnit)
  {
    if (fromUnit == "m" && toUnit == "km") {
      toValue = fromValue / 1000;
    } else if (fromUnit == "m" && toUnit == "cm") {
      toValue = fromValue * 100;
    } else if (fromUnit == "m" && toUnit == "mm") {
      toValue = fromValue * 1000;
    } else if (fromUnit == "m" && toUnit == "mi") {
      toValue = fromValue / 1609.344;
    } else if (fromUnit == "m" && toUnit == "yd") {
      toValue = fromValue * 1.094;
    } else if (fromUnit == "m" && toUnit == "ft") {
      toValue = fromValue * 3.281;
    } else if (fromUnit == "m" && toUnit == "in") {
      toValue = fromValue * 39.37;
    } else if (fromUnit == "km" && toUnit == "m") {
      toValue = fromValue * 1000;
    } else if (fromUnit == "km" && toUnit == "cm") {
      toValue = fromValue * 100000;
    } else if (fromUnit == "km" && toUnit == "mm") {
      toValue = fromValue * 1000000;
    } else if (fromUnit == "km" && toUnit == "mi") {
      toValue = fromValue / 1.609;
    } else if (fromUnit == "km" && toUnit == "yd") {
      toValue = fromValue * 1094;
    } else if (fromUnit == "km" && toUnit == "ft") {
      toValue = fromValue * 3281;
    } else if (fromUnit == "km" && toUnit == "in") {
      toValue = fromValue * 39370;
    } else if (fromUnit == "cm" && toUnit == "m") {
      toValue = fromValue / 100;
    } else if (fromUnit == "cm" && toUnit == "km") {
      toValue = fromValue / 100000;
    } else if (fromUnit == "cm" && toUnit == "mm") {
      toValue = fromValue * 10;
    } else if (fromUnit == "cm" && toUnit == "mi") {
      toValue = fromValue / 160934;
    } else if (fromUnit == "cm" && toUnit == "yd") {
      toValue = fromValue / 91.44;
    } else if (fromUnit == "cm" && toUnit == "ft") {
      toValue = fromValue / 30.48;
    } else if (fromUnit == "cm" && toUnit == "in") {
      toValue = fromValue / 2.54;
    } else if (fromUnit == "mm" && toUnit == "m") {
      toValue = fromValue / 1000;
    } else if (fromUnit == "mm" && toUnit == "km") {
      toValue = fromValue / 1000000;
    } else if (fromUnit == "mm" && toUnit == "cm") {
      toValue = fromValue / 10;
    } else if (fromUnit == "mm" && toUnit == "mi") {
      toValue = fromValue / 1609000;
    } else if (fromUnit == "mm" && toUnit == "yd") {
      toValue = fromValue / 914;
    } else if (fromUnit == "mm" && toUnit == "ft") {
      toValue = fromValue / 305;
    } else if (fromUnit == "mm" && toUnit == "in") {
      toValue = fromValue / 25.4;
    } else if (fromUnit == "mi" && toUnit == "m") {
      toValue = fromValue * 1609;
    } else if (fromUnit == "mi" && toUnit == "km") {
      toValue = fromValue * 1.609;
    } else if (fromUnit == "mi" && toUnit == "cm") {
      toValue = fromValue * 160934;
    } else if (fromUnit == "mi" && toUnit == "mm") {
      toValue = fromValue * 1609000;
    } else if (fromUnit == "mi" && toUnit == "yd") {
      toValue = fromValue * 1760;
    } else if (fromUnit == "mi" && toUnit == "ft") {
      toValue = fromValue * 5280;
    } else if (fromUnit == "mi" && toUnit == "in") {
      toValue = fromValue * 63360;
    } else if (fromUnit == "yd" && toUnit == "m") {
      toValue = fromValue / 1.094;
    } else if (fromUnit == "yd" && toUnit == "km") {
      toValue = fromValue / 1094;
    } else if (fromUnit == "yd" && toUnit == "cm") {
      toValue = fromValue * 91.44;
    } else if (fromUnit == "yd" && toUnit == "mm") {
      toValue = fromValue * 914;
    } else if (fromUnit == "yd" && toUnit == "mi") {
      toValue = fromValue / 1760;
    } else if (fromUnit == "yd" && toUnit == "ft") {
      toValue = fromValue * 3;
    } else if (fromUnit == "yd" && toUnit == "in") {
      toValue = fromValue * 36;
    } else if (fromUnit == "ft" && toUnit == "m") {
      toValue = fromValue / 3.281;
    } else if (fromUnit == "ft" && toUnit == "km") {
      toValue = fromValue / 3281;
    } else if (fromUnit == "ft" && toUnit == "cm") {
      toValue = fromValue * 30.48;
    } else if (fromUnit == "ft" && toUnit == "mm") {
      toValue = fromValue * 305;
    } else if (fromUnit == "ft" && toUnit == "mi") {
      toValue = fromValue / 5280;
    } else if (fromUnit == "ft" && toUnit == "yd") {
      toValue = fromValue / 3;
    } else if (fromUnit == "ft" && toUnit == "in") {
      toValue = fromValue * 12;
    } else if (fromUnit == "in" && toUnit == "m") {
      toValue = fromValue / 39.37;
    } else if (fromUnit == "in" && toUnit == "km") {
      toValue = fromValue / 39370;
    } else if (fromUnit == "in" && toUnit == "cm") {
      toValue = fromValue * 2.54;
    } else if (fromUnit == "in" && toUnit == "mm") {
      toValue = fromValue * 25.4;
    }
    else if (fromUnit == "in" && toUnit == "mi") {
      toValue = fromValue / 63360;
    } else if (fromUnit == "in" && toUnit == "yd") {
      toValue = fromValue / 36;
    } else if (fromUnit == "in" && toUnit == "ft") {
      toValue = fromValue / 12;
    } else {
      toValue = fromValue;
    }
    return toValue;
  
  }
  
  //for temperature
  function tempConverter(fromValue, fromUnit, toUnit) {
    let toValue;
    if (fromUnit == "C" && toUnit == "F") {
      toValue = (fromValue * 9 / 5) + 32;
    } else if (fromUnit == "C" && toUnit == "K") {
      toValue = fromValue + 273.15;
    } else if (fromUnit == "F" && toUnit == "C") {
      toValue = (fromValue - 32) * 5 / 9;
    } else if (fromUnit == "F" && toUnit == "K") {
      toValue = (fromValue - 32) * 5 / 9 + 273.15;
    } else if (fromUnit == "K" && toUnit == "C") {
      toValue = fromValue - 273.15;
    } else if (fromUnit == "K" && toUnit == "F") {
      toValue = (fromValue - 273.15) * 9 / 5 + 32;
    } else {
      toValue = fromValue;
    }
    return toValue;
  }
  //for weight
  function Massconverter(fromValue, fromUnit, toUnit) {
    let toValue;
    if (fromUnit == "kg" && toUnit == "g") {
      toValue = fromValue * 1000;
    } else if (fromUnit == "kg" && toUnit == "mg") {
      toValue = fromValue * 1000000;
    } else if (fromUnit == "kg" && toUnit == "lb") {
      toValue = fromValue * 2.205;
    } else if (fromUnit == "kg" && toUnit == "oz") {
      toValue = fromValue * 35.274;
    } else if (fromUnit == "g" && toUnit == "kg") {
      toValue = fromValue / 1000;
    } else if (fromUnit == "g" && toUnit == "mg") {
      toValue = fromValue * 1000;
    } else if (fromUnit == "g" && toUnit == "lb") {
      toValue = fromValue / 454;
    } else if (fromUnit == "g" && toUnit == "oz") {
      toValue = fromValue / 28.35;
    } else if (fromUnit == "mg" && toUnit == "kg") {
      toValue = fromValue / 1000000;
    } else if (fromUnit == "mg" && toUnit == "g") {
      toValue = fromValue / 1000;
    } else if (fromUnit == "mg" && toUnit == "lb") {
      toValue = fromValue / 453592;
    } else if (fromUnit == "mg" && toUnit == "oz") {
      toValue = fromValue / 28350;
    } else if (fromUnit == "lb" && toUnit == "kg") {
      toValue = fromValue / 2.205;
    } else if (fromUnit == "lb" && toUnit == "g") {
      toValue = fromValue * 454;
    } else if (fromUnit == "lb" && toUnit == "mg") {
      toValue = fromValue * 453592;
    } else if (fromUnit == "lb" && toUnit == "oz") {
      toValue = fromValue * 16;
    } else if (fromUnit == "oz" && toUnit == "kg") {
      toValue = fromValue / 35.274;
    } else if (fromUnit == "oz" && toUnit == "g") {
      toValue = fromValue * 28.35;
    } else if (fromUnit == "oz" && toUnit == "mg") {
      toValue = fromValue * 28350;
    } else if (fromUnit == "oz" && toUnit == "lb") {
      toValue = fromValue / 16;
    } else {
      toValue = fromValue;
    }
    return toValue;
  }
  //for volume
  function Volumeconverter(fromValue, fromUnit, toUnit) {
    let toValue;
    if (fromUnit == "l" && toUnit == "ml") {
      toValue = fromValue * 1000;
    } else if (fromUnit == "l" && toUnit == "gal") {
      toValue = fromValue / 3.785;
    } else if (fromUnit == "l" && toUnit == "qt") {
      toValue = fromValue * 1.057;
    } else if (fromUnit == "l" && toUnit == "pt") {
      toValue = fromValue * 2.113;
    } else if (fromUnit == "l" && toUnit == "cup") {
      toValue = fromValue * 4.227;
    } else if (fromUnit == "l" && toUnit == "oz") {
      toValue = fromValue * 33.814;
    } else if (fromUnit == "l" && toUnit == "tbsp") {
      toValue = fromValue * 67.628;
    } else if (fromUnit == "l" && toUnit == "tsp") {
      toValue = fromValue * 202.884;
    } else if (fromUnit == "ml" && toUnit == "l") {
      toValue = fromValue / 1000;
    } else if (fromUnit == "ml" && toUnit == "gal") {
      toValue = fromValue / 3785;
    } else if (fromUnit == "ml" && toUnit == "qt") {
      toValue = fromValue / 946;
    } else if (fromUnit == "ml" && toUnit == "pt") {
      toValue = fromValue / 473;
    } else if (fromUnit == "ml" && toUnit == "cup") {
      toValue = fromValue / 240;
    } else if (fromUnit == "ml" && toUnit == "oz") {
      toValue = fromValue / 29.574;
    } else if (fromUnit == "ml" && toUnit == "tbsp") {
      toValue = fromValue / 14.787;
    } else if (fromUnit == "ml" && toUnit == "tsp") {
      toValue = fromValue / 4.929;
    } else if (fromUnit == "gal" && toUnit == "l") {
      toValue = fromValue * 3.785;
    } else if (fromUnit == "gal" && toUnit == "ml") {
      toValue = fromValue * 3785;
    } else if (fromUnit == "gal" && toUnit == "qt") {
      toValue = fromValue * 4;
    } else if (fromUnit == "gal" && toUnit == "pt") {
      toValue = fromValue * 8;
    } else if (fromUnit == "gal" && toUnit == "cup") {
      toValue = fromValue * 16;
    } else if (fromUnit == "gal" && toUnit == "oz") {
      toValue = fromValue * 128;
    } else if (fromUnit == "gal" && toUnit == "tbsp") {
      toValue = fromValue * 256;
    } else if (fromUnit == "gal" && toUnit == "tsp") {
      toValue = fromValue * 768;
    } else if (fromUnit == "qt" && toUnit == "l") {
      toValue = fromValue / 1.057;
    } else if (fromUnit == "qt" && toUnit == "ml") {
      toValue = fromValue * 946;
    } else if (fromUnit == "qt" && toUnit == "gal") {
      toValue = fromValue / 4;
    } else if (fromUnit == "qt" && toUnit == "pt") {
      toValue = fromValue * 2;
    } else if (fromUnit == "qt" && toUnit == "cup") {
      toValue = fromValue * 4;
    } else if (fromUnit == "qt" && toUnit == "oz") {
      toValue = fromValue * 32;
    } else if (fromUnit == "qt" && toUnit == "tbsp") {
      toValue = fromValue * 64;
    } else if (fromUnit == "qt" && toUnit == "tsp") {
      toValue = fromValue * 192;
    } else if (fromUnit == "pt" && toUnit == "l") {
      toValue = fromValue / 2.113;
    } else if (fromUnit == "pt" && toUnit == "ml") {
      toValue = fromValue * 473;
    } else if (fromUnit == "pt" && toUnit == "gal") {
      toValue = fromValue / 8;
    } else if (fromUnit == "pt" && toUnit == "qt") {
      toValue = fromValue / 2;
    } else if (fromUnit == "pt" && toUnit == "cup") {
      toValue = fromValue * 2;
    } else if (fromUnit == "pt" && toUnit == "oz") {
      toValue = fromValue * 16;
    } else if (fromUnit == "pt" && toUnit == "tbsp") {
      toValue = fromValue * 32;
    } else if (fromUnit == "pt" && toUnit == "tsp") {
      toValue = fromValue * 96;
    } else if (fromUnit == "cup" && toUnit == "l") {
      toValue = fromValue / 4.227;
    } else if (fromUnit == "cup" && toUnit == "ml") {
      toValue = fromValue * 240;
    } else if (fromUnit == "cup" && toUnit == "gal") {
      toValue = fromValue / 16;
    } else if (fromUnit == "cup" && toUnit == "qt") {
      toValue = fromValue / 4;
    } else if (fromUnit == "cup" && toUnit == "pt") {
      toValue = fromValue / 2;
    } else if (fromUnit == "cup" && toUnit == "oz") {
      toValue = fromValue * 8;
    } else if (fromUnit == "cup" && toUnit == "tbsp") {
      toValue = fromValue * 16;
    } else if (fromUnit == "cup" && toUnit == "tsp") {
      toValue = fromValue * 48;
    } else if (fromUnit == "oz" && toUnit == "l") {
      toValue = fromValue / 33.814;
    } else if (fromUnit == "oz" && toUnit == "ml") {
      toValue = fromValue * 29.574;
    } else if (fromUnit == "oz" && toUnit == "gal") {
      toValue = fromValue / 128;
    } else if (fromUnit == "oz" && toUnit == "qt") {
      toValue = fromValue / 32;
    } else if (fromUnit == "oz" && toUnit == "pt") {
      toValue = fromValue / 16;
    } else if (fromUnit == "oz" && toUnit == "cup") {
      toValue = fromValue / 8;
    } else if (fromUnit == "oz" && toUnit == "tbsp") {
      toValue = fromValue * 2;
    } else if (fromUnit == "oz" && toUnit == "tsp") {
      toValue = fromValue * 6;

    } else if (fromUnit == "tbsp" && toUnit == "l") {
      toValue = fromValue / 67.628;
    } else if (fromUnit == "tbsp" && toUnit == "ml") {
      toValue = fromValue * 14.787;
    } else if (fromUnit == "tbsp" && toUnit == "gal") {
      toValue = fromValue / 256;
    } else if (fromUnit == "tbsp" && toUnit == "qt") {
      toValue = fromValue / 64;
    } else if (fromUnit == "tbsp" && toUnit == "pt") {
      toValue = fromValue / 32;
    } else if (fromUnit == "tbsp" && toUnit == "cup") {
      toValue = fromValue / 16;
    } else if (fromUnit == "tbsp" && toUnit == "oz") {
      toValue = fromValue / 2;
    } else if (fromUnit == "tbsp" && toUnit == "tsp") {
      toValue = fromValue * 3;
    }
    else if (fromUnit == "tsp" && toUnit == "l") {
      toValue = fromValue / 202.884;
    } else if (fromUnit == "tsp" && toUnit == "ml") {
      toValue = fromValue * 4.929;
    } else if (fromUnit == "tsp" && toUnit == "gal") {
      toValue = fromValue / 768;
    } else if (fromUnit == "tsp" && toUnit == "qt") {
      toValue = fromValue / 192;
    } else if (fromUnit == "tsp" && toUnit == "pt") {
      toValue = fromValue / 96;
    } else if (fromUnit == "tsp" && toUnit == "cup") {
      toValue = fromValue / 48;
    } else if (fromUnit == "tsp" && toUnit == "oz") {
      toValue = fromValue / 6;
    } else if (fromUnit == "tsp" && toUnit == "tbsp") {
      toValue = fromValue / 3;
    }
    else {
      toValue = fromValue;
    }
    return toValue;
  }

  
    function Timeconverter(fromValue, fromUnit, toUnit)
    {
     let toValue;
      if (fromUnit == "sec" && toUnit == "min") {
        toValue = fromValue / 60 ;
      } else if (fromUnit == "sec" && toUnit == "hr") {
        toValue = fromValue / 3600 ;
      }
      else if (fromUnit == "sec" && toUnit == "day") {
     toValue=fromValue / 86400;

    }
    else if (fromUnit == "sec" && toUnit == "week") {
      toValue=fromValue / 604800;
    }
    else if (fromUnit == "sec" && toUnit == "month") {
      toValue=fromValue / 2628000;
    }
    else if (fromUnit == "sec" && toUnit == "year") {
      toValue=fromValue / 31536000;
    }
    else if (fromUnit == "min" && toUnit == "sec") {
      toValue=fromValue * 60;
    }
    else if (fromUnit == "min" && toUnit == "hr") {
      toValue=fromValue / 60;
    }
    else if (fromUnit == "min" && toUnit == "day") {
      toValue=fromValue / 1440;
    }
    else if (fromUnit == "min" && toUnit == "week") {
      toValue=fromValue / 10080;
    }
    else if (fromUnit == "min" && toUnit == "month") {
      toValue=fromValue / 43800;
    }
    else if (fromUnit == "min" && toUnit == "year") {
      toValue=fromValue / 525600;
    }
    else if (fromUnit == "hr" && toUnit == "sec") {
      toValue=fromValue * 3600;
    }
    else if (fromUnit == "hr" && toUnit == "min") {
      toValue=fromValue * 60;
    }
    else if (fromUnit == "hr" && toUnit == "day") {
      toValue=fromValue / 24;
    }
    else if (fromUnit == "hr" && toUnit == "week") {
      toValue=fromValue / 168;
    }
    else if (fromUnit == "hr" && toUnit == "month") {
      toValue=fromValue / 730;
    }
    else if (fromUnit == "hr" && toUnit == "year") {
      toValue=fromValue / 8760;
    }
    else if (fromUnit == "day" && toUnit == "sec") {
      toValue=fromValue * 86400;
    }
    else if (fromUnit == "day" && toUnit == "min") {
      toValue=fromValue * 1440;
    }
    else if (fromUnit == "day" && toUnit == "hr") {
      toValue=fromValue * 24;
    }
    else if (fromUnit == "day" && toUnit == "week") {
      toValue=fromValue / 7;
    }
    else if (fromUnit == "day" && toUnit == "month") {
      toValue=fromValue / 30.417;
    }
    else if (fromUnit == "day" && toUnit == "year") {
      toValue=fromValue / 365;
    }
    else if (fromUnit == "week" && toUnit == "sec") {
      toValue=fromValue * 604800;
    }
    else if (fromUnit == "week" && toUnit == "min") {
      toValue=fromValue * 10080;
    }
    else if (fromUnit == "week" && toUnit == "hr") {
      toValue=fromValue * 168;
    }
    else if (fromUnit == "week" && toUnit == "day") {
      toValue=fromValue * 7;
    }
    else if (fromUnit == "week" && toUnit == "month") {
      toValue=fromValue / 4.345;
    }
    else if (fromUnit == "week" && toUnit == "year") {
      toValue=fromValue / 52.143;
    }
    else if (fromUnit == "month" && toUnit == "sec") {
      toValue=fromValue * 2628000;
    }
    else if (fromUnit == "month" && toUnit == "min") {
      toValue=fromValue * 43800;
    }
    else if (fromUnit == "month" && toUnit == "hr") {
      toValue=fromValue * 730;
    }
    else if (fromUnit == "month" && toUnit == "day") {
      toValue=fromValue * 30.417;
    }
    else if (fromUnit == "month" && toUnit == "week") {
      toValue=fromValue * 4.345;
    }
    else if (fromUnit == "month" && toUnit == "year") {
      toValue=fromValue / 12;
    }
    else if (fromUnit == "year" && toUnit == "sec") {
      toValue=fromValue * 31536000;
    }

    else if (fromUnit == "year" && toUnit == "min") {

      toValue=fromValue * 525600;
    }
    else if (fromUnit == "year" && toUnit == "hr") {
      toValue=fromValue * 8760;
    }
    else if (fromUnit == "year" && toUnit == "day") {
      toValue=fromValue * 365;
    }
    else if (fromUnit == "year" && toUnit == "week") {
      toValue=fromValue * 52.143;
    }
    else if (fromUnit == "year" && toUnit == "month") {
      toValue=fromValue * 12;
    }
    else {
      toValue = fromValue;
    }
    return toValue;
  }

// for area
function Areaconverter(fromValue, fromUnit, toUnit)
{ let toValue;
  if(fromUnit == 'm2' && toUnit == 'km2' )
  {
    //calculate toValue
    toValue = fromValue / 1000000;
  }
  else if(fromUnit == 'm2' && toUnit == 'cm2' )
  {
    
    toValue = fromValue * 10000;
  }
  else if(fromUnit == 'm2' && toUnit == 'mm2' )
  {
      
      toValue = fromValue * 1000000;
  }
  else if(fromUnit == 'm2' && toUnit == 'ft2' )
    {       toValue = fromValue * 10.764;
    }
    else if(fromUnit == 'm2' && toUnit == 'in2' )
    { toValue = fromValue * 1550;
    }
    if (fromUnit == "m2" && toUnit == "km2") {
      toValue = fromValue / 1000000;
    } else if (fromUnit == "m2" && toUnit == "cm2") {
      toValue = fromValue * 10000;
    } else if (fromUnit == "m2" && toUnit == "mm2") {
      toValue = fromValue * 1000000;
    } else if (fromUnit == "m2" && toUnit == "ft2") {
      toValue = fromValue * 10.764;
    } else if (fromUnit == "m2" && toUnit == "in2") {
      toValue = fromValue * 1550;
    } else if (fromUnit == "m2" && toUnit == "yd2") {
      toValue = fromValue * 1.196;
    } else if (fromUnit == "ft2" && toUnit == "m2") {
      toValue = fromValue / 10.764;
    } else if (fromUnit == "in2" && toUnit == "m2") {
      toValue = fromValue / 1550;
    } else if (fromUnit == "yd2" && toUnit == "m2") {
      toValue = fromValue / 1.196;
    } else if (fromUnit == "km2" && toUnit == "m2") {
      toValue = fromValue * 1000000;
    } else if (fromUnit == "cm2" && toUnit == "m2") {
      toValue = fromValue / 10000;
    } else if (fromUnit == "mm2" && toUnit == "m2") {
      toValue = fromValue / 1000000;
    } 
    else {
      toValue = fromValue;
    }

    return toValue;
    
}



//for speed
function Speedconverter(fromValue, fromUnit, toUnit)
{ let toValue;
  if(fromUnit == 'mps' && toUnit == 'kph' )
  {
    //calculate toValue
    toValue = fromValue * 3.6;
  }
  else if(fromUnit == 'mps' && toUnit == 'mph' )
  {
      
      toValue = fromValue * 2.237;
  }
  else if(fromUnit == 'mps' && toUnit == 'knot' )
  {
          
          toValue = fromValue * 1.944;
  }
  //finish the rest
  else if (fromUnit == 'kph' && toUnit == 'mps') {
    toValue = fromValue * (5 / 18);
} else if (fromUnit == 'kph' && toUnit == 'mph') {
    toValue = fromValue * 0.621371;
} else if (fromUnit == 'kph' && toUnit == 'knot') {
    toValue = fromValue * 0.539957;
} else if (fromUnit == 'mph' && toUnit == 'mps') {
    toValue = fromValue * 0.44704;
} else if (fromUnit == 'mph' && toUnit == 'kph') {
    toValue = fromValue * 1.60934;
} else if (fromUnit == 'mph' && toUnit == 'knot') {
    toValue = fromValue * 0.868976;
} else if (fromUnit == 'knot' && toUnit == 'mps') {
    toValue = fromValue * 0.514444;
} else if (fromUnit == 'knot' && toUnit == 'kph') {
    toValue = fromValue * 1.852;
} else if (fromUnit == 'knot' && toUnit == 'mph') {
    toValue = fromValue * 1.15078;
}
else
{
  toValue = fromValue;
}
return toValue;
}
















  //output
  var convert = document.getElementById('convert');
  convert.addEventListener('click',function(){

     var fromUnit = from.value;
     var toUnit = to.value;
     var fromValue = input.value;
     var toValue;
    var unit=units.value;
     console.log(unit)
     switch(unit)
     {
        case 'time':
          toValue = Timeconverter(fromValue, fromUnit, toUnit);
          break;
        case 'area':
          toValue = Areaconverter(fromValue, fromUnit, toUnit);
          break;
        case 'speed':
          toValue = Speedconverter(fromValue, fromUnit, toUnit);
          break;
          case 'volume':
            toValue = Volumeconverter(fromValue, fromUnit, toUnit);
            break;
            case 'length':
              toValue = Lengthconverter(fromValue, fromUnit, toUnit);
              break;
              case 'temperature':
                toValue = tempConverter(fromValue, fromUnit, toUnit);
                break;
                case 'mass':
                  toValue = Massconverter(fromValue, fromUnit, toUnit);
                  break;
              

     }
      output.innerHTML = toValue;
  

  })



//clear input and output





