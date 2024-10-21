import{s as d,t as p,v as x,m as N,n as E,o as u,p as M,q as i,ao as Q,$ as _,w as y,I as A}from"./index-DqpsNWba.js";import{p as m,g as b,t as g}from"./SebraForm-B-ZBgyul.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="976bddc6-2622-4a74-bee0-6680641de896",t._sentryDebugIdIdentifier="sentry-dbid-976bddc6-2622-4a74-bee0-6680641de896")}catch{}})();const I=()=>d(p(`
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
    `))({id:t.id}),h=t=>{var e,n;return d(p(`
      mutation CreateAssignment($data: mutationAssignmentInput!) {
        createAssignment(data: $data) {
          id
        }
      }
    `))({data:m({...t,externalContact:(e=t.externalContact)==null?void 0:e.id,company:(n=t.company)==null?void 0:n.id,responsibleContacts:(t.responsibleContacts||[]).map(s=>s.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},D=({id:t,...e})=>{var n,s;return d(p(`
      mutation UpdateAssignment($id: String!, $data: mutationAssignmentUpdateInput!) {
        updateAssignment(id: $id, data: $data) {
          id
        }
      }
    `))({id:t,data:m({...e,externalContact:(n=e.externalContact)==null?void 0:n.id,company:(s=e.company)==null?void 0:s.id,responsibleContacts:(e.responsibleContacts||[]).map(a=>a.id)},["assignmentName","fee","status","type","externalContact","company","responsibleContacts"])})},G=({id:t})=>d(p(`
      mutation DeleteAssignment($id: String!) {
        deleteAssignment(id: $id) {
          id
        }
      }
    `))({id:t}),$=async()=>{const[t,e,n,s]=await Promise.all([i("SELECT * FROM assignments ORDER BY assignment_name"),i("SELECT * FROM assignment_responsible_contacts"),i("SELECT * FROM contacts"),i("SELECT * FROM companies")]),a=b(e,"assignmentId"),o=g(n,"id"),c=g(s,"id");return{Assignments:{docs:t.map(C(a,o,c))}}},q=async({id:t})=>{const[e,n,s,a]=await Promise.all([Q("assignments",{id:t}),_("assignment_responsible_contacts",{assignmentId:t}),i("SELECT * FROM contacts"),i("SELECT * FROM companies")]),o=b(n,"assignmentId"),c=g(s,"id"),l=g(a,"id");return{Assignment:C(o,c,l)(e)}},O=async t=>{var s,a;const e=m({...t,id:x(),externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["id","assignmentName","externalContact","company","fee","type","status"]),n=await N("assignments",e);return await f({...t,id:n.id}),{createAssignment:n}},j=async t=>{var s,a;const e=m({...t,externalContact:(s=t.externalContact)==null?void 0:s.id,company:(a=t.company)==null?void 0:a.id},["assignmentName","externalContact","company","fee","type","status"]),n=await E("assignments",e,m(t,["id"]));return await S(t),{updateAssignment:n}},v=async({id:t})=>(await u("assignments",{id:t}),await w({id:t}),{deleteAssignment:{id:t}});function C(t,e,n){return s=>{const c=(t.get(s.id)||[]).map(r=>r.contactId).map(r=>e.get(r)).filter(r=>!!r),l=e.get(s.externalContact),L=n.get(s.company||"");return{...s,responsibleContacts:c,externalContact:l,company:L}}}const f=async({id:t,responsibleContacts:e})=>{!t||!e||await M("assignment_responsible_contacts",e.map(({id:n})=>({assignmentId:t,contactId:n})))},S=async t=>{await w(t),await f(t)},w=async({id:t})=>{t&&await u("assignment_responsible_contacts",{assignmentId:t})},k=()=>{const[{isDemo:t}]=y(),e=t?$:I;return A({queryKey:["assignments"],queryFn:()=>e(),select:n=>{var s,a;return((a=(s=n.Assignments)==null?void 0:s.docs)==null?void 0:a.filter(o=>!!o))||[]}})},z=t=>{const[{isDemo:e}]=y(),n=e?q:R;return A({queryKey:["assignment",t],queryFn:()=>n({id:t}),select:s=>s.Assignment,enabled:!!t})};export{z as a,h as b,O as c,j as d,D as e,v as f,G as g,k as u};
//# sourceMappingURL=useAssignmentsQueries-CNIDoUmh.js.map
