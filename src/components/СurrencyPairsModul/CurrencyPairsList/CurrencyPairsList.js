import CurrencyPairsListItem from '../CurrencyPairsListItem/CurrencyPairsListItem';

function CurrencyPairsList({ toggleTabs, tabNumber }) {
   return (
      <div className={toggleTabs === tabNumber ? `b-tab active` : 'b-tab'}>
         <table className='table'>
            <tbody>
               <tr>
                  <th className='table-heading'>Futures</th>
                  <th className='table-heading'>Last Price</th>
                  <th className='table-heading'>24H Change</th>
                  <th className='table-heading'>24H Low</th>
                  <th className='table-heading'>24H High</th>
                  <th className='table-heading'>24H VOL</th>
               </tr>
               {list.map((pair) => (
                  <CurrencyPairsListItem
                     key={pair.id}
                     pair={pair}
                     sign={'$'}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default CurrencyPairsList;

const list = [
   {
      id: 1,
      first_ticker_name: 'BTC',
      second_ticker_name: 'USDT',
      open_price: '10',
      last_price: '20',
      last_rated_price: '30',
      low_price: '5',
      high_price: '50',
      volume: '340',
   },
   {
      id: 2,
      first_ticker_name: 'ETH',
      second_ticker_name: 'USDT',
      open_price: '15',
      last_price: '25',
      last_rated_price: '35',
      low_price: '10',
      high_price: '60',
      volume: '540',
   },
   {
      id: 3,
      first_ticker_name: 'XRP',
      second_ticker_name: 'USDT',
      open_price: '8',
      last_price: '18',
      last_rated_price: '28',
      low_price: '3',
      high_price: '40',
      volume: '230',
   },
   {
      id: 4,
      first_ticker_name: 'LTC',
      second_ticker_name: 'USDT',
      open_price: '12',
      last_price: '22',
      last_rated_price: '32',
      low_price: '7',
      high_price: '55',
      volume: '360',
   },
   {
      id: 5,
      first_ticker_name: 'BCH',
      second_ticker_name: 'USDT',
      open_price: '20',
      last_price: '30',
      last_rated_price: '40',
      low_price: '15',
      high_price: '70',
      volume: '450',
   },
   {
      id: 6,
      first_ticker_name: 'EOS',
      second_ticker_name: 'USDT',
      open_price: '11',
      last_price: '21',
      last_rated_price: '31',
      low_price: '6',
      high_price: '51',
      volume: '290',
   },
   {
      id: 7,
      first_ticker_name: 'ADA',
      second_ticker_name: 'USDT',
      open_price: '13',
      last_price: '23',
      last_rated_price: '33',
      low_price: '8',
      high_price: '53',
      volume: '310',
   },
   {
      id: 8,
      first_ticker_name: 'TRX',
      second_ticker_name: 'USDT',
      open_price: '7',
      last_price: '17',
      last_rated_price: '27',
      low_price: '4',
      high_price: '37',
      volume: '250',
   },
   {
      id: 9,
      first_ticker_name: 'XLM',
      second_ticker_name: 'USDT',
      open_price: '9',
      last_price: '19',
      last_rated_price: '29',
      low_price: '5',
      high_price: '45',
      volume: '320',
   },
   {
      id: 10,
      first_ticker_name: 'NEO',
      second_ticker_name: 'USDT',
      open_price: '14',
      last_price: '24',
      last_rated_price: '34',
      low_price: '9',
      high_price: '54',
      volume: '380',
   },
   {
      id: 11,
      first_ticker_name: 'IOTA',
      second_ticker_name: 'USDT',
      open_price: '6',
      last_price: '16',
      last_rated_price: '26',
      low_price: '3',
      high_price: '35',
      volume: '270',
   },
   {
      id: 12,
      first_ticker_name: 'BNB',
      second_ticker_name: 'USDT',
      open_price: '17',
      last_price: '27',
      last_rated_price: '37',
      low_price: '12',
      high_price: '65',
      volume: '410',
   },
   {
      id: 13,
      first_ticker_name: 'XEM',
      second_ticker_name: 'USDT',
      open_price: '8',
      last_price: '18',
      last_rated_price: '28',
      low_price: '5',
      high_price: '40',
      volume: '300',
   },
];
