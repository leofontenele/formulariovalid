 
function ValidarNome(id) { 
if (nome.value.length == 0) { 
document.getElementById("nome").style.border = "2px solid red";
}
else { 
document.getElementById("nome").style.border = "2px solid green";
}
if (apelido.value.length == 0) { 
document.getElementById("apelido").style.border = "2px solid red";
}
else { 
document.getElementById("apelido").style.border = "2px solid green";
}
}

function ValidarTelemovel(id) { 
if (telemovel.value.length < 9) { 
document.getElementById("telemovel").style.border = "2px solid red";
}
else { 
document.getElementById("telemovel").style.border = "2px solid green";
}
}

function validarEmail() {
const emailInput = document.getElementById('email');
const email = emailInput.value.trim();
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regex.test(email)) {
emailInput.style.borderColor = 'red';
} else {
emailInput.style.borderColor = 'green';
}
}


function ValidarData(id) { 
if (data.value.length > 10) { 
document.getElementById("data").style.border = "2px solid red";
}
else { 
document.getElementById("data").style.border = "2px solid green";
}
}

function ValidarMotivo(id) { 
if (motivo.value.length < 6) { 
document.getElementById("motivo").style.border = "2px solid red";
}
else { 
document.getElementById("motivo").style.border = "2px solid green";

}
}
function ValidarTudo(id) { 
const emailInput = document.getElementById('email');
const email = emailInput.value.trim();
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (motivo.value.length < 6) { 
alert("O campo de motivo deve ter pelo menos 6 caracteres!");
}
if (nome.value.length == 0) { 
alert("Digite o seu nome!");
}
if (apelido.value.length == 0) { 
alert("Digite o seu apelido!");
}
if (telemovel.value.length < 9) { 
alert("Telemovel incorreto!");
}
if (!regex.test(email)) {
alert("Digite o email corretamente");
}
}