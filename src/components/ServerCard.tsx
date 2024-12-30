import { Login } from '@components/Login'
import { getImage } from '@utils/media';
import { useFetchProfile } from '@utils/supabase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faLink } from "@fortawesome/free-solid-svg-icons";
import { parseJson, stringToLocalDate } from '@utils/strings';
import { Tables } from 'src/database.types';
import { useEffect, useState } from 'react';
type GameServer = Tables<"game_servers">;
// {"server_ip":"192.168.1.1","server_pass":"password123","server_player_cap":"100","server_start_date":"2023-10-01T00:00:00Z"}
type ServerDetails = {
    server_ip: string;
    server_pass: string;
    server_player_cap: string;
    server_start_date: string;
}
export const ServerCard = ({ server }: { server: GameServer }) => {
    const { data: profile, error: profileError, isLoading: profileLoading } = useFetchProfile();
    const [serverInfo, setServerInfo] = useState<GameServer | null>(server);
    const isAdmin: boolean = profile != null && profile.is_admin ? true : false;
    const server_banner = getImage(server.banner_image ? server.banner_image : "default_server_banner")
    // {"server_ip":"192.168.1.1","server_pass":"password123","server_player_cap":"100","server_start_date":"2023-10-01T00:00:00Z"}}
    return (
        <div className="card col-4">
            {
                serverInfo && serverInfo.details != null ? (

                    <>
                        <img src={server_banner} className="card-img-top server-banner" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{server.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex gap-2 align-items-center">
                                <FontAwesomeIcon icon={faGamepad} title="Game" />
                                {server.game}
                            </li>
                            <li className="list-group-item d-flex gap-2 align-items-center">
                                <FontAwesomeIcon icon={faLink} title="Server IP" />
                                {serverInfo.details.server_ip}
                            </li>
                            <li className="list-group-item d-flex gap-2 align-items-center">
                                <FontAwesomeIcon icon={faGamepad} title="Game" />
                                {server.game}
                            </li>
                            <li className="list-group-item d-flex gap-2 align-items-center">
                                <FontAwesomeIcon icon={faGamepad} title="Game" />
                                {server.game}
                            </li>
                        </ul>

                        <div className="card-footer">
                            {
                                isAdmin ? (
                                    <div className="btn-wrap d-flex gap-2">
                                        <a href={`/admin/servers/${server.id}`} className="btn btn-info col-6">Edit</a>
                                        <a href={`/admin/servers/${server.id}/delete`} className="btn btn-danger col-6">Delete</a>
                                    </div>
                                ) : null
                            }
                            <p className="card-text p-1 text-center"><small>Last Updated: {stringToLocalDate(serverInfo.updated_at)}</small></p>
                        </div>
                    </>
                ) : null
            }

        </div>
    )
}