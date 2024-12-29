import { createClient, Session } from "@supabase/supabase-js";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { Tables } from "../database.types";
import { useEffect, useState } from "react";
type GameServer = Tables<"game_servers">;
type Profile = Tables<"profiles">;
export const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_KEY_ANON
);

export const useSession = () => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		// Fetch initial session on component mount
		const getSession = async () => {
			const { data, error } = await supabase.auth.getSession();
			if (!error) {
				setSession(data?.session ?? null);
			} else {
				console.error("Error fetching session:", error);
			}
		};

		getSession();

		// Set up the auth state listener
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setSession(session);
			}
		);

		// Cleanup the listener on unmount
		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	return session;
};
const fetchUser = async () => {
	const session = supabase.auth;	
	const getSession = await session.getSession()
	if (session && getSession && getSession.data.session) {
		return getSession.data.session.user.user_metadata
	} else {
		return null;
	}
};
export function useUserQuery() {
    return useQuery({
        queryKey: ['user'],
        queryFn: fetchUser, // Directly pass the fetch function
		staleTime: 1000 * 60 * 30
    });
}
export const useFetchProfile = () => {
	return useQuery<Profile>({
		queryKey: ["profile"],
		queryFn: () => fetchProfile(),
		refetchOnWindowFocus: false,
	});
}
export const fetchProfile = async () => {
	const { data, error } = await supabase
    .from('profiles')
    .select('*')
	.single();
	if (error) {
		console.error('Error fetching servers:', error);
		return null;
	}
	return data ?? null;
}

export function isAuthenticated() {
    return fetchUser( ) != null;
}
export const signInWithDiscord = async () => {
	const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
		options: {
			redirectTo: import.meta.env.VITE_REDIRECT_URL,
		},
	});
	if (error) throw error;
    
    return data;
};
export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	window.location.reload();
	if (error) throw error;
};
// if width is passed resize the image
export const useGetServers = () => {
	return useQuery<GameServer[]>({
		queryKey: ["servers"],
		queryFn: () => getServers(),
		refetchOnWindowFocus: false,
	});
}
export const getServers = async () => {
	const { data, error } = await supabase
    .from('game_servers')
    .select('*')
	if (error) {
		console.error('Error fetching servers:', error);
		return null;
	}
	return data ?? null;
}
// export const updateContestStatus = async (contestId: string, status: string) => {
// 	const { data, error } = await supabase
// 	.from('art_contest')
// 	.update({ status: status })
// 	.eq("id", contestId)
// 	.select()
// 	if (error) {
// 		console.error(error);
// 	}
// 	return data;
// };  

// export const getUserRole = async (): Promise<Roles | null>=> {
// 	const { data, error } = await supabase
// 		.from("user_roles")
// 		.select("*")
// 		.single();
// 	if (error) {
// 		return null;
// 	}
// 	return data ?? null;
// }

// export const useGetRoles = () => {
// 	return useQuery({
// 		queryKey: ['roles'],
// 		queryFn: getUserRole,
// 	});
// }