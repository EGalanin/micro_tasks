import {useState} from 'react';
import {NewComponent} from './components/cashAtm/NewComponent';
import {FullInput} from './components/fullInput/FullInput';

export type FilterType = 'All' | 'RUBLS' | 'Dollars'

function App() {

  const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])

  const [filter, setFilter] = useState<FilterType>('All');

  let curentMoney = money;

  if (filter === 'Dollars' )
    curentMoney = money.filter((item) => item.banknots === 'Dollars');

  if (filter === 'RUBLS' )
    curentMoney = money.filter((item) => item.banknots === 'RUBLS');


  const onclickfilterHandler = (nameBtn: FilterType) => {
    setFilter(nameBtn)
  }

  return (
      <div className="App">
          <FullInput />
          {/*<NewComponent onclickfilterHandler={onclickfilterHandler} curentMoney={curentMoney} />*/}
      </div>
  );
}

export default App;