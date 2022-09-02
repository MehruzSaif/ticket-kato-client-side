import React from 'react';

const UsersRow = ({ user, index, setDeleteConfirm, setMakeAdmin, setRemoveAdmin }) => {
    const { email, role } = user

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
          <td>
                {role === 'admin' ? <h1 className=" text-white mr-4">ALREADY ADMIN</h1> : 
                <button
                    className="bg-green-500 p-2 rounded-lg font-semibold"
                  >
                     <label onClick={() => setMakeAdmin(user)} for="make-admin-modal" className='cursor-pointer text-white'>Make Admin</label>
                  </button>
               }
            </td>
             
            <td>
                {role === 'admin' ?
                <button
                    className="bg-red-500 p-2 rounded-lg font-semibold"
                  >
                     <label onClick={() => setRemoveAdmin(user)} for="remove-admin-modal" className="cursor-pointer text-white">Remove Admin</label>
                  </button>
                    
                    :
                    <button
                    className="bg-red-500 p-2 rounded-lg font-semibold"
                  >
                     <label onClick={() => setDeleteConfirm(user)} for="delete-user-modal" class="cursor-pointer text-white">Remove User</label>
                  </button>
                }
            </td>
        </tr>

    );
};

export default UsersRow;