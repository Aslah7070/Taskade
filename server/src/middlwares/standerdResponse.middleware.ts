import { Request, NextFunction, Response } from "express";

const addStandardResponse = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  res.standardResponse = (
    statusCode: number,
    payload: {
      message: string;
      [key: string]: any;
    }
  ) => {
    const { message, ...rest } = payload;

    const body = {
      status:
        statusCode < 400 ? "success" : statusCode >= 500 ? "error" : "fail",
      statusCode,
      message,
      data: rest,
    };

    res.status(statusCode).json(body);
  };

  next();
};

export default addStandardResponse;



// import { Response } from "express";

// export function standardResponse(
//   res: Response,
//   statusCode: number,
//   data: {
//     success: boolean;
//     message: string;
//     [key: string]: any;
//   }
// ) {
//   const { message, ...rest } = data;

//   res.status(statusCode).json({
//     status:
//       statusCode < 400 ? "success" : statusCode >= 500 ? "error" : "fail",
//     statusCode,
//     message,
//     data: rest,
//   });
// }
