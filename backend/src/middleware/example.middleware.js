// Example middleware

export const exampleMiddleware = (req, res, next) => {
  // Add your middleware logic here
  console.log(`${req.method} ${req.path}`);
  next();
};

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};
