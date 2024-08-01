// material-ui
import { MaterialReactTable } from 'material-react-table';

// third-party
import { UseQueryResult } from '@tanstack/react-query';

// project imports
import { DataTableProps, useDataTable } from '@/hooks/useDataTable';
import { FilterParam, useQueryParam } from '@/hooks/useQueryParam';
import { AnyData, ModuleBaseConfigItem } from '../config/ModuleConfig';

export interface ModuleTableConfigItem<M extends AnyData, P extends DataTableProps<M>> extends ModuleBaseConfigItem {
  type: 'table';
  useData: () => UseQueryResult<M[], Error>;
  props: Omit<P, 'data'>;
}

type ModuleTableProps<M extends AnyData, P extends DataTableProps<M>> = {
  selectedModule: ModuleTableConfigItem<M, P>;
};

const ModuleTable = <M extends AnyData, P extends DataTableProps<M>>({ selectedModule }: ModuleTableProps<M, P>) => {
  const { useData, props } = selectedModule;

  const [columnFilters, setColumnFilters] = useQueryParam('filters', FilterParam, []);
  const { data = [] } = useData();

  const table = useDataTable({
    data,
    state: { columnFilters },
    enableEditing: false,
    enableRowActions: false,
    enableColumnResizing: false,
    enableStickyHeader: false,
    onColumnFiltersChange: setColumnFilters,
    ...props
  });

  return <MaterialReactTable table={table} />;
};

export default ModuleTable;
