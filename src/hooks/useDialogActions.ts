import { useState } from 'react';
import { MRT_Row, MRT_TableInstance } from 'material-react-table';

function useDialogActions<T extends Record<string, unknown>>(table: MRT_TableInstance<T>, row: MRT_Row<T>) {
  const {
    getState,
    options: { onCreatingRowCancel, onCreatingRowSave, onEditingRowCancel, onEditingRowSave },
    setCreatingRow,
    setEditingRow
  } = table;
  const { creatingRow, editingRow, isSaving } = getState();

  const isCreating = creatingRow?.id === row.id;
  const isEditing = editingRow?.id === row.id;

  const [values, setValues] = useState(row.original);

  const handleCancel = () => {
    if (isCreating) {
      onCreatingRowCancel?.({ row, table });
      setCreatingRow(null);
    } else if (isEditing) {
      onEditingRowCancel?.({ row, table });
      setEditingRow(null);
    }
  };

  const handleSubmit = () => {
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

  return {
    creatingRow,
    isSaving,
    values,
    setValues,
    handleCancel,
    handleSubmit
  };
}

export default useDialogActions;
