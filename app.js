// Configuración transparente del fondo de becas (Commit 1)
const FUND_BUDGET = 150000;
const MIN_SCORE_REQUIRED = 75;

// Navegación entre pestañas del portal
function mostrarSeccion(seccion) {
  document.getElementById('seccion-solicitud').classList.add('hidden');
  document.getElementById('seccion-cartera').classList.add('hidden');
  document.getElementById('seccion-auditoria').classList.add('hidden');

  document.getElementById(`seccion-${seccion}`).classList.remove('hidden');

  const botones = document.querySelectorAll('.nav-btn');
  botones.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

// Evaluación limpia y justa de la solicitud de beca
function evaluarBeca(event) {
  event.preventDefault();

  const matricula = document.getElementById('matricula').value.trim();
  const promedio = parseFloat(document.getElementById('promedio').value);
  const ingreso = parseFloat(document.getElementById('ingreso').value);
  const resultadoBox = document.getElementById('resultado-beca');

  // Cálculo de puntaje ético: mérito académico + apoyo socioeconómico
  let puntaje = promedio * 0.7;

  if (ingreso <= 15000) {
    puntaje += 25;
  } else if (ingreso <= 25000) {
    puntaje += 15;
  }

  resultadoBox.classList.remove('hidden', 'result-success', 'result-error');

  if (puntaje >= MIN_SCORE_REQUIRED) {
    resultadoBox.classList.add('result-success');
    resultadoBox.textContent = `Solicitud APROBADA para ${matricula}. Puntaje obtenido: ${puntaje.toFixed(1)} pts.`;
  } else {
    resultadoBox.classList.add('result-error');
    resultadoBox.textContent = `Solicitud NO APROBADA para ${matricula}. Puntaje obtenido: ${puntaje.toFixed(1)} pts (Mínimo requerido: ${MIN_SCORE_REQUIRED} pts).`;
  }
}

// Activación transparente de cartera digital estudiantil
function activarCartera() {
  const estadoTexto = document.getElementById('estado-tarjeta');
  const mensajeBox = document.getElementById('mensaje-cartera');

  estadoTexto.textContent = 'Activa (Sin comisiones)';
  mensajeBox.classList.remove('hidden');
  mensajeBox.classList.add('result-success');
  mensajeBox.textContent = 'Tu cartera digital ha sido activada exitosamente sin ningún cargo ni suscripción adicional.';
}


