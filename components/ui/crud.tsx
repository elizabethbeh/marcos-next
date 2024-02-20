'use client'
import React, { useState } from 'react';

const Crud = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        accountType: '',
        existingCustomer: false,
        comments: ''
    })

    const onChangeHandler = (e: { target: { name: any; value: any; }; }) => setForm({ ...form, [e.target.name]: e.target.value })
    const onSubmitHandler = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(form)
    }
    
    return (
        <>
        <form
            onSubmit={onSubmitHandler}
            action=""
            className="grid grid-cols-1 gap-6"
        >
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        className="form-input mt-1 block w-full"
                        placeholder="John Doe"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        className="form-input mt-1 block w-full"
                        placeholder=""  
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input
                        type="password"
                        className="form-input mt-1 block w-full"
                        placeholder=""
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">Country</span>
                    <select
                        className="form-select mt-1 block w-full"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </label>
                <label className="block">
                    <span className="text-gray-700">Account Type</span>
                    <div className="mt-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="accountType"
                                value="personal"
                            />
                            <span className="ml-2">Personal</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="accountType"
                                value="busines"
                            />
                            <span className="ml-2">Business</span>
                        </label>
                    </div>
                </label>
                <label className="block">
                    <span className="text-gray-700">Existing Customer?</span>
                    <input
                        type="checkbox"
                        className="form-checkbox mt-1 block"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">Comments</span>
                    <textarea
                        className="form-textarea mt-1 block w-full"
                        rows={3}
                        placeholder="Enter some long form content."
                        onChange = {onChangeHandler}
                    ></textarea>
                </label>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </form>

        </>
    )
}

export default Crud 