const getData = async () => {
  const response = await fetch('/greetings');
  return await response.json();
}

export default getData;