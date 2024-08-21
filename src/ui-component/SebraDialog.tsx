// material-ui
import { Box, Button, CircularProgress, DialogContent, DialogTitle } from '@mui/material';
import { MRT_Row, MRT_RowData, MRT_TableInstance } from 'material-react-table';

// third-party
import { DefaultValues } from 'react-hook-form';

// project imports
import useDialogActions from '@/hooks/useDialogActions';
import { FormProps } from '@/ui-component/SebraForm';

// ==============================|| SEBRA DIALOG ||============================== //

interface SebraDialogProps<T extends MRT_RowData> {
  table: MRT_TableInstance<T>;
  row: MRT_Row<T>;
  titles: { creating: string; editing: string };
  FormComponent: React.ComponentType<FormProps<T>>;
  defaultValues?: DefaultValues<T>;
}

const SebraDialog = <T extends MRT_RowData>({
  table,
  row,
  titles,
  FormComponent,
  defaultValues
}: SebraDialogProps<T>) => {
  const { creatingRow, isSaving, handleCancel, handleSubmit } = useDialogActions(table, row);

  return (
    <>
      <DialogTitle variant="h4" color="primary">
        {creatingRow ? titles.creating : titles.editing}
      </DialogTitle>
      <DialogContent>
        <FormComponent
          sx={{ mt: 1 }}
          formProps={{ values: { ...defaultValues, ...row.original } }}
          onSubmit={handleSubmit}
          renderBottomContent={() => (
            <Box sx={{ mt: 3, ml: 'auto' }}>
              <Button onClick={handleCancel} sx={{ minWidth: '100px' }}>
                Avbryt
              </Button>
              <Button disabled={isSaving} type="submit" sx={{ minWidth: '100px' }} variant="contained">
                {isSaving && <CircularProgress color="inherit" size={18} />}
                Spara
              </Button>
            </Box>
          )}
        />
      </DialogContent>
    </>
  );
};

export default SebraDialog;
