import{Y as d,Z as p,N as r,Q as w,M as x,R as L,U as l,V as N,W as c,aN as u,X as g,aO as E,al as Q,$ as y,a8 as A}from"./index-DMW7B888.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="56d212ce-f98e-458a-a7f0-002a79b604bd",e._sentryDebugIdIdentifier="sentry-dbid-56d212ce-f98e-458a-a7f0-002a79b604bd")}catch{}})();const _=()=>d(p(`
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
    `))(),M=e=>d(p(`
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
    `))({id:e.id}),T=e=>{var t,s;return d(p(`
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
    `))({id:e}),R=async()=>{const[e,t,s,n]=await Promise.all([c("SELECT * FROM assignments ORDER BY assignment_name"),c("SELECT * FROM assignment_responsible_contacts"),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),a=u(t,"assignmentId"),o=g(s,"id"),m=g(n,"id");return{Assignments:{docs:e.map(b(a,o,m))}}},D=async({id:e})=>{const[t,s,n,a]=await Promise.all([E("assignments",{id:e}),Q("assignment_responsible_contacts",{assignmentId:e}),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),o=u(s,"assignmentId"),m=g(n,"id"),i=g(a,"id");return{Assignment:b(o,m,i)(t)}},O=async e=>{var n,a;const t=r({...e,id:w(),externalContact:(n=e.externalContact)==null?void 0:n.id,company:(a=e.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),s=await x("assignments",t);return await C({...e,id:s.id}),{createAssignment:s}},S=async e=>{var n,a;const t=r({...e,externalContact:(n=e.externalContact)==null?void 0:n.id,company:(a=e.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),s=await L("assignments",t,r(e,["id"]));return await $(e),{updateAssignment:s}},h=async({id:e})=>(await l("assignments",{id:e}),await f({id:e}),{deleteAssignment:{id:e}});function b(e,t,s){return n=>{const a=(e.get(n.id)||[]).map(i=>i.contactId).map(i=>t.get(i)).filter(i=>!!i).map(i=>({...i,company:s.get(i.company||"")})),[o]=[t.get(n.externalContact)].map(i=>i?{...i,company:s.get(i.company||"")}:void 0),m=s.get(n.company||"");return{...n,responsibleContacts:a,externalContact:o,company:m}}}const C=async({id:e,responsibleContacts:t})=>{!e||!t||await N("assignment_responsible_contacts",t.map(({id:s})=>({assignmentId:e,contactId:s})))},$=async e=>{await f(e),await C(e)},f=async({id:e})=>{e&&await l("assignment_responsible_contacts",{assignmentId:e})},G=()=>{const t=y()?R:_;return A({queryKey:["assignments"],queryFn:()=>t(),select:s=>{var n,a;return((a=(n=s.Assignments)==null?void 0:n.docs)==null?void 0:a.filter(o=>!!o))||[]}})},j=e=>{const s=y()?D:M;return A({queryKey:["assignment",e],queryFn:()=>s({id:e}),select:n=>n.Assignment,enabled:!!e})};export{j as a,T as b,O as c,S as d,q as e,h as f,F as g,G as u};
//# sourceMappingURL=useAssignmentsQueries-C-iCffWF.js.map
