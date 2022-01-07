import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import  PageLayout  from './components/Layouts/PageLayouts'
import StockChart from './components/Charts/StockChart';
import StockTable from './components/Tables/StockTable';
import OptionTable from './components/Tables/OptionTable'
import TipsWidget from './components/Tips';

function App() {
  const queryClient = new QueryClient();

  const tips = [
    {
      title: 'Gold is up by 20%',
      description: `To offer an inside look into the world of fintech,
       Trilogy Education Services, a 2U Inc. brand, recently hosted a
        Tech Talk titled “Breaking Into the Fintech Industry.”`,
    },
    {
      title: 'Learning fintech technology',
      description: `Did you know that completing a fintech boot
       camp can prepare you for a variety of roles in this rapidly
        growing field? Whether you have experience in finance or are
         just getting started in the field`
    },
    {
      title: 'Regulations',
      description: `Regulations, one of the most challenging issues of
       financial service providers, change over time. Financial technology
        startups should be prepared for regulations in advance and quickly
         adapt to these regulations.`,
    },
    {
      title: 'Insight',
      description: `To offer an inside look into the world of fintech,
       Trilogy Education Services, a 2U Inc. brand, recently hosted a 
       Tech Talk titled “Breaking Into the Fintech Industry.” During 
       the discussion, Alison Abbington sat down with Mike McCoy, 
       Associate Director of Emerging Technology at Humana.`
    },
  ];
  
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout title='Buy and invest in stock holdings'>
      <main>
          <div>
            <StockChart />
          </div>
          <div className='flex flex-wrap lg:flex-nowrap my-5 justify-between px-2 sm:px-2 md:px-10 lg:px-14'>
            <div className='w-full md:w-5/12 md:flex-grow lg:w-3/12 mt-4 mr-3 lg:mr-16 py-6'>
              <StockTable />
            </div>
             <div className='w-full md:w-5/12 md:flex-grow lg:w-3/12 mt-4 mr-3 lg:mr-16 py-6'>
               <OptionTable />
             </div>
             <div className='w-full md:w-6/12 lg:w-3/12 mt-4 mr-3 lg:mr-16 py-6'>
               <TipsWidget tips={tips} />
             </div>
          </div>
        </main>
      </PageLayout>
    </QueryClientProvider>
  );
}

export default App;
