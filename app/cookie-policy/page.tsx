import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Cookie Policy | Webfluence",
  description: "How Webfluence uses cookies on this site.",
}

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="July 2026">
      <LegalSection heading="What are cookies">
        <p>
          Cookies are small text files stored on your device that help websites remember
          preferences and understand how they are used.
        </p>
      </LegalSection>
      <LegalSection heading="How we use them">
        <p>
          This site uses only essential and analytics cookies. Essential cookies keep the site
          functioning correctly, such as remembering your currency preference on the pricing
          page. Analytics cookies help us understand which pages are useful so we can improve
          the site. We do not use cookies for advertising or to build a profile of you.
        </p>
      </LegalSection>
      <LegalSection heading="Managing cookies">
        <p>
          Most browsers let you block or delete cookies through their settings. Blocking
          essential cookies may affect how parts of this site behave.
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
