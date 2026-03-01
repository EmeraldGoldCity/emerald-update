import { useState } from 'react';
import { Building, FileText, Upload, Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

export function AffiliatesPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    dotNumber: '',
    email: '',
    phone: '',
  });
  const [insuranceFile, setInsuranceFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInsuranceFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ companyName: '', dotNumber: '', email: '', phone: '' });
      setInsuranceFile(null);
    }, 3000);
  };

  const benefits = [
    'Access to our premium client base',
    'Competitive commission structure',
    'Marketing and promotional support',
    'Flexible partnership terms',
    'Professional training provided',
    'Dedicated affiliate support team',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#d4af37]">Affiliate</span> Program
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join our network of transportation partners and grow your business with Emerald City Limos
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Information Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Emerald City Limos is looking for professional transportation companies to join our affiliate network. As a partner, you'll gain access to our extensive client base and benefit from our reputation for excellence in luxury transportation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Benefits</h3>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-700 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-yellow-50 border-2 border-emerald-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-700">•</span>
                    <span>Valid DOT number</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-700">•</span>
                    <span>Current commercial insurance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-700">•</span>
                    <span>Professional chauffeurs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-700">•</span>
                    <span>Quality fleet maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-700">•</span>
                    <span>Commitment to excellence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Affiliate Application</h3>
                
                {submitted ? (
                  <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                    <p className="text-gray-700">
                      Thank you for your interest. We'll review your application and contact you within 2-3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Name */}
                    <div>
                      <Label htmlFor="companyName" className="flex items-center space-x-2 mb-2">
                        <Building className="w-4 h-4" />
                        <span>Company Name *</span>
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your company name"
                        className="w-full"
                      />
                    </div>

                    {/* DOT Number */}
                    <div>
                      <Label htmlFor="dotNumber" className="flex items-center space-x-2 mb-2">
                        <FileText className="w-4 h-4" />
                        <span>DOT Number *</span>
                      </Label>
                      <Input
                        id="dotNumber"
                        name="dotNumber"
                        type="text"
                        value={formData.dotNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your DOT number"
                        className="w-full"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="company@example.com"
                        className="w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="flex items-center space-x-2 mb-2">
                        <Phone className="w-4 h-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(555) 123-4567"
                        className="w-full"
                      />
                    </div>

                    {/* Insurance Upload */}
                    <div>
                      <Label htmlFor="insurance" className="flex items-center space-x-2 mb-2">
                        <Upload className="w-4 h-4" />
                        <span>Insurance Certificate *</span>
                      </Label>
                      <Input
                        id="insurance"
                        type="file"
                        onChange={handleFileChange}
                        required
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Upload your current insurance certificate (PDF, JPG, or PNG)
                      </p>
                      {insuranceFile && (
                        <p className="text-sm text-emerald-700 mt-2">
                          Selected: {insuranceFile.name}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-6 text-lg"
                    >
                      Submit Application
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our terms and conditions for affiliate partnerships.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Questions?</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Contact our affiliate team for more information about partnership opportunities.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+12065959675" className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800">
                    <Phone className="w-4 h-4" />
                    <span>(206) 595-9675</span>
                  </a>
                  <a href="mailto:client@emeraldcitylimos.com" className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800">
                    <Mail className="w-4 h-4" />
                    <span>client@emeraldcitylimos.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}