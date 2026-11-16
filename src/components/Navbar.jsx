import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white sticky top-0 z-10">
      <Link to="/" className="text-2xl font-bold">
        ShopZone
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>

        <Link to="/cart" className="hover:text-yellow-400">
          Cart ({cartCount.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;