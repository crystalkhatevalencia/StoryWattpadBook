const stories=[
["Skybound Academy","Fantasy","A student discovers a hidden school above the clouds."],
["Neon Runner","Sci-Fi","A courier races across a future city to deliver a mysterious chip."],
["The Last Guardian","Action","A young hero protects the final village beyond the wall."],
["Moonlight Letters","Romance","Two strangers exchange letters that appear only at night."],
["The Clockmaker's Secret","Mystery","A broken clock reveals clues to a missing inventor."],
["Oops, My Superpower!","Comedy","An ordinary teen's power only works at the worst moments."],
["Dragon of Ember Hill","Fantasy","A shy village baker befriends a dragon made of fire."],
["Midnight Detective","Mystery","A rookie detective solves a case under a purple moon."],
["Starship Snack Run","Comedy","Space cadets search the galaxy for the perfect midnight snack."],
["Crimson Circuit","Sci-Fi","A mechanic enters an underground robot tournament."],
["Rooftop Rivals","Action","Two parkour champions race to save their neighborhood."],
["A Love in Panels","Romance","An artist finds inspiration in the person next door."],
["The Forest Door","Fantasy","A door in an old tree opens to a magical kingdom."],
["The Vanishing Mascot","Mystery","A school mascot disappears before the big game."],
["Tiny Titan","Comedy","A tiny superhero has huge problems and even bigger dreams."],
["Orbit Breakers","Sci-Fi","Three friends challenge the rules of a space colony."],
["Shadowblade","Action","A quiet warrior must face the shadow that follows them."],
["Coffee and Comets","Romance","A café worker meets a stargazer who visits every Friday."],
["The Haunted Bus Stop","Mystery","The last bus arrives with passengers from another time."],
["Witch's Weekend","Fantasy","A beginner witch tries to survive one chaotic weekend."],
["Pixel Knights","Sci-Fi","Video game heroes discover their world is changing."],
["The Great Lunch Heist","Comedy","Friends plan an impossible mission to retrieve a stolen lunch."],
["Thunder Street","Action","A young boxer stands up to a powerful street gang."],
["Postcards from Mars","Romance","A lonely astronaut receives unexpected messages from Earth."],
["The Paper Moon Case","Mystery","A paper moon left at a crime scene holds the answer."],
["Mermaid on Main Street","Fantasy","A mermaid tries to blend in at a landlocked town."],
["Robot Roommate","Comedy","A student builds a robot that takes household rules too seriously."],
["Galactic Gardeners","Sci-Fi","A crew grows the first garden on a distant planet."],
["The Golden Mask","Action","A masked hero searches for a stolen museum artifact."],
["Our Summer Sketchbook","Romance","Two classmates turn a summer art project into a friendship."]
];
function cover(title,genre,index){const colors=[['#ff6b4a','#ffd166'],['#5941a9','#a7c7e7'],['#007f73','#f4f1de'],['#b83280','#f9c6d0'],['#263238','#ffca3a'],['#355070','#eaac8b']];const [a,b]=colors[index%colors.length];const safe=title.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><rect width="600" height="800" fill="${a}"/><circle cx="440" cy="210" r="160" fill="${b}"/><path d="M0 600L180 350 320 520 470 300 600 500V800H0Z" fill="${b}" opacity=".75"/><text x="45" y="100" font-family="Arial" font-size="24" fill="white">PANELVERSE COMICS</text><text x="45" y="620" font-family="Arial" font-size="48" font-weight="bold" fill="white">${safe}</text><text x="45" y="680" font-family="Arial" font-size="28" fill="white">${genre}</text></svg>`;return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg)}
const id=Number(new URLSearchParams(location.search).get('id'))||1;const index=Math.min(Math.max(id-1,0),stories.length-1);const [title,genre,synopsis]=stories[index];const root=document.getElementById('story');
root.innerHTML=`<p class="eyebrow">${genre} • ONE CHAPTER</p><h1 class="reader-title">${title}</h1><p class="reader-synopsis">${synopsis}</p><p class="byline">Written by PanelVerse Studio</p><section class="chapter"><h2>Chapter 1: The Beginning</h2><p>The day began like any other, until the world offered a small sign that something extraordinary was about to happen.</p><img class="story-panel" src="${cover(title,genre,index)}" alt="Illustrated cover for ${title}"><p>“Did you see that?” the main character whispered, taking one careful step forward.</p><div class="speech">“This is only the beginning!”</div><p>Every great adventure starts with a choice. With a deep breath, our hero decided to move forward, even without knowing what waited beyond the next corner.</p><img class="story-panel panel-two" src="${cover(title,genre,(index+2)%stories.length)}" alt="Second comic panel for ${title}"><p>The mystery was far from solved, but one thing was certain: nothing would ever be quite the same again.</p><p class="the-end">— End of Chapter 1 —</p></section><div class="reader-actions"><button class="button" id="likeStory" type="button">♡ Like this comic</button><a class="button" href="index.html#library">Read another</a></div>`;
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');document.getElementById('themeToggle').textContent=dark?'☀️ Light mode':'🌙 Dark mode';});
document.getElementById('likeStory').addEventListener('click',e=>{const b=e.currentTarget;b.classList.toggle('is-liked');b.textContent=b.classList.contains('is-liked')?'♥ Liked!':'♡ Like this comic';});
