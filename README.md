# Nuxt-Toolkit

Nuxt-Toolkit is a comprehensive utility plugin for Nuxt.js, offering a range of functions to enhance your development experience in Vue.js and Nuxt.js projects.

## Features

This toolkit includes a variety of utility functions:

- `addTransparency`: Add transparency to a HEX color.
- `formatDateAndTime`: Format Unix timestamps into readable date and time.
- `copyTextToClipboard`: Copy a provided text to the clipboard.
- `openNewTab`: Open a link in a new browser tab.
- `formatBalance`: Format numerical balance into a readable string with commas.
- `getTimeAgo`: Calculate how much time has passed since a given date.
- `goTo`: Navigate to a specified path using Vue Router.
- `areObjectsEqual`: Deep comparison of two objects to check for equality.
- `extractKeys`: Extract specific keys from an object.
- `deepClone`: Perform a deep clone of an object.

## Installation

```bash
npm install nuxt-toolkit
```

## Usage

First, include the plugin in your nuxt.config.js:

```js
export default {
  plugins: ["~/plugins/nuxt-toolkit.js"],
  // ...other configurations
};
```

Then, you can use the toolkit in your Vue components:

```vue
<script>
  export default {
    mounted() {
      let transparentColor = this.$toolkit.addTransparency("#ff5733", 0.5);
      console.log(transparentColor); // rgba(255, 87, 51, 0.5)

      let formattedDate = this.$toolkit.formatDateAndTime(Date.now());
      console.log(formattedDate); // { date: "1 Jan, 2023", time: "12:00 AM" }

      // ... other function usages
    },
  };
</script>
```

## Documentation

### `addTransparency(hexColor, transparency)`

Converts a HEX color code to RGBA with a specified transparency level.

### `formatDateAndTime(timestamp)`

Formats a Unix timestamp into a human-readable date and time format.

### `copyTextToClipboard(link)`

Copies a provided text to the clipboard and shows a notification.

### `openNewTab(link)`

Opens a provided URL in a new browser tab.

### `formatBalance(balance)`

Formats a numeric balance into a string with commas.

### `getTimeAgo(timestamp)`

Calculates the time elapsed since the given timestamp.

### `goTo(path)`

Navigates to a specified path using Vue Router.

### `areObjectsEqual(obj1, obj2)`

Deeply compares two objects for equality.

### `extractKeys(sourceObject, keysToExtract)`

Extracts specified keys from an object.

### `deepClone(obj)`

Creates a deep clone of an object.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## Author

Motion Routes LTD

## License

This project is ISC licensed.
