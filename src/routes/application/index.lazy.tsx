import { Login } from '@components/Login'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { isAuthenticated, useFetchProfile, useGetHtmlContent, useUserQuery } from '@utils/supabase'

export const Route = createLazyFileRoute('/application/')({
  component: () => {
    if (!isAuthenticated()) {
      return <Login />
    }
  
    return <Application />
  }
})

export const Application = () => {
  const { data: rules, error: rulesError, isLoading: rulesLoading } = useGetHtmlContent("rules");
  const { data: user, error: userError, isLoading: userLoading } = useUserQuery();
  const { data: profile, error: profileError, isLoading: profileLoading } = useFetchProfile();
  return (
    <section className="p-2 container d-flex flex-column justify-content-center align-items-center">
    <h1 className="text-white p-2">Application</h1>
      {
        isAuthenticated() && profile && profile.is_admin ? (
          <div className="admin-buttons d-flex gap-2 pb-3">
            <Link to="/admin/rules" className="btn btn-primary">Edit Rules</Link>
            <Link to="/admin/application" className="btn btn-primary">Edit Application</Link>
          </div>
        ) : null
      }
      {
        rules && rules.content ? (
          <div className="col-10 accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <h4>Rules</h4> 
              </button>
              
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" dangerouslySetInnerHTML={{ __html: rules.content }}>
                </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <h4>Application</h4>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
        </div>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
      }

  </section>
  )
}