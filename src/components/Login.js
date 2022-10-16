import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContextPractice";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const signInFunctionality = async(email,password)=>{
        try {
            const result = await signIn(email,password);
            console.log('SignedIn user', result.user)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = event=>{

        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

        // ** Sign In

        signInFunctionality(email,password);

        
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
            <div className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
