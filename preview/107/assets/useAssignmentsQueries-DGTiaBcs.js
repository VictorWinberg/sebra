import{p as u,j as l,t as p,a as y}from"./SebraForm-Buo_nVLS.js";import{n as w,o as I,p as d,q as E,s as a,aj as A,X as M}from"./index-Dl4XAGHA.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new s.Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="4b29d380-5278-4d05-a93f-7413e8000919",s._sentryDebugIdIdentifier="sentry-dbid-4b29d380-5278-4d05-a93f-7413e8000919")}catch{}})();const S=async()=>{const[s,t,n,e]=await Promise.all([a("SELECT * FROM assignments ORDER BY assignment_name"),a("SELECT * FROM assignment_responsible_contacts"),a("SELECT * FROM contacts"),a("SELECT * FROM companies")]),i=l(t,"assignmentId"),r=p(n,"contactId"),o=p(e,"companyId");return s.map(g(i,r,o))},_=async s=>{const[t,n,e,i]=await Promise.all([A("assignments",{assignmentId:s}),M("assignment_responsible_contacts",{assignmentId:s}),a("SELECT * FROM contacts"),a("SELECT * FROM companies")]),r=l(n,"assignmentId"),o=p(e,"contactId"),m=p(i,"companyId");return g(r,o,m)(t)},T=async s=>{const t=await w("assignments",u(s,["assignmentName","externalContactId","companyId","relevantFiles","fee","type","status"]));return await b({...s,...t}),t},q=async s=>{await I("assignments",u(s,["assignmentName","externalContactId","companyId","relevantFiles","fee","type","status"]),u(s,["assignmentId"])),await R(s)},Q=async({assignmentId:s})=>{await d("assignments",{assignmentId:s}),await f({assignmentId:s})};function g(s,t,n){return e=>{const o=(s.get(e.assignmentId)||[]).map(c=>c.contactId).map(c=>t.get(c)).filter(c=>!!c),m=t.get(e.externalContactId),C=n.get(e.companyId);return{...e,responsibleContacts:o,externalContact:m,company:C}}}const F=async()=>(await a("SELECT DISTINCT status FROM assignments")).map(({status:t})=>t).filter(Boolean),b=async({assignmentId:s,responsibleContacts:t})=>{!s||!t||await E("assignment_responsible_contacts",t.map(({contactId:n})=>({assignmentId:s,contactId:n})))},R=async s=>{await f(s),await b(s)},f=async({assignmentId:s})=>{s&&await d("assignment_responsible_contacts",{assignmentId:s})},D=()=>y({queryKey:["assignments"],queryFn:S}),x=s=>y({queryKey:["assignment",s],queryFn:()=>_(s),enabled:!!s}),h=()=>y({queryKey:["assignmentStatuses"],queryFn:F});export{x as a,h as b,T as c,q as d,Q as e,D as u};
//# sourceMappingURL=useAssignmentsQueries-DGTiaBcs.js.map