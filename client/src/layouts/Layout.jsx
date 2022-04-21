import { Link }from 'react-router-dom'

export default function Layout(props) {
    const {currentUser, handleLogout} = props;

    return (
        <div>
            <header>
        <h1>Freedman-Banking</h1>
        {currentUser ? (
            <div
            ><p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <Link to='/login'>Login/Register</Link>
        )}
            </header>
            {props.children}    
        </div>
    )
}
