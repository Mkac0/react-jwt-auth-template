import { useContext, useEffect } from 'react';

import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';  // Import the function in the Dashboard component

const Dashboard = () => {
    const { user } = useContext(UserContext);

    useEffect(() => {       // Import the useEffect() hook from React
        const fetchUsers = async () => {    // useEffect() hook that contains a function named fetchUsers()
            try {                   // try...catch block to handle any errors
                const fetchedUsers = await userService.index(); // call the index() function from the userService file
                console.log(fetchedUsers);  // Store the data returned from the function in a variable named fetchedUsers
            } catch (err) {
                console.log(err);
            }
        }
        if (user) fetchUsers();     // call the fetchUsers() function if there is a user
    }, [user]);         // Add the user context to the dependency array of the useEffect() hook

    return (
        <main>
        <h1>Welcome, {user.username}</h1>
        <p>
            This is the dashboard page where you can see a list of all the users.
        </p>
        </main>
    );
};

export default Dashboard;