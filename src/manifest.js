let deferredPrompt;

window.addEventListener('beforeinstallprompt', (evt) => {
  evt.preventDefault();
  deferredPrompt = evt;

  console.log('Evento beforeinstallprompt emitido.');
});

window.addEventListener('appinstalled', (evt) => {
  console.log('Instalação realizada com sucesso.');
});
