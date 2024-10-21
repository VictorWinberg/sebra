import{s as t,t as o,v as y,m as c,n as u,o as C,q as l,ao as b,w as r,I as m}from"./index-DqpsNWba.js";import{p as i}from"./SebraForm-B-ZBgyul.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c2a86413-e71b-480d-a07e-eb0a4e2f4232",e._sentryDebugIdIdentifier="sentry-dbid-c2a86413-e71b-480d-a07e-eb0a4e2f4232")}catch{}})();const g=()=>t(o(`
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
    `))(),f=e=>t(o(`
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
    `))({id:e.id}),q=e=>t(o(`
      mutation CreateCompany($data: mutationCompanyInput!) {
        createCompany(data: $data) {
          id
        }
      }
    `))({data:i(e,["companyName","address","industry","phone","email","website","organizationNumber"])}),$=({id:e,...a})=>t(o(`
      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {
        updateCompany(id: $id, data: $data) {
          id
        }
      }
    `))({id:e,data:i(a,["companyName","address","industry","phone","email","website","organizationNumber"])}),h=({id:e})=>t(o(`
      mutation DeleteCompany($id: String!) {
        deleteCompany(id: $id) {
          id
        }
      }
    `))({id:e}),w=async()=>({Companies:{docs:await l("SELECT * FROM companies ORDER BY company_name")}}),N=async({id:e})=>({Company:await b("companies",{id:e})}),D=async e=>{const a=i({...e,id:y()},["id","companyName","address","industry","phone","email","website","organizationNumber"]);return{createCompany:await c("companies",a)}},G=async({id:e,...a})=>{const n=i(a,["companyName","address","industry","phone","email","website","organizationNumber"]);return{updateCompany:await u("companies",n,{id:e})}},z=async({id:e})=>({deleteCompany:await C("companies",{id:e})}),I=()=>{const[{isDemo:e}]=r(),a=e?w:g;return m({queryKey:["companies"],queryFn:()=>a(),select:n=>{var s,d;return((d=(s=n.Companies)==null?void 0:s.docs)==null?void 0:d.filter(p=>!!p))||[]}})},A=e=>{const[{isDemo:a}]=r(),n=a?N:f;return m({queryKey:["company",e],queryFn:()=>n({id:e}),select:s=>s.Company,enabled:!!e})};export{A as a,q as b,D as c,G as d,$ as e,z as f,h as g,I as u};
//# sourceMappingURL=useCompaniesQueries-C14D3uoL.js.map
