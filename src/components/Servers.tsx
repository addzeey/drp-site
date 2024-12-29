import { useFetchProfile, useGetServers, useUserQuery } from "@utils/supabase";
import { Login } from "@components/Login";
import { useEffect } from "react";
import { ServerCard } from "./ServerCard";
import { Tables } from 'src/database.types';
type GameServer = Tables<"game_servers">;
import "@styles/servers.scss";
export const Servers = () => {
    const { data: servers, error, isLoading: loading } = useGetServers();
    const { data: user, error: userError, isLoading: userLoading } = useUserQuery();
    const { data: profile, error: profileError, isLoading: profileLoading } = useFetchProfile();
    return (
        <section className="p-5 container d-flex flex-column justify-content-center align-items-center">
            <h1>Servers</h1>
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