import { log } from "./log.mjs";

export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify(event),
    };
    log("Log de execução evento: " + response.body)

    return response;
  };
  