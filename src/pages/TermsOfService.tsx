import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Le Grand Legal Summit website and
                services, you acknowledge that you have read, understood, and
                agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Event Registration
              </h2>
              <p className="text-gray-700 mb-4">
                Registration for Le Grand Legal Summit events is subject to
                availability. All registrations are final and non-refundable
                unless the event is cancelled by the organizers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. User Conduct
              </h2>
              <p className="text-gray-700 mb-4">
                Users are expected to conduct themselves professionally and
                respectfully during all event interactions. Any inappropriate
                behavior may result in removal from the event without refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 mb-4">
                All content, materials, and presentations at Le Grand Legal
                Summit are protected by intellectual property laws. Unauthorized
                recording, distribution, or reproduction is strictly prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                Le Grand Legal Summit and its organizers shall not be liable for
                any direct, indirect, incidental, or consequential damages
                arising from participation in the event or use of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Privacy Policy
              </h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our{' '}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Privacy Policy
                </Link>{' '}
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting on this
                website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us at{' '}
                <a
                  href="mailto:info@legrandlegalsummit.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  info@legrandlegalsummit.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
