import{W as d,X as p,K as r,M as w,J as L,N as x,Q as l,R as N,U as c,aL as u,V as g,aM as E,aj as Q,Y as y,a6 as A}from"./index-BeB6rOp5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="103808f2-08fa-41c1-906a-a9246da6d436",t._sentryDebugIdIdentifier="sentry-dbid-103808f2-08fa-41c1-906a-a9246da6d436")}catch{}})();const M=()=>d(p(`
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
    `))(),_=t=>d(p(`
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
    `))({id:t}),R=async()=>{const[t,e,s,n]=await Promise.all([c("SELECT * FROM assignments ORDER BY assignment_name"),c("SELECT * FROM assignment_responsible_contacts"),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),a=u(e,"assignmentId"),o=g(s,"id"),m=g(n,"id");return{Assignments:{docs:t.map(C(a,o,m))}}},D=async({id:t})=>{const[e,s,n,a]=await Promise.all([E("assignments",{id:t}),Q("assignment_responsible_contacts",{assignmentId:t}),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),o=u(s,"assignmentId"),m=g(n,"id"),i=g(a,"id");return{Assignment:C(o,m,i)(e)}},S=async t=>{var n,a;const e=r({...t,id:w(),externalContact:(n=t.externalContact)==null?void 0:n.id,company:(a=t.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),s=await L("assignments",e);return await b({...t,id:s.id}),{createAssignment:s}},h=async t=>{var n,a;const e=r({...t,externalContact:(n=t.externalContact)==null?void 0:n.id,company:(a=t.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),s=await x("assignments",e,r(t,["id"]));return await I(t),{updateAssignment:s}},G=async({id:t})=>(await l("assignments",{id:t}),await f({id:t}),{deleteAssignment:{id:t}});function C(t,e,s){return n=>{const a=(t.get(n.id)||[]).map(i=>i.contactId).map(i=>e.get(i)).filter(i=>!!i).map(i=>({...i,company:s.get(i.company||"")})),[o]=[e.get(n.externalContact)].map(i=>i?{...i,company:s.get(i.company||"")}:void 0),m=s.get(n.company||"");return{...n,responsibleContacts:a,externalContact:o,company:m}}}const b=async({id:t,responsibleContacts:e})=>{!t||!e||await N("assignment_responsible_contacts",e.map(({id:s})=>({assignmentId:t,contactId:s})))},I=async t=>{await f(t),await b(t)},f=async({id:t})=>{t&&await l("assignment_responsible_contacts",{assignmentId:t})},O=()=>{const e=y()?R:M;return A({queryKey:["assignments"],queryFn:()=>e(),select:s=>{var n,a;return((a=(n=s.Assignments)==null?void 0:n.docs)==null?void 0:a.filter(o=>!!o))||[]}})},j=t=>{const s=y()?D:_;return A({queryKey:["assignment",t],queryFn:()=>s({id:t}),select:n=>n.Assignment,enabled:!!t})};export{j as a,$ as b,S as c,h as d,q as e,G as f,F as g,O as u};
//# sourceMappingURL=useAssignmentsQueries-D59HGoLv.js.map
