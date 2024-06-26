CREATE TRIGGER set_assignments_timestamps
AFTER INSERT ON assignments
FOR EACH ROW
BEGIN
    UPDATE assignments
    SET created_at = COALESCE(NEW.created_at, CURRENT_TIMESTAMP),
        updated_at = COALESCE(NEW.updated_at, CURRENT_TIMESTAMP)
    WHERE assignment_id = NEW.assignment_id;
END;

CREATE TRIGGER update_assignments_updated_at
AFTER UPDATE ON assignments
FOR EACH ROW
BEGIN
    UPDATE assignments
    SET updated_at = CURRENT_TIMESTAMP
    WHERE assignment_id = OLD.assignment_id;
END;

CREATE TRIGGER set_contacts_timestamps
AFTER INSERT ON contacts
FOR EACH ROW
BEGIN
    UPDATE contacts
    SET created_at = COALESCE(NEW.created_at, CURRENT_TIMESTAMP),
        updated_at = COALESCE(NEW.updated_at, CURRENT_TIMESTAMP)
    WHERE contact_id = NEW.contact_id;
END;

CREATE TRIGGER update_contacts_updated_at
AFTER UPDATE ON contacts
FOR EACH ROW
BEGIN
    UPDATE contacts
    SET updated_at = CURRENT_TIMESTAMP
    WHERE contact_id = OLD.contact_id;
END;

CREATE TRIGGER set_companies_timestamps
AFTER INSERT ON companies
FOR EACH ROW
BEGIN
    UPDATE companies
    SET created_at = COALESCE(NEW.created_at, CURRENT_TIMESTAMP),
        updated_at = COALESCE(NEW.updated_at, CURRENT_TIMESTAMP)
    WHERE company_id = NEW.company_id;
END;

CREATE TRIGGER update_companies_updated_at
AFTER UPDATE ON companies
FOR EACH ROW
BEGIN
    UPDATE companies
    SET updated_at = CURRENT_TIMESTAMP
    WHERE company_id = OLD.company_id;
END;