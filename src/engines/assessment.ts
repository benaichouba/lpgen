import type {Observation,Mark} from './types';
export const marks:Mark[]=['','+','±','-','N/O'];
// A decision is professional judgement, not a numeric score. Never auto-classify unobserved skills.
export function suggestedRemediation(o:Observation){const labels:{key:keyof Observation;label:string}[]=[{key:'pa',label:'phonemic awareness'},{key:'sw',label:'sight-word recognition'},{key:'pd',label:'phonics/decoding'},{key:'ft',label:'finger-tracking'},{key:'se',label:'slate encoding'}];return labels.filter(x=>o[x.key]==='-').map(x=>x.label).join(', ')}
