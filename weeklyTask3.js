async function fetchAndSortUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const result = users.map(user => ({
      name: user.name,
      city: user.address.city
    }));

    result.sort((a, b) => {
      if (a.domisili < b.domisili) return -1;
      if (a.domisili > b.domisili) return 1;
      return 0;
    });

    console.log(result);
  } catch (error) {
    console.error('Terjadi error:', error);
  }
}

fetchAndSortUsers();
