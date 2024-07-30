import { useEffect } from 'react';

// material-ui
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';

// third-party
import { UseQueryResult } from '@tanstack/react-query';

// project imports
import { assignmentColumns, AssignmentData } from '@/features/assignments/config/AssignmentConfig';
import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { companyColumns, CompanyData } from '@/features/companies/config/CompanyConfig';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { contactColumns, ContactData } from '@/features/contacts/config/ContactConfig';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { useDataTable } from '@/hooks/useDataTable';
import { FilterParam, useQueryParam } from '@/hooks/useQueryParam';

const MODULE_TABLE_CONFIG: ModuleTableConfig = {
  companiesTable: { type: 'table', columns: companyColumns, useData: useCompanies },
  assignmentsTable: { type: 'table', columns: assignmentColumns, useData: useAssignments },
  contactsTable: { type: 'table', columns: contactColumns, useData: useContacts }
};

export type ModuleTableConfig = { [K in keyof ModuleTableMapping]: ModuleTableConfigItem<K> };

interface ModuleTableMapping {
  companiesTable: { model: CompanyData };
  assignmentsTable: { model: AssignmentData };
  contactsTable: { model: ContactData };
}

interface ModuleTableConfigItem<T extends keyof ModuleTableMapping> {
  type: 'table';
  columns: MRT_ColumnDef<ModuleTableMapping[T]['model']>[];
  useData: () => UseQueryResult<ModuleTableMapping[T]['model'][], Error>;
}

type ModuleTableProps<T extends keyof ModuleTableMapping> = {
  moduleType: T;
};

const ModuleTable = <T extends keyof ModuleTableMapping>({ moduleType }: ModuleTableProps<T>) => {
  const config = MODULE_TABLE_CONFIG[moduleType];
  const { columns, useData } = config;

  const [columnFiltersParams, setColumnFiltersParams] = useQueryParam('filters', FilterParam, []);

  const { data = [] } = useData();

  const table = useDataTable({
    data,
    columns,
    initialState: { columnFilters: columnFiltersParams ?? [] },
    enableEditing: false,
    enableRowActions: false,
    enableColumnResizing: false,
    enableStickyHeader: false
  });

  useEffect(() => {
    setColumnFiltersParams(table.getState().columnFilters);
  }, [table, setColumnFiltersParams]);

  return <MaterialReactTable table={table} />;
};

export default ModuleTable;
