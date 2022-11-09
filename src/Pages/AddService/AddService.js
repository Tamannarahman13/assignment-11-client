import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/services`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='text-center  pb-5'>
            <h1 className='text-2xl'>Add Service</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='border-2 mb-2' placeholder='description' {...register("description")} />
                <input className='border-2 mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='border-2 mb-2' placeholder='photo URl' type="text" {...register("img")} />
                <input className='border-2' type="submit" value='Add service' />
            </form>
        </div>
    );
};

export default AddService;