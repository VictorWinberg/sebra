// material-ui
import { MaterialReactTable } from 'material-react-table';

// third-party
import { UseQueryResult } from '@tanstack/react-query';

// project imports
import { DataTableProps, useDataTable } from '@/hooks/useDataTable';
import { FilterParam, StringParam, useQueryParam } from '@/hooks/useQueryParam';
import { AnyData, ModuleBaseConfigItem } from '../config/ModuleConfig';

export interface ModuleTableConfigItem<M extends AnyData> extends ModuleBaseConfigItem {
  type: 'table';
  useData: () => UseQueryResult<M[], Error>;
  props: Omit<DataTableProps<M>, 'data'>;
  configProps?: Omit<DataTableProps<M>, 'data' | 'columns'>;
}

type ModuleTableProps<M extends AnyData> = {
  selectedModule: ModuleTableConfigItem<M>;
};

const ModuleTable = <M extends AnyData>({ selectedModule }: ModuleTableProps<M>) => {
  const { useData, props } = selectedModule;

  const [columnFilters, setColumnFilters] = useQueryParam('filters', FilterParam, []);
  const [globalFilter, setGlobalFilter] = useQueryParam('search', StringParam, '');
  const { data = [] } = useData();

  const table = useDataTable({
    data,
    initialState: { showGlobalFilter: !!globalFilter },
    state: { columnFilters, globalFilter },
    enableColumnFilters: false,
    enableColumnResizing: false,
    enableDensityToggle: false,
    enableEditing: false,
    enableRowActions: false,
    enableTopToolbar: false,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    ...props
  });

  return <MaterialReactTable table={table} />;
};

export default ModuleTable;
