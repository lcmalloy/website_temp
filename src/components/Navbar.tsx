import NavLink from "./Navlink";
import {LinksDetails} from "./Types/LinkDetails"

interface NavbarProps {
  links: LinksDetails;
  isLocation: string;
}

const Navbar = (props: NavbarProps) => {
  const { links } = props;
  const link = links.map((link) => (
    <NavLink key={`--navlink-${link.path}`} linkDetails={link} />
  ));
  if (props.isLocation === "header") {
    return (
      <nav>
        <ul className="nav | flex-group">{link}</ul>
      </nav>
    );
  }
  // if (props.isLocation === "footer") {
  //     return (
  //         <nav>
  //             <ul className="nav">
  //             {props.links.map(path =>
  //                 <li className="text-center" key={path}><a href={`/${path}`}>{path}</a></li>
  //             )}
  //             </ul>
  //         </nav>
  //     )
  // }

  return null;
};

export default Navbar;
