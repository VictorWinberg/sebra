CREATE TABLE IF NOT EXISTS assignments (
    id TEXT PRIMARY KEY,
    assignment_name VARCHAR(255) NOT NULL,
    external_contact TEXT,
    company TEXT,
    fee DECIMAL(10, 2),
    type VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (external_contact) REFERENCES contacts(id),
    FOREIGN KEY (company) REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS assignment_responsible_contacts (
    assignment_id TEXT NOT NULL,
    contact_id TEXT NOT NULL,
    PRIMARY KEY (assignment_id, contact_id),
    FOREIGN KEY (assignment_id) REFERENCES assignments(id),
    FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE TABLE IF NOT EXISTS contacts (
    id TEXT PRIMARY KEY,
    contact_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    job_title VARCHAR(100),
    company TEXT,
    address VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company) REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS companies (
    id TEXT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
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
    id TEXT PRIMARY KEY,
    document TEXT NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(document, entity_type, entity_id)
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
    interaction_id TEXT NOT NULL,
    contact_id TEXT NOT NULL,
    PRIMARY KEY (interaction_id, contact_id),
    FOREIGN KEY (interaction_id) REFERENCES interactions(id),
    FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE TABLE IF NOT EXISTS leads (
    id TEXT NOT NULL,
    lead_title VARCHAR(255) NOT NULL,
    description TEXT,
    stage VARCHAR(50) NOT NULL,
    rank INTEGER,
    contact INTEGER,
    company INTEGER,
    assignment INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contact) REFERENCES contacts(id),
    FOREIGN KEY (company) REFERENCES companies(id),
    FOREIGN KEY (assignment) REFERENCES assignments(id)
);
