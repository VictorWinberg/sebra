import{E as d,H as p,v as m,w,t as x,x as L,y as l,z as E,A as c,aA as u,D as g,aB as N,a7 as Q,I as y,X as A}from"./index-DEXIwwaE.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9d90e25e-8433-41bc-b42b-23ee76047745",e._sentryDebugIdIdentifier="sentry-dbid-9d90e25e-8433-41bc-b42b-23ee76047745")}catch{}})();const _=()=>d(p(`
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
    `))({id:e.id}),$=e=>{var t,n;return d(p(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `))({data:m({...e,externalContact:(t=e.externalContact)==null?void 0:t.id,company:(n=e.company)==null?void 0:n.id,responsibleContacts:(e.responsibleContacts||[]).map(s=>s.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},q=({id:e,...t})=>{var n,s;return d(p(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `))({id:e,data:m({...t,externalContact:(n=t.externalContact)==null?void 0:n.id,company:(s=t.company)==null?void 0:s.id,responsibleContacts:(t.responsibleContacts||[]).map(a=>a.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},D=({id:e})=>d(p(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `))({id:e}),R=async()=>{const[e,t,n,s]=await Promise.all([c("SELECT * FROM assignments ORDER BY assignment_name"),c("SELECT * FROM assignment_responsible_contacts"),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),a=u(t,"assignmentId"),o=g(n,"id"),r=g(s,"id");return{Assignments:{docs:e.map(b(a,o,r))}}},I=async({id:e})=>{const[t,n,s,a]=await Promise.all([N("assignments",{id:e}),Q("assignment_responsible_contacts",{assignmentId:e}),c("SELECT * FROM contacts"),c("SELECT * FROM companies")]),o=u(n,"assignmentId"),r=g(s,"id"),i=g(a,"id");return{Assignment:b(o,r,i)(t)}},F=async e=>{var s,a;const t=m({...e,id:w(),externalContact:(s=e.externalContact)==null?void 0:s.id,company:(a=e.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),n=await x("assignments",t);return await C({...e,id:n.id}),{createAssignment:n}},h=async e=>{var s,a;const t=m({...e,externalContact:(s=e.externalContact)==null?void 0:s.id,company:(a=e.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),n=await L("assignments",t,m(e,["id"]));return await S(e),{updateAssignment:n}},G=async({id:e})=>(await l("assignments",{id:e}),await f({id:e}),{deleteAssignment:{id:e}});function b(e,t,n){return s=>{const a=(e.get(s.id)||[]).map(i=>i.contactId).map(i=>t.get(i)).filter(i=>!!i).map(i=>({...i,company:n.get(i.company||"")})),[o]=[t.get(s.externalContact)].map(i=>i?{...i,company:n.get(i.company||"")}:void 0),r=n.get(s.company||"");return{...s,responsibleContacts:a,externalContact:o,company:r}}}const C=async({id:e,responsibleContacts:t})=>{!e||!t||await E("assignment_responsible_contacts",t.map(({id:n})=>({assignmentId:e,contactId:n})))},S=async e=>{await f(e),await C(e)},f=async({id:e})=>{e&&await l("assignment_responsible_contacts",{assignmentId:e})},O=()=>{const[{isDemo:e}]=y(),t=e?R:_;return A({queryKey:["assignments"],queryFn:()=>t(),select:n=>{var s,a;return((a=(s=n.Assignments)==null?void 0:s.docs)==null?void 0:a.filter(o=>!!o))||[]}})},j=e=>{const[{isDemo:t}]=y(),n=t?I:M;return A({queryKey:["assignment",e],queryFn:()=>n({id:e}),select:s=>s.Assignment,enabled:!!e})};export{j as a,$ as b,F as c,h as d,q as e,G as f,D as g,O as u};
//# sourceMappingURL=useAssignmentsQueries-BCM1WD0e.js.map
