import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Globe,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";

const SERVICES = [
  "AI Web Scraping",
  "Market Intelligence",
  "Tender Monitoring",
  "Compliance Tracking",
  "Custom Dashboard",
];

const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  if (!form.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (form.phone.trim() && !/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const updateField = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // Simulated submit — swap for a real API call when the backend is wired up.
    setTimeout(() => {
      setStatus("success");
      setForm(INITIAL_FORM);
    }, 900);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="badge-pill">Contact Verdant</span>

          <h1 className="text-6xl font-black mt-6 text-gray-900">
            Let's Build
            <span className="gradient-text"> Smarter Waste Intelligence</span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our experts to learn how AI-powered web scraping
            can automate waste management intelligence for your organization.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold mb-10">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-5">
                  <MapPin className="text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Office</h4>
                    <p className="text-gray-500">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Phone className="text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Phone / WhatsApp</h4>
                    <a
                      href="https://wa.me/918806000140?text=Hi%20Verdant%20team,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-emerald-700 transition-colors"
                    >
                      +91 88060 00140
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Mail className="text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href="mailto:hello@verdant.ai"
                      className="text-gray-500 hover:text-emerald-700 transition-colors"
                    >
                      hello@verdant.ai
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Clock className="text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-gray-500">Monday - Friday</p>
                    <p className="text-gray-500">9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Globe className="text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Website</h4>
                    <a
                      href="https://www.verdant.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-emerald-700 transition-colors"
                    >
                      www.verdant.ai
                    </a>
                  </div>
                </div>
              </div>

              {/* Feature Box */}
              <div className="mt-12 premium-card p-8">
                <h3 className="font-bold text-xl mb-6">Why Contact Us?</h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="text-emerald-600 mt-1 shrink-0" size={18} />
                    <span>Free Product Demonstration</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="text-emerald-600 mt-1 shrink-0" size={18} />
                    <span>Custom Enterprise Solutions</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="text-emerald-600 mt-1 shrink-0" size={18} />
                    <span>24×7 Technical Support</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="text-emerald-600 mt-1 shrink-0" size={18} />
                    <span>Consulting Experts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="premium-card p-10">
              {status === "success" ? (
                <div
                  role="status"
                  className="flex flex-col items-center text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle className="text-emerald-600" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Request sent</h2>
                  <p className="text-gray-500 max-w-sm">
                    Thanks for reaching out. A Verdant specialist will get
                    back to you within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-primary mt-8"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-8">Request a Demo</h2>

                  <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field
                        label="Full Name"
                        error={errors.name}
                      >
                        <input
                          className="input-field"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={updateField("name")}
                          aria-invalid={Boolean(errors.name)}
                        />
                      </Field>

                      <Field label="Company Name">
                        <input
                          className="input-field"
                          placeholder="Company Name"
                          value={form.company}
                          onChange={updateField("company")}
                        />
                      </Field>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Email Address" error={errors.email}>
                        <input
                          type="email"
                          className="input-field"
                          placeholder="Email Address"
                          value={form.email}
                          onChange={updateField("email")}
                          aria-invalid={Boolean(errors.email)}
                        />
                      </Field>

                      <Field label="Phone Number" error={errors.phone}>
                        <input
                          type="tel"
                          className="input-field"
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={updateField("phone")}
                          aria-invalid={Boolean(errors.phone)}
                        />
                      </Field>
                    </div>

                    <Field label="Service">
                      <select
                        className="select-field"
                        value={form.service}
                        onChange={updateField("service")}
                      >
                        <option value="">Select Service</option>
                        {SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Project Details">
                      <textarea
                        rows="6"
                        className="input-field resize-none"
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={updateField("message")}
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Request Demo
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-3xl shadow-hero">
            <iframe
              title="Location"
              className="w-full h-[500px]"
              loading="lazy"
              src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="sr-only">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle size={13} />
          {error}
        </p>
      )}
    </div>
  );
}