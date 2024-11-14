# Enums

In TypeScript, an enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

For example, let's say you're building a weather app and you want to define a set of possible weather conditions like "sunny", "cloudy", "rainy", and "snowy". You could define an enum like this:

```ts
enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}
```

In this example, WeatherConditions is the name of the enum, and each of the values (e.g. Sunny, Cloudy, etc.) is assigned an automatic numerical value starting from 0. You can also assign specific values to each enum member like this:

```ts
enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
```

In this case, each enum member is explicitly given a string value.

You can use enums in your code by referring to them by their name, for example:

```ts
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
// Output: The current weather is Sunny
```

Enums are a useful tool for creating more readable and maintainable code by providing a way to define a set of related values with clear, meaningful names.