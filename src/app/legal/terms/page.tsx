import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/buttons/Button';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <Card className="max-w-4xl mx-auto p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600">Effective date: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our service, you agree to be bound by these terms. 
              If you disagree with any part, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. User Responsibilities</h2>
            <p className="mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Not use the service for any illegal purpose</li>
              <li>Not interfere with the service's operation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by us 
              and are protected by international copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Termination</h2>
            <p>
              We may terminate or suspend access to our service immediately, without prior notice, 
              for any breach of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall we be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of the service.
            </p>
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