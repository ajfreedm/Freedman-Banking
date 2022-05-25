import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getOneAccount} from '../services/account';

export default function AccountDetail() {
    const [account, setAccount] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const fetchAccountItem = async () => {
            const accountItem = await getOneAccount(id);
            setAccount(accountItem);
        }
        fetchAccountItem();
    }, [id])


  return (
    <div>
        { account && (
            <div>
                <h3>{account.id}{account.user_id} {account.category} {account.balance}</h3>
            </div>
        )}
    </div>
  )
}
