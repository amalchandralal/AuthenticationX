const TryCatch = (Handler) => {
  return async (req, res, next) => {
    try {
      await Handler(req, res, next);
    } catch (error) {
      res.status(500).json({ Message: error.Message });
    }
  };
};

export default TryCatch;