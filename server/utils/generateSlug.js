const generateSlug = (title) => {
  console.log(title);
  return title
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

module.exports = generateSlug;