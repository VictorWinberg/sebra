CREATE TRIGGER update_assignments_updated_at
AFTER UPDATE ON assignments
FOR EACH ROW
BEGIN
    UPDATE assignments
    SET updated_at = CURRENT_TIMESTAMP
    WHERE assignment_id = OLD.assignment_id;
END;

CREATE TRIGGER update_contacts_updated_at
AFTER UPDATE ON contacts
FOR EACH ROW
BEGIN
    UPDATE contacts
    SET updated_at = CURRENT_TIMESTAMP
    WHERE contact_id = OLD.contact_id;
END;

CREATE TRIGGER update_companies_updated_at
AFTER UPDATE ON companies
FOR EACH ROW
BEGIN
    UPDATE companies
    SET updated_at = CURRENT_TIMESTAMP
    WHERE company_id = OLD.company_id;
END;

CREATE TRIGGER update_document_references_updated_at
AFTER UPDATE ON document_references
FOR EACH ROW
BEGIN
    UPDATE document_references
    SET updated_at = CURRENT_TIMESTAMP
    WHERE document_id = OLD.document_id AND entity_type = OLD.entity_type AND entity_id = OLD.entity_id;
END;

CREATE TRIGGER update_interactions_updated_at
AFTER UPDATE ON interactions
FOR EACH ROW
BEGIN
    UPDATE interactions
    SET updated_at = CURRENT_TIMESTAMP
    WHERE interaction_id = OLD.interaction_id;
END;

CREATE TRIGGER update_leads_updated_at
AFTER UPDATE ON leads
FOR EACH ROW
BEGIN
    UPDATE leads
    SET updated_at = CASE
            WHEN NEW.lead_title != OLD.lead_title
                OR NEW.stage != OLD.stage
                OR NEW.contact_id != OLD.contact_id
                OR NEW.company_id != OLD.company_id
                OR NEW.assignment_id != OLD.assignment_id
            THEN CURRENT_TIMESTAMP
            ELSE OLD.updated_at
        END
    WHERE lead_id = OLD.lead_id;
END;
