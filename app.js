(()=>{
const A=window.A={NUM:'22870211111',lang:'fr',W:window.WORKS,onLang:()=>{}};
const $=A.$=s=>document.querySelector(s);A.$$=s=>document.querySelectorAll(s);
try{A.lang=localStorage.getItem('lg')||'fr'}catch(e){}

A.T={
fr:{head:'L’ART CONTEMPORAIN, DE PRÈS',map:'Ouvrir dans Google Maps',mapLabel:'Nous trouver',hoursLabel:'Horaires',contactLabel:'Contact',socialLabel:'Suivre la galerie',nCol:'Collection',nVis:'Visite',close:'Fermer',
 addr:'Forever, non loin de l’ex LCF, Rue de Kpendjal',loc:'fr-FR',wa:'Écrire sur WhatsApp',dir:'Itinéraire',gen:'Bonjour, je voudrais recevoir plus d’informations sur la collection.',
 f:{all:'Tout',peinture:'Peinture',dessin:'Dessin',serigraphie:'Sérigraphie',varia:'Varia'},s:{d:'Disponible',r:'Réservée',v:'Vendue'},
 h:[['Lun.','Fermé'],['Mar.','10:00–19:00'],['Mer.','10:00–19:00'],['Jeu.','10:00–19:00'],['Ven.','10:00–19:00'],['Sam.','10:00–19:00'],['Dim.','14:00–19:00']],
 see:'Voir l’œuvre',back:'Retour à la collection',zoom:'Cliquer sur l’image pour l’agrandir',share:'Partager le lien',copied:'Lien copié',avail:'Voir les œuvres disponibles',
 visit:'Horaires et itinéraire',same:'Du même artiste',others:'Autres œuvres',prev:'Œuvre précédente',next:'Œuvre suivante',nf:'Cette œuvre est introuvable.',
 msg:(t,a,u)=>`Bonjour, je souhaite des informations sur l’œuvre « ${t} » de ${a}.\n${u}`},
en:{head:'CONTEMPORARY ART, UP CLOSE',map:'Open in Google Maps',mapLabel:'Find us',hoursLabel:'Opening hours',contactLabel:'Contact',socialLabel:'Follow the gallery',nCol:'Collection',nVis:'Visit',close:'Close',
 addr:'Forever, near the former LCF, Rue de Kpendjal',loc:'en-US',wa:'Message on WhatsApp',dir:'Directions',gen:'Hello, I would like more information about the collection.',
 f:{all:'All',peinture:'Painting',dessin:'Drawing',serigraphie:'Screen print',varia:'Varied'},s:{d:'Available',r:'Reserved',v:'Sold'},
 h:[['Mon.','Closed'],['Tue.','10:00–19:00'],['Wed.','10:00–19:00'],['Thu.','10:00–19:00'],['Fri.','10:00–19:00'],['Sat.','10:00–19:00'],['Sun.','14:00–19:00']],
 see:'View the work',back:'Back to the collection',zoom:'Click the image to enlarge',share:'Share link',copied:'Link copied',avail:'See available works',
 visit:'Opening hours and directions',same:'By the same artist',others:'Other works',prev:'Previous work',next:'Next work',nf:'This work could not be found.',
 msg:(t,a,u)=>`Hello, I would like information about “${t}” by ${a}.\n${u}`}};

A.x=()=>A.T[A.lang];
const en=()=>A.lang==='en'?1:0;
A.ti=w=>w.t[en()];A.tx=w=>w.txt[en()];A.tech=w=>w.m[en()];
A.meta=w=>`${w.y}, ${A.tech(w).toLowerCase()}, ${w.d}`;
A.url=w=>`oeuvre.html?id=${w.id}`;
A.abs=w=>new URL(A.url(w),location.href).href;
A.fm=n=>new Intl.NumberFormat(A.x().loc).format(n)+'\u00a0FCFA';
A.wa=m=>`https://wa.me/${A.NUM}?text=${encodeURIComponent(m)}`;
A.price=w=>`<span class="${w.s==='v'?'v':''}">${w.s==='v'?`<s>${A.fm(w.pr)}</s>`:A.fm(w.pr)}</span><b class="${w.s}">${A.x().s[w.s]}</b>`;

/* Image d'une œuvre : photo si "src" existe, sinon toile générée (données de test) */
const R=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
A.art=(w,k,hero,eager)=>{
  if(w.src){
    if(hero)return `<div class="art"><img class="art-main" src="${w.src}" alt="${A.ti(w)}" style="object-position:${w.pos||'50% 50%'}"></div>`;
    return `<img src="${w.src}" alt="${A.ti(w)}" class="photo" ${eager?'':'loading="lazy"'} style="width:100%;height:auto;display:block;">`;
  }
  const H=Math.round(1000/w.r),r=R(w.id*977),p=w.p,c=()=>p[Math.floor(r()*p.length)];let s=`<rect width="1000" height="${H}" fill="${p[0]}"/>`;
  if(w.st==='b'){s+=`<circle cx="${300+r()*400}" cy="${H*.34}" r="${H*.1}" fill="${p[p.length-2]}"/>`;for(let i=1;i<5;i++){const y=H*i/5+(r()-.5)*H*.06;s+=`<path d="M0 ${y}C300 ${y-H*.07*r()} 700 ${y+H*.07*r()} 1000 ${y}" stroke="${p[i%p.length]}" stroke-width="${24+r()*18}" fill="none" opacity=".9"/>`}}
  else if(w.st==='f'){let y=H*.07;for(let i=1;i<4;i++){const h=H*(.15+r()*.12);s+=`<rect x="${70+r()*70}" y="${y}" width="${700+r()*170}" height="${h}" fill="${p[i%p.length]}" opacity=".94"/>`;y+=h+H*.05}}
  else if(w.st==='c'){for(let i=0;i<4;i++)s+=`<circle cx="${r()*1000}" cy="${r()*H}" r="${120+r()*260}" fill="${c()}" opacity=".86"/>`;s+=`<circle cx="500" cy="${H/2}" r="${H*.3}" fill="none" stroke="${p[3]}" stroke-width="${H*.08}" opacity=".7"/>`}
  else for(let i=0;i<6;i++){const q=()=>`${r()*1000} ${r()*H}`;s+=`<path d="M${q()}C${q()} ${q()} ${q()}" stroke="${c()}" stroke-width="${30+r()*70}" fill="none" stroke-linecap="round" opacity=".9"/>`}
  s+=`<filter id="n${k}"><feTurbulence baseFrequency=".85" numOctaves="2" seed="${w.id}"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .22 0"/></filter><rect width="1000" height="${H}" filter="url(#n${k})" opacity=".45"/>`;
  return `<svg viewBox="0 0 1000 ${H}" ${hero?'class="art" preserveAspectRatio="xMidYMid slice"':''} role="img" aria-label="${A.ti(w)}">${s}</svg>`;
};

A.apply=()=>{document.documentElement.lang=A.lang;
  A.$$('[data-i]').forEach(e=>e.textContent=A.x()[e.dataset.i]);
  A.$$('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===A.lang))};

A.init=()=>{
  const mn=$('#menu'),bg=$('.bg');mn.inert=true;
  const tg=o=>{mn.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);mn.inert=!o;(o?$('#cl'):bg).focus()};
  bg.onclick=()=>tg(true);$('#cl').onclick=()=>tg(false);A.$$('#menu a').forEach(a=>a.onclick=()=>tg(false));
  addEventListener('keydown',e=>{if(e.key==='Escape'&&mn.classList.contains('open'))tg(false)});
  document.addEventListener('click',e=>{const b=e.target.closest('[data-l]');if(!b)return;
    A.lang=b.dataset.l;try{localStorage.setItem('lg',A.lang)}catch(_){}A.apply();A.onLang()});
};
})();