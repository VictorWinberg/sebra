// material-ui
import { MRT_Row, MRT_RowData, MRT_TableInstance } from 'material-react-table';

function useDialogActions<T extends MRT_RowData>(table: MRT_TableInstance<T>, row: MRT_Row<T>) {
  const {
    getState,
    options: { onCreatingRowCancel, onCreatingRowSave, onEditingRowCancel, onEditingRowSave },
    setCreatingRow,
    setEditingRow
  } = table;
  const { creatingRow, editingRow, isSaving } = getState();

  const isCreating = creatingRow?.id === row.id;
  const isEditing = editingRow?.id === row.id;

  const handleCancel = () => {
    if (isCreating) {
      onCreatingRowCancel?.({ row, table });
      setCreatingRow(null);
    } else if (isEditing) {
      onEditingRowCancel?.({ row, table });
      setEditingRow(null);
    }
  };

  const handleSubmit = (values: T) => {
    if (isCreating) {
      onCreatingRowSave?.({
        exitCreatingMode: () => setCreatingRow(null),
        row,
        table,
        values
      });
    } else if (isEditing) {
      onEditingRowSave?.({
        exitEditingMode: () => setEditingRow(null),
        row,
        table,
        values
      });
    }
  };

  return { creatingRow, isSaving, handleCancel, handleSubmit };
}

export default useDialogActions;
