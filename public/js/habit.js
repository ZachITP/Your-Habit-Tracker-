const habitEW = async => () {
  const response = await fetch('/api/users/habit/:id',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if(response.ok) {
    document.location.replace('/habit')
  }
};

document.querySelector('#EW').addEventListener('click', habitEW);