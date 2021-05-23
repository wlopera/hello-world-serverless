"use strict";

let count = 0;

const returnResponseData = (body, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body,
  };
  callback(null, response);
};

module.exports.helloWorld = (event, context, callback) => {
  returnResponse(
    JSON.stringify(
      {
        status: 200,
        error: null,
        message: "Exitoso...",
        data: {
          date: new Date(),
          ip: event.multiValueHeaders["X-Forwarded-For"][0],
        },
      },
      null,
      2
    ),
    callback
  );
};

module.exports.count = (event, context, callback) => {
  returnResponse(
    JSON.stringify(
      {
        status: 200,
        error: null,
        message: "Exitoso...",
        data: {
          count: ++count,
        },
      },
      null,
      2
    ),
    callback
  );
};
