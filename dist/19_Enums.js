"use strict";
// Enums in TypeScript
// enum WeatherCondition {
//     sunny,
//     cloudy,
//     rainy,
//     snowy
// }
var WeatherCondition;
(function (WeatherCondition) {
    WeatherCondition["sunny"] = "a";
    WeatherCondition["cloudy"] = "b";
    WeatherCondition["rainy"] = "c";
    WeatherCondition["snowy"] = "d";
})(WeatherCondition || (WeatherCondition = {}));
console.log(WeatherCondition);
// console.log(WeatherCondition[0]);
console.log(WeatherCondition.sunny);
