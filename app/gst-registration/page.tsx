import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "GST Registration Online | Taxacharya",

  description:
    "Apply for GST Registration online with expert Chartered Accountants. Fast GST Registration, GSTIN application and compliance services across India.",

  alternates: {
    canonical: "/gst-registration",
  },
};

export default function GSTRegistrationPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}

<section className="bg-gradient-to-br from-green-50 via-white to-emerald-50">

  <div className="mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

    {/* LEFT */}

    <div>

      <Badge className="mb-5 bg-green-600 hover:bg-green-700">
        GST Registration Experts
      </Badge>

      <h1 className="text-5xl font-extrabold leading-tight text-gray-900">

        Online

        <span className="block text-green-700">
          GST Registration
        </span>

        for Your Business

      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">

        Register your business under GST quickly with expert Chartered
        Accountants. We provide hassle-free GST Registration services
        across India with complete documentation support.

      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link href="#contact">
          <Button size="lg">
            Apply Now
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

      <div className="mt-10 grid grid-cols-2 gap-4">

        <Card>
          <CardContent className="p-5">
            <p className="text-3xl font-bold text-green-700">
              ₹999+
            </p>
            <p className="text-gray-600">
              Starting Price
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-3xl font-bold text-green-700">
              PAN India
            </p>
            <p className="text-gray-600">
              GST Services
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-3xl font-bold text-green-700">
              24 hrs
            </p>
            <p className="text-gray-600">
              Fast Processing
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-3xl font-bold text-green-700">
              CA
            </p>
            <p className="text-gray-600">
              Expert Guidance
            </p>
          </CardContent>
        </Card>

      </div>

    </div>

    {/* RIGHT */}

    <div className="mt-16 lg:mt-0">

      <img
        src="/og-image.jpg"
        alt="GST Registration"
        className="rounded-3xl shadow-2xl"
      />

    </div>

  </div>

</section>
{/* BENEFITS */}

<section className="py-20 bg-white">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose Taxacharya for GST Registration?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Fast GST Registration
          </h3>

          <p className="text-gray-600">
            Complete GST Registration with expert guidance and minimum paperwork.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Expert CA Support
          </h3>

          <p className="text-gray-600">
            Chartered Accountants assist you throughout the registration process.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">
            PAN India Service
          </h3>

          <p className="text-gray-600">
            Online GST Registration services available across all states in India.
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