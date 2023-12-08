const formAnswer = document.querySelector(".form-answer");
const card = document.querySelector(".card");

if (formAnswer) {
    formAnswer.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { answer } = event.target;
    const { id } = formAnswer.dataset;
    const res = await fetch(`/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer.value,
        id,
      }),
    });
    const data = await res.json();
    if (data.message === "Молодэц") {
      document.querySelector(".answer").innerHTML = data.message;
    } else {
      document.querySelector(".answer").innerHTML = data.message;
    }
  });
}
