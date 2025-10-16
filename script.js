function validarCedula() {
  const cedula = document.getElementById("cedula").value.trim();
  const resultado = document.getElementById("resultado");

  // Validar formato: solo números y 11 dígitos
  if (!/^\d{11}$/.test(cedula)) {
    resultado.innerHTML = "❌ Cédula inválida: Debe contener 11 dígitos numéricos.";
    resultado.className = "invalida";
    return;
  }

  let suma = 0;
  let longitud = cedula.length;
  let digitoVerificador = parseInt(cedula[longitud - 1]);

  for (let i = 0; i < longitud - 1; i++) {
    let num = parseInt(cedula[i]);

    if ((i + 1) % 2 !== 0) { 
      num *= 1; // posición impar
    } else { 
      num *= 2; // posición par
      if (num > 9) num = Math.trunc(num / 10) + (num % 10);
    }

    suma += num;
  }

  const resto = suma % 10;
  const calculado = (resto === 0) ? 0 : 10 - resto;

  if (calculado === digitoVerificador) {
    resultado.innerHTML = "✅ CÉDULA VÁLIDA: El dígito verificador (" + digitoVerificador + ") es correcto.";
    resultado.className = "valida";
  } else {
    resultado.innerHTML = "❌ CÉDULA INCORRECTA: El dígito verificador no coincide (" + digitoVerificador + ").";
    resultado.className = "invalida";
  }
}
