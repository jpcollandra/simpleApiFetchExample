document.getElementById('apiBtn').addEventListener('click', getDataFromExternalAPI);

function getDataFromExternalAPI() {
  fetch('https://www.boredapi.com/api/activity')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        let output = '';
        act = JSON.stringify(data.activity);
        act = JSON.stringify(data.activity, null, 4);
        
        console.log(data); // Logs output to dev tools console.
        output +=`<li>Your random activity is to ${act}</li>`
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => {
        console.log(err);

        // Displaying to the UI
        document.getElementById('output').innerHTML = err;
      });

}
