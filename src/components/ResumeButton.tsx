import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import config from "../config";

export default function ResumeButton() {
  return (
    <a
      href={config.resumeGdriveLink}  // Path to your resume PDF
      download
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary flex items-center text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition"
    >
      <FontAwesomeIcon icon={faDownload} />
      Download Resume
    </a>
  );
}
