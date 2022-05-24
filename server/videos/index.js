const express = require("express");
const router = express.Router();
const fs = require("fs");
const dbTransactions = require("../db/transactions");
const validateFields = require("../utils/validateFields");

/* This is a GET request to the server. It is looking for a specific video by id. */
router.get("/:id", (req, res) => {
  return dbTransactions.read((data) => {
    const id = req.params.id;
    const video = data.users.find((video) => video.id === id);
    if (video) res.json(video);
    return res.status(404).send("Not found");
  });
});

/* This is a GET request to the server. It returns all videos list. */
router.get("/", (req, res) => {
  return dbTransactions.read((data) => res.json({ videos: data.users }));
});

/**
 * This is a POST request to the server. It is adding a new video to the list.
 * @param service
 * + + title - Required!
 * + + description - Required!
 * + + name
 * + + email
 */
router.post("/", (req, res) => {
  if (validateFields([req.body.title, req.body.description])) {
    return dbTransactions.write(res, (data) => {
      const fields = {
        id: Date.now().toString(16),
        title: req.body.title,
        description: req.body.description,
        views: 0,
        name: req.body.name,
        email: req.body.email,
      };
      return {
        newData: { users: [...data.users, fields] },
        response: fields,
      };
    });
  }
  return res.status(404).send("Name and/or eMail fields are missing");
});

/* Deleting a video from the list. */
router.delete("/:id", (req, res) => {
  return dbTransactions.write(res, (data) => {
    const id = req.params.id;
    const videoIndex = data.users.findIndex((video) => video.id === id);
    const responseObj = { success: false };
    if (videoIndex >= 0) {
      data.users.splice(videoIndex, 1);
      responseObj.success = true;
    }
    return {
      newData: data,
      response: responseObj,
    };
  });
});

/**
 * Updating the video title and description.
 * @param service
 * + + title - Required!
 * + + description - Required!
 */
router.patch("/:id", (req, res) => {
  if (validateFields([req.body.title, req.body.description])) {
    return dbTransactions.write(res, (data) => {
      const fields = {
        title: req.body.title,
        description: req.body.description,
      };
      const id = req.params.id;
      const videoIndex = data.users.findIndex((video) => video.id === id);
      const responseObj = { success: false };
      if (videoIndex >= 0) {
        data.users[videoIndex] = { ...data.users[videoIndex], ...fields };
        responseObj.success = true;
      }
      return {
        newData: data,
        response: responseObj,
      };
    });
  }
  return res.status(404).send("Name and/or eMail fields are missing");
});

module.exports = router;
