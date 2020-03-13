export interface ResponseFormat {
  statusCode: number;
  wasSuccess: boolean;
  message: string;
  response: [] | {};
}
