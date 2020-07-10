export function getRequest(url) {
  return fetch(url).then((response) => response.json());
}

export function postRequest(requestBody) {
  return fetch('url', {
    method: 'POST',
    body: requestBody,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
