import React  from 'react';
// import axios from 'axios';
import Loader from './TableLoader';
// import { getStocks } from '@api';

export default function StockTable() {
    // const [stocks, setStocks] = useState([]);

    // useEffect(() => {
    //     axios.get("localhost:8000/api/stocks")
    //     .then((res) => {
    //         setStocks(res.data.data);
    //         console.log(stocks)
    //     })
    //     .catch(err => err)
    //   }, [stocks]) 
  const stocks = {
      data: {
        "data": [
            {
                "type": "stocks",
                "id": "1",
                "attributes": {
                    "name": "Jackson PLC",
                    "price": "367.060887",
                    "sell_rate": "21.0",
                    "rate_change_percent": "17.0",
                    "created_at": "2022-01-06T08:52:42.000000Z"
                }
            },
            {
                "type": "stocks",
                "id": "2",
                "attributes": {
                    "name": "Yandex",
                    "price": "754.3643104",
                    "sell_rate": "24.0",
                    "rate_change_percent": "37.0",
                    "created_at": "2022-01-06T08:52:42.000000Z"
                }
            },
            {
                "type": "stocks",
                "id": "3",
                "attributes": {
                    "name": "JD.com",
                    "price": "243.4834049",
                    "sell_rate": "54.0",
                    "rate_change_percent": "67.0",
                    "created_at": "2022-01-06T08:52:42.000000Z"
                }
            },
            {
                "type": "stocks",
                "id": "4",
                "attributes": {
                    "name": "StoneCo",
                    "price": "500.59919315",
                    "sell_rate": "32.0",
                    "rate_change_percent": "93.0",
                    "created_at": "2022-01-06T08:52:42.000000Z"
                }
            },
            {
                "type": "stocks",
                "id": "5",
                "attributes": {
                    "name": "HDFC Bank",
                    "price": "515.31577294",
                    "sell_rate": "41.0",
                    "rate_change_percent": "44.0",
                    "created_at": "2022-01-06T08:52:42.000000Z"
                }
            },
            {
                "type": "stocks",
                "id": "6",
                "attributes": {
                    "name": "Zoom Holdings",
                    "price": "373.2001229",
                    "sell_rate": "10.0",
                    "rate_change_percent": "21.0",
                    "created_at": "2022-01-06T08:52:42.000000Z"
                }
            }
        ]
    }
  }

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between items-center pl-2 md:pl-0 mb-8 md:mb-10'>
        <h2 className='text-black-900 text-xl font-semibold font-head'>
          Stocks
        </h2>
        <a
          href='#'
          className='text-primary-100 bg-indigo-100 px-4 py-1 rounded'>
          Buy New
        </a>
      </div>
      <table className='w-full'>
        <tbody className='divide-y divide-gray-200"'> 
          {stocks.data && Array.isArray(stocks.data.data) ? (
            stocks.data.data.map(({ id, attributes }) => (
              <tr className='' key={id}>
                <td>{attributes.name}</td>
                <td className='px-6 py-4 text-sm text-right'>
                  <span className='text-primary-500 bg-gray-600 px-1 py-1 text-sm  rounded mr-2'>
                    £{Math.ceil(attributes.price)}
                  </span>
                  <span className='text-green text-head text-sm md:text-base font-medium md:font-bold'>
                    {attributes.rate_change_percent}%
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </div>
  );
}