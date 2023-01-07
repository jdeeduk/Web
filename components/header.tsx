import Link from "next/link"

export default () => {
  return (
    <header id="download">
      <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
          <Link className="navbar-brand" href="/"><img src="/images/logo125.png" height="50" alt="" /></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center text-lg-left">
              <li className="nav-item">
                <Link className="nav-link" href="/#features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#albums">Albums</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#desktop">Desktop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#download">Download</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}