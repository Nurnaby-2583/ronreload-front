import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    typeof document !== undefined ? import("bootstrap/dist/js/bootstrap") : null
}, [])
  return (
    <div>
      <Head>
                <title>RonReload</title>
            </Head>
            <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand fs-1 fw-semibold" href="#">RON <span className="fst-italic">ORP</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex" role="search">
                <nav className="nav underlineHover">
                    <a className="nav-link" href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/azure`}>Login</a>
                </nav>
                <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/azure`}><button className="btn btn-outline-secondary rounded-pill signup" >Sign up</button></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
