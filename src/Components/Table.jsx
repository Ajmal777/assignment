import React from 'react'

const Table = ({ data }) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Submission Count</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.length > 0 && (
                        data.map(user => 
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.count}</td>
                        </tr>)
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table