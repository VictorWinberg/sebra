import{l as e}from"./index-UKMdKbaF.js";import{u as n,a as s}from"./useSnackbar-DDux-5WX.js";import{c as o,b as c,d as r}from"./useContactsQueries-CdC4HwLS.js";const d=()=>{const t=e(),{showSnackbar:a}=n();return s({mutationFn:o,onSuccess:()=>{t.invalidateQueries({queryKey:["contacts"]}),a("Kontakt skapad!")}})},l=()=>{const t=e(),{showSnackbar:a}=n();return s({mutationFn:c,onSuccess:()=>{t.invalidateQueries({queryKey:["contacts"]}),a("Kontakt uppdaterad!")}})},y=()=>{const t=e(),{showSnackbar:a}=n();return s({mutationFn:r,onSuccess:()=>{t.invalidateQueries({queryKey:["contacts"]}),a("Kontakt borttagen!")}})};export{l as a,y as b,d as u};
