import { useFetchProfile, useGetHtmlContent, useUpdateHtmlContent, useUserQuery } from "@utils/supabase";
import { AdminMenu } from "./AdminMenu";
import { useState, useEffect } from "react";
import { WysiwygEditor } from "./AppEditor";

export const Rules = () => {
    const { data: rules, error: rulesError, isLoading: rulesLoading } = useGetHtmlContent("rules");
    const { data: user, error: userError, isLoading: userLoading } = useUserQuery();
    const { data: profile, error: profileError, isLoading: profileLoading } = useFetchProfile();
    const mutation = useUpdateHtmlContent();
    const [editRules, setEditRules] = useState(false);
    const [rulesContent, setRulesContent] = useState(rules);

    useEffect(() => {
        if (rules && rules.content) {
            setRulesContent(rules.content);
        }
    }, [rules]);

    const handleContentChange = (content: string) => {
        setRulesContent(content);
    };
    const handleSave = () => {
        mutation.mutate({ id: rules.id, content: rulesContent });
    };

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
                <h1>Edit Rules</h1>
                <p>
                    Edit the rules for applications here.
                </p>
                <div className="dash-info d-flex flex-column gap-2">
                    <div className="card col-12">
                        <div className="card-body">
                            <h5 className="card-title d-flex gap-2 align-items-center">Rules
                                <button onClick={() => {
                                    if (editRules) {
                                        handleSave();
                                    }
                                    setEditRules(!editRules);
                                }} className={`btn show-rules ${!editRules ? "btn-danger" : "btn-success"}`}>
                                    { !editRules ? "Edit Rules" : "Save Rule" }
                                </button>
                            </h5> 
                            {
                                !editRules ? (
                                    <div className="card-text" dangerouslySetInnerHTML={{ __html: rulesContent }}></div>
                                ) : null
                            }
                            {
                                editRules ? (
                                    <WysiwygEditor content={rulesContent} onContentChange={handleContentChange} />
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </main>
                    </>
                ) : (
                    <div className="">
                        Loading....
                    </div>
                )

            }
        </section>
    );

};