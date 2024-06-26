import React, { useState } from 'react';

// material-ui
import { CloudUpload, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Popover,
  Tooltip,
  Typography
} from '@mui/material';

// third-party
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';

// project imports
import { useDeleteFile, useFiles, useSaveFile } from '@/hooks/useFiles';

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const { data: files = [] } = useFiles();
  const { mutate: saveFile } = useSaveFile();
  const { mutate: deleteFile } = useDeleteFile();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSaveFile = async () => {
    if (file) {
      await saveFile(file);
      setFile(null);
    }
  };

  return (
    <Box>
      <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload />}>
        Upload file
        <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
      </Button>
      {file && (
        <>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Selected File: {file.name}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleSaveFile} disabled={!file}>
            Save File
          </Button>
        </>
      )}
      <Box mt={4}>
        <Typography variant="h5">Stored Files</Typography>
        <List>
          {files.map((doc) => (
            <ListItem key={doc.name} disablePadding>
              <PopupState variant="popover" popupId={`download-popup-${doc.name}`}>
                {(popupState) => (
                  <>
                    <Tooltip title="Download">
                      <ListItemButton {...bindTrigger(popupState)}>
                        <ListItemText primary={doc.name} />
                      </ListItemButton>
                    </Tooltip>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                      <Card>
                        <CardContent>
                          <Typography variant="body1">Vill du ladda ner detta dokument?</Typography>
                        </CardContent>
                        <CardActions>
                          <Button fullWidth onClick={popupState.close} color="inherit" variant="outlined">
                            Avbryt
                          </Button>
                          <Button
                            fullWidth
                            variant="contained"
                            href={URL.createObjectURL(doc.content)}
                            onClick={() => popupState.close()}
                            download={doc.name}
                          >
                            Ladda ner
                          </Button>
                        </CardActions>
                      </Card>
                    </Popover>
                  </>
                )}
              </PopupState>
              <ListItemSecondaryAction>
                <PopupState variant="popover" popupId={`delete-popup-${doc.name}`}>
                  {(popupState) => (
                    <>
                      <Tooltip title="Delete">
                        <IconButton color="error" {...bindTrigger(popupState)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                      >
                        <Card>
                          <CardContent>
                            <Typography variant="body1">Är du säker på att du vill ta bort detta dokument?</Typography>
                          </CardContent>
                          <CardActions>
                            <Button fullWidth onClick={popupState.close} color="inherit" variant="outlined">
                              Avbryt
                            </Button>
                            <Button
                              fullWidth
                              onClick={() => [deleteFile(doc.name), popupState.close()]}
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
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FileUploader;
