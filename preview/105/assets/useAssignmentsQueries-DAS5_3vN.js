import{s as d,t as p,v as x,m as N,n as E,o as u,p as M,q as o,an as Q,$ as _,w as y,I as A}from"./index-DD4P4jMh.js";import{p as m,g as b,t as g}from"./SebraForm-1SEXVzz2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9511ba89-47b2-41b2-8033-99ca4a758754",t._sentryDebugIdIdentifier="sentry-dbid-9511ba89-47b2-41b2-8033-99ca4a758754")}catch{}})();const I=()=>d(p(`
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
    `))({id:t.id}),S=t=>{var e,n;return d(p(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `))({data:m({...t,externalContact:(e=t.externalContact)==null?void 0:e.id,company:(n=t.company)==null?void 0:n.id,responsibleContacts:(t.responsibleContacts||[]).map(s=>s.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},G=({id:t,...e})=>{var n,s;return d(p(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `))({id:t,data:m({...e,externalContact:(n=e.externalContact)==null?void 0:n.id,company:(s=e.company)==null?void 0:s.id,responsibleContacts:(e.responsibleContacts||[]).map(a=>a.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},O=({id:t})=>d(p(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `))({id:t}),$=async()=>{const[t,e,n,s]=await Promise.all([o("SELECT * FROM assignments ORDER BY assignment_name"),o("SELECT * FROM assignment_responsible_contacts"),o("SELECT * FROM contacts"),o("SELECT * FROM companies")]),a=b(e,"assignmentId"),i=g(n,"id"),c=g(s,"id");return{Assignments:{docs:t.map(C(a,i,c))}}},q=async({id:t})=>{const[e,n,s,a]=await Promise.all([Q("assignments",{id:t}),_("assignment_responsible_contacts",{assignmentId:t}),o("SELECT * FROM contacts"),o("SELECT * FROM companies")]),i=b(n,"assignmentId"),c=g(s,"id"),l=g(a,"id");return{Assignment:C(i,c,l)(e)}},D=async t=>{var s,a;const e=m({...t,id:x(),externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),n=await N("assignments",e);return await f({...t,id:n.id}),{createAssignment:n}},j=async t=>{var s,a;const e=m({...t,externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),n=await E("assignments",e,m(t,["id"]));return await T(t),{updateAssignment:n}},v=async({id:t})=>(await u("assignments",{id:t}),await w({id:t}),{deleteAssignment:{id:t}});function C(t,e,n){return s=>{const c=(t.get(s.id)||[]).map(r=>r.contactId).map(r=>e.get(r)).filter(r=>!!r),l=e.get(s.externalContact),L=n.get(s.company||"");return{...s,responsibleContacts:c,externalContact:l,company:L}}}const f=async({id:t,responsibleContacts:e})=>{!t||!e||await M("assignment_responsible_contacts",e.map(({id:n})=>({assignmentId:t,contactId:n})))},T=async t=>{await w(t),await f(t)},w=async({id:t})=>{t&&await u("assignment_responsible_contacts",{assignmentId:t})},k=()=>{const{data:t}=y(),e=t?I:$;return A({queryKey:["assignments"],queryFn:()=>e(),select:n=>{var s,a;return((a=(s=n.Assignments)==null?void 0:s.docs)==null?void 0:a.filter(i=>!!i))||[]}})},z=t=>{const{data:e}=y(),n=e?R:q;return A({queryKey:["assignment",t],queryFn:()=>n({id:t}),select:s=>s.Assignment,enabled:!!t})};export{z as a,D as b,S as c,G as d,j as e,O as f,v as g,k as u};
//# sourceMappingURL=useAssignmentsQueries-DAS5_3vN.js.map
