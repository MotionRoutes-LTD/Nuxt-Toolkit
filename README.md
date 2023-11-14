# Nuxt-Toolkit

Nuxt-Toolkit is a comprehensive utility plugin for Nuxt.js, offering a range of functions to enhance your development experience in Vue.js and Nuxt.js projects.

## Features

This toolkit includes a variety of utility functions:

- `handle`: Efficiently handle promises by returning a tuple [data, error], making error handling and data processing simpler in asynchronous operations.
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

To install `Nuxt-Toolkit`, run the following command in your project's root directory:

```bash
npm install nuxt-toolkit
```

### 1. Create a Plugin File:

Navigate to the plugins directory in your Nuxt.js project. If it doesn't exist, create it.
Inside the plugins directory, create a new file, for example, nuxt-toolkit.js.

### 2. Set Up the Plugin File:

In the newly created file (nuxt-toolkit.js), import the Nuxt-Toolkit package and set it up as follows:

```js
import * as toolkit from "nuxt-toolkit";

export default (_, inject) => {
  inject("toolkit", toolkit);
};
```

### 3. Include the Plugin in Your Nuxt Configuration:

Add a reference to this plugin in your nuxt.config.js file:

```js
export default {
  plugins: ["~/plugins/nuxt-toolkit.js"],
  // ...other configurations
};
```

With this setup, Nuxt-Toolkit will be available throughout your Nuxt.js application, and you can access its functions using this.$toolkit.

## Usage

You can use the toolkit in your Vue components:

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

### `handle(promise)`

Handles a Promise and returns a tuple `[data, error]`. If the promise resolves successfully, `data` will contain the result and `error` will be `undefined`. If the promise is rejected, `data` will be `undefined` and `error` will contain the error information.

#### Usage Example:

```javascript
async function exampleUsage() {
  const [data, dataError] = await this.$toolkit.handle(somePromise);

  if (dataError) {
    console.error("An error occurred:", dataError);
    return;
  }

  console.log("Received data:", data);
}
```

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
