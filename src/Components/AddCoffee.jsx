import React from 'react';

const AddCoffee = () => {

const handleAddCoffee = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const quantity = form.quantity.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    const coffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(coffee)
}


    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h1 className='text-2xl font-extrabold mb-5'>Add a Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* Name & Quantity */}
                <div className='flex gap-5 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Avilable Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* Supplier & Taste */}
                <div className='flex gap-5 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* Category Details */}
                <div className='flex gap-5 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* Photo */}
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Coffee Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn w-full" />
            </form>
        </div>
    );
};

export default AddCoffee;