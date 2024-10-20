import{v as y,m as l,n as C,o as b,q as i,an as r,s as o,t as c,w as u,I as p}from"./index-BIIVJD9F.js";import{p as s,t as f}from"./SebraForm-C2U723kH.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="10baa736-4ac9-41c2-9bb7-f7275851e8bb",t._sentryDebugIdIdentifier="sentry-dbid-10baa736-4ac9-41c2-9bb7-f7275851e8bb")}catch{}})();const g=async()=>{const t=await i("SELECT * FROM contacts ORDER BY contact_name"),a=f(await i("SELECT * FROM companies"),"id");return{Contacts:{docs:t.map(n=>({...n,company:a.get(n.company||"")}))}}},w=async({id:t})=>{const a=await r("contacts",{id:t}),e=await r("companies",{id:a.company});return{Contact:{...a,company:e}}},q=async t=>{var e;const a=s({...t,id:y(),company:(e=t.company)==null?void 0:e.id},["id","contactName","email","phone","jobTitle","company","address","notes"]);return{createContact:await l("contacts",a)}},$=async({id:t,...a})=>{var n;const e=s({...a,company:(n=a.company)==null?void 0:n.id},["contactName","email","phone","jobTitle","company","address","notes"]);return{updateContact:await C("contacts",e,{id:t})}},A=async({id:t})=>({deleteContact:await b("contacts",{id:t})}),L=()=>o(c(`
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
    `))(),h=({id:t})=>o(c(`
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
    `))({id:t}),G=t=>{var a;return o(c(`
      mutation CreateContact($data: mutationContactInput!) {
        createContact(data: $data) {
          id
        }
      }
    `))({data:{...s(t,["contactName","email","phone","jobTitle","address","notes"]),company:((a=t.company)==null?void 0:a.id)??null}})},T=t=>{var a;return o(c(`
      mutation UpdateContact($id: String!, $data: mutationContactUpdateInput!) {
        updateContact(id: $id, data: $data) {
          id
        }
      }
    `))({id:t.id,data:{...s(t,["contactName","email","phone","jobTitle","address","notes"]),company:((a=t.company)==null?void 0:a.id)??null}})},j=t=>o(c(`
      mutation DeleteContact($id: String!) {
        deleteContact(id: $id) {
          id
        }
      }
    `))({id:t.id}),D=()=>{const{data:t}=u(),a=t?L:g;return p({queryKey:["contacts"],queryFn:()=>a(),select:e=>{var n,d;return((d=(n=e.Contacts)==null?void 0:n.docs)==null?void 0:d.filter(m=>!!m))||[]}})},E=t=>{const{data:a}=u(),e=a?h:w;return p({queryKey:["contact",t],queryFn:()=>e({id:t}),select:n=>n.Contact,enabled:!!t})};export{E as a,q as b,G as c,T as d,$ as e,j as f,A as g,D as u};
//# sourceMappingURL=useContactsQueries-F0B5QZNC.js.map
