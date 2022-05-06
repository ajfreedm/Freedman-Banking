// Packages
import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom';

// Components
import Users from '../screens/Users';
import Accounts from '../screens/Accounts';
import AccountCreate from '../screens/AccountCreate';

// Services
import {getAllUsers} from '../services/user';
import {getAllAccounts, postAccount} from '../services/account';


export default function MainContainer() {
const [users, setUsers] = useState([]);
const [accounts, setAccounts] = useState([]);
const history = useHistory();

useEffect(()=>{
    const fetchUsers = async ()=>{
        const userList = await getAllUsers();
        setUsers(userList);
    };
    fetchUsers();
}, []);


useEffect(()=>{
  const fetchAccounts = async ()=>{
      const accountList = await getAllAccounts();
      setAccounts(accountList);
  };
  fetchAccounts();
}, []);


const handleAccountCreate = async (formData) => {
  const newAccount = await postAccount(formData);
  setAccounts((prevState) => [...prevState, newAccount]);
  history.push('/accounts');
};



  return (
    <div>
         <Switch>
         <Route path='/accounts/new'>
         <AccountCreate handleAccountCreate={handleAccountCreate}/>
         </Route>
         <Route path='/users'>
           <Users users={users} />
         </Route>
         <Route path='/accounts'>
           <Accounts accounts={accounts} />
         </Route>
         <Route path='/'>
           <h1>Home</h1>
         </Route>
       </Switch>
    </div>
  )
}
