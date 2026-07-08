import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy | Webfluence",
  description: "How Webfluence collects, uses, and protects your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <LegalSection heading="What we collect">
        <p>
          When you reach out through our contact form, book a discovery call, or email us
          directly, we collect the information you provide: your name, email address, company,
          project details, and anything else you choose to share. We do not require an account
          to browse this site.
        </p>
      </LegalSection>
      <LegalSection heading="How we use it">
        <p>
          We use your details solely to respond to your enquiry, scope your project, and follow
          up about work you have asked us about. We do not sell, rent, or trade your information
          to third parties.
        </p>
      </LegalSection>
      <LegalSection heading="Analytics">
        <p>
          We may use privacy respecting analytics to understand how visitors use this site, such
          as which pages are viewed and how long people stay. This data is aggregated and is not
          used to identify individuals.
        </p>
      </LegalSection>
      <LegalSection heading="Data retention">
        <p>
          We keep enquiry and project information for as long as needed to deliver the work and
          to satisfy our legal and accounting obligations. You can ask us to delete your data at
          any time.
        </p>
      </LegalSection>
      <LegalSection heading="Your rights">
        <p>
          You can ask us what information we hold about you, request a correction, or request
          deletion at any time by emailing{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-amber">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-amber">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
