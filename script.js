function handleLogin(e) {
  e.preventDefault();
  const email = e.target.parentElement.children[0].value;
  const pass = e.target.parentElement.children[1].value;
  if (email === 'tryber@teste.com' && pass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const createTranslate = () => ({
  name: 'Nome',
  favorite: 'Matérias',
  family: 'Família',
  rate: 'Avaliação',
  email: 'Email',
  comment: 'Observações',
  house: 'Casa',
});

const createInitial = () => {
  const translate = createTranslate();
  const keys = Object.keys(translate);
  const initial = {};
  for (let i = 0; i < keys.length; i += 1) {
    initial[translate[keys[i]]] = '';
  }
  return initial;
};

function getParams(form) {
  const inputs = document.querySelectorAll(`#${form.id} input, textarea, select`);
  const params = createInitial();
  const translate = createTranslate();
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type.match(/tex.+|email|select/g)) {
      params[translate[inputs[i].name]] += `${inputs[i].value} `;
    } else if (inputs[i].checked) {
      params[translate[inputs[i].name]] += `${inputs[i].value}, `;
    }
  }
  return params;
}

function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('evaluation-form');
  const params = getParams(form);
  const keys = Object.keys(params);
  form.innerHTML = '';
  for (let i = 0; i < keys.length; i += 1) {
    form.innerHTML += `<p>${keys[i]}: ${params[keys[i]]}</p>`;
  }
}

window.onload = () => {
  document
    .getElementById('login-button')
    .addEventListener('click', handleLogin);
  document.getElementById('submit-btn').addEventListener('click', handleSubmit);
};

const checkbox = document.querySelector('#agreement');
function ableBtn() {
  if (this.checked) {
    document.querySelector('#submit-btn').disabled = false;
  } else {
    document.querySelector('#submit-btn').disabled = true;
  }
}
checkbox.addEventListener('change', ableBtn);

const texto = document.querySelector('#textarea');
const contador = document.querySelector('#counter');

function counter() {
  contador.innerText = 500 - texto.value.length;
}
texto.addEventListener('keyup', counter);
