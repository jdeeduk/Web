import Head from "next/head"
import Footer from "../components/footer"
import Header from "../components/header"

export default () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">

            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="block">
                <h1 className="font-weight-bold mb-4 font-size-55">Error 404: This page does not exist.</h1>
                <p className="mb-4"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}