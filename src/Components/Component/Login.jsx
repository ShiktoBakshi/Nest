import { SignIn } from "@clerk/clerk-react";


const Login = () => {
    return (
        <>
            <div className="py-30 flex justify-center items-center bg-[url(https://i.ibb.co.com/5WXGVH7j/Organic-Cage-Grade-A-Large-Eggs.png)] ">
                <SignIn  />
            </div>
        </>
    );
};

export default Login;