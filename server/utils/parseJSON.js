// utils/parseJSON.js

const parseJSON = (data) => {
  const parsed = { ...data };

  Object.keys(parsed).forEach((key) => {
    try {
      if (
        typeof parsed[key] === "string" &&
        (parsed[key].startsWith("{") ||
          parsed[key].startsWith("["))
      ) {
        parsed[key] = JSON.parse(parsed[key]);
      }
    } catch (error) {}
  });

  return parsed;
};

module.exports = parseJSON;