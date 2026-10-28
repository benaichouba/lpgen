import {makeLesson,validateLesson,resourceFiles} from './common';import type {Lesson} from './types';
export const engine5PS={level:'5PS' as const,resources:resourceFiles['5PS'],create:()=>makeLesson('5PS'),validate:(lesson:Lesson)=>{if(lesson.level!=='5PS')return ['Wrong level for engine 5PS'];return validateLesson(lesson)}};
