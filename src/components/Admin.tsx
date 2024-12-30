import { isAuthenticated, useFetchProfile } from "@utils/supabase";
import { redirect, useNavigate } from "@tanstack/react-router"
import { AdminMenu } from "./AdminMenu";
import { Login } from "./Login";

export const Admin = () => {
    const { data: profile, error: profileError, isLoading: profileLoading } = useFetchProfile();
    return (
        <section className='admin-section container d-flex gap-2 text-white pt-2'>
            {
                profile && !profile.is_admin ? (
                    <>
                        <p>You are not authorized</p>
                    </>
                ) : profile && profile.is_admin ? (
                    <>
                        <aside className="sidebar col-2 p-3">
                            <AdminMenu />
                        </aside>
                        <main className="col-10 p-2">
                            <h1>Admin Dashboard</h1>
                            <p>
                                Welcome to the admin dashboard. Please select an option from the menu.
                            </p>
                            <div className="dash-info d-flex gap-2">
                                <div className="card col-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Applcations Stats</h5>
                                        <p className="card-text">View the number of applications received and their status.</p>
                                    </div>
                                </div>
                                <div className="card col-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Applcations Stats</h5>
                                        <p className="card-text">View the number of applications received and their status.</p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </>
                ): (
                    <div className="">
                        Loading....
                    </div>
                )

            }
        </section>
    )
}