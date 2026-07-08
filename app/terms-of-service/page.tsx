import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service | Webfluence",
  description: "The terms that govern working with Webfluence.",
}

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <LegalSection heading="Engagements">
        <p>
          Every project begins with a discovery sprint that ends in a written spec and a firm
          quote. Work only proceeds once that scope and price are agreed in writing. Retainers
          are billed monthly and can be paused or adjusted with notice as described in your
          agreement.
        </p>
      </LegalSection>
      <LegalSection heading="Ownership">
        <p>
          You own the code, repository, infrastructure, and any assets produced for your project
          outright, from day one. We do not retain rights to your product once it is delivered
          or paid for according to your contract.
        </p>
      </LegalSection>
      <LegalSection heading="Payment">
        <p>
          Project fees and retainer invoices are due on the schedule set out in your proposal or
          contract. Late payment may pause active work until the account is settled.
        </p>
      </LegalSection>
      <LegalSection heading="Warranty">
        <p>
          Delivered features carry a 30 day warranty against defects introduced by our work.
          Ongoing support beyond that window is available through an optional retainer.
        </p>
      </LegalSection>
      <LegalSection heading="Limitation of liability">
        <p>
          Webfluence is not liable for indirect or consequential losses arising from use of the
          software we build. Our liability for any claim is limited to the fees paid for the
          relevant engagement.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-amber">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
