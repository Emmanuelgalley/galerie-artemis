/* DONNÉES DE TEST : artistes, titres, prix et textes sont fictifs, à remplacer par les vraies œuvres.
   s : d = disponible, r = réservée, v = vendue
   ty : peinture, dessin, serigraphie, varia
   det : liste facultative de photos de détail (chemins d'images) */
window.WORKS=[
{id:1,a:'Ayélé Dosseh',t:['Saison des pluies','Rainy season'],y:2025,m:['Huile sur toile','Oil on canvas'],d:'120 × 90 cm',pr:850000,s:'d',r:4/3,st:'b',p:['#1B0F08','#5E2A10','#B8651A','#E0A84A','#F8E7C7'],src:'WhatsApp Image 2026-10-23 at 02.04.41.jpeg'},
{id:2,a:'Marc Lenoir',t:['Cadastre n°4','Land register no. 4'],y:2024,m:['Acrylique sur toile','Acrylic on canvas'],d:'100 × 140 cm',pr:1200000,s:'r',r:5/7,st:'f',p:['#E8E4DA','#1F3A4D','#C2452D','#E3C39A','#BCC2C7'],src:'WhatsApp Image 2026-10-23 at 02.07.25.jpeg'},
{id:3,a:'Fiona Mensah',t:['Le soir se retire','Evening withdraws'],y:2025,m:['Huile sur toile','Oil on canvas'],d:'150 × 100 cm',pr:1600000,s:'d',r:1.5,st:'c',p:['#14213D','#FCA311','#E5E5E5','#8C9A9E','#F0B27A'],src:'WhatsApp Image 2026-10-23 at 02.08.00.jpeg'},
{id:4,a:'Kossi Agbo',t:['Sans titre (rouge)','Untitled (red)'],y:2023,m:['Technique mixte sur papier','Mixed media on paper'],d:'70 × 70 cm',pr:450000,s:'v',r:1,st:'s',p:['#EFE9DF','#B3261E','#11B7A5','#F5C74F','#E0D7C5'],src:'WhatsApp Image 2026-10-23 at 02.09.50.jpeg'},
{id:5,a:'Ayélé Dosseh',t:['Trois fenêtres','Three windows'],y:2025,m:['Acrylique sur toile','Acrylic on canvas'],d:'80 × 120 cm',pr:700000,s:'d',r:2/3,st:'f',p:['#D9CBB0','#3B5B4F','#C9892B','#E0E2DE','#A8A062']},
{id:6,a:'Inès Gbadamassi',t:['Terre battue','Packed earth'],y:2024,m:['Huile et sable sur toile','Oil and sand on canvas'],d:'140 × 100 cm',pr:1350000,s:'d',r:1.4,st:'b',p:['#CDB08A','#8A4B2A','#D86E3B','#E9D8B2','#F7F3EB']},
{id:7,a:'Marc Lenoir',t:['Cadastre n°7','Land register no. 7'],y:2024,m:['Acrylique sur toile','Acrylic on canvas'],d:'90 × 90 cm',pr:950000,s:'d',r:1,st:'f',p:['#1A1A1A','#D8D2C4','#C2452D','#3B5D5A','#F0D190']},
{id:8,a:'Fiona Mensah',t:['Passage','Passage'],y:2025,m:['Huile sur toile','Oil on canvas'],d:'60 × 80 cm',pr:520000,s:'r',r:.75,st:'c',p:['#E9DDC8','#2D4A3E','#D9A441','#7A2E2E','#F0F4F4']}];

/* Type et texte de présentation (TEXTES DE TEST) : [type, français, anglais] */
(function(){const X={
1:['peinture','Trois semaines de pluie, peintes de mémoire en une seule séance. L’ocre remplace le gris et la lumière monte du bas de la toile.','Three weeks of rain, painted from memory in a single sitting. Ochre replaces grey and the light rises from the bottom of the canvas.'],
2:['peinture','Un plan de parcelles redessiné sans échelle. Les limites se chevauchent et les surfaces se contredisent.','A plot plan redrawn without a scale. Boundaries overlap and surfaces contradict one another.'],
3:['peinture','Un cercle de lumière qui recule à mesure que la toile se couvre de bleu nuit. Peint en trois couches, avec un temps de séchage entre chacune.','A circle of light withdrawing as the canvas fills with night blue. Painted in three layers, with drying time between each.'],
4:['dessin','Gestes larges à l’encre et au pigment, repris au pastel. Une pièce unique, réalisée sans étude préalable.','Broad gestures in ink and pigment, reworked in pastel. A unique piece, made without preliminary studies.'],
5:['peinture','Trois ouvertures de tailles différentes sur un mur couleur sable. Le vert sombre cadre le regard, l’ocre le réchauffe.','Three openings of different sizes on a sand-coloured wall. Dark green frames the gaze, ochre warms it.'],
6:['peinture','Du sable mêlé à la peinture donne au fond le grain d’un sol piétiné. Les bandes de terre cuite suivent le geste du bras.','Sand mixed into the paint gives the ground the grain of trodden earth. The terracotta bands follow the sweep of the arm.'],
7:['peinture','Septième plan de la série : le noir domine et un rectangle clair marque la parcelle contestée.','Seventh plan of the series: black dominates and a pale rectangle marks the disputed plot.'],
8:['peinture','Cercles superposés, du vert profond au jaune safran. Un format vertical pensé pour un couloir ou une entrée.','Overlapping circles, from deep green to saffron yellow. A vertical format made for a corridor or an entrance.']};
WORKS.forEach(w=>{const e=X[w.id];w.ty=e[0];w.txt=[e[1],e[2]];w.det=w.det||[]})})();
