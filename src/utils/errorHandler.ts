import { Response } from "express";

export const handleError = (res: Response, error: unknown, message = "Internal Server Error", statusCode = 500): void => {
  console.error(error);
  res.status(statusCode).json({ message, error });
};
