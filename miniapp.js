"use strict";const d=[{group:"Squat",movements:[{mid:0,label:"Squats"},{mid:1,label:"Highbar squats"},{mid:2,label:"Paused squats"},{mid:3,label:"Front squats"},{mid:4,label:"SSB squats"},{mid:21,label:"Highbar paused squats"}]},{group:"Bench",movements:[{mid:5,label:"Bench press"},{mid:6,label:"Medium grip bench press"},{mid:7,label:"Close grip bench press"},{mid:8,label:"Larsen press"},{mid:9,label:"Close grip Larsen press"},{mid:10,label:"Medium grip Larsen pin press"},{mid:20,label:"Incline press"},{mid:22,label:"Log press"},{mid:23,label:"Floor press"}]},{group:"Deadlift",movements:[{mid:11,label:"Deadlifts"},{mid:12,label:"Deficit deadlifts"},{mid:13,label:"Snatch grip deadlifts"},{mid:14,label:"Block pulls"},{mid:25,label:"Sumo deadlifts"}]},{group:"Other",movements:[{mid:15,label:"Sealrow"},{mid:16,label:"Standing row"},{mid:17,label:"Pullups"},{mid:18,label:"Weighted pullups"},{mid:19,label:"Weighted dips"},{mid:24,label:"Bulgarian split squats"}]}],l=[{id:0,title:"Basic training program",shareString:"ko0408084448k-2+48484A0c4448s-2+4c448-23Wkk484g04w8084448k-2+48484A0c4448s-2+4c448-23Wkk484g0488084448k-2+48484A0c4448s-2+4c448-23Wkk484g04A8084448k-2+48484A0c4448s-2+4c448-23Wkk484g04I8084448k-2+48484A0c4448s-2+4c448-23Wkk484g04E8084448k-2+48484A0c4448s-2+4c448-23Wkk484g"},{id:1,title:"Swiss program",shareString:"kk0808084448k-2+48484A0c4448s-2+4c448-23Wkk484g-21i8084448w-2+48484w0c4448E-2+4c448-23Wkk484g08k8084448k-2+48484A0c4448s-2+4c448-23Wkk484g-21m8084448k-2+48484A0c4448s-2+4c448-23Wkk484g08I8084448k-2+48484A0c4448s-2+4c448-23Wkk484gs8084448w-2+48484w0c4448E-2+4c448-23Wkk484g08-21u8084448k-2+48484A0c4448s-2+4c448-23Wkk484g-21q8084448k-2+48484w0c4448s-2+4c448-23Wkk484g08-21C8084448w-2+48484w0c4448E-2+4c448-23Wkk484g-21u8084448w-2+48484w0c4448E-2+4c448-23Wkk484g"},{id:2,title:"Oldschool linear",shareString:"oo04040c4448E-2+4c448-23Kgk448E-2+404w40c4448E-2+4c448-23Kgk448E-2+404840c4448E-2+4c448-23Kgk448E-2+404A40c4448E-2+4c448-23Kgk448E-2+404I40c4448E-2+4c448-23Kgk448E-2+404E40c4448E-2+4c448-23Kgk448E-2+4"},{id:3,title:"Advanzed program",shareString:"ko0408084448k-2+48484A0c4448s-2+4c448-23Wkk484g04wk088484Ac484-25a088484Ac484-25u088484Ac484-25O088484Ac484-268088484Ac484-23S0488084448k-2+48484A0c4448s-2+4c448-23Wkk484g04Ak088484Ac484-25a088484Ac484-25u088484Ac484-25O088484Ac484-268088484Ac484-23S04I8084448k-2+48484A0c4448s-2+4c448-23Wkk484g04Ek088484Ac484-25a088484Ac484-25u088484Ac484-25O088484Ac484-268088484Ac484-23S"}],m=9999,q=new Map(d.map(e=>e.movements.map(e=>[e.mid,e.label])).flat()),j=(e,t)=>e*(36/(37-t));var a;a=1;const V=n=>t=>e=>j(n,t+(11-e-a)),u=e=>{e=2.5*Math.round(e/2.5);return 0<e?e:""},r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n=e=>{if(0==e)return 0;let t="";var n=e<0?"+":"";let a=(4*Math.abs(e)).toFixed();for(;0<a;)t=r[a%62]+t,a=(a-a%62)/62;return n+t},i=e=>{var t="+"===e[0];const n="+"===e[0]?e.slice(1):e;e=n.split("").map(t=>r.findIndex(e=>e==t)).reverse().map((e,t)=>e*62**t).reduce((e,t)=>e+t)/4;return t?-1*e:e};class g{static latestId=1e3;static resetId(){this.latestId=1e3}static getUniqueId(){return this.latestId++}}const s=()=>[...Array(localStorage.length).keys()].map(e=>localStorage.key(e)),T=(e,t)=>n([e,t].join("")),h=()=>s().filter(e=>e.match(/^\d{4}$/g)).map(e=>{localStorage.removeItem(e)}),o=()=>s().filter(e=>e.match(/^\d{4}$/g)).map(e=>T(e,localStorage.getItem(e))).join("-"),$=e=>{const t=i(e).toString(10);return[t.slice(0,4),t.slice(4)]},F=e=>e.split("-").map(e=>$(e)),c=()=>{var e=(new Date).toISOString().slice(0,10),t=b(m)(0);const n=o();1<n.split("-").length&&localStorage.setItem(`progress-${t}-`+e,o())},v=t=>e=>localStorage.setItem(t,e),b=t=>e=>localStorage.getItem(t)?localStorage.getItem(t):e,K=()=>{let t=0;for(;t=Math.floor(900*Math.random()+100),0<s().filter(e=>e.match(new RegExp("^program-"+t,"g"))).length;);return t},t=()=>{return s().filter(e=>e.match(/^program-/g)).map(e=>({id:Number(e.match(/^program-(\d+)/)[1]),title:e.match(/^program-\d+-(.+)/)[1],shareString:localStorage.getItem(e)}))},e=()=>[...l,...t()],p=t=>e().find(e=>e.id==t)??p(0),k=(e,t,n)=>{const a=document.createElement(e);return a.classList.add(...t),"string"==typeof n?a.textContent=n:Array.isArray(n)?a.append(...n):"object"==typeof n&&a.appendChild(n),a},y=e=>k("tr",[],e.map(e=>k("td",[],e))),f=e=>k("tr",[],e.map(e=>k("th",[],e))),H=e=>{const t=document.createElement("input");return t.id=g.getUniqueId(),t.onchange=()=>v(t.id)(t.checked?1:0),t.setAttribute("type","checkBox"),t.checked="1"===b(t.id)(0),t.setAttribute("aria-label",e),t.setAttribute("title",e),t},E=(e,t,n,a,r)=>{const i=document.createElement("input");return t<100&&1==n&&i.classList.add("smallInput"),i.id=g.getUniqueId(),i.onchange=()=>v(i.id)(i.value),i.setAttribute("type","number"),i.value=b(i.id)(a),i.min=e,i.max=t,i.step=n,i.setAttribute("aria-label",r),i.setAttribute("title",r),i},S=(e,t)=>{const n=document.createElement("input");return n.setAttribute("type","text"),n.value=e,n.disabled=!0,n.setAttribute("aria-label",t),n.setAttribute("title",t),n};class C{static shareContainer=null;static getShareButton=()=>{const e=k("button",["loadSaveButton"],"💾 Load/save progress");return e.onclick=()=>{this.shareContainer.dispatchEvent(new Event("toggleVisibility")),this.shareContainer.hidden=!this.shareContainer.hidden},e};static initShareContainer=()=>{const o=k("div",["shareLinkContainer"]);o.hidden=!0,o.addEventListener("toggleVisibility",()=>{for(;o.firstChild;)o.removeChild(o.firstChild);var e=b(m)(0);const t=new RegExp("progress-"+e,"g"),n=(o.append(...s().filter(e=>e.match(t)).sort().map(e=>{var t=e.substring(e.length-10);const n=k("div",["shareStringContainer"],k("label",["shareStringLabel"],t)),a=k("button",["clearButton"],"🗑"),r=(a.onclick=()=>{localStorage.removeItem(e),o.dispatchEvent(new Event("toggleVisibility"))},k("input",["presentedlink"],"")),i=(r.type="text",r.value=localStorage.getItem(e),k("button",[],"Copy")),s=(i.onclick=()=>{r.select(),document.execCommand("copy")},k("button",[],"Restore"));return s.onclick=()=>{var e;e=r.value,c(),h(),F(e).map(e=>v(e[0])(e[1])),R.renderProgram()},n.append(a,r,i,s),n})),k("div",["shareStringContainer"])),a=k("button",[],"Save current"),r=(a.onclick=()=>{c(),o.dispatchEvent(new Event("toggleVisibility"))},k("button",["closebutton"],"▲ ▲ ▲"));r.onclick=()=>{o.hidden=!o.hidden},n.append(a),o.append(n,r)}),this.shareContainer=o}}const w=e=>{const t=k("h2",["restDayText"],"Rest day");return t.hidden=0<e.length,t};class A{static programSettingsContainer=k("div",["programSettingsContainer"]);static startDateOption=null;static toggleVisibility=()=>{this.programSettingsContainer.hidden=!this.programSettingsContainer.hidden};static getProgramSettingsButton=()=>{const e=k("button",["settingsMenuButton"],"🛠");return e.onclick=()=>{this.toggleVisibility()},e};static movementsMaxMap=new Map;static movementsTitleMap=new Map(d.map(e=>e.movements.map(e=>[e.mid,e.label])).flat());static movementsMaxInputMap=new Map;static initProgramSettingsContainer=(e,t)=>{this.movementsMaxInputMap=new Map,this.movementsMaxMap=new Map;const n=k("div",["programSettingsContainer"]),a=(n.id="programSettings",[...new Set(e.days.map(e=>e.filter(e=>e.sets.some(e=>null!==e.rpe(1)&&null!==e.reps(1))).map(e=>e.movementId)).flat())]),r=[...new Set(e.days.map(e=>e.filter(e=>e.sets.every(e=>null===e.rpe(1)||null===e.reps(1))).map(e=>e.movementId)).flat())],i=(C.initShareContainer(),k("button",["clearButton"],"🗑 Reset Progress"));if(i.onclick=()=>{var e=b(m)();h(),v(m)(e),R.renderProgram()},this.startDateOption=(e=>{const t=document.createElement("input");t.id=g.getUniqueId(),t.onchange=()=>{0<t.valueAsNumber?v(t.id)(t.valueAsNumber/1e5):localStorage.removeItem(t.id)},t.setAttribute("type","date");e=1e5*b(t.id)(e);return e&&(t.valueAsNumber=e),t})(),this.startDateOption.addEventListener("change",()=>{const n=0<this.startDateOption.valueAsNumber?new Date(this.startDateOption.value):null,a=(new Date).toJSON().substring(0,10);document.querySelectorAll(".dayLegend").forEach((e,t)=>{n instanceof Date?(e.hidden=!1,e.textContent=n.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"}),n.toJSON().substring(0,10)==a&&e.parentElement.parentElement.scrollIntoView({behavior:"smooth"}),n.setDate(n.getDate()+1)):e.hidden=!0})}),n.append(k("label",[],["Start date:",this.startDateOption])),n.append(...[{title:"Required e1RMs",movs:r},{title:"Optional e1RMs",movs:a}].map(e=>0<e.movs.length?k("table",["settingsTable"],[k("caption",[],e.title+":"),f(["Movment","e1RM"]),...e.movs.map(e=>{const t=E(75,1e3,2.5);return t.addEventListener("change",()=>{this.movementsMaxMap.set(e,t.value)}),this.movementsMaxInputMap.set(e,t),this.movementsMaxMap.set(e,t.value),y([this.movementsTitleMap.get(e),t])})]):null).filter(e=>null!==e),C.getShareButton(),C.shareContainer,i),t){n.append(I.getProgramEditorButton());t=U(e);const o=k("input",["presentedlink"],""),l=(o.type="text",o.value=t,k("button",[],"Copy")),c=(l.onclick=()=>{o.select(),document.execCommand("copy")},k("div",["shareStringContainer"],[o,l])),p=(c.hidden=!0,k("button",[],"🌍Share program"));p.onclick=()=>{c.hidden=!c.hidden},n.append(p,c)}0!=r.length&&![...this.movementsMaxInputMap.keys()].filter(e=>r.includes(e)).every(e=>0<this.movementsMaxInputMap.get(e).value)||(n.hidden=!0);const s=k("button",["closebutton"],"▲ ▲ ▲");s.onclick=this.toggleVisibility,n.append(s),this.programSettingsContainer=n}}class I{static programEditorContainer=null;static toggleVisibility=()=>{this.programEditorContainer.hidden=!this.programEditorContainer.hidden,window.scrollTo({top:0,behavior:"smooth"})};static getNewProgramButton=()=>{const e=k("button",["createNewProgramButton"],"Create new program");return e.onclick=()=>{c(),h(),R.renderProgram({title:"New program",shareString:"ks00000000000000"},!1)},e};static getProgramEditorButton=()=>{const e=k("button",["menuButton"],"📝Edit Program");return e.onclick=()=>{this.toggleVisibility(),A.programSettingsContainer.hidden=!0},e};static initProgramEditorContainer=n=>{const s=z(n.title,n.shareString),e=k("div",["programEditorContainer"]),o=(e,t,n)=>{n.value="text"===n.type?e[t]:Number(e[t]),n.addEventListener("change",()=>{e[t]=n.value})},t=k("button",["closebutton"],"▲ ▲ ▲"),a=(t.onclick=this.toggleVisibility,k("input",[])),r=(a.setAttribute("type","text"),o(s,"title",a),a.value=s.title,k("input",[])),i=(r.setAttribute("type","number"),r.addEventListener("change",()=>c.dispatchEvent(new Event("render"))),o(s,"numberOfIterations",r),k("input",[])),l=(i.setAttribute("type","number"),i.onchange=()=>{i.value<=s.days.length?s.days=s.days.slice(0,i.value):i.value<=10&&s.days.push(...Array(i.value-s.days.length).fill([])),c.dispatchEvent(new Event("render"))},i.value=s.days.length,e.append(t,k("div",["editorFieldBox"],[k("label",[],"Title"),a]),k("div",["editorFieldBox"],[k("label",[],"Number of iterations/weeks"),r]),k("div",["editorFieldBox"],[k("label",[],"Number of days per week"),i])),new Map([[L,{optionLabel:"None",nrOfParams:0}],[M,{optionLabel:"Linear",nrOfParams:2}],[B,{optionLabel:"Constant",nrOfParams:1}],[x,{optionLabel:"Steps",nrOfParams:s.numberOfIterations}]]));const c=k("div",["allDaysContainer"]),p=(c.addEventListener("render",e=>{for(;c.firstChild;)c.removeChild(c.firstChild);c.append(...s.days.map((i,e)=>{const t=k("fieldset",["dayEditContainer"]);var a,r,n=k("div",["innerDayEdit"],[(a=s.days,r=e,k("span",["copyDayList"],["Copy day nr:",...a.map((e,t)=>{const n=k("button",["copyDayButton"],"#"+(t+1));return n.onclick=()=>{a[r]=JSON.parse(JSON.stringify(e)),c.dispatchEvent(new Event("render"))},t==r&&(n.disabled=!0),n})])),...i.map((n,e)=>{const t=k("div",["movementEditContainer"]);var a=n.sets.map((s,e)=>{const t=k("div",["setContainer"]);return t.append(k("h3",[],"Set "+(e+1)),((e,t,n)=>{const a=k("button",["clearButton"],"🗑");return a.onclick=()=>{e.remove(),t.sets.splice(n,1),c.dispatchEvent(new Event("render"))},a})(t,n,e),...Object.entries(s).filter(([,e])=>e.type!=L).map(([e,a])=>{const t=k("div",["progressionContainer"]),r=k("select",["progressionSelect"]),n=k("div",["progressionEditor"]),i=(l.forEach((e,t)=>{const n=k("option",[],e.optionLabel);(n.value=t)===a.type&&(n.selected=!0),r.append(n)}),o(a,"type",r),r.addEventListener("change",()=>{for(;n.firstChild;)n.removeChild(n.firstChild);const e=new Map([[L,[]],[M,["initial","change"]],[B,["value"]],[x,Array(5).fill().map((e,t)=>"step "+(t+1))]]);n.append(((a,r)=>{const e=k("div",["paramsContainer"]),t=Array(r.length).fill();var n=t.map((e,t)=>{const n=k("input",["paramInput"]);return n.setAttribute("type","number"),n.min=-1e3,n.max=1e3,n.step=.25,o(a,t,n),k("div",["paramBox"],[k("label",[],r[t]),n])});return e.append(...n),e})(a.params,e.get(Number(r.value))))}),r.dispatchEvent(new Event("change")),k("button",["clearButton"],"🗑"));return i.onclick=()=>{delete s[e],c.dispatchEvent(new Event("render"))},t.append(k("label",["progressionLabel"],J[e]),r,n,i),t}),k("div",["setParamButtonList"],Object.keys(W).filter(e=>!Object.keys(s).includes(e)).map(e=>{{var t=s,n=e;const a=k("button",["addParamButton"],J[n]);return a.onclick=()=>{t[n]={type:B,params:[]},c.dispatchEvent(new Event("render"))},a}}))),t}),r=(n=>{const e=k("select",["dumbmovementselect"]);var t=d.map(e=>{const t=k("optgroup",[],e.movements.map(e=>{const t=k("option",[],e.label);return t.value=e.mid,e.mid==n&&(t.selected=!0),t}));return t.label=e.group,t});return e.append(...t),e})(n.movementId);return o(n,"movementId",r),t.append(k("h3",[],"Movement "+(e+1)),((e,t,n)=>{const a=k("button",["clearButton"],"🗑");return a.onclick=()=>{e.remove(),t.splice(n,1),c.dispatchEvent(new Event("render"))},a})(t,i,e),r,...a,(e=>{const t=k("button",[],"Add set");return t.onclick=()=>{e.sets.push({}),c.dispatchEvent(new Event("render"))},t})(n)),t}),w(i),(e=>{const t=k("button",["addMovementButton"],"Add movement");return t.onclick=()=>{e.push({movementId:0,sets:[{}]}),c.dispatchEvent(new Event("render"))},t})(i)]);return t.append(k("legend",["dayEditLegend"],["Day "+(e+1)]),n),t}))}),c.dispatchEvent(new Event("render")),e.append(c),k("button",[],"Save and render program"));p.onclick=()=>{var e=U(s),t=`program-${n.id}-`+s.title;localStorage.getItem(t)?localStorage.setItem(t,e):(t=((e,t)=>{e=`program-${K()}-`+e;return localStorage.setItem(e,t),e})(s.title,e),v(m)(t)),R.renderProgram({title:s.title,shareString:e})},e.append(p),e.hidden=!s.days.every(e=>0==e.length),this.programEditorContainer=e}}class P{static selectProgramContainer=k("div",["selectProgramContainer"]);static getSelectProgramButton=()=>{const e=k("button",["settingsMenuButton"],"≡");return e.onclick=()=>{this.selectProgramContainer.hidden=!this.selectProgramContainer.hidden},e};static getProgramSelectRow=(e,t=!1)=>{const n=k("div",["programSelectRow"]),a=k("button",["selectProgramButton"],e.title),r=(a.onclick=()=>{c(),h(),v(m)(e.id),R.renderProgram(p(e.id))},k("button",["selectProgramButton"],"📝")),i=(r.onclick=()=>{c(),h(),R.renderProgram(e,!1),I.toggleVisibility(),A.programSettingsContainer.hidden=!0},k("button",["selectProgramButton"],"⧉")),s=(i.onclick=()=>{c(),h(),R.renderProgram({title:"Copy of "+e.title,shareString:e.shareString},!1),I.toggleVisibility(),A.programSettingsContainer.hidden=!0},k("button",["selectProgramButton"],"🗑"));return s.onclick=()=>{localStorage.removeItem(`program-${e.id}-`+e.title),n.remove()},t?n.append(a,k("div",["buttonList"],[s,r,i])):n.append(a,k("div",["buttonList"],[i])),n};static initProgramSelect=()=>{const e=k("div",["selectProgramContainer"]);e.hidden=!0,e.append(...l.map(e=>this.getProgramSelectRow(e)),...t().map(e=>this.getProgramSelectRow(e,!0)),I.getNewProgramButton()),this.selectProgramContainer=e}}const M=1,B=2,L=3,x=4,O={linear:(...t)=>e=>t[0]+t[1]*e,constant:(...t)=>e=>t[0],none:()=>e=>null,steps:(...t)=>e=>t[e%t.length]},D=e=>{if("function"==typeof e)return e;if(void 0===e)return O.none();if(null==e)return O.none();if("number"==typeof e)return O.constant(e);if("object"==typeof e){if(e.type===M)return O.linear(...e.params);if(e.type===B)return O.constant(...e.params);if(e.type===L)return O.none();if(e.type===x)return O.steps(...e.params)}return O.none()};const W={reps:1,rpe:2,perc:3,weight:4,repeat:5},J={reps:"Reps",rpe:"RPE",perc:"Percentage",weight:"Weight",repeat:"Repeat"},N=(e,t)=>"object"==typeof t&&t.type!=L?[e,1,t.type,t.params.length,t.params]:[],U=e=>[e.numberOfIterations,e.days.length,e.days.map(e=>[0,e.length,e.map(e=>[e.movementId,e.sets.length,e.sets.map(e=>[0,Object.values(e).filter(e=>e.type!=L).length,...N(W.reps,e.reps),...N(W.rpe,e.rpe),...N(W.perc,e.perc),...N(W.weight,e.weight),...N(W.repeat,e.repeat)])])])].flat(8).map(e=>n(e)).map(e=>1<e.length?"-"+e.length+e:e).join(""),G=e=>e.split(/(?=-)/g).map(e=>"-"===e[0]?[e.slice(2,2+Number(e[1])),...e.slice(2+Number(e[1])).split("")]:e.split("")).flat(),z=(e,t)=>{const n=G(t).map(e=>i(e));const a=e=>({type:e[0][0],params:e[0].slice(1).flat()});return{numberOfIterations:n[0],title:e,days:((e,t)=>{const n=[0,0,0,0,0,0,e],a=[];let r=!1,i=!0;return t.forEach(e=>{var t=n.findIndex(e=>0<e);i?(6==t?a.push([e]):5==t?a.at(-1).push([e]):4==t?a.at(-1).at(-1).push([e]):3==t?a.at(-1).at(-1).at(-1).push([e]):2==t?a.at(-1).at(-1).at(-1).at(-1).push([e,[]]):1==t?a.at(-1).at(-1).at(-1).at(-1).at(-1).push([e,[]]):0==t&&a.at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).push([e,[]]),i=!1,r=!0):-1<t&&(r?(n[t-1]=e,r=!1,i=2<t):6==t?a.at(-1).push([e]):5==t?a.at(-1).at(-1).push(e):4==t?a.at(-1).at(-1).at(-1).push(e):3==t?a.at(-1).at(-1).at(-1).at(-1).push(e):2==t?a.at(-1).at(-1).at(-1).at(-1).at(-1).push(e):1==t?a.at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).push(e):0==t&&a.at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).at(-1).push(e),--n[t],n.slice(0,t+1).every(e=>0==e)&&(r=!0,i=!0))}),a})(n[1],n.slice(2)).filter(e=>"object"==typeof e&&0<e.length).map(e=>e.filter(e=>"object"==typeof e&&0<e.length).map(e=>({movementId:e[0],sets:e.slice(1).filter(e=>"object"==typeof e&&0<e.length).map(e=>{const t={};return e.slice(1).map(e=>{e[0]==W.reps?t.reps=a(e.slice(1)):e[0]==W.rpe?t.rpe=a(e.slice(1)):e[0]==W.perc?t.perc=a(e.slice(1)):e[0]==W.weight?t.weight=a(e.slice(1)):e[0]==W.repeat&&(t.repeat=a(e.slice(1)))}),t})})))}};class R{static appContainer=k("div",["appContainer"]);static first=!0;static renderProgram(e,t=!0){for(g.resetId();this.appContainer.firstChild;)this.appContainer.removeChild(this.appContainer.firstChild);window.scrollTo({top:0});let n=p(b(m)(0));"object"==typeof e&&(n=e);var e=z(n.title,n.shareString),a=(I.initProgramEditorContainer(n),!l.some(e=>e.id===n.id));const r={numberOfIterations:e.numberOfIterations,title:e.title,days:e.days.map(e=>e.map(e=>({movementId:e.movementId,sets:e.sets.map(e=>({reps:D(e.reps),rpe:D(e.rpe),perc:D(e.perc),weight:D(e.weight),repeat:null==e.repeat||void 0===e.repeat?O.constant(1):D(e.repeat)}))})))},i=(A.initProgramSettingsContainer(r,a),k("div",["programContainer"]));if(t){const o=[...Array(r.numberOfIterations).keys()];i.append(...o.map(a=>{var e=k("h2",["weekHeader"],"Week "+(a+1));const t=k("div",["blockContainer","weekelement"],e);return t.id="cycle"+a,t.append(...r.days.map((e,t)=>{{var m=a;const n=k("fieldset",["dayContainer"],k("legend",["defaultDayLegend"],["Day "+(t+1),k("span",["dayLegend"],"")]));return n.id=`day${m}-`+t,n.append(...e.map((p,e)=>{const d=[],t=p.sets.map(e=>Array(e.repeat(m)).fill(e)).flat();return k("table",["movementContainer"],[k("caption",[],q.get(p.movementId)),f(["","Reps","Goal RPE","% of e1RM","Weight","Actual RPE","e1RM"]),...t.map((n,e)=>{const t=E(0,10,1,n.reps(m),"Reps for set "+(e+1));var a=S(null!==n.perc(m)?n.perc(m)+"%":null,"Percentage for set "+(e+1));const r=null!==n.perc(m)?S(n.weight(m),"Weight for set "+(e+1)):E(75,1e3,2.5,n.weight(m),"Weight for set "+(e+1)),i=E(1,11,.25,n.rpe(m),"Actual RPE for set "+(e+1));var s=S(n.rpe(m),"Goal RPE for set "+(e+1));const o=S("...","Estimated 1RM for set "+(e+1));if(null!==n.perc(m)){const c=()=>{var e=A.movementsMaxMap.get(p.movementId)??0,e=d.reduce((e,t)=>Math.max(Number(e),Number(t.value)),e),t="function"==typeof n.perc?n.perc(m):Number(n.perc);r.value=u(t*e/100)};c(),d.map(e=>e.addEventListener("change",c)),A.movementsMaxInputMap.has(p.movementId)&&A.movementsMaxInputMap.get(p.movementId).addEventListener("change",c)}d.push(o);const l=()=>r.value&&t.value&&i.value?V(Number(r.value))(Number(t.value))(Number(i.value)):null;return o.value=u(l()),[t,r,i].map(e=>e.addEventListener("input",()=>{o.value=u(l()),o.dispatchEvent(new Event("change"))})),y([H("Checkbox indicating done set for set "+(e+1)),t,s,a,r,i,o])}).flat()])}),w(e)),n}})),t}))}const s=k("div",["headerContainer"]);P.initProgramSelect(),s.append(k("div",["titleBar"],[k("div",["selectorDiv"],[P.getSelectProgramButton(),P.selectProgramContainer]),k("h1",["programHeader"],n.title),A.getProgramSettingsButton()]),(r=>{const e=[...Array(r.numberOfIterations).keys()];return k("div",["linkList"],e.map(n=>{const e=k("div",["tightdiv","weekelement"]),t=k("button",["cyclelink"],"Week "+(n+1)),a=k("div",["dayButtonList"]);return a.append(...[...Array(r.days.length).keys()].map(e=>{const t=k("button",["dayButton"],"Day "+(e+1));return t.onclick=()=>{document.querySelector(`#day${n}-`+e).scrollIntoView({behavior:"smooth"}),a.hidden=!0},t})),a.hidden=!0,e.append(t,a),t.onclick=()=>{a.hidden=!a.hidden},e}))})(r),A.programSettingsContainer),this.appContainer.append(s,I.programEditorContainer,i),this.first&&(document.body.append(this.appContainer),this.first=!1),A.startDateOption.dispatchEvent(new Event("change"))}}void 0===b(m)()&&v(m)(0),R.renderProgram();