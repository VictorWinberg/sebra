import{p as u,k as y,t as m,b as l}from"./useSnackbar-DKcC1YFu.js";import{n as A,v as M,o as f,p as g,q as w,s as a,ai as S,W as F}from"./index-B5Wn1pV6.js";const I=async()=>{const[s,t,e,n]=await Promise.all([a("SELECT * FROM assignments ORDER BY assignment_name"),a("SELECT * FROM assignment_responsible_contacts"),a("SELECT * FROM contacts"),a("SELECT * FROM companies")]),i=y(t,"assignmentId"),r=m(e,"id"),c=m(n,"id");return s.map(d(i,r,c))},R=async s=>{const[t,e,n,i]=await Promise.all([S("assignments",{id:s}),F("assignment_responsible_contacts",{assignmentId:s}),a("SELECT * FROM contacts"),a("SELECT * FROM companies")]),r=y(e,"assignmentId"),c=m(n,"id"),p=m(i,"id");return d(r,c,p)(t)},q=async s=>{const t=await A("assignments",u({...s,id:M()},["id","assignmentName","externalContactId","companyId","relevantFiles","fee","type","status"]));return await C({...s,...t}),t},Q=async s=>{await f("assignments",u(s,["assignmentName","externalContactId","companyId","relevantFiles","fee","type","status"]),u(s,["id"])),await O(s)},x=async({id:s})=>{await g("assignments",{id:s}),await b({id:s})};function d(s,t,e){return n=>{const c=(s.get(n.id)||[]).map(o=>o.contactId).map(o=>t.get(o)).filter(o=>!!o),p=t.get(n.externalContactId),E=e.get(n.companyId);return{...n,responsibleContacts:c,externalContact:p,company:E}}}const L=async()=>(await a("SELECT DISTINCT status FROM assignments")).map(({status:t})=>t).filter(Boolean),C=async({id:s,responsibleContacts:t})=>{!s||!t||await w("assignment_responsible_contacts",t.map(({id:e})=>({assignmentId:s,contactId:e})))},O=async s=>{await b(s),await C(s)},b=async({id:s})=>{s&&await g("assignment_responsible_contacts",{assignmentId:s})},v=()=>l({queryKey:["assignments"],queryFn:I}),h=s=>l({queryKey:["assignment",s],queryFn:()=>R(s),enabled:!!s}),B=()=>l({queryKey:["assignmentStatuses"],queryFn:L});export{h as a,B as b,q as c,Q as d,x as e,v as u};