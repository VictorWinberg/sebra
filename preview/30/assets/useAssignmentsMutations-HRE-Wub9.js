import{i as t,k as r,l as i,q as c,m as s}from"./index-OuEt6EZx.js";import{p as n,u as a}from"./object-CoMARnot.js";const _=async()=>await c(`
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
  `),o=async e=>{await t("assignments",n(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]))},m=async e=>{await r("assignments",n(e,["assignmentName","responsiblePersonId","externalContactPersonId","relevantFiles","fee","type","status"]),n(e,["assignmentId"]))},p=async e=>{await i("assignments",{assignmentId:e})},y=()=>{const e=s();return a({mutationFn:o,onSuccess:()=>{e.invalidateQueries({queryKey:["assignments"]})}})},d=()=>{const e=s();return a({mutationFn:m,onSuccess:()=>{e.invalidateQueries({queryKey:["assignments"]})}})},g=()=>{const e=s();return a({mutationFn:p,onSuccess:()=>{e.invalidateQueries({queryKey:["assignments"]})}})};export{g as a,y as b,_ as f,d as u};
