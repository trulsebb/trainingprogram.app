"use strict";const d=[{id:0,title:"Basic training program",shareString:"ko04Y8084448k-2+48484A0c4448s-2+4c448-23Wkk484g04-3njS8084448k-2+48484A0c4448s-2+4c448-23Wkk484g04-3n0M8084448k-2+48484A0c4448s-2+4c448-23Wkk484g04-55GOcM8084448k-2+48484A0c4448s-2+4c448-23Wkk484g04-2128084448k-2+48484A0c4448s-2+4c448-23Wkk484g04-82bhXNF928084448k-2+48484A0c4448s-2+4c448-23Wkk484g"},{id:1,title:"Swiss program",shareString:"ks08Y8084448k-2+48484A0c4448s-2+4c448-23Wkk484g-3nqk8084448w-2+48484w0c4448E-2+4c448-23Wkk484g08-313e8084448k-2+48484A0c4448s-2+4c448-23Wkk484g-560XWQ8084448k-2+48484A0c4448s-2+4c448-23Wkk484g08-2128084448k-2+48484A0c4448s-2+4c448-23Wkk484g-69b2Ype8084448w-2+48484w0c4448E-2+4c448-23Wkk484g0008-3omo8084448k-2+48484A0c4448s-2+4c448-23Wkk484g-3osQ8084448k-2+48484w0c4448s-2+4c448-23Wkk484g08-3mo88084448w-2+48484w0c4448E-2+4c448-23Wkk484g-3omo8084448w-2+48484w0c4448E-2+4c448-23Wkk484g00"},{id:2,title:"Oldschool linear",shareString:"oo04Y40c4448E-2+4c448-23Kgk448E-2+404M40c4448E-2+4c448-23Kgk448E-2+404-3n0M40c4448E-2+4c448-23Kgk448E-2+404-3njS40c4448E-2+4c448-23Kgk448E-2+404-21240c4448E-2+4c448-23Kgk448E-2+404-31mA40c4448E-2+4c448-23Kgk448E-2+4"}],p=["bench","press","benchpress","overhead","squat","squats","deadlift","dead","wide","medium","close","grip","stance","bulgarian","split","sumo","snatch","tricep","bicep","curl","french","paused","highbar","lowbar","Larsen","incline","deficit","weighted","row","sealrow","standing","seated","belt","beltless","floor","log","clean","jerk","and","rack","pull","pullups","dips","block","board","yoke","farmers","atlas","stone","carry","lift","hip","shoulder","lateral","raise","pin","dumbbell","barbell","cable","flyes","chest","back","extension","glute","bride","ham","flexion","wrist","reverse","rotation","lying","retraction","with","without","bands","handstand","narrow","elevated","deltoid","stretch","wall","military","behind","neck","reclined","one","arm","leg","alternating","rope","twisting","machine","smith","neutral","parallel","bent","over","straight","rounded","jefferson","high","low","placement","bar","cheat","extra","between","uni","unilateral","EZ","EZ-bar","hexbar","trapbar","double","single","wraps","wrapped","slingshot","lat","hamstring","supported","seal","pinch","walk","run","sprint","climb","rolling","thunder","thumbless","side","crunch","crunches","situp","JM","JM-press","hook","hookgrip","less","plate","plates","two","handed","ring","push","up","muscle","nordic","semi","SSB","banded","band","bands","resistance","strict","partial","rep","quarter","half","full","ROM","below","above","height","knee","stiff","stiffleg","superset","supersetted","front","viking","conventional","continental","transformer","transformerbar","cambered","camber","goblet","zero","higher","hinge","hold","handles","setting","sandbag","axle","circus","romanian","kettlebell","three","four","five","six","seven","eight","nine","ten","from","on","at","hand","legpress","pulldown"],o=(n,r)=>{if(n===r)return 0;const a=[];for(let t=0;t<=r.length;t++){a[t]=[t];for(let e=1;e<=n.length;e++)a[t][e]=0===t?e:Math.min(a[t-1][e]+1,a[t][e-1]+1,a[t-1][e-1]+(n[e-1]===r[t-1]?0:1))}return a[r.length][n.length]},u=(t,e)=>e.map(e=>o(t.toLowerCase(),e.toLowerCase())).reduce((e,t,n,r)=>t<r[e]?n:e,0),g=9999;var r;r=1;const q=n=>t=>e=>n*(36/(37-(t+(11-e-r)))),y=e=>{e=2.5*Math.round(e/2.5);return 0<e?e:""},i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n=(e,t=0)=>{if(0==e)return"0".padStart(t,"0");let n="";var r=e<0?"+":"";let a=(4*Math.abs(e)).toFixed();for(;0<a;)n=i[a%62]+n,a=(a-a%62)/62;return(r+n).padStart(t,"0")},s=e=>{var t="+"===e[0];const n="+"===e[0]?e.slice(1):e;e=n.split("").map(t=>i.findIndex(e=>e==t)).reverse().map((e,t)=>e*62**t).reduce((e,t)=>e+t)/4;return t?-1*e:e};class c{static latestId=1e3;static resetId(){this.latestId=1e3}static getUniqueId(){return this.latestId++}}const m=()=>[...Array(localStorage.length).keys()].map(e=>localStorage.key(e)),T=(e,t)=>n([e,t].join("")),h=()=>m().filter(e=>e.match(/^\d{4}$/g)).map(e=>{localStorage.removeItem(e)}),J=()=>m().filter(e=>e.match(/^\d{4}$/g)).map(e=>T(e,localStorage.getItem(e))).join("-"),$=e=>{const t=s(e).toString(10);return[t.slice(0,4),t.slice(4)]},U=e=>e.split("-").map(e=>$(e)),l=()=>{var e=(new Date).toISOString().slice(0,10),t=f(g)(0);const n=J();1<n.split("-").length&&localStorage.setItem(`progress-${t}-`+e,J())},v=e=>{l(),h(),U(e).map(e=>b(e[0])(e[1]))},b=t=>e=>localStorage.setItem(t,e),f=t=>e=>localStorage.getItem(t)?localStorage.getItem(t):e,K=()=>{let t=0;for(;t=Math.floor(900*Math.random()+100),0<m().filter(e=>e.match(new RegExp("^program-"+t,"g"))).length;);return t},F=(e,t)=>{const n=a().find(e=>e.shareString==t);if("object"==typeof n&&n.hasOwnProperty("id"))return n.id;var r=K();return localStorage.setItem(`program-${r}-`+e,t),r},a=()=>{return m().filter(e=>e.match(/^program-/g)).map(e=>({id:Number(e.match(/^program-(\d+)/)[1]),title:e.match(/^program-\d+-(.+)/)[1],shareString:localStorage.getItem(e)}))},e=()=>[...d,...a()],k=t=>e().find(e=>e.id==t)??k(0),E=(e,t,n)=>{const r=document.createElement(e);return r.classList.add(...t),"string"==typeof n?r.textContent=n:Array.isArray(n)?r.append(...n):"object"==typeof n&&r.appendChild(n),r},w=(t,n=null)=>{document.addEventListener("mouseup",e=>{t.contains(e.target)||null!==n&&n.contains(e.target)||(t.hidden=!0)})},Y=e=>E("tr",[],e.map(e=>E("td",[],e))),G=e=>E("tr",[],e.map(e=>E("th",[],e))),H=e=>{const t=document.createElement("input");return t.id=c.getUniqueId(),t.onchange=()=>b(t.id)(t.checked?1:0),t.setAttribute("type","checkBox"),t.checked="1"===f(t.id)(0),t.setAttribute("aria-label",e),t.setAttribute("title",e),t},C=(e,t,n,r,a)=>{const i=document.createElement("input");return t<100&&1==n&&i.classList.add("smallInput"),i.id=c.getUniqueId(),i.onchange=()=>b(i.id)(i.value),i.setAttribute("type","number"),i.value=f(i.id)(r),i.min=e,i.max=t,i.step=n,i.setAttribute("aria-label",a),i.setAttribute("title",a),i},S=(e,t,n=!1)=>{const r=document.createElement("input");return n&&r.classList.add("alwaysDisabled"),r.setAttribute("type","text"),r.value=e,r.disabled=!0,r.setAttribute("aria-label",t),r.setAttribute("title",t),r};class L{static shareContainer=null;static getShareButton=()=>{const e=E("button",["loadSaveButton"],"💾 Load/save progress");return e.onclick=()=>{this.shareContainer.dispatchEvent(new Event("toggleVisibility")),this.shareContainer.hidden=!this.shareContainer.hidden},e};static initShareContainer=()=>{const s=E("div",["shareLinkContainer"]);s.hidden=!0,s.addEventListener("toggleVisibility",()=>{for(;s.firstChild;)s.removeChild(s.firstChild);var e=f(g)(0);const t=new RegExp("progress-"+e,"g"),n=(s.append(...m().filter(e=>e.match(t)).sort().map(e=>{var t=e.substring(e.length-10);const n=E("div",["shareStringContainer"],E("label",["shareStringLabel"],t)),r=E("button",["clearButton"],"✖"),a=(r.onclick=()=>{localStorage.removeItem(e),s.dispatchEvent(new Event("toggleVisibility"))},E("input",["presentedlink"],"")),i=(a.type="text",a.value=localStorage.getItem(e),E("button",[],"Copy")),o=(i.onclick=()=>{a.select(),document.execCommand("copy")},E("button",[],"Restore"));return o.onclick=()=>{v(a.value),V.renderProgram()},n.append(r,a,i,o),n})),E("div",["shareStringContainer"])),r=E("button",[],"Save current"),a=(r.onclick=()=>{l(),s.dispatchEvent(new Event("toggleVisibility"))},E("button",["closebutton"],"▲ ▲ ▲"));a.onclick=()=>{s.hidden=!s.hidden},n.append(r),s.append(n,a)}),this.shareContainer=s}}const Q=e=>{const t=E("h2",["restDayText"],"Rest day");return t.hidden=0<e.length,t},I=e=>e.charAt(0).toUpperCase()+e.slice(1),X=e=>e.map(e=>""+String(e).length+e).join(""),Z=e=>{let t=0;const n=String(e),r=[];for(;t<n.length;)r.push(n.slice(t+1,t+Number(n[t])+1)),t=t+Number(n[t])+1;return r},B=e=>I(Z(e).map(e=>p[e]).join(" "));class M{static programSettingsContainer=E("div",["programSettingsContainer"]);static startDateOption=null;static toggleVisibility=(e=!1)=>{var t=this.programSettingsContainer.getBoundingClientRect();(e||0<=t.top)&&(this.programSettingsContainer.hidden=!this.programSettingsContainer.hidden),this.programSettingsContainer.hidden||this.programSettingsContainer.scrollIntoView({behavior:"smooth"})};static getProgramSettingsButton=()=>{const e=E("button",["settingsMenuButton"],"⚙");return e.onclick=()=>{this.toggleVisibility()},e};static movementsMaxMap=new Map;static movementsMaxInputMap=new Map;static initProgramSettingsContainer=(a,e,i)=>{this.movementsMaxInputMap=new Map,this.movementsMaxMap=new Map;const t=E("div",["programSettingsContainer"]),n=(t.id="programSettings",[...new Set(a.days.map(e=>e.filter(e=>e.sets.some(e=>null!==e.rpe(1)&&null!==e.reps(1))).map(e=>e.movementId)).flat())]),r=[...new Set(a.days.map(e=>e.filter(e=>e.sets.every(e=>null===e.rpe(1)||null===e.reps(1))).map(e=>e.movementId)).flat())],o=(L.initShareContainer(),E("button",["clearButton"],"✖ Reset Progress"));if(o.onclick=()=>{var e=f(g)();h(),b(g)(e),V.renderProgram()},this.startDateOption=(e=>{const t=document.createElement("input");t.id=c.getUniqueId(),t.onchange=()=>{0<t.valueAsNumber?b(t.id)(t.valueAsNumber/1e5):localStorage.removeItem(t.id)},t.setAttribute("type","date");e=1e5*f(t.id)(e);return e&&(t.valueAsNumber=e),t})(),this.startDateOption.addEventListener("change",()=>{const n=0<this.startDateOption.valueAsNumber?new Date(this.startDateOption.value):null,r=(new Date).toJSON().substring(0,10);document.querySelectorAll(".dayLegend").forEach((e,t)=>{n instanceof Date?(e.textContent=n.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"}),n.toJSON().substring(0,10)==r&&e.parentElement.parentElement.scrollIntoView({behavior:"smooth"}),n.setDate(n.getDate()+1)):e.textContent=""})}),t.append(E("label",[],["Start date:",this.startDateOption])),t.append(...[{title:"Required e1RMs",movs:r},{title:"Optional e1RMs",movs:n}].map(e=>0<e.movs.length?E("table",["settingsTable"],[E("caption",[],e.title+":"),G(["Movment","e1RM"]),...e.movs.map(e=>{const t=C(75,1e3,2.5);return t.addEventListener("change",()=>{this.movementsMaxMap.set(e,t.value)}),this.movementsMaxInputMap.set(e,t),this.movementsMaxMap.set(e,t.value),Y([B(e),t])})]):null).filter(e=>null!==e),L.getShareButton(),L.shareContainer,o),e){t.append(P.getProgramEditorButton());const l=E("div",[]),d=E("button",[],"🌍Share program");d.onclick=()=>{for(;l.firstChild;)l.removeChild(l.firstChild);const e=new URL(window.location.origin);e.searchParams.set("t",a.title),e.searchParams.set("p",i);var t=m().filter(e=>e.match(/^\d{4}$/g)).filter(e=>e!=g).map(e=>T(e,localStorage.getItem(e))).join("-");0<t.length&&e.searchParams.set("r",t);const n=E("input",["presentedlink"],""),r=(n.type="text",n.value=e.href,E("button",[],"Copy"));r.onclick=()=>{n.select(),document.execCommand("copy")};t=E("div",["shareStringContainer"],[n,r]);l.append(t)},t.append(d,l)}0!=r.length&&![...this.movementsMaxInputMap.keys()].filter(e=>r.includes(e)).every(e=>0<this.movementsMaxInputMap.get(e).value)||(t.hidden=!0);const s=E("button",["closebutton"],"▲ ▲ ▲");s.onclick=()=>this.toggleVisibility(!0),t.append(s),this.programSettingsContainer=t}}class P{static programEditorContainer=null;static toggleVisibility=()=>{this.programEditorContainer.hidden=!this.programEditorContainer.hidden,V.scrollLeftButton.hidden=!V.scrollLeftButton.hidden,V.scrollRightButton.hidden=!V.scrollRightButton.hidden,window.scrollTo({top:0,behavior:"smooth"})};static getNewProgramButton=()=>{const e=E("button",["createNewProgramButton"],"Create new program");return e.onclick=()=>{l(),h(),V.renderProgram({title:"New program",shareString:"ks00000000000000"},!1)},e};static getProgramEditorButton=()=>{const e=E("button",[],"📝Edit Program");return e.onclick=()=>{this.toggleVisibility(),M.programSettingsContainer.hidden=!0},e};static setMutationInput=(e,t,n)=>{n.value="text"===n.type?e[t]:Number(e[t]),n.addEventListener("change",()=>{e[t]=n.value})};static initProgramEditorContainer=n=>{const r=te(n.title,n.shareString),e=E("div",["programEditorContainer"]),t=E("button",["closebutton"],"▲ ▲ ▲"),a=(t.onclick=this.toggleVisibility,E("input",[])),i=(a.setAttribute("type","text"),P.setMutationInput(r,"title",a),a.value=r.title,E("input",[])),o=(i.setAttribute("type","number"),i.addEventListener("change",()=>d.dispatchEvent(new Event("render"))),P.setMutationInput(r,"numberOfIterations",i),E("input",[])),s=(o.setAttribute("type","number"),o.onchange=()=>{o.value<=r.days.length?r.days=r.days.slice(0,o.value):o.value<=10&&r.days.push(...Array(o.value-r.days.length).fill([])),d.dispatchEvent(new Event("render"))},o.value=r.days.length,e.append(t,E("div",["editorFieldBox"],[E("label",[],"Title"),a]),E("div",["editorFieldBox"],[E("label",[],"Number of iterations/weeks"),i]),E("div",["editorFieldBox"],[E("label",[],"Number of days per week"),o])),new Map([[O,{optionLabel:"None",nrOfParams:0}],[x,{optionLabel:"Linear",nrOfParams:2}],[R,{optionLabel:"Constant",nrOfParams:1}],[N,{optionLabel:"Steps",nrOfParams:r.numberOfIterations}]])),l=(e,t,n=!1)=>{const r=E("button",["editLegendButton"],"✖"),a=(r.onclick=n?()=>{e[t]=[],d.dispatchEvent(new Event("render"))}:()=>{e.splice(t,1),d.dispatchEvent(new Event("render"))},E("button",["editLegendButton"],"▲")),i=(0<t&&1<e.length?a.onclick=()=>{e.splice(t-1,0,e.splice(t,1)[0]),d.dispatchEvent(new Event("render"))}:a.disabled=!0,E("button",["editLegendButton"],"▼"));if(e.length-1>t?i.onclick=()=>{e.splice(t+1,0,e.splice(t,1)[0]),d.dispatchEvent(new Event("render"))}:i.disabled=!0,n)return E("div",["editorLegendButtonList"],[a,i,r]);const o=E("button",["editLegendButton"],"⧉");return o.onclick=()=>{e.splice(t,0,JSON.parse(JSON.stringify(e[t]))),d.dispatchEvent(new Event("render"))},E("div",["editorLegendButtonList"],[o,a,i,r])},d=E("div",["allDaysContainer"]),c=(d.addEventListener("render",e=>{for(;d.firstChild;)d.removeChild(d.firstChild);d.append(...r.days.map((i,e)=>{const t=E("div",["dayEditContainer"]);var n=E("div",["innerDayEdit"],[((r,a)=>{const e=E("span",["copyDayList"],r.map((e,t)=>{const n=E("button",["copyDayButton","editorButton"],"Day "+(t+1));return n.onclick=()=>{r[a]=JSON.parse(JSON.stringify(e)),d.dispatchEvent(new Event("render"))},t==a&&(n.disabled=!0),n})),t=(e.hidden=!0,E("button",["showCopyDayButton"],"Copy from a different day"));return t.onclick=()=>{e.hidden=!e.hidden},E("div",["fullWidth"],[t,e])})(r.days,e),...i.map((n,e)=>{const t=E("div",["movementEditContainer"]);var r=n.sets.map((o,e)=>{const t=E("div",["setContainer"]);return t.append(E("div",["editorLegend"],[E("span",["editorLegendTitle"],"Set "+(e+1)),l(n.sets,e)]),E("div",["innerSetEdit"],[...Object.entries(o).filter(([,e])=>e.type!=O).map(([e,r])=>{const t=E("div",["progressionContainer"]),a=E("select",["progressionSelect"]),n=E("div",["progressionEditor"]),i=(s.forEach((e,t)=>{const n=E("option",[],e.optionLabel);(n.value=t)===r.type&&(n.selected=!0),a.append(n)}),P.setMutationInput(r,"type",a),a.addEventListener("change",()=>{for(;n.firstChild;)n.removeChild(n.firstChild);const e=new Map([[O,[]],[x,["initial","change"]],[R,["value"]],[N,Array(5).fill().map((e,t)=>"step "+(t+1))]]);n.append(((r,a)=>{const e=E("div",["paramsContainer"]),t=Array(a.length).fill();var n=t.map((e,t)=>{const n=E("input",["paramInput"]);return n.setAttribute("type","number"),n.min=-1e3,n.max=1e3,n.step=.25,P.setMutationInput(r,t,n),E("div",["paramBox"],[E("label",[],a[t]),n])});return e.append(...n),e})(r.params,e.get(Number(a.value))))}),a.dispatchEvent(new Event("change")),E("button",["clearButton","editorButton"],"✖"));return i.onclick=()=>{delete o[e],d.dispatchEvent(new Event("render"))},t.append(E("label",["progressionLabel"],z[e]),a,n,i),t}),E("div",["setParamButtonList"],Object.keys(j).filter(e=>!Object.keys(o).includes(e)).map(e=>{{var t=o,n=e;const r=E("button",["addParamButton"],z[n]);return r.onclick=()=>{t[n]={type:R,params:[]},d.dispatchEvent(new Event("render"))},r}}))])),t}),a=(r=>{r.movementId<=0&&(r.movementId="12");const a=E("input",[]);var e=B(r.movementId);return a.value=I(e),a.addEventListener("keyup",e=>{if(" "==e.key){const t=a.value.split(" "),n=t.filter(e=>1<e.length).map(e=>u(e,p));e=n.map(e=>p[e]).join(" ");a.value=I(e)+" ",r.movementId=X(n)}}),a.addEventListener("focusout",()=>{const e=a.value.split(" "),t=e.filter(e=>1<e.length).map(e=>u(e,p));var n=t.map(e=>p[e]).join(" ");a.value=I(n)+" ",r.movementId=X(t)}),a})(n);return t.append(E("div",["editorLegend"],[E("span",["editorLegendTitle"],"Movement "+(e+1)),l(i,e)]),E("div",["innerMovementEdit"],[a,...r,(e=>{const t=E("button",["addSetButton"],"Add set");return t.onclick=()=>{e.sets.push({}),d.dispatchEvent(new Event("render"))},t})(n)])),t}),Q(i),(e=>{const t=E("button",["addMovementButton"],"Add movement");return t.onclick=()=>{e.push({movementId:0,sets:[{}]}),d.dispatchEvent(new Event("render"))},t})(i)]);return t.append(E("div",["editorLegend"],[E("span",["editorLegendTitle"],"Day "+(e+1)),l(r.days,e,!0)]),n),t}))}),d.dispatchEvent(new Event("render")),e.append(d),E("button",[],"Save and render program"));c.onclick=()=>{var e=_(r),t=`program-${n.id}-`+r.title;localStorage.getItem(t)?localStorage.setItem(t,e):(t=F(r.title,e),b(g)(t)),V.renderProgram({title:r.title,shareString:e})},e.append(c),e.hidden=!r.days.every(e=>0==e.length),this.programEditorContainer=e}}class A{static selectProgramContainer=E("div",["selectProgramContainer"]);static getSelectProgramButton=()=>{const e=E("button",["settingsMenuButton"],"≡");return e.onclick=()=>{this.selectProgramContainer.hidden=!this.selectProgramContainer.hidden},w(this.selectProgramContainer,e),e};static getProgramSelectRow=(n,e=!1)=>{const t=E("div",["programSelectRow"]),r=E("button",["selectProgramButton"],n.title),a=(r.onclick=()=>{l(),h(),b(g)(n.id);const t=new RegExp("progress-"+n.id,"g");var e=m().filter(e=>e.match(t)).sort((e,t)=>Date.parse(t.substring(t.length-10))-Date.parse(e.substring(e.length-10)))[0],e=localStorage.getItem(e);"string"==typeof e&&1<e.length&&v(e),V.renderProgram(k(n.id))},E("button",["selectProgramButton"],"✎")),i=(a.onclick=()=>{l(),h(),V.renderProgram(n,!1),P.toggleVisibility(),M.programSettingsContainer.hidden=!0},E("button",["selectProgramButton"],"⧉")),o=(i.onclick=()=>{l(),h(),V.renderProgram({title:"Copy of "+n.title,shareString:n.shareString},!1),P.toggleVisibility(),M.programSettingsContainer.hidden=!0},E("button",["selectProgramButton"],"✖"));return o.onclick=()=>{localStorage.removeItem(`program-${n.id}-`+n.title),t.remove()},e?t.append(r,E("div",["buttonList"],[o,a,i])):t.append(r,E("div",["buttonList"],[i])),t};static initProgramSelect=()=>{const e=E("div",["selectProgramContainer"]);e.hidden=!0,e.append(...d.map(e=>this.getProgramSelectRow(e)),...a().map(e=>this.getProgramSelectRow(e,!0)),P.getNewProgramButton()),this.selectProgramContainer=e}}const x=1,R=2,O=3,N=4,D={linear:(...t)=>e=>t[0]+t[1]*e,constant:(...t)=>e=>t[0],none:()=>e=>null,steps:(...t)=>e=>t[e%t.length]},W=e=>{if("function"==typeof e)return e;if(void 0===e)return D.none();if(null==e)return D.none();if("number"==typeof e)return D.constant(e);if("object"==typeof e){if(e.type===x)return D.linear(...e.params);if(e.type===R)return D.constant(...e.params);if(e.type===O)return D.none();if(e.type===N)return D.steps(...e.params)}return D.none()};const j={reps:1,rpe:2,perc:3,weight:4,repeat:5},z={reps:"Reps",rpe:"RPE",perc:"Percentage",weight:"Weight",repeat:"Repeat"},t=(e,t)=>"object"==typeof t&&t.type!=O?[e,1,t.type,t.params.length,t.params]:[],_=e=>[e.numberOfIterations,e.days.length,e.days.map(e=>[0,e.length,e.map(e=>[e.movementId,e.sets.length,e.sets.map(e=>[0,Object.values(e).filter(e=>e.type!=O).length,...t(j.reps,e.reps),...t(j.rpe,e.rpe),...t(j.perc,e.perc),...t(j.weight,e.weight),...t(j.repeat,e.repeat)])])])].flat(8).map(e=>n(e)).map(e=>1<e.length?"-"+e.length+e:e).join(""),ee=e=>e.split(/(?=-)/g).map(e=>"-"===e[0]?[e.slice(2,2+Number(e[1])),...e.slice(2+Number(e[1])).split("")]:e.split("")).flat(),te=(e,t)=>{const n=ee(t).map(e=>s(e));const r=e=>({type:e[0][0],params:e[0].slice(1).flat()});return{numberOfIterations:n[0],title:e,days:((e,t)=>{const n=[0,0,0,0,0,0,e],r=[];let a=!1,i=!0;return t.forEach(e=>{var t=n.findIndex(e=>0<e);i?(6==t?r.push([e]):5==t?r.at(-1).push([e]):4==t?r.at(-1).at(-1).push([e]):3==t?r.at(-1).at(-1).at(-1).push([e]):2==t?r.at(-1).at(-1).at(-1).at(-1).push([e,[]]):1==t?r.at(-1).at(-1).at(-1).at(-1).at(-1).push([e,[]]):0==t&&r.at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).push([e,[]]),i=!1,a=!0):-1<t&&(a?(n[t-1]=e,a=!1,i=2<t):6==t?r.at(-1).push([e]):5==t?r.at(-1).at(-1).push(e):4==t?r.at(-1).at(-1).at(-1).push(e):3==t?r.at(-1).at(-1).at(-1).at(-1).push(e):2==t?r.at(-1).at(-1).at(-1).at(-1).at(-1).push(e):1==t?r.at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).push(e):0==t&&r.at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).push(e),--n[t],n.slice(0,t+1).every(e=>0==e)&&(a=!0,i=!0))}),r})(n[1],n.slice(2)).filter(e=>"object"==typeof e&&0<e.length).map(e=>e.filter(e=>"object"==typeof e&&0<e.length).map(e=>({movementId:e[0],sets:e.slice(1).filter(e=>"object"==typeof e&&0<e.length).map(e=>{const t={};return e.slice(1).map(e=>{e[0]==j.reps?t.reps=r(e.slice(1)):e[0]==j.rpe?t.rpe=r(e.slice(1)):e[0]==j.perc?t.perc=r(e.slice(1)):e[0]==j.weight?t.weight=r(e.slice(1)):e[0]==j.repeat&&(t.repeat=r(e.slice(1)))}),t})})))}};class V{static appContainer=E("div",["appContainer"]);static scrollLeftButton=E("button",["scrollLeftButton"],"<");static scrollRightButton=E("button",["scrollRightButton"],">");static first=!0;static renderProgram(e,t=!0){for(c.resetId();this.appContainer.firstChild;)this.appContainer.removeChild(this.appContainer.firstChild);window.scrollTo({top:0});let n=k(f(g)(0));"object"==typeof e&&(n=e);var e=te(n.title,n.shareString),r=(P.initProgramEditorContainer(n),!d.some(e=>e.id===n.id));const a={numberOfIterations:e.numberOfIterations,title:e.title,days:e.days.map(e=>e.map(e=>({movementId:e.movementId,sets:e.sets.map(e=>({reps:W(e.reps),rpe:W(e.rpe),perc:W(e.perc),weight:W(e.weight),repeat:null==e.repeat||void 0===e.repeat?D.constant(1):W(e.repeat)}))})))},i=(M.initProgramSettingsContainer(a,r,n.shareString),E("div",["programContainer"]));if(t){const l=[...Array(a.numberOfIterations).keys()];i.append(...l.map(r=>{var e=E("h2",["weekHeader"],"Week "+(r+1));const t=E("div",["blockContainer","weekelement"],e);return t.id="cycle"+r,t.append(...a.days.map((e,t)=>{{var f=r;const n=E("fieldset",["dayContainer"],[E("div",["defaultDayLegend"],[E("span",["dayLegendElement","smallWeekText"],"Week "+(f+1)),E("h2",["dayLegendElement"],"Day "+(t+1)),E("span",["dayLegendElement","dayLegend"],"")])]);return n.id=`day${f}-`+t,n.append(...e.map((h,e)=>{const v=[],t=h.sets.map(e=>Array(e.repeat(f)).fill(e)).flat(),b=E("button",["editAllDay"],"✎");return b.addEventListener("click",()=>{b.classList.toggle("pressed")}),E("table",["movementContainer"],[E("caption",["dayCaption"],[B(h.movementId),b]),G(["✔","Reps","Weight","%","RPE","e1RM"]),...t.map((n,e)=>{const t=C(0,50,1,n.reps(f),"Reps for set "+(e+1));null!==n.reps(f)&&(t.disabled=!0,t.classList.add("preDisabled"),b.addEventListener("click",()=>{t.disabled=!t.disabled}));var r=S(null!==n.perc(f)?n.perc(f)+"%":null,"Percentage for set "+(e+1),!0);const a=null!==n.perc(f)?S(n.weight(f),"Weight for set "+(e+1)):C(75,1e3,2.5,n.weight(f),"Weight for set "+(e+1)),i=C(1,10,.25,n.rpe(f),"Actual RPE for set "+(e+1)),o=E("div",["overlay"]);var s=E("div",["actualRpeContainer"],[o,i]);i.classList.add("rpeInput"),null===n.rpe(f)&&(i.disabled=!0,i.classList.add("preDisabled"),o.hidden=!0,b.addEventListener("click",()=>{i.disabled=!i.disabled,o.hidden=!o.hidden})),o.addEventListener("click",()=>{p.hidden=!p.hidden});const l=E("input",["rpeRange"]),d=E("button",["resetRpeButton"],"Reset"),c=(d.onclick=()=>{i.value=n.rpe(f),i.dispatchEvent(new Event("change")),l.value=n.rpe(f),l.dispatchEvent(new Event("change"))},E("td",["rpeRangeCell"],[null!==n.rpe(f)?E("span",["goalSpan"],"Goal: "+n.rpe(f)):"",d,l])),p=E("tr",["rpeRangeRow"],c),u=(c.setAttribute("colspan","6"),l.setAttribute("type","range"),l.min=5,l.max=10,l.step=.25,l.value=i.value,p.hidden=!0,w(p,o),l.oninput=()=>{i.value=l.value,i.dispatchEvent(new Event("change"))},l.onchange=()=>{p.hidden=!0},S("...","Estimated 1RM for set "+(e+1),!0));if(null!==n.perc(f)){const m=()=>{var e=M.movementsMaxMap.get(h.movementId)??0,e=v.reduce((e,t)=>Math.max(Number(e),Number(t.value)),e),t="function"==typeof n.perc?n.perc(f):Number(n.perc);a.value=y(t*e/100)};m(),v.map(e=>e.addEventListener("change",m)),M.movementsMaxInputMap.has(h.movementId)&&M.movementsMaxInputMap.get(h.movementId).addEventListener("change",m)}v.push(u);const g=()=>a.value&&t.value&&i.value?q(Number(a.value))(Number(t.value))(Number(i.value)):null;return u.value=y(g()),[t,a,i,l].map(e=>e.addEventListener("input",()=>{u.value=y(g()),u.dispatchEvent(new Event("change"))})),[Y([H("Checkbox indicating done set for set "+(e+1)),t,a,r,s,u]),p]}).flat()])}),Q(e)),n}})),t}))}const o=E("div",["headerContainer"]),s=(A.initProgramSelect(),o.append(E("div",["titleBar"],[E("div",["selectorDiv"],[A.getSelectProgramButton(),A.selectProgramContainer]),E("h1",["programHeader"],n.title),M.getProgramSettingsButton()]),(a=>{const e=[...Array(a.numberOfIterations).keys()];return E("div",["linkList"],e.map(n=>{const e=E("div",["tightdiv","weekelement"]),t=E("button",["cyclelink"],"Week "+(n+1)),r=E("div",["dayButtonList"]);return r.append(...[...Array(a.days.length).keys()].map(e=>{const t=E("button",["dayButton"],"Day "+(e+1));return t.onclick=()=>{document.querySelector(`#day${n}-`+e).scrollIntoView({behavior:"smooth"}),r.hidden=!0},t})),r.hidden=!0,w(r),e.append(t,r),t.onclick=()=>{r.hidden=!r.hidden},e}))})(a)),e=>{e=e.getBoundingClientRect();return 0<=e.left&&e.right<=(window.innerWidth||document.documentElement.clientWidth)});t&&(V.scrollLeftButton.hidden=!0,V.scrollRightButton.hidden=!1,this.scrollLeftButton.onclick=()=>{const e=[...document.getElementsByClassName("blockContainer")];var t=e.find(e=>s(e));void 0!==t&&null!==t.previousElementSibling&&i.scrollBy({top:0,left:0-t.offsetWidth,behavior:"smooth"})},this.scrollRightButton.onclick=()=>{const e=[...document.getElementsByClassName("blockContainer")];var t=e.reverse().find(e=>s(e));void 0!==t&&null!==t.nextElementSibling&&i.scrollBy({top:0,left:t.offsetWidth,behavior:"smooth"})},i.prepend(this.scrollLeftButton,this.scrollRightButton),i.addEventListener("scroll",()=>{var e=[...document.getElementsByClassName("blockContainer")],t=e[0],t=(V.scrollLeftButton.hidden=s(t),e[e.length-1]);V.scrollRightButton.hidden=s(t)})),this.appContainer.append(o,P.programEditorContainer,M.programSettingsContainer,i),this.first&&(document.body.append(this.appContainer),this.first=!1),M.startDateOption.dispatchEvent(new Event("change"))}}window.addEventListener("DOMContentLoaded",async()=>{const e=new URLSearchParams(window.location.search);var t,n,r;e.has("s")?(t=Number(e.get("s")),window.history.replaceState({},document.title,"/"),l(),h(),b(g)(t),e.has("r")&&v(e.get("r")),V.renderProgram()):e.has("t")&&e.has("p")?(t=e.get("t").substring(0,30),n=e.get("p"),window.history.replaceState({},document.title,"/"),l(),h(),r=F(t,n),e.has("r")&&v(e.get("r")),b(g)(r),V.renderProgram({title:t,shareString:n})):(void 0===f(g)()&&b(g)(0),e.has("r")&&v(e.get("r")),V.renderProgram())});