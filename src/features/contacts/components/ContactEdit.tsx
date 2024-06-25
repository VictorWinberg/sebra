import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// third party

// project imports
import ContentTabs from '@/ui-component/ContentTabs';
import FlexGrow from '@/ui-component/extended/FlexGrow';
import { Contact } from '../api/contactsApi';
import { useCreateContact, useUpdateContact } from '../hooks/useContactsMutations';
import { useContact } from '../hooks/useContactsQueries';
import ContactForm from './ContactForm';

// ==============================|| CONTACT EDIT PAGE ||============================== //

const ContactEdit = () => {
  const params = useParams();
  const { data: contact, isLoading } = useContact(Number(params.id));
  const { mutate: createContact } = useCreateContact();
  const { mutate: updateContact } = useUpdateContact();
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Contact>) => {
    if (contact) {
      updateContact(data);
    } else {
      createContact(data, {
        onSuccess: () => navigate('..')
      });
    }
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
