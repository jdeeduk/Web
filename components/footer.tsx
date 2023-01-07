import Link from "next/link"

export default () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <Link href="#" className="footer-logo mb-4">Echo Photos</Link>
              <ul className="list-inline footer-menu">
                <li className="list-inline-item">
                  <Link href="/#">Home</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/#albums">Albums</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://web.echophotos.io" target="_blank">Web App</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="http://instagram.com/echophotos.io" target="_blank"
                    rel="noreferrer noopener">Instagram</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/#download">Download</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/press">Press</Link>
                </li>
              </ul>
              <p className="copyright-text">Copyright &copy; <Link href="http://www.echolabs.ch"> Echo Labs AG</Link> |
                All right reserved.</p>
              <span className="footer-logo mb-4">Coded with ❤️ in 🇨🇭</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}