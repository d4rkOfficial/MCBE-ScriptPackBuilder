(function(){"use strict";function a(){const q=()=>Math.random().toString(16).slice(-1);let r="";r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+="-";r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();r+=q();return r}const b=require("readline");const c=b.createInterface({input:process.stdin,output:process.stdout});function d(s){console.log(s)}async function e(t){console.log(t);return await new Promise(u=>{c.on("line",v=>{u(v)})})}const f={name:"Package Name: ",desc:"Package Desc: "};const g={["1.19.60.22"]:{async generate(){const w=await e(f.name),x=await e(f.desc);return JSON.stringify({format_version:2,header:{description:x??"-",name:w??"-",uuid:a(),version:[0,0,1],min_engine_version:[1,19,0]},modules:[{description:"",type:"script",language:"javascript",uuid:a(),version:[0,0,1],entry:"scripts/index.js"}],dependencies:[{module_name:"@minecraft/server",version:"1.0.0-beta"},{module_name:"@minecraft/server-gametest",version:"1.0.0-beta"},{module_name:"@minecraft/server-ui",version:"1.0.0-beta"}]},null,2)}}};const h=require("fs");const i=require("path");async function j(y,z){const A=i.resolve(__dirname,y);return await new Promise((B,C)=>{h.writeFile(A,z,{flag:"a"},D=>{if(D){C(D);return}B()})})}async function k(E){const F=i.resolve(__dirname,E);return await new Promise((G,H)=>{h.mkdir(F,I=>{if(I){H(I);return}G()})})}function l(J){return J.join("").split("\n").join("\n  ")}const m=l`
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
	                                              
`;function n(K){K=K.split(".").map(N=>Number(N));let L=Object.keys(g).sort((O,P)=>{[O,P]=[P,O];O=O.split(".");P=P.split(".");return o(O,P)});let M;for(let Q of L){if(o(K,Q)<0){break}else{M=Q}}return M}function o(R,S){return(R[0]-S[0])*1e6+(R[1]-S[1])*1e4+(R[2]-S[2])*100+(R[3]-S[3])}const p=`import * as mc from "@minecraft/server"
let time = 0
let timer = mc.world.events.tick.subscribe(_ => {
	if (++time = 300) {
		mc.world
		  .getDimension("overworld")
		  .runCommand("say Hello, world!")
	}
})
`;(async function T(){d(m);const U="1.19.60.22";let V=await e(`Minecraft Version(default ${U}): `)??U;let W=n(V);if(!W){d("This version is not supported.");return}let{generate:X}=g[W];let Y=await X();await j("manifest.json",Y);await k("scripts");await j("scripts/index.js",p);d("done.");process.exit(0)})()})();