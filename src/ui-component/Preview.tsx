import { useRef } from 'react';

// material-ui
import { Box } from '@mui/material';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';
import { Maybe } from '@/api/gql/graphql';

const SUPPORTED_FILE_TYPES = ['application/pdf', 'application/json', 'image/*', 'text/*', 'video/*', 'audio/*'];

interface PreviewProps {
  url?: Maybe<string>;
  mimeType?: Maybe<string>;
}

const Preview = ({ url, mimeType }: PreviewProps) => {
  const dimension = useWindowDimension();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  if (!url || !mimeType || !SUPPORTED_FILE_TYPES.some((type) => mimeType.match(type))) {
    return;
  }

  const renderPreview = () => {
    if (mimeType.startsWith('image/')) {
      return <img src={url} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    }

    return (
      <iframe
        key={`${dimension}`}
        ref={iframeRef}
        src={url}
        title="Preview"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    );
  };

  return (
    <Box sx={{ mx: -1, overflow: 'hidden' }}>
      <Box sx={{ width: '100%', height: '50vh', px: 1 }}>{renderPreview()}</Box>
    </Box>
  );
};

export default Preview;
