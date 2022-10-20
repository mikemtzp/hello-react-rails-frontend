const getData = async () => {
  const response = await fetch('http://localhost:3000/greetings');
  return await response.json();
}

export default getData;