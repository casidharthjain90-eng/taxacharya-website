import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Company Registration Online | Taxacharya",

  description:
    "Register your Private Limited Company, LLP or OPC online with expert Chartered Accountants. Fast, affordable and hassle-free company registration services across India.",

  alternates: {
    canonical: "/company-registration",
  },
};

export default function CompanyRegistrationPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}

        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">

          <div className="mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

            <div>

              <Badge className="mb-5 bg-blue-700">
                Company Registration Experts
              </Badge>

              <h1 className="text-5xl font-extrabold leading-tight text-gray-900">

                Register Your

                <span className="block text-blue-700">

                  Company Online

                </span>

                With Expert CAs

              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">

                Private Limited Company, LLP, OPC and Startup Registration
                services with complete documentation support across India.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link href="#contact">
                  <Button size="lg">
                    Register Now
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

            <div className="mt-16 lg:mt-0">

              <img
                src="/og-image.jpg"
                alt="Company Registration"
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </section>
                {/* COMPANY TYPES */}

        <section className="py-20 bg-white">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold">
                Company Registration Services
              </h2>

              <p className="mt-4 text-gray-600">
                We help entrepreneurs register different types of business entities.
              </p>

            </div>

          </div>

        </section>
                <section className="py-20 bg-gray-50">

          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-bold text-center mb-12">
              Documents Required
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <Card>

                <CardContent className="p-8">

                  <ul className="space-y-3 list-disc pl-5">

                    <li>PAN Card of Directors</li>
                    <li>Aadhaar Card</li>
                    <li>Passport Size Photograph</li>
                    <li>Mobile Number & Email ID</li>

                  </ul>

                </CardContent>

              </Card>

              <Card>

                <CardContent className="p-8">

                  <ul className="space-y-3 list-disc pl-5">

                    <li>Business Address Proof</li>
                    <li>Electricity Bill</li>
                    <li>Rent Agreement (If Applicable)</li>
                    <li>No Objection Certificate (NOC)</li>

                  </ul>

                </CardContent>

              </Card>

            </div>

          </div>

        </section>

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