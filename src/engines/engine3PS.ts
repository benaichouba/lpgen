import {makeLesson,validateLesson,resourceFiles} from './common';import type {Lesson} from './types';
export const engine3PS={level:'3PS' as const,resources:resourceFiles['3PS'],create:()=>makeLesson('3PS'),validate:(lesson:Lesson)=>{if(lesson.level!=='3PS')return ['Wrong level for engine 3PS'];return validateLesson(lesson)}};
