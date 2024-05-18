'use client'
import { useFormik } from "formik";
import { Navigation } from "@/components/nav/Navigation";


export default function Contact() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })   

    console.log(formik.values)
    return (
        <div className="flex flex-col items-center">
            <Navigation />
        <div className="flex flex-col items-center justify-center gap-midium h-[100vh]">
            
            <h1 className="text-3xl">Contact Me</h1>
            <form onSubmit={formik.handleSubmit} className="flex flex-col w-[400px] gap-midium">
                <div className='flex flex-col'>
                <label htmlFor="name">Name</label>
                <input className='h-[40px] p-[10px] rounded' type="text" placeholder="name" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input className='h-[40px] p-[10px] rounded' type="text" placeholder="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="message">Message</label>
                <input className='h-[40px] p-[10px] rounded' type="text" placeholder="message" name="message" id="message" onChange={formik.handleChange} value={formik.values.message} />
                </div>
                <button className="h-[40px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}