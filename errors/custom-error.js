export class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const createCustomError = (errorMessage, errorCode) => {
  return new CustomError(errorMessage, errorCode);
};

// export const idNotFoundError = createCustomError(
//   `No task found for this id : ${tasksId}`,
//   404
// );
