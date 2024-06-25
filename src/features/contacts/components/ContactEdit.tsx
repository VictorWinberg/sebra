import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Contact } from '../api/contactsApi';
import { useCreateContact } from '../hooks/useContactsMutations';
import ContactForm from './ContactForm';
import { useContact } from '../hooks/useContactsQueries';

// ==============================|| CONTACT EDIT PAGE ||============================== //

const ContactEdit = () => {
  const params = useParams();
  const { data: contact, isLoading } = useContact(Number(params.id));
  const { mutate: createContact } = useCreateContact();
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Contact>) => {
    createContact(data, {
      onSuccess: () => {
        navigate('..');
      }
    });
  };

  if (isLoading) return;

  return (
    <>
      <Typography variant="h4" color="primary">
        {contact ? 'Redigera kontakt' : 'Lägg till kontakt'}
      </Typography>
      <Box sx={{ my: 1 }} />
      <ContactForm formProps={{ values: contact }} onSubmit={handleSubmit}>
        <Box sx={{ my: 1 }} />

        <FlexGrow>
          <ContentTabs
            tabs={[
              { label: 'Interaktioner', content: <>Interaktioner...</> },
              { label: 'Söker', content: <>Söker...</> }
            ]}
          />
        </FlexGrow>

        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button size="large" type="submit" variant="contained" color="primary">
            Spara
          </Button>
          <Button size="large" variant="outlined" color="primary" onClick={() => navigate(-1)}>
            Tillbaka
          </Button>
        </Stack>
      </ContactForm>
    </>
  );
};

export default ContactEdit;
