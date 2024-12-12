import{I as d,J as p,x as r,y as w,w as x,z as L,A as l,D as E,E as c,aA as u,H as g,aB as N,a8 as Q,K as y,Y as A}from"./index-CtXaHwDD.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="237b8c05-26a4-4a42-b766-5051c3d7a23c",t._sentryDebugIdIdentifier="sentry-dbid-237b8c05-26a4-4a42-b766-5051c3d7a23c")}catch{}})();const _=()=>d(p(`
      query GetAssignments {
        Assignments(sort: "assignmentName") {
          docs {
            id
            assignmentName
            fee
            status
            type
            createdAt
            updatedAt

            company {
              id
              companyName
              address
              industry
              phone
              email
              website
              organizationNumber
              createdAt
              updatedAt
            }

            externalContact {
              id
              contactName
              email
              phone
              jobTitle
              address
              notes
              createdAt
              updatedAt
            }

            responsibleContacts {
              id
              contactName
              email
              phone
              jobTitle
              address
              createdAt
              updatedAt
            }
          }
        }
      }
    `))(),D=t=>d(p(`
      query GetAssignment($id: String!) {
        Assignment(id: $id) {
          id
          assignmentName
          fee
          status
          type
          createdAt
          updatedAt

          company {
            id
            companyName
            address
            industry
            phone
            email
            website
            organizationNumber
            createdAt
            updatedAt
          }

          externalContact {
            id
            contactName
            email
            phone
            jobTitle
            address
            notes
            createdAt
            updatedAt
          }

          responsibleContacts {
            id
            contactName
            email
            phone
            jobTitle
            address
            createdAt
            updatedAt
          }
        }
      }
    `))({id:t.id}),$=t=>{var e,s;return d(p(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `))({data:r({...t,externalContact:(e=t.externalContact)==null?void 0:e.id,company:(s=t.company)==null?void 0:s.id,responsibleContacts:(t.responsibleContacts||[]).map(n=>n.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},q=({id:t,...e})=>{var s,n;return d(p(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `))({id:t,data:r({...e,externalContact:(s=e.externalContact)==null?void 0:s.id,company:(n=e.company)==null?void 0:n.id,responsibleContacts:(e.responsibleContacts||[]).map(a=>a.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},F=({id:t})=>d(p(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `))({id:t}),I=async()=>{const[t,e,s,n]=await Promise.all([c("SELECT * FROM assignments ORDER BY assignment_name"),c("SELECT * FROM assignment_responsible_contacts"),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),a=u(e,"assignmentId"),o=g(s,"id"),m=g(n,"id");return{Assignments:{docs:t.map(b(a,o,m))}}},M=async({id:t})=>{const[e,s,n,a]=await Promise.all([N("assignments",{id:t}),Q("assignment_responsible_contacts",{assignmentId:t}),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),o=u(s,"assignmentId"),m=g(n,"id"),i=g(a,"id");return{Assignment:b(o,m,i)(e)}},S=async t=>{var n,a;const e=r({...t,id:w(),externalContact:(n=t.externalContact)==null?void 0:n.id,company:(a=t.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),s=await x("assignments",e);return await C({...t,id:s.id}),{createAssignment:s}},h=async t=>{var n,a;const e=r({...t,externalContact:(n=t.externalContact)==null?void 0:n.id,company:(a=t.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),s=await L("assignments",e,r(t,["id"]));return await R(t),{updateAssignment:s}},G=async({id:t})=>(await l("assignments",{id:t}),await f({id:t}),{deleteAssignment:{id:t}});function b(t,e,s){return n=>{const a=(t.get(n.id)||[]).map(i=>i.contactId).map(i=>e.get(i)).filter(i=>!!i).map(i=>({...i,company:s.get(i.company||"")})),[o]=[e.get(n.externalContact)].map(i=>i?{...i,company:s.get(i.company||"")}:void 0),m=s.get(n.company||"");return{...n,responsibleContacts:a,externalContact:o,company:m}}}const C=async({id:t,responsibleContacts:e})=>{!t||!e||await E("assignment_responsible_contacts",e.map(({id:s})=>({assignmentId:t,contactId:s})))},R=async t=>{await f(t),await C(t)},f=async({id:t})=>{t&&await l("assignment_responsible_contacts",{assignmentId:t})},O=()=>{const e=y()?I:_;return A({queryKey:["assignments"],queryFn:()=>e(),select:s=>{var n,a;return((a=(n=s.Assignments)==null?void 0:n.docs)==null?void 0:a.filter(o=>!!o))||[]}})},j=t=>{const s=y()?M:D;return A({queryKey:["assignment",t],queryFn:()=>s({id:t}),select:n=>n.Assignment,enabled:!!t})};export{j as a,$ as b,S as c,h as d,q as e,G as f,F as g,O as u};
//# sourceMappingURL=useAssignmentsQueries-Ci2WTuQ6.js.map
