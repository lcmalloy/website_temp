import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import LinkDetails from "./Types/LinkDetails"

interface NavlinkProps {
  linkDetails: LinkDetails;
}

const Navlink = (props: NavlinkProps) => {
  const { linkDetails } = props;
  return (
    <div>
      <li className="text-center" key={`--navlink-${linkDetails.path}`}>
        <a href={`/${linkDetails.path.split(' ').join('')}`}>{linkDetails.path}</a>
        {linkDetails.isDropdownMenu && (
            <FontAwesomeIcon icon={faChevronDown} />
        )}
      </li>
    </div>
  );
};

export default Navlink;
