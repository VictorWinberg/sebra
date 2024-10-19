-- Seed data for companies table
INSERT INTO companies (id, company_name, address, industry, phone, email, website, organization_number, created_at, updated_at)
VALUES
    ('19b61f09-c879-4548-a79d-06d6f8211ff8', 'Sebra', 'Sveavägen 123, Stockholm', 'Teknologi', '08-123 456 78', 'info@sebra.se', 'http://www.sebra.se', '20240528-1234', '2024-05-28', '2024-05-28'),
    ('c349e3c6-3fdd-45fc-a8dd-9b73cf1d8c2a', 'Finanshuset AB', 'Vasagatan 12, Göteborg', 'Finans', '031-987 654', 'info@finanshuset.com', 'http://www.finanshuset.com', '20240527-1234', '2024-05-27', '2024-05-27'),
    ('fd303530-16c6-46e4-b83a-5c4b04fa4b4e', 'IndustriX AB', 'Kungsgatan 45, Malmö', 'Tillverkning', '040-555 555', 'info@industrx.com', 'http://www.industrx.com', '20240526-1234', '2024-05-26', '2024-05-26'),
    ('12ac063b-b562-41bd-9547-bf038620e18b', 'GrönEnergi AB', 'Energigatan 7, Gävle', 'Energi', '026-555 678', 'info@gronenergi.com', 'http://www.gronenergi.com', '20230628-1234', '2023-06-28', '2023-06-28'),
    ('4f226bc5-5c1d-4ca1-a207-f8b600cc50ae', 'MediaGiganten AB', 'Mediavägen 5, Eskilstuna', 'Media', '016-987 654', 'info@mediagiganten.com', 'http://www.mediagiganten.com', '20230630-1234', '2023-06-30', '2023-06-30'),
    ('730dbb50-c964-4d74-9297-7a385c149fb0', 'KonsultFokus AB', 'Konsultvägen 8, Uppsala', 'Konsult', '018-123 457', 'info@konsultfokus.com', 'http://www.konsultfokus.com', '20230701-1234', '2023-07-01', '2023-07-01'),
    ('dcdc69a7-ab39-4bec-80ff-04021f8813ca', 'ByggStyrka AB', 'Byggarevägen 6, Örebro', 'Bygg', '019-555 679', 'info@byggstyrka.com', 'http://www.byggstyrka.com', '20230704-1234', '2023-07-04', '2023-07-04');

-- Seed data for contacts table
INSERT INTO contacts (id, contact_name, email, phone, company, job_title, address, notes, created_at, updated_at)
VALUES
    ('92162d7a-ceea-486a-8d2f-891ec7feaa3e', 'Victor Winberg', 'victor.winberg@sebra.se', '08-123 456 78', '19b61f09-c879-4548-a79d-06d6f8211ff8', 'CTO', 'Sveavägen 123, Stockholm', 'Kontakt för IT-frågor', '2024-05-28', '2024-05-28'),
    ('61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2', 'Sebastian Roos', 'sebastian.roos@sebra.se', '08-123 456 78', '19b61f09-c879-4548-a79d-06d6f8211ff8', 'VD', 'Sveavägen 123, Stockholm', 'Huvudkontaktperson', '2024-05-28', '2024-05-28'),
    ('2176c31e-072e-4197-84b4-e2ce6f514df2', 'Christopher Högberg', 'christopher.högberg@sebra.se', '08-123 456 78', '19b61f09-c879-4548-a79d-06d6f8211ff8', 'COO', 'Sveavägen 123, Stockholm', 'Kontakt för försäljning', '2024-05-28', '2024-05-28'),
    ('464438aa-9eb3-4cff-98f4-ba470db24a3f', 'Jan Zubac', 'jan.zubac@sebra.se', '08-123 456 78', '19b61f09-c879-4548-a79d-06d6f8211ff8', 'Developer', 'Sveavägen 123, Stockholm', 'Huvudkontaktperson', '2024-05-28', '2024-05-28'),
    ('2fd21526-a37d-4c35-bca5-f2c5b2d79ed6', 'Fredrik Jakobsson', 'fredrik.jakobsson@sebra.se', '08-123 456 78', '19b61f09-c879-4548-a79d-06d6f8211ff8', 'Tech Lead', 'Sveavägen 123, Stockholm', 'Kontakt för konsulttjänster', '2024-05-28', '2024-05-28'),
    ('c3a4d84c-7598-4ace-bd2f-40274d6fec39', 'Anna Karlsson', 'anna.karlsson@finanshuset.com', '031-987 654', 'c349e3c6-3fdd-45fc-a8dd-9b73cf1d8c2a', 'Ekonomichef', 'Vasagatan 12, Göteborg', 'Kontakt för finansfrågor', '2024-05-27', '2024-05-27'),
    ('fcac2ac2-5450-42ae-a56b-823f0782a629', 'Erik Johansson', 'erik.johansson@industrx.com', '040-555 555', 'fd303530-16c6-46e4-b83a-5c4b04fa4b4e', 'Ingenjör', 'Kungsgatan 45, Malmö', 'Teknisk kontakt', '2024-05-26', '2024-05-26'),
    ('ef40a58c-99ea-4b64-b9b9-5cce9cf9d9e4', 'Ella Nyström', 'ella.nystrom@gronenergi.com', '026-555 679', '12ac063b-b562-41bd-9547-bf038620e18b', 'Energiingenjör', 'Energigatan 7, Gävle', 'Energiteknisk expert', '2023-07-03', '2023-07-03'),
    ('874d5f63-ca72-465c-bb84-4240233c669f', 'Alva Jansson', 'alva.jansson@mediagiganten.com', '016-987 655', '4f226bc5-5c1d-4ca1-a207-f8b600cc50ae', 'Medieproducent', 'Mediavägen 5, Eskilstuna', 'Produktion av medieinnehåll', '2023-07-05', '2023-07-05'),
    ('1e5493b1-61b8-46be-ab30-7ddc60153fc2', 'Liam Andersson', 'liam.andersson@konsultfokus.com', '018-123 458', '730dbb50-c964-4d74-9297-7a385c149fb0', 'Konsultansvarig', 'Konsultvägen 8, Uppsala', 'Ansvarig för konsulttjänster', '2023-07-06', '2023-07-06'),
    ('cf638582-0795-463a-8a3a-2cfe3b67bf3c', 'Wilma Nilsson', 'wilma.nilsson@byggstyrka.com', '019-555 680', 'dcdc69a7-ab39-4bec-80ff-04021f8813ca', 'Byggledare', 'Byggarevägen 6, Örebro', 'Byggprojektledning', '2023-07-09', '2023-07-09'),
    ('3417c3e5-14a6-4f9d-8b4d-bd874f27d7a4', 'Amanda Berg', 'amanda.berg@gronenergi.com', '026-555 680', '12ac063b-b562-41bd-9547-bf038620e18b', 'Energitekniker', 'Energigatan 7, Gävle', 'Teknisk support inom energi', '2023-07-27', '2023-07-27'),
    ('6ccee7d9-b837-4914-9726-6aaa2e538910', 'Isabella Nilsson', 'isabella.nilsson@mediagiganten.com', '016-987 656', '4f226bc5-5c1d-4ca1-a207-f8b600cc50ae', 'Medieproducentassistent', 'Mediavägen 5, Eskilstuna', 'Assistans i mediaproduktion', '2023-07-29', '2023-07-29'),
    ('04b65a1c-989b-4979-8908-af12b2694ea7', 'Felix Berg', 'felix.berg@konsultfokus.com', '018-123 459', '730dbb50-c964-4d74-9297-7a385c149fb0', 'Konsultkoordinator', 'Konsultvägen 8, Uppsala', 'Koordinering av konsultuppdrag', '2023-07-30', '2023-07-30'),
    ('9e5ef2dd-3698-490c-97db-25cc7316a917', 'Alma Lindgren', 'alma.lindgren@byggstyrka.com', '019-555 681', 'dcdc69a7-ab39-4bec-80ff-04021f8813ca', 'Byggingenjör', 'Byggarevägen 6, Örebro', 'Teknisk expertis inom bygg', '2024-02-02', '2024-02-02'),
    ('75726492-13b3-4600-b7b7-e05430a263c2', 'Nova Karlsson', 'nova.karlsson@gronenergi.com', '026-555 681', '12ac063b-b562-41bd-9547-bf038620e18b', 'Energikonsult', 'Energigatan 7, Gävle', 'Rådgivning inom energieffektivisering', '2024-02-19', '2024-02-19'),
    ('f1b6f4fb-fc39-4ad3-b03b-3a1700c7404c', 'Ebba Johansson', 'ebba.johansson@mediagiganten.com', '016-987 657', '4f226bc5-5c1d-4ca1-a207-f8b600cc50ae', 'Medieproducent', 'Mediavägen 5, Eskilstuna', 'Produktion och redigering av media', '2024-02-21', '2024-02-21'),
    ('89d7fe4f-2b8d-4519-8ad7-24b6bc0d64a7', 'Liam Berg', 'liam.berg@konsultfokus.com', '018-123 460', '730dbb50-c964-4d74-9297-7a385c149fb0', 'Konsultassistent', 'Konsultvägen 8, Uppsala', 'Administrativt stöd till konsultverksamhet', '2024-02-22', '2024-02-22'),
    ('99eac2ba-51d2-48c8-a538-2cc8e3207432', 'Livia Gustavsson', 'livia.gustavsson@byggstyrka.com', '019-555 682', 'dcdc69a7-ab39-4bec-80ff-04021f8813ca', 'Byggtekniker', 'Byggarevägen 6, Örebro', 'Teknisk support och projektledning inom bygg', '2024-02-25', '2024-02-25'),
    ('a5ea80d4-6aed-419b-a220-bf21254e1710', 'Maja Gustavsson', 'maja.gustavsson@gronenergi.com', '026-555 682', '12ac063b-b562-41bd-9547-bf038620e18b', 'Energirådgivare', 'Energigatan 7, Gävle', 'Rådgivning om energilösningar', '2023-09-13', '2023-09-13'),
    ('dfad01c4-d3e2-415c-b3dd-762eabd76c60', 'Leo Lindberg', 'leo.lindberg@gronenergi.com', '026-555 683', '12ac063b-b562-41bd-9547-bf038620e18b', 'Energianalytiker', 'Energigatan 7, Gävle', 'Analyser av energiförbrukning', '2023-09-14', '2023-09-14'),
    ('58abde34-e14f-4dd5-a704-cba7116a16a2', 'Astrid Eriksson', 'astrid.eriksson@mediagiganten.com', '016-987 658', '4f226bc5-5c1d-4ca1-a207-f8b600cc50ae', 'Medieproducent', 'Mediavägen 5, Eskilstuna', 'Produktion av mediainnehåll', '2023-09-17', '2023-09-17'),
    ('9724edd4-ccff-4997-b210-87df137e320c', 'Elvin Nilsson', 'elvin.nilsson@mediagiganten.com', '016-987 659', '4f226bc5-5c1d-4ca1-a207-f8b600cc50ae', 'Mediekoordinator', 'Mediavägen 5, Eskilstuna', 'Koordinering av medieproduktion', '2023-09-18', '2023-09-18'),
    ('3709ab83-2f06-4665-aaf1-8ed54a986916', 'Alva Berg', 'alva.berg@konsultfokus.com', '018-123 461', '730dbb50-c964-4d74-9297-7a385c149fb0', 'Konsultchef', 'Konsultvägen 8, Uppsala', 'Ledning av konsultverksamhet', '2023-09-19', '2023-09-19'),
    ('a767cd79-f487-4abe-8eb9-14c4907bee2d', 'Wilhelm Svensson', 'wilhelm.svensson@konsultfokus.com', '018-123 462', '730dbb50-c964-4d74-9297-7a385c149fb0', 'Konsultutvecklare', 'Konsultvägen 8, Uppsala', 'Utveckling av konsulttjänster', '2023-09-20', '2023-09-20'),
    ('0568d9b9-42ec-4c69-9270-6e3ef035b48b', 'Gustav Jonsson', 'gustav.jonsson@byggstyrka.com', '019-555 683', 'dcdc69a7-ab39-4bec-80ff-04021f8813ca', 'Byggledare', 'Byggarevägen 6, Örebro', 'Ledning och styrning av byggprojekt', '2023-09-25', '2023-09-25'),
    ('0b09b721-f6f8-4197-87aa-e37277d26c1e', 'Ellie Andersson', 'ellie.andersson@byggstyrka.com', '019-555 684', 'dcdc69a7-ab39-4bec-80ff-04021f8813ca', 'Byggprojektledare', 'Byggarevägen 6, Örebro', 'Planering och ledning av byggprojekt', '2023-09-26', '2023-09-26');

-- Seed data for assignments table
INSERT INTO assignments (id, assignment_name, external_contact, company, fee, type, status, created_at, updated_at)
VALUES
    ('adbbfcf9-d95a-4be2-840b-e03d595ec2f1', 'Affärslokaler och Hyresförhandlingar', '92162d7a-ceea-486a-8d2f-891ec7feaa3e', '19b61f09-c879-4548-a79d-06d6f8211ff8', 102000.00, 'Affärslokaler och Hyresförhandlingar', 'Pågående', '2024-02-30', '2024-02-30'),
    ('4734fd6f-5148-4fc6-bbaa-17c589b74eb2', 'Bostadsutveckling och Framtidsplanering', 'fcac2ac2-5450-42ae-a56b-823f0782a629', 'fd303530-16c6-46e4-b83a-5c4b04fa4b4e', 118000.00, 'Bostadsutveckling och Framtidsplanering', 'Pågående', '2023-09-14', '2023-09-14'),
    ('a42d42db-cffc-466c-a5ca-7d0a40eb265e', 'Försäljningsstrategi för Bostadsfastigheter', 'ef40a58c-99ea-4b64-b9b9-5cce9cf9d9e4', '12ac063b-b562-41bd-9547-bf038620e18b', 107000.00, 'Försäljningsstrategi för Bostadsfastigheter', 'Avslutat', '2023-09-19', '2023-09-19'),
    ('5c11a063-caf9-419a-b36f-e2296e374701', 'Handelsfastigheter och Marknadsföringsstrategi', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2', '19b61f09-c879-4548-a79d-06d6f8211ff8', 95000.00, 'Handelsfastigheter och Marknadsföringsstrategi', 'Avslutat', '2023-09-07', '2023-09-07'),
    ('5f3923bf-07e0-44be-bf03-e9ae3f168d06', 'Hotellfastigheter och Gästupplevelser', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2', '19b61f09-c879-4548-a79d-06d6f8211ff8', 120000.00, 'Hotellfastigheter och Gästupplevelser', 'Pågående', '2023-09-16', '2023-09-16'),
    ('9334abfc-53a9-47f2-a48a-99bb69513303', 'Kommersiell Fastighetsutveckling och Hyresförhandlingar', '874d5f63-ca72-465c-bb84-4240233c669f', '4f226bc5-5c1d-4ca1-a207-f8b600cc50ae', 126000.00, 'Kommersiell Fastighetsutveckling och Hyresförhandlingar', 'Pågående', '2023-09-22', '2023-09-22'),
    ('c9c754f9-71a0-4d0f-9307-9d6f3beed4ee', 'Kontorslokaler och Arbetsmiljöanalys', '1e5493b1-61b8-46be-ab30-7ddc60153fc2', '730dbb50-c964-4d74-9297-7a385c149fb0', 116000.00, 'Kontorslokaler och Arbetsmiljöanalys', 'Pågående', '2023-09-12', '2023-09-12'),
    ('6caead53-a2dd-4cde-9bff-fe24f0fffc58', 'Kontorslokaler och Hyresgästförhandlingar', '2176c31e-072e-4197-84b4-e2ce6f514df2', '19b61f09-c879-4548-a79d-06d6f8211ff8', 108000.00, 'Kontorslokaler och Hyresgästförhandlingar', 'Pågående', '2023-09-04', '2023-09-04'),
    ('c45ee5c6-e013-46ea-a379-1be81673dc78', 'Nybyggnation av Lägenheter och Byggprojektering', 'cf638582-0795-463a-8a3a-2cfe3b67bf3c', 'dcdc69a7-ab39-4bec-80ff-04021f8813ca', 114000.00, 'Nybyggnation och Byggprojektering', 'Pågående', '2023-09-10', '2023-09-10'),
    ('f321274f-4ba7-430e-8e93-6f64c9ce3f28', 'Renovering av Bostäder och Lägenhetsdesign', '0568d9b9-42ec-4c69-9270-6e3ef035b48b', 'dcdc69a7-ab39-4bec-80ff-04021f8813ca', 110000.00, 'Renovering och Lägenhetsdesign', 'Pågående', '2023-09-06', '2023-09-06'),
    ('a3de7ed7-25a3-424c-987d-8c48a902d63f', 'Residensfastigheter och Lägenhetsplanering', 'fcac2ac2-5450-42ae-a56b-823f0782a629', 'fd303530-16c6-46e4-b83a-5c4b04fa4b4e', 87000.00, 'Residensfastigheter och Lägenhetsplanering', 'Avslutat', '2024-02-31', '2024-02-31');

-- Seed data for assignment responsible contacts table
INSERT INTO assignment_responsible_contacts (assignment_id, contact_id)
VALUES
    ('adbbfcf9-d95a-4be2-840b-e03d595ec2f1', '92162d7a-ceea-486a-8d2f-891ec7feaa3e'),
    ('f5d55448-9807-4d5d-b9e3-882cc6727723', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2'),
    ('4734fd6f-5148-4fc6-bbaa-17c589b74eb2', '2176c31e-072e-4197-84b4-e2ce6f514df2'),
    ('58c8ef19-cce3-41b1-bac4-2a0b8f815a24', '464438aa-9eb3-4cff-98f4-ba470db24a3f'),
    ('9db29e66-e4f7-45de-82a4-0747e2558178', '2fd21526-a37d-4c35-bca5-f2c5b2d79ed6'),
    ('614de32e-ef12-4d82-98db-38c3270303f1', 'c3a4d84c-7598-4ace-bd2f-40274d6fec39'),
    ('c80c0676-ecb6-4a3f-b287-72a500c09fb0', 'fcac2ac2-5450-42ae-a56b-823f0782a629'),
    ('819958df-df92-4eca-92ec-8d8c84125894', 'd8f97d4e-e2ab-466e-a8de-d55621936f00'),
    ('9d785038-49e4-452f-9323-53191f26183d', '7a42fb18-00ce-488d-9d75-2160d2c5b21d'),
    ('2433819c-9abf-4495-afdb-048020141bdf', '307e4c23-0d0b-46a8-9f6b-d2f93df4c36b'),
    ('a42d42db-cffc-466c-a5ca-7d0a40eb265e', '0b67efc7-40aa-419e-9e66-972cf8d3b036'),
    ('9dd89cc3-f54a-4b69-8268-337c80dd19b0', '2a3292fb-f730-4872-9569-5de9829fb8a3'),
    ('5c11a063-caf9-419a-b36f-e2296e374701', '50104f50-999a-42e4-8341-017824b20c7a'),
    ('5f3923bf-07e0-44be-bf03-e9ae3f168d06', 'a18a8a87-804b-4c3e-81e8-16995fc206c5'),
    ('9334abfc-53a9-47f2-a48a-99bb69513303', '937a370b-b6ea-4551-8fca-51fee1f998cb'),
    ('c9c754f9-71a0-4d0f-9307-9d6f3beed4ee', '775d0101-736b-4aa8-ad5a-9f32934e9855'),
    ('6caead53-a2dd-4cde-9bff-fe24f0fffc58', 'ca0a7fc2-c458-4489-b6f2-4fbfcc5be54a'),
    ('42572828-149d-4333-bf3e-8009eeb86e73', '7952e58a-aeec-4fde-aa3e-8fb705cba862'),
    ('c45ee5c6-e013-46ea-a379-1be81673dc78', 'b83fee3a-f449-499b-895e-ae894d642105'),
    ('f321274f-4ba7-430e-8e93-6f64c9ce3f28', '817142c4-2443-49dd-a081-8fbcaaf1e3b5'),
    ('a3de7ed7-25a3-424c-987d-8c48a902d63f', '0ba74249-223e-4f3e-bc90-60f75fa330c1'),
    ('0c5ff48d-4a1c-4233-a67e-b9316e5dcd1e', '6ae53565-760d-4dca-84ca-931a332f42ec'),
    ('c4867170-22ba-4236-8405-8634024271d5', '08fdb93e-6f91-477f-a109-0cdc02fcddc0'),
    ('a8a726b2-f318-46df-b0f3-7fbcf8ab7e23', '31044daf-c3ec-4bbe-aa76-135c130f6462'),
    ('adbbfcf9-d95a-4be2-840b-e03d595ec2f1', '08fdb93e-6f91-477f-a109-0cdc02fcddc0'),
    ('f5d55448-9807-4d5d-b9e3-882cc6727723', '0b67efc7-40aa-419e-9e66-972cf8d3b036'),
    ('4734fd6f-5148-4fc6-bbaa-17c589b74eb2', '0ba74249-223e-4f3e-bc90-60f75fa330c1'),
    ('58c8ef19-cce3-41b1-bac4-2a0b8f815a24', '2176c31e-072e-4197-84b4-e2ce6f514df2'),
    ('9db29e66-e4f7-45de-82a4-0747e2558178', '2a3292fb-f730-4872-9569-5de9829fb8a3'),
    ('614de32e-ef12-4d82-98db-38c3270303f1', '2fd21526-a37d-4c35-bca5-f2c5b2d79ed6'),
    ('c80c0676-ecb6-4a3f-b287-72a500c09fb0', '307e4c23-0d0b-46a8-9f6b-d2f93df4c36b'),
    ('819958df-df92-4eca-92ec-8d8c84125894', '31044daf-c3ec-4bbe-aa76-135c130f6462'),
    ('9d785038-49e4-452f-9323-53191f26183d', '464438aa-9eb3-4cff-98f4-ba470db24a3f'),
    ('2433819c-9abf-4495-afdb-048020141bdf', '50104f50-999a-42e4-8341-017824b20c7a'),
    ('a42d42db-cffc-466c-a5ca-7d0a40eb265e', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2'),
    ('9dd89cc3-f54a-4b69-8268-337c80dd19b0', '6ae53565-760d-4dca-84ca-931a332f42ec'),
    ('5c11a063-caf9-419a-b36f-e2296e374701', '775d0101-736b-4aa8-ad5a-9f32934e9855'),
    ('5f3923bf-07e0-44be-bf03-e9ae3f168d06', '7952e58a-aeec-4fde-aa3e-8fb705cba862'),
    ('9334abfc-53a9-47f2-a48a-99bb69513303', '7a42fb18-00ce-488d-9d75-2160d2c5b21d'),
    ('c9c754f9-71a0-4d0f-9307-9d6f3beed4ee', '817142c4-2443-49dd-a081-8fbcaaf1e3b5'),
    ('6caead53-a2dd-4cde-9bff-fe24f0fffc58', '92162d7a-ceea-486a-8d2f-891ec7feaa3e'),
    ('42572828-149d-4333-bf3e-8009eeb86e73', '937a370b-b6ea-4551-8fca-51fee1f998cb'),
    ('c45ee5c6-e013-46ea-a379-1be81673dc78', 'a18a8a87-804b-4c3e-81e8-16995fc206c5'),
    ('f321274f-4ba7-430e-8e93-6f64c9ce3f28', 'b83fee3a-f449-499b-895e-ae894d642105'),
    ('a3de7ed7-25a3-424c-987d-8c48a902d63f', 'c3a4d84c-7598-4ace-bd2f-40274d6fec39'),
    ('0c5ff48d-4a1c-4233-a67e-b9316e5dcd1e', 'ca0a7fc2-c458-4489-b6f2-4fbfcc5be54a'),
    ('c4867170-22ba-4236-8405-8634024271d5', 'd8f97d4e-e2ab-466e-a8de-d55621936f00'),
    ('a8a726b2-f318-46df-b0f3-7fbcf8ab7e23', 'fcac2ac2-5450-42ae-a56b-823f0782a629'),
    ('adbbfcf9-d95a-4be2-840b-e03d595ec2f1', 'fcac2ac2-5450-42ae-a56b-823f0782a629'),
    ('f5d55448-9807-4d5d-b9e3-882cc6727723', 'd8f97d4e-e2ab-466e-a8de-d55621936f00'),
    ('4734fd6f-5148-4fc6-bbaa-17c589b74eb2', 'ca0a7fc2-c458-4489-b6f2-4fbfcc5be54a'),
    ('58c8ef19-cce3-41b1-bac4-2a0b8f815a24', 'c3a4d84c-7598-4ace-bd2f-40274d6fec39'),
    ('9db29e66-e4f7-45de-82a4-0747e2558178', 'b83fee3a-f449-499b-895e-ae894d642105'),
    ('614de32e-ef12-4d82-98db-38c3270303f1', 'a18a8a87-804b-4c3e-81e8-16995fc206c5'),
    ('c80c0676-ecb6-4a3f-b287-72a500c09fb0', '937a370b-b6ea-4551-8fca-51fee1f998cb'),
    ('819958df-df92-4eca-92ec-8d8c84125894', '92162d7a-ceea-486a-8d2f-891ec7feaa3e'),
    ('9d785038-49e4-452f-9323-53191f26183d', '817142c4-2443-49dd-a081-8fbcaaf1e3b5'),
    ('2433819c-9abf-4495-afdb-048020141bdf', '7a42fb18-00ce-488d-9d75-2160d2c5b21d'),
    ('a42d42db-cffc-466c-a5ca-7d0a40eb265e', '7952e58a-aeec-4fde-aa3e-8fb705cba862'),
    ('9dd89cc3-f54a-4b69-8268-337c80dd19b0', '775d0101-736b-4aa8-ad5a-9f32934e9855'),
    ('5c11a063-caf9-419a-b36f-e2296e374701', '6ae53565-760d-4dca-84ca-931a332f42ec'),
    ('5f3923bf-07e0-44be-bf03-e9ae3f168d06', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2'),
    ('9334abfc-53a9-47f2-a48a-99bb69513303', '50104f50-999a-42e4-8341-017824b20c7a'),
    ('c9c754f9-71a0-4d0f-9307-9d6f3beed4ee', '464438aa-9eb3-4cff-98f4-ba470db24a3f'),
    ('6caead53-a2dd-4cde-9bff-fe24f0fffc58', '31044daf-c3ec-4bbe-aa76-135c130f6462'),
    ('42572828-149d-4333-bf3e-8009eeb86e73', '307e4c23-0d0b-46a8-9f6b-d2f93df4c36b'),
    ('c45ee5c6-e013-46ea-a379-1be81673dc78', '2fd21526-a37d-4c35-bca5-f2c5b2d79ed6'),
    ('f321274f-4ba7-430e-8e93-6f64c9ce3f28', '2a3292fb-f730-4872-9569-5de9829fb8a3'),
    ('a3de7ed7-25a3-424c-987d-8c48a902d63f', '2176c31e-072e-4197-84b4-e2ce6f514df2'),
    ('0c5ff48d-4a1c-4233-a67e-b9316e5dcd1e', '0ba74249-223e-4f3e-bc90-60f75fa330c1'),
    ('c4867170-22ba-4236-8405-8634024271d5', '0b67efc7-40aa-419e-9e66-972cf8d3b036'),
    ('a8a726b2-f318-46df-b0f3-7fbcf8ab7e23','08fdb93e-6f91-477f-a109-0cdc02fcddc0');

-- Seed the interactions table
INSERT INTO interactions (id, interaction_date, interaction_type, notes)
VALUES
    ('17b56a4a-7c4e-4a16-8562-931d2fb901a1', '2024-04-01', 'E-post', 'Delade senaste projektuppdateringar.'),
    ('841cf4a4-b11e-4e37-b124-de277da2df93', '2024-04-02', 'Telefonsamtal', 'Diskuserade nästa steg.'),
    ('543921ff-a9ac-4e6c-805d-d858b4b90889', '2024-04-03', 'Möte', 'Slutlig granskningssession.'),
    ('6bd6fb07-afb0-4413-b757-c499d2753d7c', '2024-04-04', 'E-post', 'Skickade slutdokument.'),
    ('45c5efa8-9a8a-4a13-b489-55059a14dc0e', '2024-04-05', 'Telefonsamtal', 'Kundavskrivningsdiskussion.'),
    ('9ee5eb7e-2d5e-433b-b9bd-2321f7cd2863', '2024-04-06', 'Möte', 'Utvärdering efter projekt.'),
    ('67d13c13-56eb-4e2a-85ed-6b81c0a138f1', '2024-04-07', 'E-post', 'Uppföljning vid utvärdering.'),
    ('3a06cdfb-229b-439e-8e84-2fe1c1c20a00', '2024-04-08', 'Telefonsamtal', 'Diskusserade lärdomar.'),
    ('d4a7a14b-dd8f-4008-8d7a-e3c3832fec1e', '2024-04-09', 'Möte', 'Planerar nästa projekt.'),
    ('1d52866a-b6ee-4884-a4f9-811cc36573b3', '2024-04-10', 'E-post', 'Delat nytt projektförslag.'),
    ('5aba874e-6518-4bb1-9fb6-b652fed18ca8', '2024-04-11', 'Telefonsamtal', 'Diskuterade förslagsdetaljer.'),
    ('84e03d5a-7738-415f-8357-2dd9540c9ff5', '2024-04-12', 'Möte', 'Initial projektplanering.'),
    ('32deb1d7-5b4e-44ce-aaa1-6a8b402ea189', '2024-04-13', 'E-post', 'Skickat material för projektstart.'),
    ('575be82f-3aba-4527-8b24-71e91bfaaea0', '2024-04-14', 'Telefonsamtal', 'Bekräftad projektstart.'),
    ('27b9a070-1725-47c0-b804-3ac4a8560a08', '2024-04-15', 'Möte', 'Team kickoff möte.'),
    ('9a46b157-e2c5-4da3-8dc3-83dc803ad212', '2024-04-16', 'E-post', 'Delade teamroller och ansvarsområden.'),
    ('43cc1cc8-d1b6-4825-bf39-d33d1258f09d', '2024-04-17', 'Telefonsamtal', 'Förtydliga teamfrågor.'),
    ('713b7537-1e76-4cf3-9b11-596aec271471', '2024-04-18', 'Möte', 'Projektanpassningssession.'),
    ('c8158570-38de-4717-a620-e642883eed2d', '2024-04-19', 'E-post', 'Uppföljning av anpassningsmöte.'),
    ('788ec0d1-9cfc-4c75-9d32-57e2fa0b3672', '2024-04-20', 'Telefonsamtal', 'Diskuterade projektrisker.'),
    ('2189857c-6195-4a61-a595-cfd4f2a4cfdb', '2024-04-21', 'Möte', 'Riskreducerande planering.'),
    ('384b7a3f-e920-4eac-abc8-278714215c78', '2024-04-22', 'E-post', 'Skickade uppdaterad riskplan.'),
    ('45a6a99b-aa85-432e-b4c3-aae9f6c9b545', '2024-04-23', 'Telefonsamtal', 'Reviderad riskplan.'),
    ('2669bbf6-957b-4dfc-b681-53181f35372a', '2024-04-24', 'Möte', 'Projektets milstolpegranskning.'),
    ('ef19545f-e13f-45be-b33c-4f8a2a143f6f', '2024-04-25', 'E-post', 'Delade milstolpeuppdateringar.'),
    ('d80df441-967d-4c48-813c-b917d033d16f', '2024-04-26', 'Telefonsamtal', 'Diskuterade milstolpsförlopp.'),
    ('4639892a-838e-4f9a-bdb1-682d72fdad15', '2024-04-27', 'Möte', 'Reviewed projektmål.'),
    ('d68af090-b3c0-4ec1-92df-d7b8e2faaa79', '2024-04-28', 'E-post', 'Skickade uppdaterade projektmål.'),
    ('3dae78d4-353a-4b67-8574-259fa664191c', '2024-05-08', 'Telefonsamtal', 'Slutlig avslutningsdiskussion.'),
    ('d5e86fe6-9cfe-429c-ab8c-596815cf9d1a', '2024-05-09', 'Möte', 'Brainstorming för nytt projekt.'),
    ('b46ccefe-27a8-437d-b7bb-fbd4eb468cff', '2024-05-10', 'E-post', 'Skickat projektöversikt.'),
    ('b2447f1e-f859-4a25-8b5d-8a7543f2eff2', '2024-05-11', 'Telefonsamtal', 'Diskuterade projektleveranser.'),
    ('599253d6-39a1-4fcd-a1ee-d19d7ab014f0', '2024-05-12', 'Möte', 'Team kickoff meeting.'),
    ('ba4ae6f1-8adc-4fd1-84d6-9424408b9acf', '2024-05-13', 'E-post', 'Uppföljning av teamuppgifter.'),
    ('6b9bec7c-79d4-4ca5-87b8-d6c8b425b24c', '2024-05-14', 'Telefonsamtal', 'Förtydligade kundkrav.'),
    ('4ec2198e-2ead-424d-b2f8-7b4e48fa9a11', '2024-05-15', 'Möte', 'Projektplaneringssession.'),
    ('e4f2e38d-7031-485a-95ac-2566bf6bf82a', '2024-05-16', 'E-post', 'Delat projektschema.'),
    ('f927238d-eb44-47ac-b29f-f8ec51c37a80', '2024-05-17', 'Telefonsamtal', 'Uppdaterad om projektstatus.'),
    ('d079bb94-4dae-4082-8a1c-2b5503213fc4', '2024-05-18', 'Möte', 'Granska mitt i projektet.'),
    ('3c546a87-8839-4130-9f58-c1fcc290a1fa', '2024-05-19', 'E-post', 'Uppföljning av recensionsfeedback.'),
    ('264a548d-868f-4157-b142-496a21d10b15', '2024-05-20', 'Telefonsamtal', 'Diskuterade tekniska utmaningar.'),
    ('d479bbe4-41f3-4c8d-b2db-abe3586753d0', '2024-05-21', 'Möte', 'Riskbedömningsmöte.'),
    ('04b7807b-b173-4841-bc26-7308b14bb1a0', '2024-05-22', 'E-post', 'Skickade riskreduceringsplan.'),
    ('4870ef67-af89-4fb6-8e0b-88d5d1880db4', '2024-05-23', 'Telefonsamtal', 'Uppdaterad riskstatus.'),
    ('c7becd93-7b9b-4f29-ad5a-6ad2264aa0af', '2024-05-24', 'Möte', 'Projektkontrollpunktsmöte.'),
    ('781e2daf-437e-49c7-9fff-5d2b21e73628', '2024-05-25', 'E-post', 'Uppföljning av kontrollpunktsåtgärder.'),
    ('dee3a6f9-476b-4eb7-ab46-543cc46c2cc2', '2024-05-26', 'Telefonsamtal', 'Kundfeedback session.'),
    ('4d62974c-8e37-43e6-90a1-85c3239d0b5a', '2024-05-27', 'Möte', 'Granskad feedback.'),
    ('58a67cd0-dbdb-48bc-8e43-b2316a99c066', '2024-05-28', 'E-post', 'Skickade reviderad projektplan.'),
    ('49f5ab7a-98bd-4cda-bd1a-44d48bb31bfc', '2024-05-29', 'Telefonsamtal', 'Diskuterade ändringar.'),
    ('ecff2be2-08ce-448f-b918-4b35694d1138', '2024-05-30', 'Möte', 'Projektuppdateringsmöte.'),
    ('58055832-4d14-4e1f-8621-b6bfd72a1235', '2024-06-01', 'Möte', 'Diskuterade projektets omfattning och krav.'),
    ('90218035-fac7-4dd8-addb-d05ca26be1f8', '2024-06-02', 'E-post', 'Uppföljning av projektförslag.'),
    ('3c8ac56a-1899-4abd-bbe7-d0934a9c3751', '2024-06-03', 'Telefonsamtal', 'Förtydligade tekniska detaljer.'),
    ('63445424-9bdd-45f9-8bc6-b9d57fa2404e', '2024-06-04', 'Möte', 'Granskad projekttidslinje.'),
    ('651cee9d-ecd6-4e4d-a288-2e53014f259a', '2024-06-05', 'E-post', 'Skickat projektdokumentation.'),
    ('784ee5d9-6916-486e-a856-07893f00579f', '2024-06-06', 'Telefonsamtal', 'Diskuterade budget och utgifter.'),
    ('5f168389-6458-4899-9002-b390d2b724d0', '2024-06-07', 'Möte', 'Projektstartmöte.'),
    ('e72ce4f4-3569-43ef-bc2c-86eb8ed72a9d', '2024-06-08', 'E-post', 'Delade projektuppdateringar.'),
    ('f06943f3-e45d-4055-bcb7-6e17e5f8e240', '2024-06-09', 'Telefonsamtal', 'Att åtgärdat kundproblem.'),
    ('3fde839e-cede-49ca-853d-2fa363733713', '2024-06-10', 'Möte', 'Reviewed projektmilstolpar.'),
    ('cb0ce982-be01-4034-8d32-12b802798d49', '2024-06-11', 'E-post', 'Uppföljning av åtgärder.'),
    ('1d8ffd2f-8e42-455f-b56d-a7e5440af18f', '2024-06-12', 'Telefonsamtal', 'Teknisk diskussion.'),
    ('8786829a-612c-4435-8719-a6850442da81', '2024-06-13', 'Möte', 'Projektförloppsgranskning.'),
    ('31fe174c-7dde-44f4-9466-800d23452337', '2024-06-14', 'E-post', 'Skickade uppdaterad projektplan.'),
    ('e1a36f99-5b90-4b09-9920-1e2202ec95f8', '2024-06-15', 'Telefonsamtal', 'Budgetgodkännande diskussion.'),
    ('687fb8f8-f3e1-46a7-a199-d7d3c2f57b1b', '2024-06-16', 'Möte', 'Kundfeedback session.'),
    ('9e68c601-a77a-46a8-bb31-1cd1e1e987df', '2024-06-17', 'E-post', 'Uppföljning av kundfeedback.'),
    ('d1a27287-eb71-4157-b90d-866de4130a5c', '2024-06-18', 'Telefonsamtal', 'Lösa tekniska problem.'),
    ('1eaf1e0f-f1af-4b9e-bba7-6dc06bfe71c0', '2024-06-19', 'Möte', 'Slutlig projektgenomgång.'),
    ('95974cd8-77a6-4601-af97-d3d1da39c524', '2024-06-20', 'E-post', 'Skickat slutlig projektrapport.');

-- Seed the interaction_contacts table
INSERT INTO interaction_contacts (interaction_id, contact_id)
VALUES
    ('04b7807b-b173-4841-bc26-7308b14bb1a0', '5c9dba2c-fe14-45a4-a210-bc29cf0cba45'),
    ('04b7807b-b173-4841-bc26-7308b14bb1a0', '7ecb8a84-21bf-4fcf-8c85-2da3009e3dcf'),
    ('17b56a4a-7c4e-4a16-8562-931d2fb901a1', '10b966fd-13e5-4073-9fa9-d16c24591341'),
    ('17b56a4a-7c4e-4a16-8562-931d2fb901a1', '99eac2ba-51d2-48c8-a538-2cc8e3207432'),
    ('17b56a4a-7c4e-4a16-8562-931d2fb901a1', 'f1b6f4fb-fc39-4ad3-b03b-3a1700c7404c'),
    ('17b56a4a-7c4e-4a16-8562-931d2fb901a1', 'f7e0364d-0d6c-447e-a8b7-1be83ae2fd89'),
    ('1d52866a-b6ee-4884-a4f9-811cc36573b3', '0f5f2806-c2c2-4dc2-a24d-28cb06f14ba1'),
    ('1d52866a-b6ee-4884-a4f9-811cc36573b3', '99eac2ba-51d2-48c8-a538-2cc8e3207432'),
    ('1d8ffd2f-8e42-455f-b56d-a7e5440af18f', '75726492-13b3-4600-b7b7-e05430a263c2'),
    ('1d8ffd2f-8e42-455f-b56d-a7e5440af18f', 'd3dd2e85-f08b-4a02-b4d4-3cf3dfd76f1f'),
    ('1eaf1e0f-f1af-4b9e-bba7-6dc06bfe71c0', '3417c3e5-14a6-4f9d-8b4d-bd874f27d7a4'),
    ('1eaf1e0f-f1af-4b9e-bba7-6dc06bfe71c0', '88b19998-7c67-4786-a608-2a1567d49427'),
    ('2189857c-6195-4a61-a595-cfd4f2a4cfdb', '7017d595-41c5-421d-977f-ddd5e4c396bd'),
    ('2189857c-6195-4a61-a595-cfd4f2a4cfdb', 'c3a4d84c-7598-4ace-bd2f-40274d6fec39'),
    ('264a548d-868f-4157-b142-496a21d10b15', '9e5ef2dd-3698-490c-97db-25cc7316a917'),
    ('264a548d-868f-4157-b142-496a21d10b15', 'd462d858-03d4-4a37-9b7a-d1e09bb6df76'),
    ('2669bbf6-957b-4dfc-b681-53181f35372a', '2fd21526-a37d-4c35-bca5-f2c5b2d79ed6'),
    ('2669bbf6-957b-4dfc-b681-53181f35372a', 'd3dd2e85-f08b-4a02-b4d4-3cf3dfd76f1f'),
    ('27b9a070-1725-47c0-b804-3ac4a8560a08', '58abde34-e14f-4dd5-a704-cba7116a16a2'),
    ('27b9a070-1725-47c0-b804-3ac4a8560a08', 'cf638582-0795-463a-8a3a-2cfe3b67bf3c'),
    ('31fe174c-7dde-44f4-9466-800d23452337', '1e2373c1-d3fe-4b0a-8d13-4fd46d7aec39'),
    ('31fe174c-7dde-44f4-9466-800d23452337', 'f5dabf65-e3e5-4e65-87a4-9e01c4dc1b5b'),
    ('32deb1d7-5b4e-44ce-aaa1-6a8b402ea189', '2b31e025-474d-40d7-8b3e-334b1e035041'),
    ('32deb1d7-5b4e-44ce-aaa1-6a8b402ea189', '5834f24e-af27-406e-8171-9c784182f24d'),
    ('384b7a3f-e920-4eac-abc8-278714215c78', '9724edd4-ccff-4997-b210-87df137e320c'),
    ('384b7a3f-e920-4eac-abc8-278714215c78', 'a767cd79-f487-4abe-8eb9-14c4907bee2d'),
    ('3a06cdfb-229b-439e-8e84-2fe1c1c20a00', '525f13a4-56f4-41f0-b7ec-30f7c6307456'),
    ('3a06cdfb-229b-439e-8e84-2fe1c1c20a00', 'db4924c1-5e20-46b7-95b9-d27a67014dfc'),
    ('3c546a87-8839-4130-9f58-c1fcc290a1fa', '307e4c23-0d0b-46a8-9f6b-d2f93df4c36b'),
    ('3c546a87-8839-4130-9f58-c1fcc290a1fa', 'f086644b-d5ec-4414-b3a7-a593181b9c27'),
    ('3c8ac56a-1899-4abd-bbe7-d0934a9c3751', '2ea94a7d-a487-40b7-a070-e307172ac8c7'),
    ('3c8ac56a-1899-4abd-bbe7-d0934a9c3751', '6816134f-5cdc-4f80-8946-2b1f9a49007a'),
    ('3dae78d4-353a-4b67-8574-259fa664191c', '50104f50-999a-42e4-8341-017824b20c7a'),
    ('3dae78d4-353a-4b67-8574-259fa664191c', '948f9677-571f-4f8d-8d7d-a87583353b9e'),
    ('3fde839e-cede-49ca-853d-2fa363733713', '0ba74249-223e-4f3e-bc90-60f75fa330c1'),
    ('3fde839e-cede-49ca-853d-2fa363733713', '402a52c8-8bfa-4e3b-a86c-4cd91a7ef1c7'),
    ('43cc1cc8-d1b6-4825-bf39-d33d1258f09d', '0f5f2806-c2c2-4dc2-a24d-28cb06f14ba1'),
    ('43cc1cc8-d1b6-4825-bf39-d33d1258f09d', '15d9ac05-a9a0-47c4-ba5d-432d8cee07bb'),
    ('45a6a99b-aa85-432e-b4c3-aae9f6c9b545', '318cc617-00a7-4751-a5ba-a834434894e8'),
    ('45a6a99b-aa85-432e-b4c3-aae9f6c9b545', '464438aa-9eb3-4cff-98f4-ba470db24a3f'),
    ('45c5efa8-9a8a-4a13-b489-55059a14dc0e', '8e1af6c7-c492-4496-9423-d4226b6115ac'),
    ('45c5efa8-9a8a-4a13-b489-55059a14dc0e', '9d7b9964-8462-4361-8f7a-dc41b04d3d34'),
    ('4639892a-838e-4f9a-bdb1-682d72fdad15', '117b3c31-918c-49ba-8505-9f2f841bd43e'),
    ('4639892a-838e-4f9a-bdb1-682d72fdad15', 'b0a886ac-e25d-4ab3-8efb-518c69494f27'),
    ('4870ef67-af89-4fb6-8e0b-88d5d1880db4', '789f166b-bb43-4763-8ecf-945c8db62515'),
    ('4870ef67-af89-4fb6-8e0b-88d5d1880db4', 'dfad01c4-d3e2-415c-b3dd-762eabd76c60'),
    ('49f5ab7a-98bd-4cda-bd1a-44d48bb31bfc', 'a18a8a87-804b-4c3e-81e8-16995fc206c5'),
    ('49f5ab7a-98bd-4cda-bd1a-44d48bb31bfc', 'fcac2ac2-5450-42ae-a56b-823f0782a629'),
    ('4d62974c-8e37-43e6-90a1-85c3239d0b5a', '464438aa-9eb3-4cff-98f4-ba470db24a3f'),
    ('4d62974c-8e37-43e6-90a1-85c3239d0b5a', '9fd67040-c9c8-4033-ad83-befe85e7d8bd'),
    ('4ec2198e-2ead-424d-b2f8-7b4e48fa9a11', '08fdb93e-6f91-477f-a109-0cdc02fcddc0'),
    ('4ec2198e-2ead-424d-b2f8-7b4e48fa9a11', '208eea70-d131-4fb3-a9a4-4e42110441b8'),
    ('543921ff-a9ac-4e6c-805d-d858b4b90889', '6ccee7d9-b837-4914-9726-6aaa2e538910'),
    ('543921ff-a9ac-4e6c-805d-d858b4b90889', '6fd367cf-b2d7-4323-8306-06a99e2c0b5e'),
    ('575be82f-3aba-4527-8b24-71e91bfaaea0', '305ad5b3-7951-4c00-bd1e-4466507e6604'),
    ('575be82f-3aba-4527-8b24-71e91bfaaea0', '8620b0da-54c9-4ef9-8ce3-2604fc6f06f4'),
    ('58055832-4d14-4e1f-8621-b6bfd72a1235', '0b67efc7-40aa-419e-9e66-972cf8d3b036'),
    ('58055832-4d14-4e1f-8621-b6bfd72a1235', '148701fe-9652-4a56-bc50-5eb6a2f80d3b'),
    ('58a67cd0-dbdb-48bc-8e43-b2316a99c066', '0220d9d9-0f5d-448a-93ac-209231a3df52'),
    ('58a67cd0-dbdb-48bc-8e43-b2316a99c066', '788c476a-3183-4f84-9731-c2a49826afb4'),
    ('599253d6-39a1-4fcd-a1ee-d19d7ab014f0', 'b2c2d631-80e8-4611-a568-216d7ad465f5'),
    ('5aba874e-6518-4bb1-9fb6-b652fed18ca8', 'a5e0bafe-1950-4f32-bfdf-e98e8965212e'),
    ('5aba874e-6518-4bb1-9fb6-b652fed18ca8', 'c3a4d84c-7598-4ace-bd2f-40274d6fec39'),
    ('5f168389-6458-4899-9002-b390d2b724d0', '2176c31e-072e-4197-84b4-e2ce6f514df2'),
    ('5f168389-6458-4899-9002-b390d2b724d0', '92162d7a-ceea-486a-8d2f-891ec7feaa3e'),
    ('63445424-9bdd-45f9-8bc6-b9d57fa2404e', '2176c31e-072e-4197-84b4-e2ce6f514df2'),
    ('63445424-9bdd-45f9-8bc6-b9d57fa2404e', 'd13e7751-4e25-4649-8cf8-aff3f65d464e'),
    ('651cee9d-ecd6-4e4d-a288-2e53014f259a', '6ae53565-760d-4dca-84ca-931a332f42ec'),
    ('651cee9d-ecd6-4e4d-a288-2e53014f259a', 'd88e0382-5afe-4b74-9e6d-8f1e9fb9a6ea'),
    ('67d13c13-56eb-4e2a-85ed-6b81c0a138f1', '2fd21526-a37d-4c35-bca5-f2c5b2d79ed6'),
    ('67d13c13-56eb-4e2a-85ed-6b81c0a138f1', '525f13a4-56f4-41f0-b7ec-30f7c6307456'),
    ('687fb8f8-f3e1-46a7-a199-d7d3c2f57b1b', '3709ab83-2f06-4665-aaf1-8ed54a986916'),
    ('687fb8f8-f3e1-46a7-a199-d7d3c2f57b1b', 'ab377220-fd7f-4b48-a77d-32c8bd74eed2'),
    ('6b9bec7c-79d4-4ca5-87b8-d6c8b425b24c', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2'),
    ('6b9bec7c-79d4-4ca5-87b8-d6c8b425b24c', '6f46bec6-e844-4f68-bbe0-312802e949ca'),
    ('6bd6fb07-afb0-4413-b757-c499d2753d7c', 'a0433591-5ace-437b-80cd-83126dfa9b2a'),
    ('6bd6fb07-afb0-4413-b757-c499d2753d7c', 'd74dbf56-2d41-4610-9d67-da5e05c7eb14'),
    ('713b7537-1e76-4cf3-9b11-596aec271471', '3b1e21c1-09ef-4992-bb7f-3fb4797faecf'),
    ('713b7537-1e76-4cf3-9b11-596aec271471', 'bac532b5-0d6e-4421-a97f-7a6e3994b1c4'),
    ('781e2daf-437e-49c7-9fff-5d2b21e73628', '464438aa-9eb3-4cff-98f4-ba470db24a3f'),
    ('781e2daf-437e-49c7-9fff-5d2b21e73628', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2'),
    ('784ee5d9-6916-486e-a856-07893f00579f', '50298f9a-8fde-4908-ac29-1337b580bb22'),
    ('784ee5d9-6916-486e-a856-07893f00579f', 'd4dfb628-5be9-4d9b-9071-6a313872b015'),
    ('788ec0d1-9cfc-4c75-9d32-57e2fa0b3672', '2a3292fb-f730-4872-9569-5de9829fb8a3'),
    ('788ec0d1-9cfc-4c75-9d32-57e2fa0b3672', '7952e58a-aeec-4fde-aa3e-8fb705cba862'),
    ('841cf4a4-b11e-4e37-b124-de277da2df93', '92162d7a-ceea-486a-8d2f-891ec7feaa3e'),
    ('841cf4a4-b11e-4e37-b124-de277da2df93', 'c3a4d84c-7598-4ace-bd2f-40274d6fec39'),
    ('84e03d5a-7738-415f-8357-2dd9540c9ff5', '2bfa5b7b-c154-44e2-8ced-fdca9026b9b9'),
    ('84e03d5a-7738-415f-8357-2dd9540c9ff5', 'b0a886ac-e25d-4ab3-8efb-518c69494f27'),
    ('8786829a-612c-4435-8719-a6850442da81', '79ff383b-023d-4e9b-98c0-e31d1cfe989e'),
    ('8786829a-612c-4435-8719-a6850442da81', 'e89625a1-4a56-4a17-80af-00d70a555c05'),
    ('90218035-fac7-4dd8-addb-d05ca26be1f8', '775d0101-736b-4aa8-ad5a-9f32934e9855'),
    ('90218035-fac7-4dd8-addb-d05ca26be1f8', '874d5f63-ca72-465c-bb84-4240233c669f'),
    ('95974cd8-77a6-4601-af97-d3d1da39c524', '89d7fe4f-2b8d-4519-8ad7-24b6bc0d64a7'),
    ('95974cd8-77a6-4601-af97-d3d1da39c524', 'fc7f4079-47f1-41ad-9bbc-0d178ae90a8e'),
    ('9a46b157-e2c5-4da3-8dc3-83dc803ad212', '89732b37-0e16-4fc8-85d3-a9b3d0ab5c5c'),
    ('9a46b157-e2c5-4da3-8dc3-83dc803ad212', 'ef40a58c-99ea-4b64-b9b9-5cce9cf9d9e4'),
    ('9e68c601-a77a-46a8-bb31-1cd1e1e987df', '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2'),
    ('9e68c601-a77a-46a8-bb31-1cd1e1e987df', '92162d7a-ceea-486a-8d2f-891ec7feaa3e'),
    ('9ee5eb7e-2d5e-433b-b9bd-2321f7cd2863', '2176c31e-072e-4197-84b4-e2ce6f514df2'),
    ('9ee5eb7e-2d5e-433b-b9bd-2321f7cd2863', 'faff16af-104d-4212-8f66-8af8d2729d67'),
    ('b2447f1e-f859-4a25-8b5d-8a7543f2eff2', '464438aa-9eb3-4cff-98f4-ba470db24a3f'),
    ('b2447f1e-f859-4a25-8b5d-8a7543f2eff2', '4925c166-44f5-4066-88b9-cf100de9b826'),
    ('b46ccefe-27a8-437d-b7bb-fbd4eb468cff', '937f54fd-e6bd-42b5-b851-37967674fb92'),
    ('b46ccefe-27a8-437d-b7bb-fbd4eb468cff', 'd8f97d4e-e2ab-466e-a8de-d55621936f00'),
    ('ba4ae6f1-8adc-4fd1-84d6-9424408b9acf', '2323f399-0418-465d-bd4d-d8bd051f5a45'),
    ('ba4ae6f1-8adc-4fd1-84d6-9424408b9acf', '305ad5b3-7951-4c00-bd1e-4466507e6604'),
    ('c7becd93-7b9b-4f29-ad5a-6ad2264aa0af', '13742c3a-4481-4ba9-977b-952e22a9f850'),
    ('c7becd93-7b9b-4f29-ad5a-6ad2264aa0af', 'e769bfd4-3cef-466c-b4f5-1d37a49805ec'),
    ('c8158570-38de-4717-a620-e642883eed2d', '31044daf-c3ec-4bbe-aa76-135c130f6462'),
    ('c8158570-38de-4717-a620-e642883eed2d', '817142c4-2443-49dd-a081-8fbcaaf1e3b5'),
    ('cb0ce982-be01-4034-8d32-12b802798d49', '08d0441d-9b43-4596-9b5a-4eeb81cf4d66'),
    ('cb0ce982-be01-4034-8d32-12b802798d49', '937a370b-b6ea-4551-8fca-51fee1f998cb'),
    ('d079bb94-4dae-4082-8a1c-2b5503213fc4', '4440ec67-d34c-48d6-8b85-7647b97d31ee'),
    ('d079bb94-4dae-4082-8a1c-2b5503213fc4', '84eebdec-e2ca-4c3b-860c-b341d5d72e36'),
    ('d1a27287-eb71-4157-b90d-866de4130a5c', '1e5493b1-61b8-46be-ab30-7ddc60153fc2'),
    ('d1a27287-eb71-4157-b90d-866de4130a5c', 'fcac2ac2-5450-42ae-a56b-823f0782a629'),
    ('d479bbe4-41f3-4c8d-b2db-abe3586753d0', 'b83fee3a-f449-499b-895e-ae894d642105'),
    ('d479bbe4-41f3-4c8d-b2db-abe3586753d0', 'f5dabf65-e3e5-4e65-87a4-9e01c4dc1b5b'),
    ('d4a7a14b-dd8f-4008-8d7a-e3c3832fec1e', '0220d9d9-0f5d-448a-93ac-209231a3df52'),
    ('d4a7a14b-dd8f-4008-8d7a-e3c3832fec1e', 'a5ea80d4-6aed-419b-a220-bf21254e1710'),
    ('d5e86fe6-9cfe-429c-ab8c-596815cf9d1a', '2fd21526-a37d-4c35-bca5-f2c5b2d79ed6'),
    ('d5e86fe6-9cfe-429c-ab8c-596815cf9d1a', 'ca0a7fc2-c458-4489-b6f2-4fbfcc5be54a'),
    ('d68af090-b3c0-4ec1-92df-d7b8e2faaa79', '15d9ac05-a9a0-47c4-ba5d-432d8cee07bb'),
    ('d68af090-b3c0-4ec1-92df-d7b8e2faaa79', 'e83f9183-2623-4644-9088-f313c4b78e6c'),
    ('d80df441-967d-4c48-813c-b917d033d16f', '04b65a1c-989b-4979-8908-af12b2694ea7'),
    ('d80df441-967d-4c48-813c-b917d033d16f', '7a42fb18-00ce-488d-9d75-2160d2c5b21d'),
    ('dee3a6f9-476b-4eb7-ab46-543cc46c2cc2', '0568d9b9-42ec-4c69-9270-6e3ef035b48b'),
    ('dee3a6f9-476b-4eb7-ab46-543cc46c2cc2', '0b09b721-f6f8-4197-87aa-e37277d26c1e'),
    ('e1a36f99-5b90-4b09-9920-1e2202ec95f8', '016286be-9f82-4025-9841-bcebc2a3236c'),
    ('e1a36f99-5b90-4b09-9920-1e2202ec95f8', 'd374038e-353d-42a2-bfcd-b94c78f360e6'),
    ('e4f2e38d-7031-485a-95ac-2566bf6bf82a', '9b8a5e65-a2f2-4704-9dc4-2b9cbbb6984b'),
    ('e4f2e38d-7031-485a-95ac-2566bf6bf82a', 'f974ec06-8811-45ad-9426-96808412cf5d'),
    ('e72ce4f4-3569-43ef-bc2c-86eb8ed72a9d', 'ab377220-fd7f-4b48-a77d-32c8bd74eed2'),
    ('e72ce4f4-3569-43ef-bc2c-86eb8ed72a9d', 'b34d45fc-c200-4390-8b23-36d226527027'),
    ('ecff2be2-08ce-448f-b918-4b35694d1138', '8516ba4c-ed94-4e77-a200-016556793c23'),
    ('ecff2be2-08ce-448f-b918-4b35694d1138', 'fcac2ac2-5450-42ae-a56b-823f0782a629'),
    ('ef19545f-e13f-45be-b33c-4f8a2a143f6f', '0f2b1e35-a6b3-4b6c-9718-afe2ed1f9672'),
    ('ef19545f-e13f-45be-b33c-4f8a2a143f6f', 'b34d45fc-c200-4390-8b23-36d226527027'),
    ('f06943f3-e45d-4055-bcb7-6e17e5f8e240', 'a839d2d4-0d57-4ebd-b24a-3cc75cbdd99e'),
    ('f06943f3-e45d-4055-bcb7-6e17e5f8e240', 'b1d3d843-0691-4d4c-9aa7-0275c36ee739'),
    ('f927238d-eb44-47ac-b29f-f8ec51c37a80', '5834f24e-af27-406e-8171-9c784182f24d');

-- Seed data for leads table
INSERT INTO leads (id, lead_title, description, stage, rank, contact, company, assignment, created_at, updated_at)
VALUES
    ('9671c767-bc53-4bf3-8038-8233b2feb9bc', 'Diskussion om kommande projekt.', 'Under vårt senaste möte diskuterade vi möjligheten att inleda ett nytt projekt. Kunden är intresserad av att utforska potentiella samarbeten inom digital transformation och vill ha ytterligare information innan de går vidare.', 'Pitch', 1, '92162d7a-ceea-486a-8d2f-891ec7feaa3e', '19b61f09-c879-4548-a79d-06d6f8211ff8', 'adbbfcf9-d95a-4be2-840b-e03d595ec2f1', '2024-06-01', '2024-06-01'),
    ('7fba6602-b886-4466-8965-abd480e040ee', 'Erbjudande skickat, inväntar svar.', 'Vi har skickat ett detaljerat erbjudande till kunden, som inkluderar prisuppgifter och leveranstider. Kunden har fått tid att överväga erbjudandet och vi förväntar oss ett svar inom de närmaste dagarna.', 'Affär', 2, 'ef40a58c-99ea-4b64-b9b9-5cce9cf9d9e4', '12ac063b-b562-41bd-9547-bf038620e18b', 'a42d42db-cffc-466c-a5ca-7d0a40eb265e', '2024-06-02', '2024-06-02'),
    ('eae2675f-f2e1-4aa7-85a5-a9166d24a5ec', 'Intresse i tidigare möte.', 'Vid det senaste mötet visade kunden starkt intresse för våra tjänster, särskilt inom området för molnbaserade lösningar. De överväger nu våra förslag och vill planera ett uppföljande möte för att diskutera vidare.', 'Intresse', 3, '61fa7fcf-0cd6-4af6-9a5e-bf4a945f42b2', '19b61f09-c879-4548-a79d-06d6f8211ff8', '5c11a063-caf9-419a-b36f-e2296e374701', '2024-06-03', '2024-06-03'),
    ('e360580c-9a61-4af5-8c87-b74abce818b9', 'Visat intresse för nya lösningar.', 'Kunden har uttryckt en vilja att utforska nya teknologiska lösningar för att förbättra sin verksamhet. Vi har föreslagit flera alternativ som de nu utvärderar för att avgöra vilka som bäst passar deras behov.', 'Intresse', 4, 'a5ea80d4-6aed-419b-a220-bf21254e1710', '12ac063b-b562-41bd-9547-bf038620e18b', null, '2024-06-04', '2024-06-04');
