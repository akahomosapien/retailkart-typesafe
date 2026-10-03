import type { Response } from "express";
//not import { Response } from "express"; so TS can remove it when compiling to JS
//"verbatimModuleSyntax": true helps do that

//data: T | null : means I don't know what kind of data this function will receive, so let
//the caller tell me. e.g. if data=user of type User then T=User, data=products of type Products[],
//then T=Products[]

const successResponse = <T>(
  res: Response,
  message: string,
  data: T | null = null,
  statusCode: number = 200,
): Response => {
  return res.status(statusCode).json({
    success: true,
    message: message,
    data: data,
  });
};

export default successResponse;
