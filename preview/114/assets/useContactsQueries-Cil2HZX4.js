import{x as s,y,w as l,z as C,A as b,E as i,H as f,aB as r,I as o,J as c,K as m,Y as u}from"./index-CtXaHwDD.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="1c314f33-4f78-4fc0-bd34-e2db2616d494",t._sentryDebugIdIdentifier="sentry-dbid-1c314f33-4f78-4fc0-bd34-e2db2616d494")}catch{}})();const g=async()=>{const t=await i("SELECT * FROM contacts ORDER BY contact_name"),a=f(await i("SELECT * FROM companies"),"id");return{Contacts:{docs:t.map(n=>({...n,company:a.get(n.company||"")}))}}},w=async({id:t})=>{const a=await r("contacts",{id:t}),e=await r("companies",{id:a.company});return{Contact:{...a,company:e}}},Q=async t=>{var e;const a=s({...t,id:y(),company:(e=t.company)==null?void 0:e.id},["id","contactName","email","phone","jobTitle","company","address","notes"]);return{createContact:await l("contacts",a)}},h=async({id:t,...a})=>{var n;const e=s({...a,company:(n=a.company)==null?void 0:n.id},["contactName","email","phone","jobTitle","company","address","notes"]);return{updateContact:await C("contacts",e,{id:t})}},$=async({id:t})=>({deleteContact:await b("contacts",{id:t})}),L=()=>o(c(`
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
    `))(),D=({id:t})=>o(c(`
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
    `))({data:{...s(t,["contactName","email","phone","jobTitle","address","notes"]),company:((a=t.company)==null?void 0:a.id)??null}})},A=t=>{var a;return o(c(`
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
    `))({id:t.id}),T=()=>{const a=m()?g:L;return u({queryKey:["contacts"],queryFn:()=>a(),select:e=>{var n,d;return((d=(n=e.Contacts)==null?void 0:n.docs)==null?void 0:d.filter(p=>!!p))||[]}})},E=t=>{const e=m()?w:D;return u({queryKey:["contact",t],queryFn:()=>e({id:t}),select:n=>n.Contact,enabled:!!t})};export{E as a,q as b,Q as c,h as d,A as e,$ as f,G as g,T as u};
//# sourceMappingURL=useContactsQueries-Cil2HZX4.js.map
