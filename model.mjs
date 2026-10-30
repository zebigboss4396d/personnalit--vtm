export const SCHEMA='chicago-personality-responses';
export function validateDraft(raw, axes){
 if(!raw || typeof raw!=='object' || !Array.isArray(raw.answers) || raw.answers.length!==axes.length)throw new Error('Ce fichier ne contient pas les 36 réponses attendues.');
 if(raw.schema!==SCHEMA || raw.version!==1)throw new Error('Ce fichier utilise un format de questionnaire non reconnu.');
 const player=typeof raw.playerName==='string'?raw.playerName.trim():'';
 const character=typeof raw.characterName==='string'?raw.characterName.trim():'';
 if(!player||!character||player.length>100||character.length>120)throw new Error('Les noms du joueur et du personnage sont manquants ou trop longs.');
 const seen=new Set();
 const byId=new Map(raw.answers.map(a=>{
   if(!a || !axes.some(ax=>ax.id===a.id)||seen.has(a.id)||!Number.isInteger(a.value)||a.value<0||a.value>100||typeof a.confirmed!=='boolean')throw new Error('Certaines réponses sont invalides ou en double.');
   seen.add(a.id);return [a.id,a];
 }));
 return {playerName:player,characterName:character,values:axes.map(a=>byId.get(a.id).value),confirmed:axes.map(a=>byId.get(a.id).confirmed)};
}
export function makeExport(state,axes){
 return {schema:SCHEMA,version:1,questionnaireId:'personnalite-36-v1',locale:'fr',exportedAt:new Date().toISOString(),playerName:state.playerName.trim(),characterName:state.characterName.trim(),perspective:'personnage-humain',complete:state.confirmed.every(Boolean),scale:{min:0,max:100,midpoint:50,direction:'0 = gauche ; 100 = droite'},answers:axes.map((a,i)=>({id:a.id,left:a.left,right:a.right,value:state.values[i],confirmed:state.confirmed[i]}))};
}
