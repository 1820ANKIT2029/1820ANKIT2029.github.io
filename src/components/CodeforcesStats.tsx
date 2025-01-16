import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

interface CodeforcesUser {
    handle: string;
    rating: number;
    maxRating: number;
    rank: string;
    contribution: number; // Optional property (based on API docs)
    contestRating: number; // Optional property (based on API docs)
    friendOfCount: number; // Optional property (based on API docs)
    ratedContestCount: number; // Optional property (based on API docs)
    lastOnlineTimeSeconds: number; // Optional property (based on API docs)
}

export default function CodeforcesStats(): React.ReactNode {
    const [stats, setStats] = useState<CodeforcesUser | null>(null);

    useEffect(() => {
        axios
            .get(`https://codeforces.com/api/user.info?handles=${config.codeforceHandle}`)
            .then((res) => setStats(res.data.result[0]))
            .catch((err) => console.log(err));
    }, []);

    if (!stats) return <span className="loading loading-ring loading-lg"></span>;

    return (
        <div className="card w-96 bg-base-200 shadow-xl justify-center items-center">
            <h1 className="mt-3 text-3xl card-title">Codeforces Stats</h1>
            <div className="card-body text-center justify-center items-center">
                <h2 className="card-title">{stats.handle}</h2>
                <p>Rating: {stats.rating} | Max Rating: {stats.maxRating} ({stats.rank})</p>
                <div className="card-actions justify-center">
                    <a
                        href={`https://codeforces.com/profile/${config.codeforceHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        View Codeforces Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
