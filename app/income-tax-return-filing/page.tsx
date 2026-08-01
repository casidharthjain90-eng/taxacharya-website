import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Income Tax Return Filing | Taxacharya",
  description:
    "File your Income Tax Return online with expert Chartered Accountants. Fast, secure and affordable ITR filing services across India.",

  alternates: {
    canonical: "/income-tax-return-filing",
  },
};

export default function IncomeTaxReturnPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}

        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50">

          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <Badge className="mb-6 bg-amber-600">
                Income Tax Experts
              </Badge>

              <h1 className="text-5xl font-extrabold leading-tight">

                File Your

                <span className="block text-amber-700">

                  Income Tax Return

                </span>

                Online

              </h1>

              <p className="mt-6 text-lg text-gray-600">

                Fast, secure and affordable Income Tax Return Filing
                services across India by experienced Chartered
                Accountants.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link href="#contact">
  <Button size="lg">
    File My ITR
  </Button>
</Link>

                <a
  href="https://wa.me/917488211785"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
  >
    WhatsApp Now
  </Button>
</a>

              </div>

            </div>

            <div>

              <img
                src="/og-image.jpg"
                alt="Income Tax Return Filing"
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </section>
                {/* SERVICES */}

        <section className="py-20 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold">

                Income Tax Return Filing Services

              </h2>

              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">

                Expert Income Tax Return filing for salaried employees,
                professionals, freelancers, business owners and investors.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <Card>

                <CardContent className="p-8">

                  <h3 className="text-xl font-bold mb-4">

                    Salaried Individuals

                  </h3>

                  <p className="text-gray-600">

                    Form 16, HRA, deductions, home loan,
                    capital gains and complete ITR filing.

                  </p>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-8">

                  <h3 className="text-xl font-bold mb-4">

                    Business & Professionals

                  </h3>

                  <p className="text-gray-600">

                    Proprietorship, Freelancers,
                    Consultants and Presumptive Taxation.

                  </p>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-8">

                  <h3 className="text-xl font-bold mb-4">

                    Capital Gains & Investments

                  </h3>

                  <p className="text-gray-600">

                    Shares, Mutual Funds,
                    Property Sale, ESOP,
                    Crypto and Foreign Assets.

                  </p>

                </CardContent>

              </Card>

            </div>

          </div>

        </section>

        {/* DOCUMENTS */}

        <section className="py-20 bg-gray-50">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold">

                Documents Required

              </h2>

              <p className="mt-4 text-gray-600">

                Keep these documents ready for quick filing.

              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <Card>

                <CardContent className="p-8">

                  <ul className="space-y-3 list-disc pl-5">

                    <li>PAN Card</li>
                    <li>Aadhaar Card</li>
                    <li>Form 16</li>
                    <li>Salary Slips</li>
                    <li>Bank Statement</li>
                    <li>Interest Certificate</li>

                  </ul>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-8">

                  <ul className="space-y-3 list-disc pl-5">

                    <li>Capital Gain Statement</li>
                    <li>Mutual Fund Statement</li>
                    <li>Home Loan Interest Certificate</li>
                    <li>Investment Proofs</li>
                    <li>Donation Receipts</li>
                    <li>Other Income Details</li>

                  </ul>

                </CardContent>

              </Card>

            </div>

          </div>

        </section>
                {/* WHY CHOOSE US */}

        <section className="py-20 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold">

                Why Choose Taxacharya?

              </h2>

              <p className="mt-4 text-gray-600">

                Trusted Chartered Accountant services with transparent pricing
                and professional support.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-6">

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">👨‍💼</div>
                  <h3 className="font-bold mb-2">Expert CAs</h3>
                  <p className="text-gray-600 text-sm">
                    Experienced Chartered Accountants handling your return.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="font-bold mb-2">Fast Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Quick document verification and filing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">🔒</div>
                  <h3 className="font-bold mb-2">100% Secure</h3>
                  <p className="text-gray-600 text-sm">
                    Your personal and financial data remains confidential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="font-bold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600 text-sm">
                    Call, WhatsApp and Email support throughout the process.
                  </p>
                </CardContent>
              </Card>

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="py-20 bg-amber-50">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold">

                Simple 4-Step Process

              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-6">

              {[
                "Share Documents",
                "CA Verification",
                "ITR Preparation",
                "Return Filing",
              ].map((step, index) => (

                <Card key={index}>

                  <CardContent className="p-8 text-center">

                    <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">

                      {index + 1}

                    </div>

                    <h3 className="font-bold">

                      {step}

                    </h3>

                  </CardContent>

                </Card>

              ))}

            </div>

          </div>

        </section>

        {/* PRICING */}

        <section className="py-20 bg-white">

          <div className="max-w-4xl mx-auto px-6">

            <div className="text-center mb-12">

              <h2 className="text-4xl font-bold">

                Affordable Pricing

              </h2>

            </div>

            <Card className="border-2 border-amber-500">

              <CardContent className="p-10 text-center">

                <h3 className="text-3xl font-bold">

                  Income Tax Return Filing

                </h3>

                <p className="text-6xl font-extrabold text-amber-600 my-6">

                  ₹499*

                </p>

                <p className="text-gray-600">

                  *Starting price. Final fees depend on the complexity of your return.

                </p>

                <a
  href="https://wa.me/917488211785"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    className="mt-8"
    size="lg"
  >
    Get Started
  </Button>
</a>

              </CardContent>

            </Card>

          </div>

        </section>
                {/* FAQ */}

        <section className="py-20 bg-gray-50">

          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold">

                Frequently Asked Questions

              </h2>

            </div>

            <div className="space-y-6">

              <Card>

                <CardContent className="p-6">

                  <h3 className="font-bold text-lg">

                    Who should file an Income Tax Return?

                  </h3>

                  <p className="mt-3 text-gray-600">

                    Every eligible salaried employee, business owner,
                    professional or taxpayer whose income exceeds the
                    prescribed limit or who wishes to claim a refund
                    should file an Income Tax Return.

                  </p>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-6">

                  <h3 className="font-bold text-lg">

                    How long does ITR filing take?

                  </h3>

                  <p className="mt-3 text-gray-600">

                    In most cases, your Income Tax Return can be filed
                    within 24 hours after receiving all required
                    documents.

                  </p>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-6">

                  <h3 className="font-bold text-lg">

                    Can you help with tax notices?

                  </h3>

                  <p className="mt-3 text-gray-600">

                    Yes. We assist in responding to Income Tax notices,
                    defective returns and reassessment proceedings.

                  </p>

                </CardContent>

              </Card>

            </div>

          </div>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="py-20"
        >

          <Contact />

        </section>

      </main>

      <Footer />

    </>
  );
}