const notFound = (res, req, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, response, next) => {
  const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
  response.status(statusCode);
  response.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
