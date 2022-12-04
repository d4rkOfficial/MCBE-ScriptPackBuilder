(function(){"use strict";function a(){const q=()=>Math.random().toString(16).slice(-1);let r="";r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();return r}const b=require("readline");const c=b.createInterface({input:process.stdin,output:process.stdout});function d(s){console.log(s)}async function e(t){console.log(t);return await new Promise(u=>{c.on("line",v=>{u(v)})})}const f={name:"Package Name: ",desc:"Package Desc: "};const g={["1.19.60.22"]:{async generate(){const w=await e(f.name),x=await e(f.desc);return JSON.stringify({format_version:2,header:{description:x??"-",name:w??"-",uuid:a(),version:[0,0,1],min_engine_version:[1,19,0]},modules:[{description:"",type:"script",language:"javascript",uuid:a(),version:[0,0,1],entry:"scripts/index.js"}],dependencies:[{module_name:"@minecraft/server",version:"1.1.0-beta"},{module_name:"@minecraft/server-gametest",version:"1.1.0-beta"},{module_name:"@minecraft/server-ui",version:"1.1.0-beta"}]},null,2)}},["1.19.30.0"]:{async generate(){const y=await e(f.name),z=await e(f.desc);return JSON.stringify({format_version:2,header:{description:z??"-",name:y??"-",uuid:a(),version:[0,0,1],min_engine_version:[1,19,0]},modules:[{description:"",type:"script",language:"javascript",uuid:a(),version:[0,0,1],entry:"scripts/index.js"}],dependencies:[{module_name:"@minecraft/server",version:"1.0.0-beta"},{module_name:"@minecraft/server-gametest",version:"1.0.0-beta"},{module_name:"@minecraft/server-ui",version:"1.0.0-beta"}]},null,2)}}};const h=require("fs");const i=require("path");async function j(A,B){const C=i.resolve(__dirname,A);return await new Promise((D,E)=>{h.writeFile(C,B,{flag:"a"},F=>{if(F){E(F);return}D()})})}async function k(G){const H=i.resolve(__dirname,G);return await new Promise((I,J)=>{h.mkdir(H,K=>{if(K){J(K);return}I()})})}function l(L){return L.join("").split("\n").join("\n  ")}const m=l`
 __  __  _____ ____  ______ 
|  \\/  |/ ____|  _ \\|  ____|
| \\  / | |    | |_) | |__   
| |\\/| | |    |  _ <|  __|  
| |  | | |____| |_) | |____ 
|_|  |_|\\_____|____/|______|
 __   __   __     __  ___  __        __       
/__\` /  \` |__) | |__)  |  |__)  /\\  /  \` |__/ 
.__/ \\__, |  \\ | |     |  |    /~~\\ \\__, |  \\ 
 __               __   ___  __                
|__) |  | | |    |  \\ |__  |__)               
|__) \\__/ | |___ |__/ |___ |  \\               
	                                              
`;function n(M){M=M.split(".").map(P=>Number(P));M.length===3&&M.push(0);M.length===2&&M.push(0,0);M.length===1&&M.push(0,0,0);let N=Object.keys(g).sort((Q,R)=>{[Q,R]=[R,Q];Q=Q.split(".");R=R.split(".");return o(Q,R)});let O;for(let S of N){S=S.split(".").map(T=>Number(T));if(o(M,S)<0){break}else{O=S}}if(!O)O=N[0];return O}function o(U,V){return(U[0]-V[0])*1e6+(U[1]-V[1])*1e4+(U[2]-V[2])*100+(U[3]-V[3])>0?1:-1}const p=`import * as mc from "@minecraft/server"
let time = 0
let timer = mc.world.events.tick.subscribe(_ => {
	if (++time === 300) {
		mc.world
		  .getDimension("overworld")
		  .runCommand("say Hello, world!")
	}
})
`;(async function W(){d(m);const X="1.19.60.22";let Y=await e(`Minecraft Version(default ${X}): `)??X;let Z=n(Y);if(!Z){d("This version is not supported.");return}let{generate:$}=g[Z];let _=await $();await j("manifest.json",_);await k("scripts");await j("scripts/index.js",p);d("done.");process.exit(0)})()})();