(function () {
  function generarCSS() {

    var header = document.querySelector(
      '[id^="el_"][id*="_header_0"], [id^="el_"][id*="_header_2"]'
    );

    if (!header) return;

    var match = header.id.match(/^el_(.+?)_header_/);
    if (!match) return;

    var formId = match[1]; 

    var css = `
@media (max-width: 768px) {
  /* What area are you looking to remodel? */
  .slide-no-1 #el_${formId}_header_2 .text-element {
    padding: 20px 0 0 20px !important;
  }

  /* Would you like to see financing options? */
  .slide-no-2 #el_${formId}_header_0 .text-element {
    padding: 20px 0 0 20px !important;
  }

  /* Great! How’s your credit? */
  .slide-no-3 #el_${formId}_header_0 .text-element {
    padding: 20px 0 0 20px !important;
  }
  
    /* Subir respuesta a pregunta*/
	.slide-no-3 .form-builder--item.form-builder--item-input {
    	margin-top: -32px;
	}

  /* ✅ Awesome! */
  .slide-no-4 #el_${formId}_header_0 .text-element {
    padding: 0 !important;
  }

  .option-radio {
    margin-left: 20px;
  }
}
`;

    // Crea/actualiza el <style> en el <head> del iframe
    var styleTag = document.getElementById('custom-mobile-css-ghl');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'custom-mobile-css-ghl';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = css;
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generarCSS);
  } else {
    generarCSS();
  }

  // Por si GHL inyecta contenido un poco después
  var observer = new MutationObserver(function () {
    var headerExiste = document.querySelector(
      '[id^="el_"][id*="_header_0"], [id^="el_"][id*="_header_2"]'
    );
    if (headerExiste) {
      generarCSS();
      observer.disconnect();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
