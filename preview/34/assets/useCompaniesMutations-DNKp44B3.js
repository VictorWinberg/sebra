import{m as t}from"./index-BXBLyoLi.js";import{u as n,a as s}from"./useSnackbar-DS5EE-lN.js";import{c as o,u as r,d as u}from"./companiesApi-DlYb7tpE.js";const p=()=>{const e=t(),{showSnackbar:a}=n();return s({mutationFn:o,onSuccess:()=>{e.invalidateQueries({queryKey:["companies"]}),a("Företag skapat!")}})},y=()=>{const e=t(),{showSnackbar:a}=n();return s({mutationFn:r,onSuccess:()=>{e.invalidateQueries({queryKey:["companies"]}),a("Företag uppdaterat!")}})},C=()=>{const e=t(),{showSnackbar:a}=n();return s({mutationFn:u,onSuccess:()=>{e.invalidateQueries({queryKey:["companies"]}),a("Företag borttaget!")}})};export{y as a,C as b,p as u};
