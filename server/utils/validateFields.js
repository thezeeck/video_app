const validateFields = (arr) => {
  return arr.every((field) => field && field.trim() !== "");
};

module.exports = validateFields;
