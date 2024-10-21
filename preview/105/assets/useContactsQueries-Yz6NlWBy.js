import{v as y,m as l,n as C,o as b,q as i,ao as r,s as o,t as c,w as p,I as m}from"./index-DqpsNWba.js";import{p as s,t as f}from"./SebraForm-B-ZBgyul.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="67b75c65-d318-46a3-bd0a-db16251c64cf",t._sentryDebugIdIdentifier="sentry-dbid-67b75c65-d318-46a3-bd0a-db16251c64cf")}catch{}})();const g=async()=>{const t=await i("SELECT * FROM contacts ORDER BY contact_name"),a=f(await i("SELECT * FROM companies"),"id");return{Contacts:{docs:t.map(n=>({...n,company:a.get(n.company||"")}))}}},w=async({id:t})=>{const a=await r("contacts",{id:t}),e=await r("companies",{id:a.company});return{Contact:{...a,company:e}}},q=async t=>{var e;const a=s({...t,id:y(),company:(e=t.company)==null?void 0:e.id},["id","contactName","email","phone","jobTitle","company","address","notes"]);return{createContact:await l("contacts",a)}},$=async({id:t,...a})=>{var n;const e=s({...a,company:(n=a.company)==null?void 0:n.id},["contactName","email","phone","jobTitle","company","address","notes"]);return{updateContact:await C("contacts",e,{id:t})}},A=async({id:t})=>({deleteContact:await b("contacts",{id:t})}),L=()=>o(c(`
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
    `))({id:t}),D=t=>{var a;return o(c(`
      mutation CreateContact($data: mutationContactInput!) {
        createContact(data: $data) {
          id
        }
      }
    `))({data:{...s(t,["contactName","email","phone","jobTitle","address","notes"]),company:((a=t.company)==null?void 0:a.id)??null}})},G=t=>{var a;return o(c(`
      mutation UpdateContact($id: String!, $data: mutationContactUpdateInput!) {
        updateContact(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:{...s(t,["contactName","email","phone","jobTitle","address","notes"]),company:((a=t.company)==null?void 0:a.id)??null}})},T=t=>o(c(`
      mutation DeleteContact($id: String!) {
        deleteContact(id: $id) {
          id
        }
      }
    `))({id:t.id}),j=()=>{const[{isDemo:t}]=p(),a=t?g:L;return m({queryKey:["contacts"],queryFn:()=>a(),select:e=>{var n,d;return((d=(n=e.Contacts)==null?void 0:n.docs)==null?void 0:d.filter(u=>!!u))||[]}})},E=t=>{const[{isDemo:a}]=p(),e=a?w:N;return m({queryKey:["contact",t],queryFn:()=>e({id:t}),select:n=>n.Contact,enabled:!!t})};export{E as a,D as b,q as c,$ as d,G as e,A as f,T as g,j as u};
//# sourceMappingURL=useContactsQueries-Yz6NlWBy.js.map
