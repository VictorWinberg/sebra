import{E as t,H as o,v as i,w as y,t as c,x as u,y as C,A as l,aB as b,I as r,X as m}from"./index-DEXIwwaE.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new a.Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="e2694675-c990-42fa-93a3-0a55ba32eb93",a._sentryDebugIdIdentifier="sentry-dbid-e2694675-c990-42fa-93a3-0a55ba32eb93")}catch{}})();const g=()=>t(o(`
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
    `))(),f=a=>t(o(`
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
    `))({id:a.id}),Q=a=>t(o(`
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
    `))({id:a,data:i(e,["companyName","address","industry","phone","email","website","organizationNumber"])}),q=({id:a})=>t(o(`
      mutation DeleteCompany($id: String!) {
        deleteCompany(id: $id) {
          id
        }
      }
    `))({id:a}),w=async()=>({Companies:{docs:await l("SELECT * FROM companies ORDER BY company_name")}}),N=async({id:a})=>({Company:await b("companies",{id:a})}),h=async a=>{const e=i({...a,id:y()},["id","companyName","address","industry","phone","email","website","organizationNumber"]);return{createCompany:await c("companies",e)}},D=async({id:a,...e})=>{const n=i(e,["companyName","address","industry","phone","email","website","organizationNumber"]);return{updateCompany:await u("companies",n,{id:a})}},G=async({id:a})=>({deleteCompany:await C("companies",{id:a})}),z=()=>{const[{isDemo:a}]=r(),e=a?w:g;return m({queryKey:["companies"],queryFn:()=>e(),select:n=>{var s,d;return((d=(s=n.Companies)==null?void 0:s.docs)==null?void 0:d.filter(p=>!!p))||[]}})},A=a=>{const[{isDemo:e}]=r(),n=e?N:f;return m({queryKey:["company",a],queryFn:()=>n({id:a}),select:s=>s.Company,enabled:!!a})};export{A as a,Q as b,h as c,D as d,$ as e,G as f,q as g,z as u};
//# sourceMappingURL=useCompaniesQueries-CL33zmna.js.map
