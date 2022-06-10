const base = 'http://localhost:3001/';

async function read(resource) {
  return await (await fetch(base + resource)).json()
}

async function create(resource, data) {
  const url = base + resource;

  const config = {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    } 
  }

  return await (await fetch(url, config)).json();
}

export default {read, create};