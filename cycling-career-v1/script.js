const STAT_LABELS={
sprint:"Sprint",acceleration:"Acceleration",endurance:"Endurance",recovery:"Recovery",
flat:"Flat",hill:"Hill",mediumMountain:"Medium Mountain",mountain:"Mountain",
cobblestones:"Cobblestones",itt:"ITT",positioning:"Positioning",raceIQ:"Race IQ",
technique:"Technique",mentality:"Mentality",teamwork:"Teamwork"
};
const STAT_GROUPS={
"Physical":["sprint","acceleration","endurance","recovery"],
"Terrain":["flat","hill","mediumMountain","mountain","cobblestones","itt"],
"Race":["positioning","raceIQ","technique","mentality","teamwork"]
};
const APP_KEY="cyclingCareerSaveV1";
let state=loadState();
const app=document.getElementById("app");

function loadState(){
  try{const x=JSON.parse(localStorage.getItem(APP_KEY));if(x)return x}catch(e){}
  return {screen:"start",player:null,offers:[],team:null,contract:null,agent:null,currentDate:"2026-01-05",
    form:86,energy:100,fatigue:12,experience:0,inbox:[],history:[],training:null,worldSeed:Math.floor(Math.random()*999999),worldTick:0,
    selectedRace:null,toast:null};
}
function save(){localStorage.setItem(APP_KEY,JSON.stringify(state))}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function money(n){return new Intl.NumberFormat("da-DK",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(n)}
function toast(msg){state.toast=msg;save();render();setTimeout(()=>{state.toast=null;render()},1800)}
function setScreen(s){state.screen=s;save();render()}
function team(){return TEAMS.find(t=>t.id===state.team)}
function addInbox(subject,type,body,priority="INFO",action=null){
 state.inbox.unshift({id:Date.now()+Math.random(),subject,type,body,priority,action,read:false,date:state.currentDate});
}
function nav(){
 return `<aside class="sidebar"><div class="nav-title">Career</div><div class="nav">
 ${["dashboard:Dashboard","rider:Rider","calendar:Calendar","team:Team","inbox:Inbox","world:World","career:Career","contract:Contract","settings:Settings"].map(x=>{let [id,n]=x.split(":");return `<button class="${state.screen===id?"active":""}" onclick="setScreen('${id}')"><span>${n}</span></button>`}).join("")}
 </div></aside>`;
}
function shell(content){
 const unread=state.inbox.filter(x=>!x.read).length;
 return `<div class="app"><header class="topbar"><div class="brand">Cycling <span>Career</span></div><div class="top-meta"><span>${state.player?esc(state.player.name):"New Career"}</span>${state.player?`<span>${esc(state.currentDate)}</span>`:""}</div></header>
 <div class="layout">${state.player?nav():""}<main class="main">${content}</main></div>${state.toast?`<div class="toast">${esc(state.toast)}</div>`:""}</div>`;
}
function render(){app.innerHTML=state.screen==="start"?startScreen():state.screen==="create"?createScreen():state.screen==="offers"?offersScreen():state.screen==="race"?raceScreen():shell(screenContent())}
function startScreen(){
 return `<div class="screen-center"><div class="start-card"><div class="logo">Cycling <span>Career</span></div>
 <p class="subtitle">Byg din karriere fra ukendt ungdomsrytter til professionel. Træn, vælg løb, opbyg relationer og se cykelverdenen udvikle sig omkring dig.</p>
 <div class="actions"><button class="btn primary" onclick="setScreen('create')">Ny karriere</button>
 <button class="btn" onclick="continueCareer()">Fortsæt karriere</button><button class="btn" onclick="setScreen('settings')">Indstillinger</button></div>
 <div class="section-space muted smalltext">V1 • 2026-sæsonen • Karriere-simulator</div></div></div>`;
}
function createScreen(){
 if(!state.creator)state.creator={name:"",country:"DK",age:17,profile:"Allround"};
 const c=state.creator;
 const profiles=[["Quick","Fokus på acceleration, sprint og fart."],["Climber","Naturlig tendens mod lange stigninger og recovery."],["Classics Rider","Tendens mod bakker, brosten og positionering."],["Time Trialist","Tendens mod ITT og udholdenhed."],["Allround","Bred og fleksibel startprofil."],["Own Profile","Mere uforudsigelig statfordeling."]];
 return `<div class="page-title"><div><h1>Opret din rytter</h1><p class="muted">Din profil bestemmer kun tendensen — ikke en fast klasse.</p></div></div>
 <div class="card"><div class="form-grid">
 <div class="field"><label>Navn</label><input value="${esc(c.name)}" oninput="state.creator.name=this.value"></div>
 <div class="field"><label>Land</label><select onchange="state.creator.country=this.value"><option value="DK"${c.country==="DK"?" selected":""}>🇩🇰 Danmark</option><option value="NO"${c.country==="NO"?" selected":""}>🇳🇴 Norge</option><option value="SE"${c.country==="SE"?" selected":""}>🇸🇪 Sverige</option><option value="BE"${c.country==="BE"?" selected":""}>🇧🇪 Belgien</option><option value="FR"${c.country==="FR"?" selected":""}>🇫🇷 Frankrig</option><option value="IT"${c.country==="IT"?" selected":""}>🇮🇹 Italien</option><option value="ES"${c.country==="ES"?" selected":""}>🇪🇸 Spanien</option><option value="NL"${c.country==="NL"?" selected":""}>🇳🇱 Holland</option></select></div>
 <div class="field"><label>Alder</label><select onchange="state.creator.age=Number(this.value)"><option ${c.age===16?"selected":""}>16</option><option ${c.age===17?"selected":""}>17</option><option ${c.age===18?"selected":""}>18</option></select></div></div>
 <div class="section-space"><label class="muted smalltext">Rytterprofil</label><div class="grid g3 section-space">${profiles.map(p=>`<div class="profile-choice ${c.profile===p[0]?"selected":""}" onclick="state.creator.profile='${p[0]}';render()"><strong>${p[0]}</strong><span class="muted smalltext">${p[1]}</span></div>`).join("")}</div></div>
 <div class="actions section-space"><button class="btn primary" onclick="generateRider()">Generér rytter</button><button class="btn" onclick="setScreen('start')">Tilbage</button></div></div>`;
}
function generateRider(){
 const c=state.creator;if(!c.name.trim()){toast("Skriv et navn først");return}
 const base={sprint:52,acceleration:50,endurance:53,recovery:51,flat:52,hill:49,mediumMountain:47,mountain:44,cobblestones:50,itt:45,positioning:43,raceIQ:40,technique:46,mentality:52,teamwork:50};
 const profileMods={
 Quick:{sprint:10,acceleration:9,flat:6},Climber:{endurance:7,recovery:7,mountain:12,mediumMountain:10},
 "Classics Rider":{hill:9,cobblestones:12,positioning:7,technique:5},"Time Trialist":{itt:14,endurance:7,flat:7},
 Allround:{endurance:5,flat:4,hill:4,positioning:4,raceIQ:4},"Own Profile":{}
 }[c.profile]||{};
 Object.keys(profileMods).forEach(k=>base[k]+=profileMods[k]);
 Object.keys(base).forEach(k=>base[k]+=Math.floor(Math.random()*9)-4);
 const potential={};Object.keys(base).forEach(k=>potential[k]=Math.min(92,Math.max(base[k]+8,base[k]+15+Math.floor(Math.random()*13))));
 state.player={id:"player",name:c.name.trim(),country:c.country,age:Number(c.age),profile:c.profile,stats:base,potential,development:Object.fromEntries(Object.keys(base).map(k=>[k,["Strong","Normal","Slow"][Math.floor(Math.random()*3)]]))};
 state.form=84;state.energy=100;state.fatigue=8;state.experience=0;state.currentDate="2026-01-05";state.offers=generateOffers();state.screen="offers";save();render();
}
function generateOffers(){
 const candidates=[...TEAMS].sort(()=>Math.random()-.5).slice(0,4);
 return candidates.map(t=>({...t,offerSalary:Math.round((t.offers.salary*(1+(state.player.age-17)*.08)))}));
}
function offersScreen(){
 return `<div class="page-title"><div><h1>Team offers</h1><p class="muted">${esc(state.player.name)}, du har fået flere muligheder for din første sæson.</p></div></div>
 <div class="grid g2">${state.offers.map((o,i)=>`<div class="card offer"><div class="row"><h2>${esc(o.name)}</h2><span class="pill">${o.level}</span></div>
 <p class="muted">${o.style} • ${o.objective}</p><div class="offer-grid"><div><span>Rolle</span>${o.offers.role}</div><div><span>Løn / måned</span>${money(o.offerSalary)}</div><div><span>Budgetniveau</span>${o.budget}/40</div></div>
 <button class="btn primary" onclick="chooseTeam('${o.id}')">Vælg dette hold</button></div>`).join("")}</div>`;
}
function chooseTeam(id){state.team=id;const t=state.offers.find(x=>x.id===id);state.contract={team:id,start:"2026-01-05",end:"2027-12-31",salary:t.offerSalary,role:t.offers.role,status:"Active"};state.agent=null;
 addInbox("Velkommen til holdet","Team",`Sportsdirektøren byder dig velkommen til ${t.name}. Din første opgave er at finde din plads i hierarkiet.`,"IMPORTANT");
 addInbox("Du har ingen agent endnu","Agent","Du kan starte uden agent og finde en senere, når din karriere har fået retning.","INFO");
 state.screen="dashboard";save();render();}
function dashboard(){
 const p=state.player,t=team(),next=nextRace();
 return `<div class="page-title"><div><h1>Dashboard</h1><p class="muted">Din karriere, lige nu.</p></div><button class="btn primary" onclick="continueCareer()">Fortsæt →</button></div>
 <div class="hero"><div class="row"><div><div class="muted">${p.country} • ${p.age} år • ${t.name}</div><div class="big">${esc(p.name)}</div><div class="muted">${p.profile} • ${state.contract.role}</div></div><span class="pill">Sæson 2026</span></div></div>
 <div class="grid g4">${metric("Form",state.form,"%")}${metric("Energy",state.energy,"%")}${metric("Fatigue",state.fatigue,"%")}${metric("Experience",state.experience,"")}</div>
 <div class="grid g2 section-space"><div class="card"><h2>Næste begivenhed</h2>${next?`<div class="row"><div><strong>${next.name}</strong><div class="muted">${next.type} • ${next.days} dag${next.days===1?"":"e"}</div></div><span class="pill">${next.month}. måned</span></div><p class="muted">${next.terrain} • Mål: ${next.goal}</p><div class="actions"><button class="btn" onclick="raceWish('${next.id}')">Ønsk løbet</button><button class="btn primary" onclick="startRace('${next.id}')">Start løb</button></div>`:`<p class="muted">Ingen kommende løb.</p>`}</div>
 <div class="card"><h2>Holdets fokus</h2><p>${t.objective}</p><div class="notice">Din rolle: <strong>${state.contract.role}</strong><br><span class="muted">Sportsdirektøren holder øje med din udvikling og dine resultater.</span></div></div></div>
 <div class="grid g3 section-space"><div class="card"><h3>Seneste udvikling</h3><p class="green">+1 Endurance</p><p class="muted">Træning og løb påvirker udviklingen over tid.</p></div><div class="card"><h3>Inbox</h3><p>${state.inbox.filter(x=>!x.read).length} ulæste beskeder</p><button class="btn small" onclick="setScreen('inbox')">Åbn inbox</button></div><div class="card"><h3>Sidste resultat</h3><p>${state.history.length?state.history[0].result:"Ingen løb endnu"}</p></div></div>`;
}
function metric(label,val,suf){return `<div class="card stat-card"><div class="label">${label}</div><div class="value">${Math.round(val)}${suf}</div><div class="progress"><i style="width:${Math.min(100,val)}%"></i></div></div>`}
function nextRace(){const month=Number(state.currentDate.slice(5,7));return RACES.find(r=>r.month>=month)||RACES[0]}
function riderPage(){
 const p=state.player;
 return `<div class="page-title"><div><h1>Rider</h1><p class="muted">${esc(p.name)} • ${p.age} år • ${p.profile}</p></div></div>
 <div class="grid g3">${Object.entries(STAT_GROUPS).map(([g,keys])=>`<div class="card"><h2>${g}</h2>${keys.map(k=>`<div class="section-space"><div class="row"><span>${STAT_LABELS[k]}</span><strong>${p.stats[k]}</strong></div><div class="barline"><div class="progress"><i style="width:${p.stats[k]}%"></i></div><span class="smalltext muted">Pot. ${p.potential[k]}</span></div></div>`).join("")}</div>`).join("")}</div>
 <div class="grid g2 section-space"><div class="card"><h2>Udvikling</h2><p class="muted">Potentiale er synligt, men det er ikke en garanti.</p>${Object.entries(p.development).slice(0,8).map(([k,v])=>`<div class="row section-space"><span>${STAT_LABELS[k]}</span><span class="pill">${v}</span></div>`).join("")}</div>
 <div class="card"><h2>Condition</h2>${metric("Form",state.form,"%")}${metric("Energy",state.energy,"%")}${metric("Fatigue",state.fatigue,"%")}<p class="muted">Form, energy og fatigue er separate fra dine permanente stats.</p></div></div>`;
}
function calendarPage(){
 return `<div class="page-title"><div><h1>Calendar</h1><p class="muted">Vælg hvor du vil forsøge at få en plads.</p></div></div>
 <div class="card"><table class="table"><thead><tr><th>Måned</th><th>Løb</th><th>Type</th><th>Terrain</th><th>Mål</th><th></th></tr></thead><tbody>${RACES.map(r=>`<tr><td>${r.month}</td><td><strong>${r.name}</strong><div class="race-tag">${r.country}</div></td><td>${r.type}</td><td>${r.terrain}</td><td>${r.goal}</td><td><button class="btn small" onclick="raceWish('${r.id}')">Ønsk</button></td></tr>`).join("")}</tbody></table></div>`;
}
function teamPage(){
 const t=team();
 return `<div class="page-title"><div><h1>${esc(t.name)}</h1><p class="muted">${t.level} • ${t.country} • ${t.style}</p></div></div>
 <div class="grid g3"><div class="card"><h2>Din rolle</h2><div class="big">${state.contract.role}</div><p class="muted">Hierarkiet kan ændre sig gennem resultater og relationer.</p></div><div class="card"><h2>Holdets mål</h2><p>${t.objective}</p><p class="muted">Budgetniveau ${t.budget}/40</p></div><div class="card"><h2>Relationer</h2><p>Sportsdirektør <span class="pill">Neutral</span></p><p>Captain <span class="pill">Neutral</span></p><p>Coach <span class="pill">Good</span></p></div></div>
 <div class="grid g2 section-space"><div class="card"><h2>Ryttere</h2><div class="list">${RIDERS.filter(r=>r.team===t.name).map(r=>`<div class="list-item row"><span>${r.name}</span><span class="muted">${r.profile}</span></div>`).join("")||`<div class="list-item">Dit hold har endnu ikke fået en komplet roster i V1.</div>`}</div></div><div class="card"><h2>Team news</h2><div class="list"><div class="list-item">Pre-season camp planlagt.</div><div class="list-item">Sportsdirektøren vurderer roller før de første løb.</div></div></div></div>`;
}
function inboxPage(){
 return `<div class="page-title"><div><h1>Inbox</h1><p class="muted">Beskeder fra holdet, agenten og cykelverdenen.</p></div></div><div class="list">${state.inbox.length?state.inbox.map(m=>`<div class="list-item ${m.priority==="ACTION REQUIRED"?"danger-box":m.priority==="IMPORTANT"?"warning":""}" onclick="readMessage(${m.id})"><div class="row"><strong>${esc(m.subject)}</strong><span class="pill">${m.priority}</span></div><div class="muted smalltext">${m.type} • ${m.date}</div><p>${esc(m.body)}</p>${m.action?`<button class="btn small" onclick="event.stopPropagation();${m.action}">Åbn</button>`:""}</div>`).join(""):`<div class="card">Inbox er tom.</div>`}</div>`;
}
function readMessage(id){const m=state.inbox.find(x=>x.id===id);if(m){m.read=true;save();render()}}
function worldPage(){
 const sorted=[...RIDERS].sort((a,b)=>Object.values(b.stats).reduce((x,y)=>x+y,0)-Object.values(a.stats).reduce((x,y)=>x+y,0));
 return `<div class="page-title"><div><h1>World</h1><p class="muted">Verden fortsætter, også når du ikke kører.</p></div></div>
 <div class="grid g2"><div class="card"><h2>World news</h2><div class="list"><div class="list-item">2026-sæsonen er i gang.</div><div class="list-item">Holdene vurderer unge ryttere før forårets løb.</div><div class="list-item">Transfermarkedet åbner senere på sæsonen.</div></div></div><div class="card"><h2>Ryttere at holde øje med</h2><table class="table"><thead><tr><th>Rytter</th><th>Hold</th><th>Profil</th></tr></thead><tbody>${sorted.slice(0,8).map(r=>`<tr><td>${r.name}</td><td>${r.team}</td><td>${r.profile}</td></tr>`).join("")}</tbody></table></div></div>
 <div class="card section-space"><h2>Simulation</h2><p class="muted">Når du fortsætter, udvikler verden sig i baggrunden: form, resultater, transfers og nye talenter kan ændre din situation.</p><button class="btn primary" onclick="simulateWorld()">Simulér verden</button></div>`;
}
function careerPage(){
 return `<div class="page-title"><div><h1>Career</h1><p class="muted">Din historie bliver samlet her.</p></div></div>
 <div class="grid g4">${metric("Wins",state.history.filter(x=>x.result==="1. plads").length,"")}${metric("Podiums",state.history.filter(x=>["1. plads","2. plads","3. plads"].includes(x.result)).length,"")}${metric("Race days",state.history.length,"")}${metric("Experience",state.experience,"")}</div>
 <div class="card section-space"><h2>Timeline</h2><div class="timeline">${state.history.length?state.history.map(h=>`<div class="timeline-item"><strong>${h.race}</strong><div class="muted">${h.date} • ${h.result}</div><p>${h.note}</p></div>`).join(""):`<p class="muted">Din karriere har ikke fået sit første resultat endnu.</p>`}</div></div>`;
}
function contractPage(){
 const t=team();
 return `<div class="page-title"><div><h1>Contract & Economy</h1><p class="muted">Økonomien skal støtte karrieren, ikke blive et separat finansspil.</p></div></div>
 <div class="grid g3"><div class="card"><h2>Kontrakt</h2><p><span class="muted">Hold</span><br>${t.name}</p><p><span class="muted">Rolle</span><br>${state.contract.role}</p><p><span class="muted">Løn</span><br><strong>${money(state.contract.salary)}/md.</strong></p><p><span class="muted">Periode</span><br>${state.contract.start} → ${state.contract.end}</p></div>
 <div class="card"><h2>Agent</h2>${state.agent?`<p><strong>${state.agent.name}</strong></p><p class="muted">${state.agent.specialization} • ${state.agent.personality}</p><span class="pill">Relation: ${state.agent.relationship}</span>`:`<p>Du har ingen agent.</p><button class="btn primary" onclick="hireAgent()">Find agent</button>`}</div>
 <div class="card"><h2>Team economy</h2><p>Budgetniveau: <strong>${t.budget}/40</strong></p><div class="progress"><i style="width:${t.budget/40*100}%"></i></div><p class="muted">Budget påvirker ressourcer, staff og muligheder over tid — men penge alene afgør ikke resultater.</p></div></div>
 <div class="card section-space"><h2>Transfer opportunities</h2><p class="muted">Senere i karrieren kan andre hold kontakte dig. Tilbud vurderes på løn, rolle, race access, udvikling og team situation.</p><button class="btn" onclick="toast('Ingen konkrete tilbud endnu')">Tjek markedet</button></div>`;
}
function hireAgent(){state.agent={name:["Marco Rossi","Thomas Jensen","Alex Martin"][Math.floor(Math.random()*3)],specialization:["Relations-focused","Negotiation-focused","Career-development-focused","International"][Math.floor(Math.random()*4)],personality:["Patient","Aggressive","Balanced"][Math.floor(Math.random()*3)],relationship:"Neutral",fee:.05};addInbox("Ny agent","Agent",`Din nye agent ${state.agent.name} følger nu din karriere.`,"IMPORTANT");save();render()}
function settingsPage(){
 return `<div class="page-title"><div><h1>Settings</h1><p class="muted">V1-indstillinger.</p></div></div><div class="grid g2"><div class="card"><h2>Game</h2><p>Difficulty: Realistic</p><p>World simulation: Active</p><p>Autosave: <span class="green">On</span></p></div><div class="card"><h2>Save</h2><button class="btn" onclick="save();toast('Career gemt')">Gem nu</button><button class="btn danger" onclick="resetGame()">Slet career</button></div></div>`;
}
function screenContent(){
 switch(state.screen){case"dashboard":return dashboard();case"rider":return riderPage();case"calendar":return calendarPage();case"team":return teamPage();case"inbox":return inboxPage();case"world":return worldPage();case"career":return careerPage();case"contract":return contractPage();case"settings":return settingsPage();default:return dashboard()}
}
function raceWish(id){const r=RACES.find(x=>x.id===id);addInbox("Race wish: "+r.name,"Sports Director",`Du har ønsket ${r.name}. Sportsdirektøren vil vurdere form, rolle, andre ryttere og holdets mål.`,"ACTION REQUIRED");save();toast("Race wish sendt")}
function startRace(id){
 const r=RACES.find(x=>x.id===id);state.selectedRace=r;state.race={km:0,total:Math.max(80,r.days*120),position:48,group:"Main peloton",energy:state.energy,fatigue:state.fatigue,phase:"mid"};
 state.screen="race";save();render();
}
function raceScreen(){
 const r=state.selectedRace,q=state.race;
 if(q.phase==="result")return raceResult();
 const progress=Math.min(100,q.km/q.total*100);
 const situations=[
 ["Hold position","Du ligger godt placeret og kan spare kræfter."],
 ["Move forward","Du kan bruge lidt energi på at komme frem."],
 ["Follow wheel","En stærk rytter bevæger sig frem foran dig."],
 ["Save energy","Du kan falde lidt tilbage og beskytte din energi."],
 ["Pull","Holdet har brug for hjælp i fronten."],
 ["Attack","Der åbner sig et hul på vejen."]
 ];
 const s=situations[(Math.floor(q.km/20)+state.worldTick)%situations.length];
 return `<div class="race-mode"><div class="race-head"><div><span class="pill">${r.name}</span><h1>${r.terrain}</h1></div><div class="race-km">${Math.round(q.km)} <span class="smalltext">/ ${q.total} km</span></div></div>
 <div class="grid g4 section-space">${metric("Position",q.position,"")}${metric("Energy",q.energy,"%")}${metric("Fatigue",q.fatigue,"%")}${metric("Form",state.form,"%")}</div>
 <div class="card section-space"><h2>Situation</h2><p><strong>${s[0]}</strong> — ${s[1]}</p><div class="notice">Gruppe: ${q.group}. Race IQ, positioning, terrain stats, form og energi påvirker dine muligheder.</div>
 <div class="grid g2 section-space">${situations.slice(0,4).map(x=>`<button class="race-choice" onclick="raceAction('${x[0]}')"><strong>${x[0]}</strong><br><span class="muted">${x[1]}</span></button>`).join("")}</div></div>
 <div class="actions section-space"><button class="btn" onclick="raceAction('Wait')">Vent og simuler videre</button><button class="btn danger" onclick="abandonRace()">Abandon</button></div></div>`;
}
function raceAction(action){
 const q=state.race,p=state.player;
 let cost={ "Hold position":2,"Move forward":5,"Follow wheel":4,"Save energy":-3,"Pull":7,"Attack":10,"Wait":1}[action]??3;
 q.energy=Math.max(0,Math.min(100,q.energy-cost));
 q.fatigue=Math.max(0,Math.min(100,q.fatigue+(cost>0?cost*.35:-1)));
 if(action==="Move forward"||action==="Follow wheel")q.position=Math.max(5,q.position-4-Math.floor(p.stats.positioning/30));
 if(action==="Attack"){q.position=Math.max(1,q.position-10);q.group="Front group"}
 if(action==="Save energy")q.position=Math.min(80,q.position+3);
 q.km+=Math.min(18,q.total-q.km);
 if(q.energy<=5||q.km>=q.total){q.phase="result"}
 state.experience+=1;state.energy=q.energy;state.fatigue=q.fatigue;save();render();
}
function raceResult(){
 const r=state.selectedRace,q=state.race,p=state.player;
 const strength=(p.stats.endurance+p.stats.raceIQ+p.stats.positioning+p.stats.technique)/4;
 let pos=Math.max(1,Math.min(60,Math.round(q.position+(55-strength)/3+(Math.random()*9-4))));
 const result=pos===1?"1. plads":pos===2?"2. plads":pos===3?"3. plads":`${pos}. plads`;
 state.history.unshift({race:r.name,date:state.currentDate,result,note:`Du gennemførte løbet med ${Math.round(q.energy)}% energy og ${Math.round(q.fatigue)}% fatigue.`});
 developFromRace(r);
 return `<div class="screen-center"><div class="start-card"><div class="pill">Race complete</div><h1>${r.name}</h1><div class="big">${result}</div><p>${r.terrain}</p><div class="grid g2 section-space"><div class="card"><div class="muted">Energy</div><strong>${Math.round(q.energy)}%</strong></div><div class="card"><div class="muted">Fatigue</div><strong>${Math.round(q.fatigue)}%</strong></div></div><button class="btn primary" onclick="finishRace()">Tilbage til karrieren</button></div></div>`;
}
function developFromRace(r){
 const p=state.player;
 let keys=r.terrain.includes("Mountain")?["mountain","mediumMountain","recovery"]:r.terrain.includes("Cobble")?["cobblestones","technique","positioning"]:r.type==="Worlds"?["raceIQ","mentality"]:["endurance","raceIQ"];
 keys.forEach(k=>{if(p.stats[k]<p.potential[k]&&Math.random()<.45)p.stats[k]+=1});
 state.form=Math.max(50,Math.min(100,state.form+Math.floor(Math.random()*9)-3));
}
function finishRace(){state.energy=Math.max(55,state.energy);state.fatigue=Math.max(5,state.fatigue-18);state.currentDate=advanceDate(state.currentDate,2);state.screen="dashboard";save();render()}
function abandonRace(){state.history.unshift({race:state.selectedRace.name,date:state.currentDate,result:"Abandon",note:"Du forlod løbet."});state.screen="dashboard";save();render()}
function advanceDate(d,days){let x=new Date(d+"T12:00:00");x.setDate(x.getDate()+days);return x.toISOString().slice(0,10)}
function simulateWorld(){
 state.worldTick++;state.currentDate=advanceDate(state.currentDate,Math.floor(Math.random()*8)+3);
 state.energy=Math.min(100,state.energy+20);state.fatigue=Math.max(0,state.fatigue-10);state.form=Math.max(50,Math.min(100,state.form+Math.floor(Math.random()*7)-2));
 if(Math.random()<.35)addInbox("World update","Cycling World","Et nyt resultat, en transfer eller en ung rytter er på vej ind i systemet.","INFO");
 save();toast("Verden er simuleret frem");render();
}
function continueCareer(){
 if(!state.player){setScreen("create");return}
 const next=nextRace();
 if(next&&Number(state.currentDate.slice(5,7))<=next.month){simulateWorld()}else{state.currentDate=advanceDate(state.currentDate,14);simulateWorld()}
}
function resetGame(){if(confirm("Slet denne career?")){localStorage.removeItem(APP_KEY);state=loadState();render()}}
render();