CREATE TABLE IF NOT EXISTS assignments (
    assignment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    assignment_name VARCHAR(255),
    responsible_person_id INTEGER,
    external_contact_person_id INTEGER,
    company_id INTEGER,
    fee DECIMAL(10, 2),
    type VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (responsible_person_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (external_contact_person_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

CREATE TABLE IF NOT EXISTS contacts (
    contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    job_title VARCHAR(100),
    company_id INTEGER,
    address VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

CREATE TABLE IF NOT EXISTS companies (
    company_id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_name VARCHAR(255),
    address VARCHAR(255),
    industry VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    organization_number VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS document_references (
    document_id TEXT NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(document_id, entity_type, entity_id),
    FOREIGN KEY (document_id) REFERENCES documents(document_id)
);

CREATE TABLE IF NOT EXISTS interactions (
    interaction_id TEXT PRIMARY KEY,
    interaction_date DATE NOT NULL,
    interaction_type VARCHAR(50) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS interaction_contacts (
    interaction_id TEXT,
    contact_id INTEGER,
    PRIMARY KEY (interaction_id, contact_id),
    FOREIGN KEY (interaction_id) REFERENCES interactions(interaction_id),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id)
);

CREATE TABLE IF NOT EXISTS leads (
    lead_id TEXT,
    lead_title VARCHAR(255),
    stage VARCHAR(50),
    rank INTEGER,
    contact_id INTEGER,
    company_id INTEGER,
    assignment_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (company_id) REFERENCES companies(company_id),
    FOREIGN KEY (assignment_id) REFERENCES assignments(assignment_id)
);
