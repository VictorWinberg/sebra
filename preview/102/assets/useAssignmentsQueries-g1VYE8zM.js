import{p as u,k as y,t as m,b as l}from"./useSnackbar-CCfpnRuD.js";import{m as A,n as M,o as g,p as f,q as a,ag as w,U as I}from"./index-DFA1-aob.js";const S=async()=>{const[s,t,e,n]=await Promise.all([a("SELECT * FROM assignments ORDER BY assignment_name"),a("SELECT * FROM assignment_responsible_contacts"),a("SELECT * FROM contacts"),a("SELECT * FROM companies")]),i=y(t,"assignmentId"),r=m(e,"contactId"),c=m(n,"companyId");return s.map(C(i,r,c))},F=async s=>{const[t,e,n,i]=await Promise.all([w("assignments",{assignmentId:s}),I("assignment_responsible_contacts",{assignmentId:s}),a("SELECT * FROM contacts"),a("SELECT * FROM companies")]),r=y(e,"assignmentId"),c=m(n,"contactId"),p=m(i,"companyId");return C(r,c,p)(t)},_=async s=>{const t=await A("assignments",u(s,["assignmentName","externalContactId","companyId","relevantFiles","fee","type","status"]));return await d({...s,...t}),t},q=async s=>{await M("assignments",u(s,["assignmentName","externalContactId","companyId","relevantFiles","fee","type","status"]),u(s,["assignmentId"])),await L(s)},Q=async({assignmentId:s})=>{await g("assignments",{assignmentId:s}),await b({assignmentId:s})};function C(s,t,e){return n=>{const c=(s.get(n.assignmentId)||[]).map(o=>o.contactId).map(o=>t.get(o)).filter(o=>!!o),p=t.get(n.externalContactId),E=e.get(n.companyId);return{...n,responsibleContacts:c,externalContact:p,company:E}}}const R=async()=>(await a("SELECT DISTINCT status FROM assignments")).map(({status:t})=>t).filter(Boolean),d=async({assignmentId:s,responsibleContacts:t})=>{!s||!t||await f("assignment_responsible_contacts",t.map(({contactId:e})=>({assignmentId:s,contactId:e})))},L=async s=>{await b(s),await d(s)},b=async({assignmentId:s})=>{s&&await g("assignment_responsible_contacts",{assignmentId:s})},x=()=>l({queryKey:["assignments"],queryFn:S}),h=s=>l({queryKey:["assignment",s],queryFn:()=>F(s),enabled:!!s}),B=()=>l({queryKey:["assignmentStatuses"],queryFn:R});export{h as a,B as b,_ as c,q as d,Q as e,x as u};
