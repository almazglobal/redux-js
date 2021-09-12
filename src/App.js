import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.customerReducer.customers)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name,
        }
        dispatch({type: 'ADD_CUSTOMER', payload: customer})
    }

    return (
        <div className={"App"}>
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
                <button onClick={() => addCustomer(prompt())}>Add customer</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(item => <div>{item.name}</div>)}
                </div>
                :
                <div>No customers</div>
            }
        </div>

    );
}

export default App;
