// material-ui
import { Button, ButtonProps, Card, CardActions, CardContent, Popover, Typography } from '@mui/material';
import PopupState, { bindPopover } from 'material-ui-popup-state';

// assets
import { Delete } from '@mui/icons-material';
import { PopupState as PopupStateProps } from 'material-ui-popup-state/hooks';

interface DeleteConfirmProps extends Omit<ButtonProps, 'children'> {
  children: (popupState: PopupStateProps) => React.ReactNode;
}

const DeleteConfirm = ({ children, ...props }: DeleteConfirmProps) => (
  <PopupState variant="popover" popupId={`delete-popup-${props.id}`}>
    {(popupState) => (
      <>
        {children(popupState)}

        <Popover
          {...bindPopover(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Card>
            <CardContent>
              <Typography variant="body1">Är du säker på att du vill ta bort?</Typography>
            </CardContent>
            <CardActions>
              <Button fullWidth onClick={popupState.close} color="inherit" variant="outlined">
                Avbryt
              </Button>
              <Button
                startIcon={<Delete />}
                fullWidth
                onClick={(evt) => [props.onClick?.(evt), popupState.close()]}
                color="error"
                variant="contained"
              >
                Ta bort
              </Button>
            </CardActions>
          </Card>
        </Popover>
      </>
    )}
  </PopupState>
);

export default DeleteConfirm;
