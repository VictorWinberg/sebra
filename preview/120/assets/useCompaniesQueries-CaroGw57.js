import{H as t,I as o,w as i,x as y,v as c,y as u,z as C,D as b,aC as l,J as r,Y as m}from"./index-D5HSxLJv.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="dacd68ed-0b6b-4372-995f-2b90b939b9a7",e._sentryDebugIdIdentifier="sentry-dbid-dacd68ed-0b6b-4372-995f-2b90b939b9a7")}catch{}})();const g=()=>t(o(`
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
    `))({id:e.id}),L=e=>t(o(`
      mutation CreateCompany($data: mutationCompanyInput!) {
        createCompany(data: $data) {
          id
        }
      }
    `))({data:i(e,["companyName","address","industry","phone","email","website","organizationNumber"])}),Q=({id:e,...a})=>t(o(`
      mutation UpdateCompany($id: String!, $data: mutationCompanyUpdateInput!) {
        updateCompany(id: $id, data: $data) {
          id
        }
      }
    `))({id:e,data:i(a,["companyName","address","industry","phone","email","website","organizationNumber"])}),$=({id:e})=>t(o(`
      mutation DeleteCompany($id: String!) {
        deleteCompany(id: $id) {
          id
        }
      }
    `))({id:e}),w=async()=>({Companies:{docs:await b("SELECT * FROM companies ORDER BY company_name")}}),N=async({id:e})=>({Company:await l("companies",{id:e})}),q=async e=>{const a=i({...e,id:y()},["id","companyName","address","industry","phone","email","website","organizationNumber"]);return{createCompany:await c("companies",a)}},h=async({id:e,...a})=>{const n=i(a,["companyName","address","industry","phone","email","website","organizationNumber"]);return{updateCompany:await u("companies",n,{id:e})}},G=async({id:e})=>({deleteCompany:await C("companies",{id:e})}),z=()=>{const a=r()?w:g;return m({queryKey:["companies"],queryFn:()=>a(),select:n=>{var s,d;return((d=(s=n.Companies)==null?void 0:s.docs)==null?void 0:d.filter(p=>!!p))||[]}})},I=e=>{const n=r()?N:f;return m({queryKey:["company",e],queryFn:()=>n({id:e}),select:s=>s.Company,enabled:!!e})};export{I as a,L as b,q as c,h as d,Q as e,G as f,$ as g,z as u};
//# sourceMappingURL=useCompaniesQueries-CaroGw57.js.map
