import { useFetchProfile, useGetServers, useUserQuery } from "@utils/supabase";
import { Login } from "@components/Login";
import { useEffect } from "react";
import { ServerCard } from "./ServerCard";
import { Tables } from 'src/database.types';
type GameServer = Tables<"game_servers">;
import "@styles/servers.scss";
import { Link } from "@tanstack/react-router";
export const Servers = () => {
    const { data: servers, error, isLoading: loading } = useGetServers();
    const { data: user, error: userError, isLoading: userLoading } = useUserQuery();
    const { data: profile, error: profileError, isLoading: profileLoading } = useFetchProfile();
    return (
        <section className="p-2 container d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-white p-2">Servers</h1>
            {
                profile && profile.is_admin ? (
                    <Link to="/admin/servers" className="btn btn-primary mb-2">Add New Server</Link>
                ) : null
            }
            <div className="d-flex justify-content-center gap-3">
            {
                        servers != null ? (
                            (servers as GameServer[]).map((server: GameServer) => (
                                <ServerCard server={server} />
                            ))
                        ) : error ? (
                            <p>No servers found</p>
                        ) : loading ? (
                            <p>Loading...</p>
                        ) : (
                            <p>No servers found</p>
                        )
                    }
            </div>
        </section>
    )
}