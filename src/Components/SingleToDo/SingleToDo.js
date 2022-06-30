import React from 'react';

const SingleToDo = ({single}) => {
    return (
        <div className='bg-white rounded shadow-lg p-4 flex justify-between'>
            <h2 className='text-lg'>{single.toDoName}</h2>
            <p className='text-lg'>{single.Date}</p>
            <button className='btn hover:bg-red-500 hover:text-white bg-red-100 text-red-500 border-none'>Edit</button>
        </div>
    );
};

export default SingleToDo;