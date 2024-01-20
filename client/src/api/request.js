export const request = async (url, {method, headers, body}) => {
  const config = { method };

  // populate the headers and body into the config
  if (headers) {
    config.headers = {
      ...config.headers,
      ...headers
    }
  }
  if (body) {
    config.body = body;
  }

  // API CALL
  try {
    const response = await fetch(url, config)
    const data = await response.json()

    if (response.ok) {
      return {
        data: data,
        success: true
      }
    }
  }
  catch (error) {
    return {
      message: error.message,
      success: false
    }
  }

  // if any unknown error occurs
  return {
    message: "REQUEST ERROR: UNPROCESSABLE ENTITY!",
    success: false
  }
}