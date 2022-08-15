import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading'
const Dashboard = () => {
    const { isLoading, data: users, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-5 pt-5'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum sint, aut omnis autem voluptas sit dicta laboriosam necessitatibus accusantium.</h1>
            <h1>
                {users.length}
            </h1>
        </div>
    );
};

export default Dashboard;