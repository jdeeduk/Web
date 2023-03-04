import Head from 'next/head';
import Section from '../components/Section';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Echo Photos - Privacy</title>
      </Head>
      <Section title="Privacy Policy">
        <p>
          Echo Labs AG built the Echo Photos app as a Freemium app. This SERVICE
          is provided by Echo Labs AG at no cost and is intended for use as is.
        </p>
        <p>
          This page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service.
        </p>
        <p>
          If you choose to use our Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that we collect is used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Echo Photos unless
          otherwise defined in this Privacy Policy.
        </p>
        <h3 className="font-weight-bold mb-2">
          Information Collection and Use
        </h3>
        <p>
          Personal data includes any data that is relevant to you personally,
          e.g. name, address, phone number and location. We process your
          personal data whilst observing any applicable data protection
          regulations, with particular reference to the Swiss Data Protection
          Act and any other applicable international and national laws
          pertaining to the processing of personal data. We only collect data
          that is legally or contractually required, or that is necessary for
          the conclusion and promotion of a contract or required for us to be
          able to render our services and process contracts. Voluntary
          information is marked as such. There are no negative consequences of
          not providing this data. However, not providing data may in some cases
          make communication with you difficult or delayed. Specifically, we
          collect and upload your photo and text data when you post it to a
          group. Additionally, when you enables the app to use adress book data,
          limited information is uploaded to our server to identify the user's
          contacts. The thereby collected data is not used to track the user,
          analyze his behavior and neither sold nor shared to any third-party
          service.
        </p>
        <h3 className="font-weight-bold mb-2">Cookies</h3>
        <p>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory.
        </p>
        <p>
          This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </p>
        <h3 className="font-weight-bold mb-2">Security</h3>
        <p>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>
        <h3 className="font-weight-bold mb-2">Links to Other Sites</h3>
        <p>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <h3 className="font-weight-bold mb-2">Children’s Privacy</h3>
        <p>
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do necessary actions.
        </p>
        <h3 className="font-weight-bold mb-2">
          Changes to This Privacy Policy
        </h3>
        <p>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <p>This policy is effective as of 2021-02-01</p>
        <h3 className="font-weight-bold mb-2">Contact Us</h3>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at info@echolabs.ch.
        </p>
      </Section>
    </>
  );
}
