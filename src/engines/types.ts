export type Level='3PS'|'4PS'|'5PS';export type Stage='Warm-up'|'Install Resources'|'Assessment';
export interface Step {stage:Stage;title:string;task:string;minutes:number;interaction:string;varkt:string;subObjective:string}
export interface Lesson {id:string;level:Level;sequence:string;section:string;session:string;domain:string;teacher:string;school:string;date:string;mainObjective:string;objectiveSource:string;subsidiary:string;materials:string;problems:string;solutions:string;values:string;skills21:string;crossCurricular:string;steps:Step[];assessment:string;reflection:{worked:string;hindered:string;action:string};status:'draft'|'source-verified'}
export interface Learner{id:string;name:string}
export type Mark='+'|'±'|'-'|'N/O'|'';export interface Observation{learnerId:string;pa:Mark;sw:Mark;pd:Mark;ft:Mark;se:Mark;decision:'M'|'C'|'R'|'';note:string}
export interface ClassGroup{id:string;name:string;level:Level;learners:Learner[];observations:Record<string,Observation>}
