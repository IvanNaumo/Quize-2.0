const formReg = document.querySelector('.Registration');
console.log(formReg);
if (formReg) {
  formReg.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name } = e.target;
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'success') {
        formReg.reset();
        window.location.href = '/theme';
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}
