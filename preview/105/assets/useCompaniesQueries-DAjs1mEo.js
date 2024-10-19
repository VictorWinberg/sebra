import{s as t,t as o,v as y,m as u,n as c,o as C,q as l,an as f,w as r,I as m}from"./index-8MMrl1Jf.js";import{p as i}from"./SebraForm-BJUg38Rw.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new a.Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="29bf222a-5a03-4688-a4df-aa5d040f3e0f",a._sentryDebugIdIdentifier="sentry-dbid-29bf222a-5a03-4688-a4df-aa5d040f3e0f")}catch{}})();const b=()=>t(o(`
      query GetCompanies {
        Companies(sort: "companyName") {
          docs {
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
    `))(),g=a=>t(o(`
      query GetCompany($id: String!) {
        Company(id: $id) {
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
    `))({id:a.id}),q=a=>t(o(`
      mutation CreateCompany($data: mutationCompanyInput!) {
        createCompany(data: $data) {
          id
        }
      }
    `))({data:i(a,["companyName","address","industry","phone","email","website","organizationNumber"])}),$=({id:a,...e})=>t(o(`
      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {
        updateCompany(id: $id, data: $data) {
          id
        }
      }
    `))({id:a,data:i(e,["companyName","address","industry","phone","email","website","organizationNumber"])}),h=({id:a})=>t(o(`
      mutation DeleteCompany($id: String!) {
        deleteCompany(id: $id) {
          id
        }
      }
    `))({id:a}),w=async()=>({Companies:{docs:await l("SELECT * FROM companies ORDER BY company_name")}}),N=async({id:a})=>({Company:await f("companies",{id:a})}),G=async a=>{const e=i({...a,id:y()},["id","companyName","address","industry","phone","email","website","organizationNumber"]);return{createCompany:await u("companies",e)}},z=async({id:a,...e})=>{const n=i(e,["companyName","address","industry","phone","email","website","organizationNumber"]);return{updateCompany:await c("companies",n,{id:a})}},D=async({id:a})=>({deleteCompany:await C("companies",{id:a})}),I=()=>{const{data:a}=r(),e=a?b:w;return m({queryKey:["companies"],queryFn:()=>e(),select:n=>{var s,d;return((d=(s=n.Companies)==null?void 0:s.docs)==null?void 0:d.filter(p=>!!p))||[]}})},A=a=>{const{data:e}=r(),n=e?g:N;return m({queryKey:["company",a],queryFn:()=>n({id:a}),select:s=>s.Company,enabled:!!a})};export{A as a,G as b,q as c,$ as d,z as e,h as f,D as g,I as u};
//# sourceMappingURL=useCompaniesQueries-DAjs1mEo.js.map
