import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../config";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function LinkedInButton() {
    return (
        <a
            href={`https://linkedin.com/in/${config.linkedinHandle}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info"
        >
            <FontAwesomeIcon icon={faLinkedin} /> View on LinkedIn
        </a>
    );
}
