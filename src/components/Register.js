import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContextPractice';

const Register = () => {

    const {createUser,googleAuthentication} = useContext(AuthContext);

   

    const handleSubmit = event=>{

        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        console.log(name,email,password);


        // ** create a user

        createUser(email,password)
        .then((result)=> {
            console.log(result.user);
        })
        .catch(error=> console.error('error', error))
    };

    const googleSigInHandler = ()=>{
        
        const signInGoogle = async ()=>{
            try {
                const result = await googleAuthentication();
                console.log(result.user)
            } catch (error) {
                console.log(error)
            }
        };

        signInGoogle()

    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                required
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                required
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                required
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </div>
            </form>
            <button onClick={googleSigInHandler} type="button" className="btn btn-primary">SignIn Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;