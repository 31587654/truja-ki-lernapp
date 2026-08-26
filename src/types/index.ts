export type Stage='Anfänger'|'Fortgeschritten'|'Experte';export type QuestionType='mc'|'tf'|'match'|'practice'|'scenario';
export interface Lesson{id:string;stage:Stage;module:string;title:string;minutes:number;must:boolean;explanation:string;example:string;summary:string[];graphic:string;cards:{question:string;answer:string;detail:string;example:string}[];keywords:string[]}
export interface Question{id:string;lessonId:string;type:QuestionType;prompt:string;options:string[];answer:number;explanation:string;difficulty:1|2|3}
export interface CardProgress{seen:number;correct:number;wrong:number;level:number;due:number;last:number}
export interface Progress{cards:Record<string,CardProgress>;completedLessons:string[];xp:number;streak:number;lastDay:string;learningSeconds:number;dailyGoal:number;weeklyGoal:number;examScores:Record<string,number>}
