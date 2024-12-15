import { Box, Card, CardContent, CircularProgress, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { BarChart, LineChart } from '@mui/x-charts';
import dayjs from 'dayjs';

import { useAssignments } from '@/features/assignments/hooks/useAssignmentsQueries';
import { useCompanies } from '@/features/companies/hooks/useCompaniesQueries';
import { useContacts } from '@/features/contacts/hooks/useContactsQueries';
import { useLeads } from '@/features/leads/hooks/useLeadsQueries';
import { Assignment, Business, Group, Person, SvgIconComponent } from '@mui/icons-material';

const generateMonthlyTimeline = (months: number) => {
  const startMonth = dayjs().subtract(months - 1, 'month');
  const timeline = [];
  for (let i = 0; i < months; i++) {
    timeline.push(startMonth.add(i, 'month').format('YYYY-MM'));
  }
  return timeline;
};

export default function HomePage() {
  const theme = useTheme();
  const { data: assignments = [], isLoading: isLoadingAssignments } = useAssignments();
  const { data: contacts = [], isLoading: isLoadingContacts } = useContacts();
  const { data: companies = [], isLoading: isLoadingCompanies } = useCompanies();
  const { data: leads = [], isLoading: isLoadingLeads } = useLeads();

  const months = 6;
  const timeline = generateMonthlyTimeline(months);
  const startMonth = dayjs().subtract(months - 1, 'month');

  // Map assignments to their months
  const assignmentsByMonth = assignments.reduce(
    (acc, assignment) => {
      const month = dayjs(assignment.createdAt).format('YYYY-MM');
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  // Calculate the initial count of assignments before the start of the timeline
  const initialCount = assignments.filter((assignment) => dayjs(assignment.createdAt).isBefore(startMonth)).length;

  // Calculate cumulative assignments
  let cumulativeCount = initialCount;
  const cumulativeAssignments = timeline.map((month) => {
    cumulativeCount += assignmentsByMonth[month] || 0;
    return { x: month, y: cumulativeCount };
  });

  // Group leads by stage
  const leadsByStage = leads.reduce((acc: Record<string, number>, lead) => {
    const stage = lead.stage || 'Okänd';
    acc[stage] = (acc[stage] || 0) + 1;
    return acc;
  }, {});
  const leadsChartData = Object.entries(leadsByStage).map(([stage, count]) => ({ x: stage, y: count }));

  return (
    <Box sx={{ py: 1 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Stats */}
        <Grid item xs={12} md={3}>
          <StatsCard
            title="Aktiva Uppdrag"
            value={assignments.length}
            icon={Assignment}
            isLoading={isLoadingAssignments}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard title="Kontakter" value={contacts.length} icon={Person} isLoading={isLoadingContacts} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard title="Aktiva Leads" value={leads.length} icon={Group} isLoading={isLoadingLeads} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard title="Företag" value={companies.length} icon={Business} isLoading={isLoadingCompanies} />
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Uppdrag över tid
            </Typography>
            {isLoadingAssignments ? (
              <CircularProgress />
            ) : (
              <LineChart
                width={500}
                height={350}
                xAxis={[{ scaleType: 'point', data: cumulativeAssignments.map((d) => d.x), label: 'Månad' }]}
                yAxis={[{ min: 0 }]}
                series={[
                  {
                    data: cumulativeAssignments.map((d) => d.y),
                    label: 'Totalt antal Uppdrag',
                    color: theme.palette.primary.main
                  }
                ]}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Leads per status
            </Typography>
            {isLoadingLeads ? (
              <CircularProgress />
            ) : (
              <BarChart
                height={350}
                xAxis={[{ scaleType: 'band', data: leadsChartData.map((d) => d.x), label: 'Stage' }]}
                series={[
                  {
                    data: leadsChartData.map((d) => d.y),
                    label: 'Antal Leads',
                    color: theme.palette.primary.main
                  }
                ]}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

function StatsCard({
  title,
  value,
  icon: Icon,
  isLoading
}: {
  title: string;
  value: number;
  icon: SvgIconComponent;
  isLoading: boolean;
}) {
  return (
    <Card
      sx={{
        p: 1,
        textAlign: 'center',
        borderRadius: 2,
        border: 1,
        borderColor: 'grey.200',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6
        }
      }}
    >
      <CardContent>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Icon fontSize="large" color="primary" />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
