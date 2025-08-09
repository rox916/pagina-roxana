// Añade esto al inicio del archivo JavaScript
function checkMobile() {
  if (window.innerWidth < 768) {
    document.body.classList.add('mobile-view');
    // Opcional: podemos ajustar comportamientos para móviles aquí
  } else {
    document.body.classList.remove('mobile-view');
  }
}

// Ejecutar al cargar y al cambiar tamaño
window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);// Mensajes motivacionales
const motivationalMessages = {
  sad: [
    { id: "sad1", title: "La tristeza es temporal", message: "Amorcito, sé que ahora duele, pero como las estrellas que desaparecen de día y vuelven a aparecer, esta tristeza pasará. Eres más fuerte de lo que crees." },
    { id: "sad2", title: "No estás solo", message: "Incluso en tus momentos más oscuros, recuerda que estoy aquí para ti. No tienes que cargar todo solo, déjame ayudarte a llevar el peso." },
    { id: "sad3", title: "Cada lágrima es un paso", message: "Bebito, llorar no es señal de debilidad, sino la forma en que el corazón se limpia para seguir adelante." },
    { id: "sad4", title: "Permítete sentir", message: "Está bien sentirse triste a veces, Javier. Sentir es parte del proceso para sanar y crecer." },
    { id: "sad5", title: "Esto también pasará", message: "Javier, sé que ahora todo parece pesado, pero recuerda que los días difíciles no duran para siempre. La calma llegará." },
    { id: "sad6", title: "Eres más fuerte que tus sombras", message: "Cuando sientas que la tristeza te abraza, recuerda que dentro de ti hay una fuerza capaz de iluminar cualquier oscuridad." },
    { id: "sad7", title: "Después de la tormenta", message: "Bb, toda tormenta termina, y cuando el cielo se despeja, llega la oportunidad de renacer." },
    { id: "sad8", title: "No reprimas tu dolor", message: "Deja que el dolor salga, Javier, pero no dejes que se quede. La tristeza es un visitante, no tu hogar." },
    { id: "sad9", title: "Un día a la vez", message: "No tienes que resolverlo todo hoy, Javier. Avanza un día a la vez, con paciencia y amor." },
    { id: "sad10", title: "Eres valioso incluso cuando dudas", message: "Aunque te sientas perdido, nunca olvides que tu vida importa y que eres valioso tal como eres." },
    { id: "sad11", title: "Abraza tus emociones", message: "Javier, tus emociones son válidas. No las rechaces, escúchalas y aprende de ellas." },
    { id: "sad12", title: "Tu corazón es resistente", message: "Cada día en que te levantas, demuestras una fuerza increíble, aunque no lo notes." },
    { id: "sad13", title: "No estás roto", message: "Las heridas no te rompen, te hacen humano. Y los humanos pueden sanar." },
    { id: "sad14", title: "El sol vuelve a salir", message: "Después de la noche más oscura, el sol siempre vuelve a brillar. Ten fe, Javier." },
    { id: "sad15", title: "Sigue adelante", message: "A veces solo hay que dar un paso más, Javier. Ese paso puede cambiarlo todo." }
  ],
  unloved: [
    { id: "love1", title: "Eres profundamente amado", message: "Javier, aunque a veces no lo demuestre como debería, quiero que sepas que ocupas un lugar especial en mi corazón que nadie más podría llenar." },
    { id: "love2", title: "Eres valioso", message: "Bb, nadie puede reemplazar lo que eres. Tu valor no depende de la opinión de otros, sino de quién eres por dentro." },
    { id: "love3", title: "Amor verdadero", message: "Aunque a veces no lo veas, hay personas que te aprecian profundamente. No estás solo ni olvidado." },
    { id: "love4", title: "Nunca olvides tu valor", message: "bebito, mereces amor y respeto, especialmente de ti mismo. Eres valioso y digno, siempre." },
    { id: "love5", title: "Tu luz importa", message: "Aunque a veces no la sientas, tu presencia es importante para muchas personas. Eres único y querido." },
    { id: "love6", title: "Eres digno de cariño", message: "bebito, el amor verdadero comienza contigo mismo. Ámate como mereces ser amado." },
    { id: "love7", title: "No necesitas permiso para ser amado", message: "Eres suficiente, bebito. El amor que mereces no depende de nada más que de ti." },
    { id: "love8", title: "Tu corazón es valioso", message: "bebito, no dejes que la duda apague la luz de tu corazón. Eres valioso y amado." },
    { id: "love9", title: "Siempre hay un abrazo para ti", message: "Cuando te sientas solo, recuerda que siempre hay un abrazo esperándote, ya sea de personas o de ti mismo." },
    { id: "love10", title: "Eres amado más allá de las palabras", message: "bebito, aunque a veces no se diga, tu amor es recibido y devuelto en formas que quizás no ves." },
    { id: "love11", title: "Mereces amor incondicional", message: "No tienes que cambiar nada para merecer amor. Ya eres suficiente, tal como eres." },
    { id: "love12", title: "Eres la prioridad", message: "Ponerte a ti mismo primero no es egoísmo, bebito. Es cuidarte para poder dar lo mejor a otros." },
    { id: "love13", title: "El amor empieza contigo", message: "Cultiva el amor propio, bebito, porque es la base de todo lo demás." },
    { id: "love14", title: "Tu valor es infinito", message: "No permitas que nadie ni nada te haga dudar de lo mucho que vales." },
    { id: "love15", title: "Eres merecedor de lo mejor", message: "No te conformes con menos de lo que mereces, bebito. Eres digno de lo mejor." }
  ],
  giving: [
    { id: "hope1", title: "Resiste un poco más", message: "Sé que estás cansado, pero por favor no te rindas. Has llegado hasta aquí por una razón." },
    { id: "hope2", title: "La luz al final", message: "Sigue adelante, bebito. Cada pequeño esfuerzo te acerca más a la luz que estás buscando." },
    { id: "hope3", title: "Confía en tu camino", message: "A veces no entendemos el porqué de las cosas, pero cada paso que das tiene un propósito, confía en ti." },
    { id: "hope4", title: "No te rindas", message: "bebito, aunque te sientas cansado y sin fuerzas, tu camino tiene un propósito. Sigue adelante, paso a paso." },
    { id: "hope5", title: "Pequeños pasos, grandes cambios", message: "Cada pequeño esfuerzo que haces, aunque no lo veas, te acerca a un futuro mejor." },
    { id: "hope6", title: "El futuro es brillante", message: "Aunque ahora no lo veas, hay muchas cosas buenas esperando por ti, bebito." },
    { id: "hope7", title: "Cada día es una nueva oportunidad", message: "No importa cómo fue ayer, hoy tienes la posibilidad de comenzar de nuevo." },
    { id: "hope8", title: "No estás definido por tus errores", message: "bebito, todos cometemos errores. Lo importante es aprender y seguir adelante." },
    { id: "hope9", title: "Eres capaz de más de lo que imaginas", message: "Confía en tu fuerza interior para superar cualquier obstáculo." },
    { id: "hope10", title: "Tu esfuerzo vale la pena", message: "Aunque no lo notes ahora, todo esfuerzo suma y construye tu camino." },
    { id: "hope11", title: "Sigue creyendo", message: "La fe en ti mismo es la base para lograr lo que te propones." },
    { id: "hope12", title: "El cambio empieza hoy", message: "No esperes más para tomar las riendas de tu vida. El momento es ahora." },
    { id: "hope13", title: "Nunca es tarde para empezar", message: "Cada día es una nueva oportunidad para reinventarte." },
    { id: "hope14", title: "Confía en el proceso", message: "El camino puede ser difícil, pero cada paso tiene sentido." },
    { id: "hope15", title: "Tu historia aún se está escribiendo", message: "bebito, lo mejor está por venir, sigue escribiendo con esperanza." }
  ],
  doubt: [
    { id: "doubt1", title: "La duda es humana", message: "Es normal cuestionarse a veces, bebito. Pero recuerda todas las veces que has tomado buenas decisiones." },
    { id: "doubt2", title: "Confía en tu intuición", message: "a veces la mente nos juega trucos, pero tu intuición sabe más de lo que crees. Escúchala." },
    { id: "doubt3", title: "Aprender del error", message: "Dudar es parte del aprendizaje. Cada duda superada te hace más fuerte y sabio." },
    { id: "doubt4", title: "Confía en ti", message: "la duda es solo una señal de que te importa. Recuerda todas las veces que lograste salir adelante." },
    { id: "doubt5", title: "Eres capaz", message: "Aunque a veces dudes, dentro de ti hay un potencial enorme para superar cualquier obstáculo." },
    { id: "doubt6", title: "Tus dudas no te definen", message: "Amorcito, dudar no significa que no puedas, sino que estás pensando en cómo hacerlo mejor." },
    { id: "doubt7", title: "Tómate tu tiempo", message: "No hay prisa para tener todas las respuestas. La claridad llega con paciencia." },
    { id: "doubt8", title: "Busca perspectiva", message: "A veces una nueva mirada puede despejar las dudas y abrir caminos." },
    { id: "doubt9", title: "Confía en tu aprendizaje", message: "Todo lo que has vivido y aprendido te prepara para enfrentar los desafíos." },
    { id: "doubt10", title: "Las dudas son señales de crecimiento", message: "Javier, dudar indica que estás saliendo de tu zona de confort y eso es bueno." },
    { id: "doubt11", title: "Tu mente es tu aliada", message: "Aunque dude, tu mente también te guía hacia lo que necesitas." },
    { id: "doubt12", title: "No temas equivocarte", message: "Los errores son parte del camino y no disminuyen tu valor." },
    { id: "doubt13", title: "Da un paso a la vez", message: "Aunque dudes, avanzar es lo que te acerca a la certeza." },
    { id: "doubt14", title: "Aprende a escuchar tu voz interna", message: "Ella sabe lo que es mejor para ti, solo debes prestarle atención." },
    { id: "doubt15", title: "Confía en tu capacidad para decidir", message: "Javier, tú tienes el poder de tomar buenas decisiones, confía en ello." }
  ],
  stress: [
    { id: "stress1", title: "Respira profundo", message: "bebito, detente un momento y respira. Este estrés pasará como una tormenta." },
    { id: "stress2", title: "Tómate un respiro", message: "Cuando el mundo pesa mucho, date un momento para ti, para calmar la mente y recargar energías, Javier." },
    { id: "stress3", title: "No estás solo en esto", message: "Compartir tu carga puede aliviar el peso, no temas buscar apoyo cuando sientas que el estrés te abruma." },
    { id: "stress4", title: "Cuida de ti", message: "Tómate un momento para respirar, descansar y recargar energías. Te lo mereces." },
    { id: "stress5", title: "Busca apoyo", message: "No tienes que cargar con todo solo. Hablar y compartir puede aliviar el peso que sientes." },
    { id: "stress6", title: "Da un paso atrás", message: "A veces alejarte un momento ayuda a ver las cosas con más claridad." },
    { id: "stress7", title: "La calma está dentro de ti", message: "Cierra los ojos, respira y siente la tranquilidad que ya tienes en tu interior." },
    { id: "stress8", title: "Haz una pausa", message: "No tienes que resolver todo ahora. Date permiso para descansar." },
    { id: "stress9", title: "Prioriza tu bienestar", message: "Javi, cuidar de ti es la mejor forma de poder enfrentar cualquier desafío." },
    { id: "stress10", title: "Hablar alivia", message: "Expresar lo que sientes puede aliviar la carga y darte nuevas fuerzas." },
    { id: "stress11", title: "Tu salud mental importa", message: "Nunca la descuides, es tu mayor tesoro." },
    { id: "stress12", title: "Acepta lo que no puedes controlar", message: "Hay cosas que no dependen de ti, enfoca tu energía en lo que sí puedes cambiar." },
    { id: "stress13", title: "Confía en tu capacidad de adaptación", message: "Has superado momentos difíciles antes, puedes hacerlo de nuevo." },
    { id: "stress14", title: "Busca momentos de alegría", message: "Pequeños placeres pueden ser refugios para tu mente y corazón." },
    { id: "stress15", title: "Eres más fuerte que el estrés", message: "Aunque a veces te sientas abrumado, dentro de ti hay una fuerza imparable." }
  ]
};

// Elementos del DOM
const modeBtns = document.querySelectorAll('.mode-btn');
const visualEffect = document.getElementById('visual-effect');
const motivationCard = document.getElementById('motivation-card');
const cardTitle = document.getElementById('card-title');
const cardMessage = document.getElementById('card-message');
const btnNext = document.getElementById('btn-next');
const journalToggle = document.getElementById('journal-toggle');
const journalContainer = document.getElementById('journal-container');
const journalEntry = document.getElementById('journal-entry');
const saveEntryBtn = document.getElementById('save-entry');
const analyzeEntryBtn = document.getElementById('analyze-entry');
const journalHistory = document.getElementById('journal-history');
const entriesList = document.getElementById('entries-list');
const messageResponse = document.getElementById('message-response');
const saveResponseBtn = document.querySelector('.btn-save-response');
const backToMotivationBtn = document.querySelector('.back-to-motivation');

// Variables de estado
let currentMode = null;
let currentMessages = [];
let currentIndex = 0;

// Funciones principales
function setMode(mode) {
  currentMode = mode;
  currentMessages = [...motivationalMessages[mode]];
  currentIndex = 0;
  
  // Actualizar efecto visual
  visualEffect.className = 'visual-effect';
  visualEffect.classList.add(`${mode}-effect`);
  visualEffect.classList.remove('hidden');
  
  // Mostrar primer mensaje
  showCurrentMessage();
  motivationCard.classList.remove('hidden');
  journalContainer.classList.add('hidden');
}

function showCurrentMessage() {
  const message = currentMessages[currentIndex];
  cardTitle.textContent = message.title;
  cardMessage.textContent = message.message;
}

function nextMessage() {
  currentIndex = (currentIndex + 1) % currentMessages.length;
  showCurrentMessage();
}

function toggleJournal() {
  motivationCard.classList.toggle('hidden');
  journalContainer.classList.toggle('hidden');
  
  if(!journalContainer.classList.contains('hidden')) {
    loadJournalEntries();
  }
}

function loadJournalEntries() {
  const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
  entriesList.innerHTML = '';
  
  if(entries.length > 0) {
    journalHistory.classList.remove('hidden');
    entries.reverse().forEach(entry => {
      const entryEl = document.createElement('div');
      entryEl.className = 'entry-item';
      entryEl.innerHTML = `<p>${entry.text}</p><small>${entry.date}</small>`;
      entriesList.appendChild(entryEl);
    });
  } else {
    journalHistory.classList.add('hidden');
  }
}

function saveJournalEntry() {
  const text = journalEntry.value.trim();
  if(text) {
    const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    entries.push({ text, date: new Date().toLocaleString() });
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    journalEntry.value = '';
    loadJournalEntries();
    alert('Entrada guardada con éxito');
  }
}

function analyzeSentiment() {
  const text = journalEntry.value;
  // Análisis simple (puedes mejorarlo)
  const positiveWords = ['feliz', 'alegre', 'contento', 'amor'];
  const negativeWords = ['triste', 'mal', 'solo', 'estresado'];
  
  let score = 0;
  text.toLowerCase().split(/\s+/).forEach(word => {
    if(positiveWords.includes(word)) score++;
    if(negativeWords.includes(word)) score--;
  });
  
  if(score > 0) return "Parece que estás teniendo un buen día 😊";
  if(score < 0) return "Veo que estás pasando por un momento difícil 💙";
  return "Tu estado parece neutral hoy";
}

// Event listeners
modeBtns.forEach(btn => {
  if(btn.id !== 'journal-toggle') {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
  }
});

journalToggle.addEventListener('click', toggleJournal);
backToMotivationBtn.addEventListener('click', toggleJournal);
btnNext.addEventListener('click', nextMessage);
saveEntryBtn.addEventListener('click', saveJournalEntry);
analyzeEntryBtn.addEventListener('click', () => {
  alert(analyzeSentiment());
});
saveResponseBtn.addEventListener('click', () => {
  const response = messageResponse.querySelector('textarea').value;
  if(response.trim()) alert('Reflexión guardada');
});
cardMessage.addEventListener('click', () => {
  messageResponse.classList.toggle('hidden');
});

// Inicialización
setMode('sad');