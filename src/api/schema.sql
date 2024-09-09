CREATE TABLE IF NOT EXISTS assignments (
    id TEXT PRIMARY KEY,
    assignment_name VARCHAR(255),
    external_contact_id TEXT,
    company_id TEXT,
    fee DECIMAL(10, 2),
    type VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (external_contact_id) REFERENCES contacts(id),
    FOREIGN KEY (company_id) REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS assignment_responsible_contacts (
    assignment_id TEXT,
    contact_id TEXT,
    PRIMARY KEY (assignment_id, contact_id),
    FOREIGN KEY (assignment_id) REFERENCES assignments(id),
    FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE TABLE IF NOT EXISTS contacts (
    id TEXT PRIMARY KEY,
    contact_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    job_title VARCHAR(100),
    company_id TEXT,
    address VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS companies (
    id TEXT PRIMARY KEY,
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
    entity_id TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(document_id, entity_type, entity_id),
    FOREIGN KEY (document_id) REFERENCES documents(document_id)
);

CREATE TABLE IF NOT EXISTS interactions (
    id TEXT PRIMARY KEY,
    interaction_date DATE NOT NULL,
    interaction_type VARCHAR(50) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS interaction_contacts (
    interaction_id TEXT,
    contact_id TEXT,
    PRIMARY KEY (interaction_id, contact_id),
    FOREIGN KEY (interaction_id) REFERENCES interactions(id),
    FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE TABLE IF NOT EXISTS leads (
    id TEXT,
    lead_title VARCHAR(255),
    description TEXT,
    stage VARCHAR(50),
    rank INTEGER,
    contact_id INTEGER,
    company_id INTEGER,
    assignment_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contact_id) REFERENCES contacts(id),
    FOREIGN KEY (company_id) REFERENCES companies(id),
    FOREIGN KEY (assignment_id) REFERENCES assignments(id)
);
