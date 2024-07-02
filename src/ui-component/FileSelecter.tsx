import React from 'react';

// material-ui
import { Button, ButtonProps } from '@mui/material';

// assets
import { CloudUpload } from '@mui/icons-material';

interface FileSelectorProps extends Omit<ButtonProps, 'onChange'> {
  onChange?: (data: File) => void;
}

const FileSelector = ({ onChange, children, ...rest }: FileSelectorProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange?.(file);
    }
  };

  return (
    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload />} {...rest}>
      {children}
      <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
    </Button>
  );
};

export default FileSelector;
