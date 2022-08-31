import React, {useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import axios from "axios";
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [rating, setRating] = useState()
    const [review, setReview] = useState()
    const [img, setImg] = useState()
    // const handleAddReview = event => {
    //     event.preventDefault();
    //     const review = {
    //         email: user.email,
    //         name: user.displayName,
    //         photo:user.photoURL,
    //         rating: parseInt(event.target.ratings.value),
    //         review: event.target.description.value,
    //     }

    //     fetch('https://hidden-stream-11117.herokuapp.com/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 toast.success("Review added Successfully!");
    //                 event.target.ratings.value = ''
    //                 event.target.description.value = ''
    //             }
    //             else {
    //                 toast.error("Failed to add review!");
    //             }
    //         });
    // }
    const handleAddReview = async (event) => {
        event.preventDefault();
        console.log(name,email,rating,img,review)
        try {
            const res=await axios.post("https://hidden-stream-11117.herokuapp.com/reviews",{name:name,email:email,rating:rating,img:img,review:review})
           
            toast.success("Review added Successfully!");
                   setName('')
                   setEmail('')
                   setRating('')
                   setReview('')
                   setImg('')
                }
        catch (err) {
            // console.log(err.response.data)
        }
    };
    return (
         <div className='flex justify-center items-center my-6 lg:mx-0 mx-4'>
                <div class="card pr-8 lg:w-3/5 shadow-xl text-center bg-slate-300">
                    <h1 className='text-3xl text-slate-700 my-4 font-bold'>Add Your Review</h1>
                    <form onSubmit={handleAddReview} className='text-center'>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Name</span>
                    </label>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" class="input input-bordered input-lg w-full mb-4 mx-4" name='name' />
                        <label className="label ml-6">
                        <span className="label-text text-lg">Email</span>
                    </label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" class="input input-bordered input-lg w-full mb-4 mx-4" name='email' />
                        <label className="label ml-6">
                        <span className="label-text text-lg">Ratings</span>
                    </label>
                        <input type="number" onChange={(e) => setRating(e.target.value)} value={rating} placeholder="Rating ( Max Star 5)" class="input input-bordered input-lg w-full mb-4 mx-4" name='ratings' required />
                        <label className="label ml-6">
                        <span className="label-text text-lg">Img URL</span>
                    </label>
                        <input type="text" onChange={(e) => setImg(e.target.value)} value={img} placeholder="Img link" class="input input-bordered input-lg w-full mb-4 mx-4" name='img' required />
                        <label className="label ml-6">
                        <span className="label-text text-lg">Comment</span>
                    </label>
                        <textarea type="text" onChange={(e) => setReview(e.target.value)} value={review} placeholder="You Comment!" class="input input-bordered input-lg w-full h-36 mb-4 mx-4" name='description' required />
                        <input type="submit" value="Add Review" className='btn border-0 bg-cyan-500 mb-4' required />
                    </form>
                </div>
            </div>
    );
};

export default AddReview;