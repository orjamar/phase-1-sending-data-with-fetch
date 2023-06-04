function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${id}`;
        document.body.appendChild(idElement);
        return data;
      })
      .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
        console.log(error.message);
      });
  }
  