import {makeLesson,validateLesson,resourceFiles} from './common';import type {Lesson} from './types';
export const engine4PS={level:'4PS' as const,resources:resourceFiles['4PS'],create:()=>makeLesson('4PS'),validate:(lesson:Lesson)=>{if(lesson.level!=='4PS')return ['Wrong level for engine 4PS'];return validateLesson(lesson)}};
