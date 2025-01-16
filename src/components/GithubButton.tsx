import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GithubButton() {
    return (
        <a
            href="https://github.com/1820ankit2029"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2"
        >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            View on GitHub
        </a>
    );
}