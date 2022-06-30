import React from 'react';

const SingleToDo = ({single}) => {
    return (
        <div className='bg-white rounded shadow-lg p-4'>
            <h1 className='text-lg'>{single.toDoName}</h1>
        </div>
    );
};

export default SingleToDo;