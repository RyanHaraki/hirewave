import Applicant from "./Applicant";
import Organization from "./Organization";

type Job = {
    id: string;
    title: string;
    applicants: Applicant[];
    description: string;
    location: string;
    salary: string;
    department: string;
    type: string;
    // organization: Organization[];
}

export default Job;
