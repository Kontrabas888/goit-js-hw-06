const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (!email.value || !password.value) {
    const massage = "Áll file must be filled!!!";
    alert(massage);
  } else {
    console.log({ email: email.value, password: password.value });
    formEl.reset();
  }
};
