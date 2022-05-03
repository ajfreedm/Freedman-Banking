import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom';
import Users from '../screens/Users';
import Accounts from '../screens/Accounts';
import {getAllUsers} from '../services/user';
import {getAllAccounts} from '../services/account';

export default function MainContainer() {
const [users, setUsers] = useState([]);
const [accounts, setAccounts] = useState([]);

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


  return (
    <div>
         <Switch>
         <Route path='/accounts/new'>
           <h1>Create form</h1>
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
