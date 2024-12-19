import{H as d,I as p,w as r,x as w,v as x,y as L,z as l,A as E,D as c,aB as u,E as g,aC as N,a8 as Q,J as y,Y as A}from"./index-ssZ8y-DW.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6659f45e-8156-4a5e-9548-9e78caf422b9",e._sentryDebugIdIdentifier="sentry-dbid-6659f45e-8156-4a5e-9548-9e78caf422b9")}catch{}})();const _=()=>d(p(`
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
    `))(),D=e=>d(p(`
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
    `))({id:e.id}),$=e=>{var t,s;return d(p(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `))({data:r({...e,externalContact:(t=e.externalContact)==null?void 0:t.id,company:(s=e.company)==null?void 0:s.id,responsibleContacts:(e.responsibleContacts||[]).map(n=>n.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},q=({id:e,...t})=>{var s,n;return d(p(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `))({id:e,data:r({...t,externalContact:(s=t.externalContact)==null?void 0:s.id,company:(n=t.company)==null?void 0:n.id,responsibleContacts:(t.responsibleContacts||[]).map(a=>a.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},F=({id:e})=>d(p(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `))({id:e}),I=async()=>{const[e,t,s,n]=await Promise.all([c("SELECT * FROM assignments ORDER BY assignment_name"),c("SELECT * FROM assignment_responsible_contacts"),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),a=u(t,"assignmentId"),o=g(s,"id"),m=g(n,"id");return{Assignments:{docs:e.map(C(a,o,m))}}},M=async({id:e})=>{const[t,s,n,a]=await Promise.all([N("assignments",{id:e}),Q("assignment_responsible_contacts",{assignmentId:e}),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),o=u(s,"assignmentId"),m=g(n,"id"),i=g(a,"id");return{Assignment:C(o,m,i)(t)}},S=async e=>{var n,a;const t=r({...e,id:w(),externalContact:(n=e.externalContact)==null?void 0:n.id,company:(a=e.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),s=await x("assignments",t);return await b({...e,id:s.id}),{createAssignment:s}},h=async e=>{var n,a;const t=r({...e,externalContact:(n=e.externalContact)==null?void 0:n.id,company:(a=e.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),s=await L("assignments",t,r(e,["id"]));return await R(e),{updateAssignment:s}},G=async({id:e})=>(await l("assignments",{id:e}),await f({id:e}),{deleteAssignment:{id:e}});function C(e,t,s){return n=>{const a=(e.get(n.id)||[]).map(i=>i.contactId).map(i=>t.get(i)).filter(i=>!!i).map(i=>({...i,company:s.get(i.company||"")})),[o]=[t.get(n.externalContact)].map(i=>i?{...i,company:s.get(i.company||"")}:void 0),m=s.get(n.company||"");return{...n,responsibleContacts:a,externalContact:o,company:m}}}const b=async({id:e,responsibleContacts:t})=>{!e||!t||await E("assignment_responsible_contacts",t.map(({id:s})=>({assignmentId:e,contactId:s})))},R=async e=>{await f(e),await b(e)},f=async({id:e})=>{e&&await l("assignment_responsible_contacts",{assignmentId:e})},O=()=>{const t=y()?I:_;return A({queryKey:["assignments"],queryFn:()=>t(),select:s=>{var n,a;return((a=(n=s.Assignments)==null?void 0:n.docs)==null?void 0:a.filter(o=>!!o))||[]}})},j=e=>{const s=y()?M:D;return A({queryKey:["assignment",e],queryFn:()=>s({id:e}),select:n=>n.Assignment,enabled:!!e})};export{j as a,$ as b,S as c,h as d,q as e,G as f,F as g,O as u};
//# sourceMappingURL=useAssignmentsQueries-BhuTnXQ5.js.map
