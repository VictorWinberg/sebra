import{r as c,q as t}from"./index-lRiYfU2-.js";const o=async()=>await t(`
    SELECT
      contacts.*,
      c.company_name AS company_name
    FROM contacts
    LEFT JOIN companies c USING (company_id)
`),e=async a=>{await c("contacts",a)};export{e as c,o as f};
