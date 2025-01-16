import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name?: string; // Optional property
    company?: string; // Optional property
    blog?: string; // Optional property
    location?: string; // Optional property
    email?: string; // Optional property
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
  }

export default function GitHubStats(): React.ReactNode {
    const [stats, setStats] = useState<GitHubUser | null>(null);

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/${config.githubUsername}`)
            .then((res) => setStats(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (!stats) return <span className="loading loading-ring loading-lg"></span>;

    return (
        <div className="card w-96 bg-base-200 shadow-xl justify-center items-center">
            <h1 className="mt-3 text-3xl card-title">Github Stats</h1>
            <figure>
                <img src={stats.avatar_url} alt="GitHub Avatar" className="w-24 h-24 rounded-full mt-4" />
            </figure>
            <div className="card-body text-center justify-center items-center">
                <h2 className="card-title">{stats?.name}</h2>
                <p>@{stats?.login}</p>
                <p>Repos: {stats.public_repos} | Followers: {stats.followers}</p>
                <div className="card-actions justify-center">
                    <a
                        href={stats.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-xl" /> View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
