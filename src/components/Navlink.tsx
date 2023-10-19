import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {LinkDetails} from "./Types/LinkDetails"
import { Link } from 'react-router-dom'

interface NavlinkProps {
  linkDetails: LinkDetails;
}

const Navlink = (props: NavlinkProps) => {
  const { linkDetails } = props;
  const path = linkDetails.path.split(' ').join('')
  return (
    <div>
      <li className="text-center" key={`--navlink-${linkDetails.path}`}>
        <Link to={`/${path}`}>{linkDetails.path}</Link>
        {linkDetails.isDropdownMenu && (
            <FontAwesomeIcon icon={faChevronDown} />
        )}
      </li>
    </div>
  );
};

export default Navlink;
