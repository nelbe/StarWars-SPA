// To be defined and implemented

const BASE_URL = "https://swapi.dev/api/";

export async function baseFetch(url, options = {}) {
  await fetch(url, options)
  .then( async response => {
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data

    // Handle and set errors
    } else if(response.status === 404) {
      const errorCode = {
        status: response.status,
        message: response.statusText !== '' ? response.statusText : 'Not found'
      };
      return errorCode;
    } else {
        const errorCode = {
        status: response.status,
        message: response.statusText !== '' ? response.statusText : 'Some other error',
      };
      return errorCode;
    }
  }).catch(error => {
    const errorCode = {
      status: 500,
      message: error ? error : 'Internal Server Error'
    };
    return errorCode;
  });
}

export const getResponse = async path => baseFetch(BASE_URL + path);