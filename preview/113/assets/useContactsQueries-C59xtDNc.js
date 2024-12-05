import{v as s,w as y,t as l,x as C,y as b,A as i,D as f,aA as r,E as o,H as c,I as p,X as u}from"./index-CQXllPov.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="477e2ee2-ba3b-47a4-910f-ebc328f19fcd",t._sentryDebugIdIdentifier="sentry-dbid-477e2ee2-ba3b-47a4-910f-ebc328f19fcd")}catch{}})();const g=async()=>{const t=await i("SELECT * FROM contacts ORDER BY contact_name"),a=f(await i("SELECT * FROM companies"),"id");return{Contacts:{docs:t.map(n=>({...n,company:a.get(n.company||"")}))}}},w=async({id:t})=>{const a=await r("contacts",{id:t}),e=await r("companies",{id:a.company});return{Contact:{...a,company:e}}},Q=async t=>{var e;const a=s({...t,id:y(),company:(e=t.company)==null?void 0:e.id},["id","contactName","email","phone","jobTitle","company","address","notes"]);return{createContact:await l("contacts",a)}},h=async({id:t,...a})=>{var n;const e=s({...a,company:(n=a.company)==null?void 0:n.id},["contactName","email","phone","jobTitle","company","address","notes"]);return{updateContact:await C("contacts",e,{id:t})}},$=async({id:t})=>({deleteContact:await b("contacts",{id:t})}),L=()=>o(c(`
      query GetContacts {
        Contacts(sort: "contactName") {
          docs {
            id
            contactName
            email
            phone
            jobTitle
            address
            notes
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
          }
        }
      }
    `))(),A=({id:t})=>o(c(`
      query GetContact($id: String!) {
        Contact(id: $id) {
          id
          contactName
          email
          phone
          jobTitle
          address
          notes
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
        }
      }
    `))({id:t}),q=t=>{var a;return o(c(`
      mutation CreateContact($data: mutationContactInput!) {
        createContact(data: $data) {
          id
        }
      }
    `))({data:{...s(t,["contactName","email","phone","jobTitle","address","notes"]),company:((a=t.company)==null?void 0:a.id)??null}})},D=t=>{var a;return o(c(`
      mutation UpdateContact($id: String!, $data: mutationContactUpdateInput!) {
        updateContact(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:{...s(t,["contactName","email","phone","jobTitle","address","notes"]),company:((a=t.company)==null?void 0:a.id)??null}})},G=t=>o(c(`
      mutation DeleteContact($id: String!) {
        deleteContact(id: $id) {
          id
        }
      }
    `))({id:t.id}),T=()=>{const[{isDemo:t}]=p(),a=t?g:L;return u({queryKey:["contacts"],queryFn:()=>a(),select:e=>{var n,d;return((d=(n=e.Contacts)==null?void 0:n.docs)==null?void 0:d.filter(m=>!!m))||[]}})},E=t=>{const[{isDemo:a}]=p(),e=a?w:A;return u({queryKey:["contact",t],queryFn:()=>e({id:t}),select:n=>n.Contact,enabled:!!t})};export{E as a,q as b,Q as c,h as d,D as e,$ as f,G as g,T as u};
//# sourceMappingURL=useContactsQueries-C59xtDNc.js.map
