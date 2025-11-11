class apiResponse {
  static success(res, message, data = {}, statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static error(res, message, errors = [], statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  }
}

export { apiResponse };