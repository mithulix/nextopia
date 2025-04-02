import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/buttons/Button';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <Card className="max-w-4xl mx-auto p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly, including when you create an account, 
              fill out forms, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal identification (name, email address)</li>
              <li>Account credentials</li>
              <li>Payment information (processed securely by our payment processor)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send notices</li>
              <li>Respond to your requests and questions</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal data against unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <div className="mt-12 text-center">
            <Link href="/auth/register">
              <Button variant="outline">
                Return to Registration
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}