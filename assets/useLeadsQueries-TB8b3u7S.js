import{H as o,I as r,w as c,x as p,v as u,y as l,z as y,E as m,D as i,J as L,Y as g}from"./index-ssZ8y-DW.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="1f5fa045-aed5-47d8-affc-97ad092251ae",e._sentryDebugIdIdentifier="sentry-dbid-1f5fa045-aed5-47d8-affc-97ad092251ae")}catch{}})();const f=()=>o(r(`
      query GetLeads {
        Leads(sort: "rank") {
          docs {
            id
            leadTitle
            description
            stage
            rank
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

            contact {
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

            assignment {
              id
              assignmentName
              fee
              status
              type
              createdAt
              updatedAt
            }
          }
        }
      }
    `))(),A=e=>{var a,n,t;return o(r(`
      mutation CreateLead($data: mutationLeadInput!) {
        createLead(data: $data) {
          id
        }
      }
    `))({data:c({...e,company:(a=e.company)==null?void 0:a.id,contact:(n=e.contact)==null?void 0:n.id,assignment:(t=e.assignment)==null?void 0:t.id},["leadTitle","description","stage","rank","company","contact","assignment"])})},D=({id:e,...a})=>{var n,t,s;return o(r(`
      mutation UpdateLead($id: String!, $data: mutationLeadUpdateInput!) {
        updateLead(id: $id, data: $data) {
          id
        }
      }
    `))({id:e,data:c({...a,company:(n=a.company)==null?void 0:n.id,contact:(t=a.contact)==null?void 0:t.id,assignment:(s=a.assignment)==null?void 0:s.id},["leadTitle","description","stage","rank","company","contact","assignment"])})},T=({id:e})=>o(r(`
      mutation DeleteLead($id: String!) {
        deleteLead(id: $id) {
          id
        }
      }
    `))({id:e}),I=["Intresse","Pitch","Affär","Uppföljning"],w=async()=>{const e=m(await i("SELECT * FROM assignments"),"id"),a=m(await i("SELECT * FROM contacts"),"id"),n=m(await i("SELECT * FROM companies"),"id");return{Leads:{docs:(await i("SELECT * FROM leads ORDER BY rank")).map(E(e,a,n))}}},k=async e=>{var t,s,d;const a=c({...e,id:p(),contact:(t=e.contact)==null?void 0:t.id,company:(s=e.company)==null?void 0:s.id,assignment:(d=e.assignment)==null?void 0:d.id},["id","leadTitle","description","stage","rank","contact","company","assignment"]);return{createLead:await u("leads",a)}},Q=async e=>{var t,s,d;const a=c({...e,contact:(t=e.contact)==null?void 0:t.id,company:(s=e.company)==null?void 0:s.id,assignment:(d=e.assignment)==null?void 0:d.id},["id","leadTitle","description","stage","rank","contact","company","assignment"]);return{updateLead:await l("leads",a,c(e,["id"]))}},S=async({id:e})=>(await y("leads",{id:e}),{deleteLead:{id:e}});function E(e,a,n){return t=>({...t,assignment:e.get(t.assignment||""),contact:a.get(t.contact||""),company:n.get(t.company||"")})}const $=()=>{const a=L()?w:f;return g({queryKey:["leads"],queryFn:()=>a(),select:n=>{var t,s;return((s=(t=n.Leads)==null?void 0:t.docs)==null?void 0:s.filter(d=>!!d))||[]}})};export{I as L,A as a,Q as b,k as c,D as d,S as e,T as f,$ as u};
//# sourceMappingURL=useLeadsQueries-TB8b3u7S.js.map
