(() => {
  "use strict";
  const slides = [...document.querySelectorAll(".z-promo-gallery a.z-promo-slide")];
  if (!slides.length || typeof HTMLDialogElement === "undefined") return;
  const labels = {
    fr:["Fermer la galerie","Image précédente","Image suivante"],
    en:["Close gallery","Previous image","Next image"],
    es:["Cerrar galería","Imagen anterior","Imagen siguiente"],
    it:["Chiudi galleria","Immagine precedente","Immagine successiva"],
    de:["Galerie schließen","Vorheriges Bild","Nächstes Bild"],
    nl:["Galerij sluiten","Vorige afbeelding","Volgende afbeelding"],
    pt:["Fechar galeria","Imagem anterior","Imagem seguinte"],
    ar:["إغلاق المعرض","الصورة السابقة","الصورة التالية"],
    ja:["ギャラリーを閉じる","前の画像","次の画像"],
    ko:["갤러리 닫기","이전 이미지","다음 이미지"]
  };
  const language = document.documentElement.lang?.toLowerCase().slice(0,2) || "fr";
  const [closeText, previousText, nextText] = labels[language] || labels.fr;
  const dialog = document.createElement("dialog");
  dialog.className = "z-lightbox";
  dialog.setAttribute("aria-label", "ZAPIKI");
  dialog.innerHTML = '<div class="z-lb-frame">'+
    '<div class="z-lb-top"><span class="z-lb-label" id="z-lb-label"></span><button type="button" class="z-lb-close" aria-label=""></button></div>'+
    '<div class="z-lb-content"><button type="button" class="z-lb-prev" aria-label="">&#8249;</button>'+
    '<img alt=""><button type="button" class="z-lb-next" aria-label="">&#8250;</button></div>'+
    '<p class="z-lb-counter" aria-live="polite"></p></div>';
  document.body.appendChild(dialog);
  const image = dialog.querySelector(".z-lb-content img");
  const title = dialog.querySelector(".z-lb-label");
  const count = dialog.querySelector(".z-lb-counter");
  const close = dialog.querySelector(".z-lb-close");
  const prev = dialog.querySelector(".z-lb-prev");
  const next = dialog.querySelector(".z-lb-next");
  close.textContent = "×";
  close.setAttribute("aria-label", closeText);
  prev.setAttribute("aria-label", previousText);
  next.setAttribute("aria-label", nextText);
  let index = 0, opener = null, priorOverflow = "", x0 = null, y0 = null;
  function render() {
    const link = slides[index];
    const source = link.querySelector("img");
    image.src = link.getAttribute("href");
    image.alt = source ? source.alt : (link.getAttribute("aria-label") || "");
    title.textContent = link.getAttribute("aria-label") || image.alt;
    count.textContent = String(index + 1).padStart(2,"0") + " / " + String(slides.length).padStart(2,"0");
  }
  function move(offset) {
    index = (index + offset + slides.length) % slides.length;
    render();
  }
  function open(anchor, nextIndex) {
    if (typeof dialog.showModal !== "function") return;
    opener = anchor;
    index = nextIndex;
    priorOverflow = document.body.style.overflow;
    render();
    dialog.showModal();
    document.body.classList.add("z-lightbox-open");
    document.body.style.overflow = "hidden";
    close.focus();
  }
  slides.forEach((link, i) => link.addEventListener("click", event => {
    if (typeof dialog.showModal !== "function") return;
    event.preventDefault();
    open(link, i);
  }));
  close.addEventListener("click", () => dialog.close());
  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("z-lightbox-open");
    document.body.style.overflow = priorOverflow;
    image.removeAttribute("src");
    if (opener) opener.focus({preventScroll:true});
  });
  dialog.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {event.preventDefault();move(-1);}
    else if (event.key === "ArrowRight") {event.preventDefault();move(1);}
    else if (event.key === "Escape") {event.preventDefault();dialog.close();}
  });
  image.addEventListener("touchstart", event => {
    if (event.touches.length !== 1) return;
    x0 = event.touches[0].clientX; y0 = event.touches[0].clientY;
  }, {passive:true});
  image.addEventListener("touchend", event => {
    if (x0 === null || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - x0;
    const dy = event.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) move(dx < 0 ? 1 : -1);
    x0 = null; y0 = null;
  }, {passive:true});
})();
