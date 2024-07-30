// Making a GET request
fetch('https://api.github.com/users/muskansrivastava0305')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON from the response
  })
  .then(data => {
    console.log(data); // Handle the data
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

  //---------------Post request Fetch-------------------------------------------------------------


  fetch('https://api.github.com/users/muskansrivastava0305', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' }) // Send data as JSON
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  
