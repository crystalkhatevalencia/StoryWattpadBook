const comics = [
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
const grid=document.getElementById('comicGrid');
const search=document.getElementById('searchInput');
const empty=document.getElementById('emptyMessage');
let activeGenre='All';
function coverSvg(title,genre,index){
 const palettes=[['#ff6b4a','#ffd166'],['#5941a9','#a7c7e7'],['#007f73','#f4f1de'],['#b83280','#f9c6d0'],['#263238','#ffca3a'],['#355070','#eaac8b']];
 const [a,b]=palettes[index%palettes.length];
 const safe=title.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#39;');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="800" fill="${a}"/><circle cx="460" cy="180" r="150" fill="${b}" opacity=".9"/><path d="M0 520 L180 310 300 460 440 260 600 480 V800 H0Z" fill="${b}" opacity=".7"/><path d="M0 640 L180 480 320 610 470 440 600 570 V800 H0Z" fill="#171820" opacity=".45"/><rect x="30" y="30" width="540" height="740" fill="none" stroke="#fff" stroke-width="5"/><text x="55" y="100" font-family="Arial" font-size="24" font-weight="bold" fill="#fff">PANELVERSE • COMICS</text><text x="55" y="590" font-family="Arial" font-size="48" font-weight="bold" fill="#fff">${safe.length>19?safe.slice(0,19):safe}</text><text x="55" y="640" font-family="Arial" font-size="26" fill="#fff">${genre.toUpperCase()}</text><text x="55" y="720" font-family="Arial" font-size="20" fill="#fff">ISSUE 01 • ONE CHAPTER</text></svg>`;
 return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}
function render(){
 const q=search.value.toLowerCase().trim();
 const filtered=comics.map((c,i)=>({...c,index:i})).filter(c=>(activeGenre==='All'||c[1]===activeGenre)&&(`${c[0]} ${c[1]} ${c[2]}`).toLowerCase().includes(q));
 grid.innerHTML='';
 filtered.forEach(c=>{
  const card=document.createElement('article');card.className='comic-card';
  const cover=document.createElement('img');cover.className='cover';cover.src=coverSvg(c[0],c[1],c.index);cover.alt=`Cover art for ${c[0]}`;
  const info=document.createElement('div');info.className='comic-info';
  const title=document.createElement('h3');title.textContent=c[0];
  const genre=document.createElement('div');genre.className='genre';genre.textContent=c[1];
  const synopsis=document.createElement('p');synopsis.className='synopsis';synopsis.textContent=c[2];
  const actions=document.createElement('div');actions.className='card-actions';
  const read=document.createElement('a');read.className='read-button';read.href=`comic.html?id=${c.index+1}`;read.textContent='Read Comic';
  const like=document.createElement('button');like.className='like-button';like.type='button';like.innerHTML='♡ <span>Like</span>';like.setAttribute('aria-label',`Like ${c[0]}`);
  like.addEventListener('click',()=>{const liked=like.classList.toggle('liked');like.innerHTML=liked?'♥ <span>Liked</span>':'♡ <span>Like</span>';});
  actions.append(read,like);info.append(title,genre,synopsis,actions);card.append(cover,info);grid.append(card);
 });
 empty.hidden=filtered.length!==0;
}
search.addEventListener('input',render);
document.getElementById('genreFilters').addEventListener('click',e=>{const btn=e.target.closest('button[data-genre]');if(!btn)return;activeGenre=btn.dataset.genre;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));render();});
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');document.getElementById('themeToggle').textContent=dark?'☀️ Light mode':'🌙 Dark mode';});
render();