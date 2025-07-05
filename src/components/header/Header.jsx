import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <ul className="flex gap-6 m-1 shadow-lg">
                <Link to="/"><li className="rounded-md m-1 ml-3 p-2 hover:bg-gray-200 cursor-pointer">Home</li></Link>
                <Link to="/store"><li className="rounded-md m-1 p-2 hover:bg-gray-200 cursor-pointer">Products</li></Link>
                <Link to="/cart"><li className="rounded-md m-1 p-2 hover:bg-gray-200 cursor-pointer">Cart</li></Link>
            </ul>
        </div>
    );
} 

export default Header;