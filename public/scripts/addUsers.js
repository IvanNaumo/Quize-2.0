const form = document.querySelector('.formAddAnimal');
console.log(form);
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, img, description } = e.target;
    try {
      const res = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'success') {
        form.reset();
        
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}

