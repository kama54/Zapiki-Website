(() => {
  "use strict";
  const languages = {
    fr:["Français","🇫🇷","ltr"], en:["English","🇬🇧","ltr"],
    es:["Español","🇪🇸","ltr"], it:["Italiano","🇮🇹","ltr"],
    de:["Deutsch","🇩🇪","ltr"], nl:["Nederlands","🇳🇱","ltr"],
    pt:["Português","🇵🇹","ltr"], ar:["العربية","🇸🇦","rtl"],
    ja:["日本語","🇯🇵","ltr"], ko:["한국어","🇰🇷","ltr"]
  };
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const queryLanguage = new URLSearchParams(location.search).get("lang");
  const cached = (() => { try{return localStorage.getItem("zapikiLang");}catch{return null;} })();
  const browserLanguage = (navigator.language || "fr").slice(0,2).toLowerCase();
  const lang = languages[queryLanguage] ? queryLanguage
    : languages[cached] ? cached : languages[browserLanguage] ? browserLanguage : "fr";
  try { localStorage.setItem("zapikiLang", lang); } catch { /* private browsing */ }
  const trLink = (filename) => filename + "?lang=" + encodeURIComponent(lang);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g,
    char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const anchor = (url, label) => '<a href="' + trLink(url) + '">' + escapeHtml(label) + '</a>';
  const escapeText = escapeHtml;
  const links = ["index.html","lecteur.html","confidentialite.html","conditions.html",
    "contact.html","suppression-compte.html","signalement.html","mentions-legales.html"];
  const frenchUI = ["Accueil","Le lecteur","Confidentialité","Conditions","Contact",
    "Supprimer un compte","Signaler un problème","Mentions légales"];
  const picked = (window.ZAPIKI_LOCALE_DATA || {});
  const frenchFallback = {
    nav: frenchUI, footer:"Lecteur multimédia indépendant", select:"Changer de langue"
  };
  let dictionary = frenchFallback;
  function renderGlobal() {
    const names = dictionary.nav || frenchUI;
    document.documentElement.lang = lang;
    document.documentElement.dir = languages[lang][2];
    const nav = document.querySelector("header nav");
    const headerLinks = nav && nav.querySelector(".links");
    if (headerLinks) headerLinks.innerHTML = links.map((url,i) => anchor(url,names[i])).join("");
    const footerLinks = document.querySelector("footer .links");
    if (footerLinks) footerLinks.innerHTML = links.map((url,i) => anchor(url,names[i])).join("");
    const footer = document.querySelector("footer p");
    if (footer) footer.textContent = "© 2026 ZAPIKI · " + (dictionary.footer||frenchFallback.footer);
    if (!nav) return;
    const select = document.createElement("select");
    select.className="lang-select";
    select.setAttribute("aria-label", dictionary.select||frenchFallback.select);
    select.title = dictionary.select||frenchFallback.select;
    Object.entries(languages).forEach(([code, spec]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = spec[1]+" "+spec[0];
      if (code === lang) option.selected = true;
      select.appendChild(option);
    });
    const wrap = document.createElement("div");
    wrap.className = "lang-picker";
    wrap.appendChild(select);
    nav.appendChild(wrap);
    select.addEventListener("change", () => {
      const next = new URL(location.href);
      next.searchParams.set("lang",select.value);
      location.assign(next.toString());
    });
  }
  function sectionsPage(data) {
    return '<article class="legal"><h1>'+escapeText(data.title)+'</h1>'+
      (data.date?'<p class="date">'+escapeText(data.date)+'</p>':'')+
      (data.intro?'<div class="notice"><p>'+escapeText(data.intro)+'</p></div>':'')+
      (data.sections||[]).map((row)=>'<h2>'+escapeText(row[0])+'</h2><p>'+escapeText(row[1])+'</p>').join("")+
      '</article>';
  }
  function homePage(d) {
    const cards = (d.cards||[]).map((c,i)=>
      '<article class="card"><div class="glyph" aria-hidden="true">'+["◉","▣","♡","↻","▤","⚙"][i]+'</div>'+
      '<h2>'+escapeText(c[0])+'</h2><p>'+escapeText(c[1])+'</p></article>').join("");
    return '<section class="wrap hero"><span class="tag">Android · Android TV · Fire TV</span>'+
      '<h1>'+escapeText(d.title)+'</h1><p class="lead">'+escapeText(d.lead)+'</p>'+
      '<div class="actions"><a class="btn primary" href="#fonctionnalites">'+escapeText(d.discover)+'</a>'+
      '<a class="btn ghost" href="'+trLink("lecteur.html")+'">'+escapeText(d.learn)+'</a></div></section>'+
      '<section id="fonctionnalites" class="wrap grid">'+cards+'</section>'+
      '<section class="section"><div class="wrap"><h2>'+escapeText(d.planTitle)+'</h2>'+
      '<p>'+escapeText(d.planCopy)+'</p><h2>'+escapeText(d.disclaimerTitle)+'</h2>'+
      '<p>'+escapeText(d.disclaimer)+'</p>'+
      '<div class="notice"><p>'+escapeText(d.google)+'</p></div>'+
      '<p>'+anchor("suppression-compte.html", (dictionary.nav||frenchUI)[5])+
      ' · '+anchor("signalement.html",(dictionary.nav||frenchUI)[6])+'</p></div></section>';
  }
  function contactPage(d) {
    return '<article class="legal"><h1>'+escapeText(d.title)+'</h1>'+
      '<p>'+escapeText(d.intro)+'</p><div class="notice"><p><strong><a href="mailto:gogostudio87@gmail.com">gogostudio87@gmail.com</a></strong></p></div>'+
      '<p>'+escapeText(d.safety)+'</p><p>'+escapeText(d.rights)+'</p>'+
      '<p>'+anchor("confidentialite.html",(dictionary.nav||frenchUI)[2])+
      ' · '+anchor("signalement.html",(dictionary.nav||frenchUI)[6])+'</p></article>';
  }
  function reportPage(d) {
    return '<article class="legal"><h1>'+escapeText(d.title)+'</h1>'+
      '<p>'+escapeText(d.intro)+'</p><div class="notice"><p><a href="mailto:gogostudio87@gmail.com?subject=ZAPIKI%20rights%20report">gogostudio87@gmail.com</a></p></div>'+
      '<h2>'+escapeText(d.provide)+'</h2><ul>'+(d.items||[]).map(x=>'<li>'+escapeText(x)+'</li>').join("")+'</ul>'+
      '<p>'+escapeText(d.safety)+'</p><h2>'+escapeText(d.thirdTitle)+'</h2><p>'+escapeText(d.third)+'</p>'+
      '<p>'+anchor("contact.html",(dictionary.nav||frenchUI)[4])+' · '+anchor("confidentialite.html",(dictionary.nav||frenchUI)[2])+'</p></article>';
  }
  function deletionPage(d) {
    const main = document.querySelector("main");
    if (!main) return;
    // Preserve ALL form elements and their listeners. Only change visible text/labels.
    const set = (selector,value) => {
      const el=main.querySelector(selector);
      if(el && value !== undefined) el.textContent=value;
    };
    set("h1",d.title);
    set("article > p:first-of-type",d.intro);
    set(".notice p",d.warning);
    set("#login h2",d.signTitle);
    set("#google",d.google);
    set("#login > p",d.orEmail);
    set('label[for="email"]',d.email);
    set('label[for="password"]',d.password);
    set('#password-login button[type="submit"]',d.signin);
    set("#confirmation h2",d.confirmTitle);
    const confirmationLabel=main.querySelector("#confirmation > p");
    if (confirmationLabel && confirmationLabel.firstChild && confirmationLabel.firstChild.nodeType===Node.TEXT_NODE)
      confirmationLabel.firstChild.textContent=d.connected+" ";
    set('label[for="typed-email"]',d.typeEmail);
    const ackLabel=main.querySelector(".confirm-row");
    if (ackLabel) {
      const checkbox=ackLabel.querySelector("input");
      if (checkbox) ackLabel.replaceChildren(checkbox, document.createTextNode(" "+d.ack));
    }
    set("#delete",d.delete);
    set("#logout",d.cancel);
    const subHead=main.querySelector("article > h2:last-of-type");
    if(subHead) {
      subHead.textContent=d.request;
      const requestText=subHead.nextElementSibling;
      if(requestText) requestText.innerHTML=escapeHtml(d.requestIntro||"")+
        ' <a href="mailto:gogostudio87@gmail.com?subject=ZAPIKI%20account%20deletion">gogostudio87@gmail.com</a> '+
        escapeHtml(d.requestSafety||"");
      const appNote=requestText?.nextElementSibling;
      if(appNote) appNote.textContent=d.appNote||"";
      const related=appNote?.nextElementSibling;
      if(related) related.innerHTML=anchor("confidentialite.html",(dictionary.nav||frenchUI)[2])+
        " · "+anchor("contact.html",(dictionary.nav||frenchUI)[4]);
    }
    window.ZAPIKI_DELETE_MESSAGES=d.messages||{};
  }
  function applyLocale(data) {
    dictionary=data;
    renderGlobal();
    if(lang==="fr") return;
    const main=document.querySelector("main");
    if(!main)return;
    const p=data.pages||{};
    if(page==="index.html" && p.home) main.innerHTML=homePage(p.home);
    else if(page==="contact.html" && p.contact) main.innerHTML=contactPage(p.contact);
    else if(page==="signalement.html" && p.report) main.innerHTML=reportPage(p.report);
    else if(page==="suppression-compte.html" && p.delete) deletionPage(p.delete);
    else if(p[page]) main.innerHTML=sectionsPage(p[page]);
    const mappedPage = page==="index.html"?"home":
      page==="contact.html"?"contact":page==="signalement.html"?"report":
      page==="suppression-compte.html"?"delete":page;
    document.title=(p[mappedPage]?.title||"ZAPIKI")+" — ZAPIKI";
  }
  if(lang==="fr") applyLocale(frenchFallback);
  else {
    const script=document.createElement("script");
    script.src="locales/"+lang+".js";
    script.onload=()=>applyLocale(window.ZAPIKI_LOCALE_DATA||frenchFallback);
    script.onerror=()=>applyLocale(frenchFallback);
    document.head.appendChild(script);
  }
})();
