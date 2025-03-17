import { Link } from "react-router";

export default function NavSubItem({label, href}) {
 return (
    <Link to={`/kategori${href}`} className="flex items-center gap-golden-md justify-between py-golden-md hover:bg-black-20s-13l px-golden-lg rounded-sm"><span>{label}</span><svg
          xmlns="http://www.w3.org/2000/svg"
          width="1rem"
          height="1rem"
          viewBox="0 0 56 56"
        >
          <path
            fill="currentColor"
            d="M18.695 48.367c.586 0 1.102-.234 1.524-.633L38.78 29.57c.446-.445.68-.984.68-1.57c0-.61-.234-1.172-.68-1.57L20.22 8.289a2.07 2.07 0 0 0-1.524-.656a2.12 2.12 0 0 0-2.156 2.156c0 .563.258 1.125.633 1.524L34.21 28L17.17 44.688c-.374.398-.632.937-.632 1.523c0 1.219.938 2.156 2.156 2.156"
          />
        </svg></Link>
 );
}
