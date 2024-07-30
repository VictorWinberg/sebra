import { useEffect } from 'react';

import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';

import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { columns as assignmentColumns, DataType as AssignmentType } from '@/features/assignments/pages/AssignmentsPage';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { columns as companyColumns, DataType as CompanyType } from '@/features/companies/pages/CompaniesPage';
import { useDataTable } from '@/hooks/useDataTable';
import { FilterParam, useQueryParam } from '@/hooks/useQueryParam';
import { UseQueryResult } from '@tanstack/react-query';

interface TypeMapping {
  companies: CompanyType;
  assignments: AssignmentType;
}

type ModuleTableConfig = { [K in keyof TypeMapping]: ModuleTableConfigItem<K> };
type ModuleTableConfigItem<T extends keyof TypeMapping> = {
  columns: MRT_ColumnDef<TypeMapping[T]>[];
  useData: () => UseQueryResult<TypeMapping[T][], Error>;
};

type ModuleTableProps<T extends keyof TypeMapping> = {
  moduleType: T;
};

const ModuleTable = <T extends keyof TypeMapping>({ moduleType }: ModuleTableProps<T>) => {
  const MODULE_TABLE_CONFIG: ModuleTableConfig = {
    companies: { columns: companyColumns, useData: useCompanies },
    assignments: { columns: assignmentColumns, useData: useAssignments }
  };

  const config = MODULE_TABLE_CONFIG[moduleType];
  const { columns, useData } = config;

  const [columnFiltersParams, setColumnFiltersParams] = useQueryParam('filters', FilterParam);

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
