import{i,k as c,l as o,q as m,m as a}from"./index-Boa1hFZM.js";import{p as s,u as t,a as r}from"./useSnackbar-B8wmrSka.js";const y=async()=>await m(`
    SELECT
      assignments.*,
      (rp.first_name || ' ' || rp.last_name) AS responsible_person_name,
      rp.email AS responsible_person_email,
      rc.company_name AS responsible_company_name,
      (ecp.first_name || ' ' || ecp.last_name) AS external_contact_person_name,
      ecp.email AS external_contact_person_email,
      ec.company_name AS external_company_name
    FROM assignments
    LEFT JOIN contacts rp ON responsible_person_id = rp.contact_id
    LEFT JOIN contacts ecp ON external_contact_person_id = ecp.contact_id
    LEFT JOIN companies rc ON rp.company_id = rc.company_id
    LEFT JOIN companies ec ON ecp.company_id = ec.company_id
  `),p=async e=>{await i("assignments",s(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]))},u=async e=>{await c("assignments",s(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]),s(e,["assignmentId"]))},l=async({assignmentId:e})=>{await o("assignments",{assignmentId:e})},g=()=>{const e=a(),{showSnackbar:n}=t();return r({mutationFn:p,onSuccess:()=>{e.invalidateQueries({queryKey:["assignments"]}),n("Uppdrag skapat!")}})},S=()=>{const e=a(),{showSnackbar:n}=t();return r({mutationFn:u,onSuccess:()=>{e.invalidateQueries({queryKey:["assignments"]}),n("Uppdrag uppdaterat!")}})},A=()=>{const e=a(),{showSnackbar:n}=t();return r({mutationFn:l,onSuccess:()=>{e.invalidateQueries({queryKey:["assignments"]}),n("Uppdrag borttaget!")}})};export{S as a,A as b,y as f,g as u};
