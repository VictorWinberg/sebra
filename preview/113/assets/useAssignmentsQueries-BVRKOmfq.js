import{E as d,H as p,v as m,w as x,t as E,x as N,y as u,z as M,A as o,az as y,D as g,aA as Q,a6 as _,I as A,X as b}from"./index-ButF0YW6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="8543549d-982f-4eb5-b28c-401adcc029d3",t._sentryDebugIdIdentifier="sentry-dbid-8543549d-982f-4eb5-b28c-401adcc029d3")}catch{}})();const I=()=>d(p(`
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
    `))(),R=t=>d(p(`
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
    `))({id:t.id}),D=t=>{var e,n;return d(p(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `))({data:m({...t,externalContact:(e=t.externalContact)==null?void 0:e.id,company:(n=t.company)==null?void 0:n.id,responsibleContacts:(t.responsibleContacts||[]).map(s=>s.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},F=({id:t,...e})=>{var n,s;return d(p(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `))({id:t,data:m({...e,externalContact:(n=e.externalContact)==null?void 0:n.id,company:(s=e.company)==null?void 0:s.id,responsibleContacts:(e.responsibleContacts||[]).map(a=>a.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},h=({id:t})=>d(p(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `))({id:t}),S=async()=>{const[t,e,n,s]=await Promise.all([o("SELECT * FROM assignments ORDER BY assignment_name"),o("SELECT * FROM assignment_responsible_contacts"),o("SELECT * FROM contacts"),o("SELECT * FROM companies")]),a=y(e,"assignmentId"),i=g(n,"id"),c=g(s,"id");return{Assignments:{docs:t.map(C(a,i,c))}}},T=async({id:t})=>{const[e,n,s,a]=await Promise.all([Q("assignments",{id:t}),_("assignment_responsible_contacts",{assignmentId:t}),o("SELECT * FROM contacts"),o("SELECT * FROM companies")]),i=y(n,"assignmentId"),c=g(s,"id"),l=g(a,"id");return{Assignment:C(i,c,l)(e)}},G=async t=>{var s,a;const e=m({...t,id:x(),externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),n=await E("assignments",e);return await f({...t,id:n.id}),{createAssignment:n}},O=async t=>{var s,a;const e=m({...t,externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),n=await N("assignments",e,m(t,["id"]));return await $(t),{updateAssignment:n}},j=async({id:t})=>(await u("assignments",{id:t}),await w({id:t}),{deleteAssignment:{id:t}});function C(t,e,n){return s=>{const c=(t.get(s.id)||[]).map(r=>r.contactId).map(r=>e.get(r)).filter(r=>!!r),l=e.get(s.externalContact),L=n.get(s.company||"");return{...s,responsibleContacts:c,externalContact:l,company:L}}}const f=async({id:t,responsibleContacts:e})=>{!t||!e||await M("assignment_responsible_contacts",e.map(({id:n})=>({assignmentId:t,contactId:n})))},$=async t=>{await w(t),await f(t)},w=async({id:t})=>{t&&await u("assignment_responsible_contacts",{assignmentId:t})},z=()=>{const[{isDemo:t}]=A(),e=t?S:I;return b({queryKey:["assignments"],queryFn:()=>e(),select:n=>{var s,a;return((a=(s=n.Assignments)==null?void 0:s.docs)==null?void 0:a.filter(i=>!!i))||[]}})},v=t=>{const[{isDemo:e}]=A(),n=e?T:R;return b({queryKey:["assignment",t],queryFn:()=>n({id:t}),select:s=>s.Assignment,enabled:!!t})};export{v as a,D as b,G as c,O as d,F as e,j as f,h as g,z as u};
//# sourceMappingURL=useAssignmentsQueries-BVRKOmfq.js.map
