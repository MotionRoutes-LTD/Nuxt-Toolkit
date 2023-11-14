function addTransparency(hexColor, transparency) {
  hexColor = hexColor.replace("#", "");

  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  transparency = Math.min(1, Math.max(0, transparency));

  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${transparency})`;

  return rgbaColor;
}

function formatDateAndTime(timestamp) {
  const date = new Date(timestamp);

  const day = date.getUTCDate();
  const month = new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "UTC",
  }).format(date);
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour time format
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Separate date and time portions
  const formattedDate = `${day} ${month}, ${year}`;
  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

  return { date: formattedDate, time: formattedTime };
}

function copyTextToClipboard(link) {
  navigator.clipboard.writeText(link);
  this.$notifier.showMessage({
    content: `Copied to clipboard`,
  });
}

function openNewTab(link) {
  window.open(link, "_blank");
}

function formatBalance(balance) {
  if (balance === undefined || balance === null) {
    return "0.0"; // Ensure string is returned
  }

  const parts = balance.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function getTimeAgo(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();

  const timeDifference = now.getTime() - date.getTime();

  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const yearsAgo = Math.floor(daysAgo / 365);

  if (yearsAgo > 0) {
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else if (hoursAgo > 0) {
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else if (minutesAgo > 0) {
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else {
    return `${secondsAgo} second${secondsAgo > 1 ? "s" : ""} ago`;
  }
}

function goTo(path) {
  this.$router.push({ path });
}

function areObjectsEqual(obj1, obj2) {
  // Check if either object is null
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2; // If both are null, they are equal; otherwise, they are not
  }

  // Get the keys of the objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate through keys and compare values
  for (const key of keys1) {
    // Check if the key exists in both objects
    if (!keys2.includes(key)) {
      return false;
    }

    // Check if the values are equal
    const value1 = obj1[key];
    const value2 = obj2[key];

    // Recursive comparison for nested objects
    if (typeof value1 === "object" && typeof value2 === "object") {
      if (!areObjectsEqual(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  } // Objects are equal
  return true;
}

function extractKeys(sourceObject, keysToExtract) {
  return Object.fromEntries(
    Object.entries(sourceObject).filter(([key]) => keysToExtract.includes(key))
  );
}

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

function handle(promise) {
  return promise
    .then((data) => [data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));
}

module.exports = {
  addTransparency,
  formatDateAndTime,
  copyTextToClipboard,
  openNewTab,
  formatBalance,
  getTimeAgo,
  goTo,
  areObjectsEqual,
  extractKeys,
  deepClone,
  handle,
};
