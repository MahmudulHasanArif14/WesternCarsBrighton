import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Phone, Mail, ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | Western Cars Brighton Private Hire",
  description:
    "Standard terms and conditions of sale for Western Cars Private Hire Limited. Booking, carriage, cancellation, privacy, and general application clauses.",
  alternates: { canonical: `${SITE.url}/terms/` },
  openGraph: {
    title: "Terms & Conditions | Western Cars Brighton",
    description:
      "Standard terms and conditions for Western Cars Brighton private hire bookings.",
    url: `${SITE.url}/terms/`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

type Section = {
  id: string;
  number: string;
  title: string;
  blocks: Block[];
};

type Block =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subclause"; number: string; text: string };

const SECTIONS: Section[] = [
  {
    id: "definitions",
    number: "",
    title: "Definitions",
    blocks: [
      {
        type: "paragraph",
        text: 'In these Conditions: "These Conditions" means the standard terms and conditions of sale set out in this document and (unless the context otherwise requires) includes any special terms and conditions agreed in writing between the Passenger and the Provider; "The Passenger" means the person who accepts a quotation or offer of the Provider for the sale of Services or whose order for the Services is accepted by the Provider; "The Provider" means Western Cars Pvt Hire Ltd. "The Contract" means the contract for the provision of airport transfer services under these Conditions; "The Service" means the service of transport to or from airports (including any instalment of the service or any multiple services) which the Provider is to supply in accordance with these Conditions.',
      },
      {
        type: "paragraph",
        text: "Any reference in these Conditions to a statute or a provision of a statute shall be construed as a reference to that statute or provision as amended, re-enacted or extended at the relevant time.",
      },
      {
        type: "paragraph",
        text: "The headings in these Conditions are for convenience only and shall not affect their interpretation.",
      },
    ],
  },
  {
    id: "conditions",
    number: "1",
    title: "Conditions",
    blocks: [
      {
        type: "subclause",
        number: "1.1",
        text: "The Provider shall sell and the Passenger shall purchase the Service in accordance with any quotation or offer of the Provider which is accepted by the Passenger, or any reservation of the Passenger which is accepted by the Provider, subject in either case to these Conditions, which shall govern the Contract to the exclusion of any other terms and conditions subject to which any such quotation is accepted or purported to be accepted, or any such reservation is made or purported to be made, by the Passenger.",
      },
      {
        type: "subclause",
        number: "1.2",
        text: "A contract will only come in to being upon the acceptance of the Provider of the reservation and the following conditions shall be deemed to be incorporated in the contract. The passenger accepts these terms & conditions by placing a reservation, booking with the provider via but not limited to the providers; web site (https://westerncarsbrighton.co.uk), via telephone, or via any representative agent.",
      },
      {
        type: "subclause",
        number: "1.3",
        text: "The Contract will be subject to these conditions. The provider reserves the right to revise these terms & conditions at any time without prior notice at its sole discretion. Any revised terms and conditions will be posted on the providers web site and will come into effect 1 hour after posting.",
      },
      {
        type: "subclause",
        number: "1.4",
        text: "No reservation submitted by the passenger shall be deemed to be accepted by the provider unless and until confirmed in writing by email telephone or otherwise by an authorised representative of the provider.",
      },
      {
        type: "subclause",
        number: "1.5",
        text: "The specification for the services shall be those set out in the providers sales documentation unless varied expressly in the passengers reservation (if accepted by the provider). The service will only be supplied as stated in the providers price list. Reservations received other than these will be adjusted accordingly. Illustrations, photographs or descriptions whether in the website, brochures, price lists or other documents issued by the provider are intended as a guide only and the contents shall not be binding on the Provider.",
      },
      {
        type: "subclause",
        number: "1.6",
        text: "The Provider reserves the right to make any changes in the specification of the services which are required to conform with any applicable safety or other statutory or regulatory requirements or, where the services are to be supplied to the Providers specification, which do not materially affect their performance.",
      },
      {
        type: "subclause",
        number: "1.7",
        text: "Sub-contracting companies are not authorised to make any representations or claims concerning the service unless confirmed by the Provider in writing by email, telephone or otherwise. In entering into the Contract the Passenger acknowledges that it does not rely on, and waives any claim for breach of, any such representations, which are not so confirmed.",
      },
      {
        type: "subclause",
        number: "1.8",
        text: "No variation to these Conditions shall be binding unless agreed in writing by email, telephone or otherwise between the authorised representations of the passenger and the provider.",
      },
      {
        type: "subclause",
        number: "1.9",
        text: "Sales literature, price lists and other documents issued by the provider in relation to the service are subject to alteration without notice and do not constitute offers to sell the service, which are capable of acceptance. A reservation placed by the passenger may not be withdrawn cancelled or altered prior to acceptance by the provider. No contract for the offer of service shall be binding on the provider unless the provider has issued a quotation which is expressed to be an offer of service; or has accepted a reservation placed by the passenger, by whichever is the earlier of: the Providers written acceptance; delivery of the service. Any typographical, clerical or other accidental errors or omissions in any sales literature, quotation, price list, acceptance of offer, invoice or other document or information issued by the Provider shall be subject to correction without any liability on the part of the Provider. The price of the Service shall be the price listed in the Providers published price list current at the date of acceptance of the passengers reservation or such other price as may be agreed in writing by the provider and the passenger.",
      },
      {
        type: "subclause",
        number: "1.10",
        text: "Where the provider has quoted a price for the service other than in accordance with the Providers published price list the price quoted shall be valid for 24 hours only or such other time as the Provider may specify.",
      },
      {
        type: "subclause",
        number: "1.11",
        text: "The Provider reserves the right, by giving notice to the Passenger at any time before delivery, to increase the price of the service to reflect any increase in the cost to the provider which is due to any factor beyond the control of the provider (such as, without limitation, any foreign exchange fluctuation, currency regulation or alteration of duties, any change in delivery dates, quantities or specifications for the service which is requested by the Passenger, or any delay caused by any instructions of the Passenger or failure of the Passenger to give the Provider adequate information or instructions.",
      },
      {
        type: "subclause",
        number: "1.12",
        text: "The Provider reserves the right to use the services of contractors or sub-contractors (herein known as third parties) to provide services to Passengers. Where appropriate details i.e. names, addresses of any such third parties will be provided by the Provider upon any reasonable request and at the discretion of the Provider.",
      },
      {
        type: "subclause",
        number: "1.13",
        text: "Reservations made for service on the following dates will be subject to an additional surcharge of 100% on published prices: 24th, 25th, 26th, and 31st December & 1st January.",
      },
      {
        type: "subclause",
        number: "1.14",
        text: "A maximum time of 1 hour for address collections & 3 hours for airport collections will be allocated, whereupon non-contact with passengers will classify the reservation to be a no show & will be subject to clauses 3.2 & 4.33.",
      },
      {
        type: "subclause",
        number: "1.15",
        text: "All payments that are made in any other form than cash (pounds sterling) to the Provider for the provision of service & on any confirmed reservations made with the provider directly or indirectly will result in a charge (booking fee) to the passenger of £3.00 sterling (in addition to any cash payment & or discounted price).",
      },
    ],
  },
  {
    id: "carriage",
    number: "2",
    title: "Terms of Carriage",
    blocks: [
      {
        type: "subclause",
        number: "2.1",
        text: "The Providers (herein known as Western Cars) prices are based on Passengers being ready to travel at the booked time. Passengers must book their airport transfer in accordance with check in times and guidelines provided by their relevant airline.",
      },
      {
        type: "subclause",
        number: "2.2",
        text: "All meets apart from airports waiting time are free for the first 5 minutes; thereafter you will be charged 40p per minute on the entire waiting time. Airports meets: 60 minutes free waiting time from the time of landing (additional free waiting time can be requested at time of booking), thereafter you will be charged 40p per minute. (There is no additional charge for flight delays). Fares quoted are flat rates. Any diversions, additional set downs or pickups by passengers will incur a minimum charge of £5.00 per diversion. Fares quoted that are not booked will have a validity of 24 hours. Western Cars reserve the right of altering any prices without prior notification however any quote/booking confirmed by Western Cars will remain binding.",
      },
      {
        type: "subclause",
        number: "2.3",
        text: "Neither Western Cars nor any of its contracted or sub-contracted drivers will accept responsibility for loss or damage to luggage. Passengers are responsible for ensuring that their luggage is loaded/unloaded at all times, if accompanying the luggage on the journey. Western Cars & or its contracted or sub-contracted drivers have the right to refuse any passenger or to make the journey due to the passenger having excess luggage which would result in the vehicle being unsafe whilst in motion.",
      },
      {
        type: "subclause",
        number: "2.4",
        text: "Vehicles are booked by Passengers as requested. Saloon and Estate cars carry a maximum of 4 passengers & luggage. Vehicles to carry a larger no of passengers & luggage are available & are to be booked as required.",
      },
      {
        type: "subclause",
        number: "2.5",
        text: "Western Cars will not carry in its vehicles any of the following:",
      },
      {
        type: "list",
        items: [
          "Explosives, firearms, flammables, tear gas, mace, pepper spray",
          "Perishables",
          "Fragile, breakable, or temperature sensitive items",
          "Pets, insects, animals (other than registered Guide Dogs for the visually impaired)",
          "Cash",
          "Hazardous waste",
          "Pressurized containers",
          "Securities and negotiable papers",
          "Human remains",
          "Alcoholic beverages, or anything containing alcohol",
          "Illegal narcotics/drugs",
        ],
      },
      {
        type: "subclause",
        number: "2.6",
        text: "Western Cars reserves the right to disallow additional goods at any time.",
      },
      {
        type: "subclause",
        number: "2.7",
        text: "In the instance where an accompanied luggage is transported. You agree to defend, indemnify and hold Western Cars and its owners, workers, clients, agents, and driver harmless from all claims, demands, causes of actions, damages, liabilities, costs and expenses, including attorneys' fees, arising from or related to your acts or omissions in connection with your use of the Service and omissions in relation to Western Cars limitations.",
      },
      {
        type: "subclause",
        number: "2.8",
        text: "In the instance where an accompanied luggage is transported. Western Cars will try its level best to deliver the luggage to the exact destination as booked by the passenger. If the driver is unable to obtain a signature for the receipt of luggage on such delivery. The driver is within his remit to return the luggage to our head office where storage and additional delivery costs may be incurred.",
      },
    ],
  },
  {
    id: "cancellations",
    number: "3",
    title: "Cancellations / Cancellation charges",
    blocks: [
      {
        type: "subclause",
        number: "3.1",
        text: "No reservation which has been accepted by the Provider may be cancelled by the Passenger except with the agreement in writing, by email, telephone or otherwise of the Provider and on terms that the Passenger shall indemnify the Provider in full against all loss (including loss of profit), costs (including the cost of all labour and materials used), damages, charges and expenses incurred by the Provider as a result of cancellation.",
      },
      {
        type: "subclause",
        number: "3.2",
        text: "Vehicles that are cancelled by passengers after reservation acceptance by the provider shall incur a £10.00 charge.",
      },
      {
        type: "subclause",
        number: "3.3",
        text: "Cancellations must be informed of a minimum of 24 hours prior to the time of booking by: Telephone: 01293 300000.",
      },
      {
        type: "subclause",
        number: "3.4",
        text: "Cancellations informed 24 hours + prior to the time of booking — £10.00 cancellation charge incurred.",
      },
      {
        type: "subclause",
        number: "3.5",
        text: "Cancellations informed 3 to 24 hours prior to the time of booking — cancellation charge incurred: 50% of quoted price for provision of service.",
      },
      {
        type: "subclause",
        number: "3.6",
        text: "Cancellations not informed up to 3 hours prior to the time of booking — cancellation charge incurred: 100% of quoted price for provision of service.",
      },
    ],
  },
  {
    id: "privacy",
    number: "4",
    title: "Privacy Policy",
    blocks: [
      {
        type: "subclause",
        number: "4.1",
        text: "Western Cars do not store credit card details nor do we share customer details with any 3rd parties. By using the services contained on this website, you agree that we may use Personal information provided by you in order to conduct appropriate anti fraud checks.",
      },
      {
        type: "subclause",
        number: "4.2",
        text: "Personal Information that you provide may be disclosed to a credit reference or fraud prevention agency, which may keep a record of that information.",
      },
    ],
  },
  {
    id: "general",
    number: "5",
    title: "General Applications",
    blocks: [
      {
        type: "subclause",
        number: "5.1",
        text: "The Provider shall not be liable to the Passenger or be deemed to be in breach of the Contract by reason of any delay in delivery or in performing, or any failure to perform, any of the Providers obligations in relation to the Service, if the delay or failure was due to any cause beyond the Providers reasonable control. Without prejudice to the generality of the foregoing, the following shall be regarded as causes beyond the Providers reasonable control directly or indirectly:",
      },
      {
        type: "list",
        items: [
          "Act of God, explosion, flood, tempest, fire or accident.",
          "War or threat of war, sabotage, insurrection, civil disturbance or requisition.",
          "Acts, restrictions, regulations, byelaws, prohibitions or measures of any kind on the part of any governmental, parliamentary or local authority; traffic accidents, traffic hold ups, traffic congestion.",
          "Strikes, lockouts or other industrial actions or trade disputes (whether involving employees of the Provider or of a third party).",
          "Flight delays, flight cancellations; power failure or breakdown in machinery including computer systems.",
        ],
      },
      {
        type: "subclause",
        number: "5.2",
        text: "Subject as expressly provided in these Conditions, all warranties, conditions or other terms implied by statute or common law are excluded to the fullest extent permitted by law.",
      },
      {
        type: "subclause",
        number: "5.3",
        text: "Except as expressly provided in these Conditions, the Provider shall not be liable to the passenger by reason of any representation, or any implied warranty, condition or other term, or any duty at common law or under statute, or under the express terms of the Contract, for any direct or consequential loss or damage sustained by the Passenger (including, without limitation, loss of profit or indirect or special loss), costs, expenses or other claims for consequential compensation whatsoever (and whether caused by the negligence of the Provider, its servants or agents or otherwise) which arise out of or in connection with the supply of the services.",
      },
      {
        type: "subclause",
        number: "5.4",
        text: "The Passenger undertakes to the Provider that: the Passenger will regard as confidential the Contract and all information obtained by the Passenger relating to the business and/or products of the Provider and will not use or disclose to any third party such information without the Providers prior written consent provided that this undertaking shall not apply to information which is in the public domain other than by reason of the Passengers default.",
      },
      {
        type: "subclause",
        number: "5.5",
        text: "The passenger will use all reasonable endeavours to ensure compliance with this condition by its employees, servants and agents. This Condition shall survive the termination of the contract.",
      },
    ],
  },
  {
    id: "miscellaneous",
    number: "6",
    title: "Miscellaneous",
    blocks: [
      {
        type: "subclause",
        number: "6.1",
        text: "No waiver by the provider of any breach of the Contract by the passenger shall be considered as a waiver of any subsequent breach of the same or any other provision.",
      },
      {
        type: "subclause",
        number: "6.2",
        text: "If any provision of these Conditions is held by any competent authority to be invalid or unenforceable in whole or in part the validity of the other provisions of these Conditions and the remainder of the provision in question shall not be affected thereby.",
      },
      {
        type: "subclause",
        number: "6.3",
        text: "The Contract shall be governed by the laws of England & Wales.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
        <div
          className="absolute inset-0 bg-grain opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sand-300/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container-x py-16 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white-500 hover:text-ocean-700 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>

            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sand-200 rounded-full px-4 py-1.5 text-sm font-medium text-white-700 mb-6 shadow-sm">
              <FileText className="w-4 h-4 text-sand-600" />
              Legal
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-white-900 text-balance">
              Terms &amp; Conditions
            </h1>
            <p className="mt-5 text-lg text-white-600 leading-relaxed max-w-2xl text-pretty">
              Standard terms and conditions of sale for Western Cars Private
              Hire Limited, governing all bookings made by phone, email, or
              through{" "}
              <a
                href={SITE.url}
                className="text-ocean-700 underline decoration-sand-400 decoration-2 underline-offset-2 hover:decoration-ocean-600"
              >
                westerncarsbrighton.co.uk
              </a>
              .
            </p>

            <p className="mt-4 text-sm text-white-500">
              Last updated:{" "}
              <time
                dateTime="2026-01-01"
                className="font-medium text-white-700"
              >
                January 2026
              </time>
            </p>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="bg-background border-b border-ink-100">
        <div className="container-x py-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center text-sm">
            <span className="font-semibold text-white-900">
              Questions about these terms?
            </span>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE.phoneLink}
                className="inline-flex items-center gap-2 text-white-700 hover:text-ocean-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-ocean-600" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-white-700 hover:text-ocean-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-ocean-600" />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="py-12 md:py-20 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* TOC */}
            <aside className="hidden lg:block">
              <nav
                aria-label="Table of contents"
                className="sticky top-28 self-start"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white-500 mb-4">
                  On this page
                </p>
                <ul className="space-y-2.5 text-sm">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-white-600 hover:text-sand-700 transition-colors leading-snug"
                      >
                        {s.number && (
                          <span className="font-semibold text-white-900 mr-1.5">
                            {s.number}.
                          </span>
                        )}
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Body */}
            <div className="max-w-3xl">
              {SECTIONS.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-28 ${idx > 0 ? "mt-14 pt-14 border-t border-ink-100" : ""}`}
                >
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-white-900 mb-6 text-balance">
                    {section.number && (
                      <span className="text-sand-600 mr-2">
                        {section.number}.
                      </span>
                    )}
                    {section.title}
                  </h2>

                  <div className="space-y-5 text-white-700 leading-relaxed">
                    {section.blocks.map((block, i) => {
                      if (block.type === "paragraph") {
                        return (
                          <p key={i} className="text-pretty">
                            {block.text}
                          </p>
                        );
                      }

                      if (block.type === "subclause") {
                        return (
                          <div key={i} className="flex gap-3">
                            <span className="font-semibold text-sand-700 shrink-0 tabular-nums">
                              {block.number}
                            </span>
                            <p className="text-pretty">{block.text}</p>
                          </div>
                        );
                      }

                      if (block.type === "list") {
                        return (
                          <ul key={i} className="space-y-2 pl-1">
                            {block.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-white-700"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-sand-500 mt-2.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return null;
                    })}
                  </div>
                </section>
              ))}

              {/* Contact block at end */}
              <div className="mt-14 pt-14 border-t border-ink-100">
                <h2 className="font-display text-2xl font-semibold text-white-900 mb-4">
                  Contact
                </h2>
                <p className="text-white-700 leading-relaxed">
                  Western Cars Private Hire Limited
                  <br />
                  Mocatta House, Trafalgar Place
                  <br />
                  Brighton, BN1 4DU
                </p>
                <p className="mt-4 text-white-700">
                  <a
                    href={SITE.phoneLink}
                    className="font-semibold text-ocean-700 hover:text-ocean-800"
                  >
                    T: {SITE.phone}
                  </a>
                  <br />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-ocean-700 hover:text-ocean-800"
                  >
                    E: {SITE.email}
                  </a>
                </p>
                <p className="mt-6 text-xs text-white-500">
                  Registered in England &amp; Wales, Company No.{" "}
                  {SITE.companyNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
