document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el iframe que contiene el survey
  const iframe = document.querySelector("iframe[src*='leadconnectorhq.com']");
  if (iframe) {
    // Obtener el parámetro "variant" de la URL del iframe
    const url = new URL(iframe.src);
    const variant = url.searchParams.get("variant"); // A o B

    // Obtener el idioma del HTML (ej: "es", "en")
    const lang = document.documentElement.lang || "unknown";
    
    // DEPURACIÓN:
    console.log('Variant:', variant);
    console.log('Idioma detectado:', lang);

    // Enviar evento a GA4
    if (variant) {
      console.log('Enviando evento GA4 ab_test_view con:', {variant, language: lang});
      gtag('event', 'ab_test_view', {
        'variant': variant,
        'ab_language': lang
      });
    } else {
      console.warn('No se detectó parámetro variant en el iframe');
    }
  } else {
    console.warn('No se encontró el iframe');
  }
});
