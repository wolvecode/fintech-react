import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import  PageLayout  from './components/Layouts/PageLayouts'
import StockChart from './components/Charts/StockChart';
import StockTable from './components/Tables/StockTable';
import OptionTable from './components/Tables/OptionTable'
import TipsWidget from './components/TipsWidget';

function App() {
  const queryClient = new QueryClient();

  const tips = [
    {
      title: 'Gold is up by 20%',
      description: `The biggest factor behind successful financial technology companies' growth year by year is undoubtedly the customer-oriented services they provide. Startups should satisfy customers with fast and agile solutions suitable for the digital age.`,
    },
    {
      title: 'Buy with lowest price',
      description: `New technologies such as artificial intelligence, blockchain, and complex algorithms are areas where financial technology companies are starting to adapt. New technologies provide companies with a variety of possibilities.`,
    },
    {
      title: 'Do what is affordable',
      description: `Regulations, one of the most challenging issues of financial service providers, change over time. Financial technology startups should be prepared for regulations in advance and quickly adapt to these regulations.`,
    },
    {
      title: 'Zoom is up by 20%',
      description: `The price advantage and trust of companies in the financial sector are very important. Customers act according to the feeling of trust when deciding on the company from which they will perform their financial transactions. `,
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
