import{N as s,Q as y,M as l,R as C,U as b,W as i,X as f,aO as r,Y as o,Z as c,$ as m,a8 as u}from"./index-DMW7B888.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="c055dfdd-2646-40f7-a67e-0fda6bab5e88",t._sentryDebugIdIdentifier="sentry-dbid-c055dfdd-2646-40f7-a67e-0fda6bab5e88")}catch{}})();const g=async()=>{const t=await i("SELECT * FROM contacts ORDER BY contact_name"),a=f(await i("SELECT * FROM companies"),"id");return{Contacts:{docs:t.map(n=>({...n,company:a.get(n.company||"")}))}}},w=async({id:t})=>{const a=await r("contacts",{id:t}),e=await r("companies",{id:a.company});return{Contact:{...a,company:e}}},D=async t=>{var e;const a=s({...t,id:y(),company:(e=t.company)==null?void 0:e.id},["id","contactName","email","phone","jobTitle","company","address","notes"]);return{createContact:await l("contacts",a)}},$=async({id:t,...a})=>{var n;const e=s({...a,company:(n=a.company)==null?void 0:n.id},["contactName","email","phone","jobTitle","company","address","notes"]);return{updateContact:await C("contacts",e,{id:t})}},h=async({id:t})=>({deleteContact:await b("contacts",{id:t})}),L=()=>o(c(`
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
    `))(),N=({id:t})=>o(c(`
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
    `))({id:t.id}),T=()=>{const a=m()?g:L;return u({queryKey:["contacts"],queryFn:()=>a(),select:e=>{var n,d;return((d=(n=e.Contacts)==null?void 0:n.docs)==null?void 0:d.filter(p=>!!p))||[]}})},j=t=>{const e=m()?w:N;return u({queryKey:["contact",t],queryFn:()=>e({id:t}),select:n=>n.Contact,enabled:!!t})};export{j as a,q as b,D as c,$ as d,A as e,h as f,G as g,T as u};
//# sourceMappingURL=useContactsQueries-DN1qJYqE.js.map
