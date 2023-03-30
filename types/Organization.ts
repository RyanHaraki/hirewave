import Job from './Job'

type Organization = {
    id: number;
    name: string;
    description: string;
    jobs: Job[];
    website: string;
    logo: string;
}

export default Organization