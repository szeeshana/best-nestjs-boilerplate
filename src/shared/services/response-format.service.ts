import { HttpStatus, Injectable } from '@nestjs/common';

import { ResponseFormat } from '../../interfaces/IResponseFormat';

@Injectable()
export class ResponseFormatService {
  static responseOk(data: [] | {}, message: string): ResponseFormat {
    return {
      statusCode: HttpStatus.OK,
      wasSuccess: true,
      message: message,
      response: data,
    };
  }

  static responseNotFound(data: [] | {}, message: string): ResponseFormat {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      wasSuccess: true,
      message: message,
      response: data,
    };
  }

  static responseUnprocessableEntity(
    data: [] | {},
    message: string,
  ): ResponseFormat {
    return {
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      wasSuccess: true,
      message: message,
      response: data,
    };
  }
  static responseBadRequest(data: [] | {}, message: string): ResponseFormat {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      wasSuccess: true,
      message: message,
      response: data,
    };
  }
}
