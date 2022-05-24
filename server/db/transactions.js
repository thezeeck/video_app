const fs = require("fs");
const FILE_PATH = "./server/db/db.json";

/**
 * Read the file db.json, if there's an error, send a 404, otherwise, parse the data and send it to the
 * callback.
 * @param callback - a function that is called after the file is read.
 */
const read = (callback) => {
  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    if (err) return res.status(404).send("Not found");
    else callback(JSON.parse(data));
  });
};

/**
 * It reads a file, transforms the data, and writes the transformed data back to the file
 * @param response - the response object from express
 * @param transform - a function that takes the data and returns an object with two properties:
 * + + newData: the new content for db.json
 * + + response: the object that will be returned to the user
 */
const write = (response, transform) => {
  return read((data) => {
    const result = transform(data);
    if (result.newData && result.response) {
      return fs.writeFile(
        FILE_PATH,
        JSON.stringify(result.newData),
        "utf-8",
        (err) => {
          if (err)
            return response
              .status(500)
              .send("An error occurred please try again later");
          else return response.json(result.response);
        }
      );
    }
    console.log("result.newData or result.response is missing");
    return response
      .status(500)
      .send("An error occurred please try again later");
  });
};

module.exports = { read, write };
