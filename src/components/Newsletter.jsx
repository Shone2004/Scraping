import { useState } from "react";
import {
  Mail,
  CheckCircle,
  ArrowRight,
  Leaf,
  Recycle,
  Phone,
} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-700 to-green-600" />

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-lime-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[32px] shadow-2xl p-8 md:p-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/20 text-emerald-100 font-semibold text-sm mb-6">
            <Leaf size={16} />
            Let's Build a Greener Future
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Join Our
            <span className="block text-emerald-200">
              Sustainability Network
            </span>
          </h2>

          <p className="mt-6 text-lg text-emerald-100 max-w-2xl leading-relaxed">
            Stay updated with the latest recycling initiatives, environmental
            practices, industry news, and sustainable waste management
            solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
            {[
              ["10K+", "Tons Recycled"],
              ["500+", "Business Partners"],
              ["99%", "Waste Recovery"],
              ["24/7", "Support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-white/10 border border-white/10 p-5 text-center hover:bg-white/15 transition"
              >
                <h3 className="text-3xl font-black text-white">{value}</h3>
                <p className="text-emerald-100 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>

          {!subscribed ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">

                <div className="relative flex-1">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-16 rounded-2xl pl-14 pr-5 text-gray-800 bg-white border border-white focus:ring-4 focus:ring-emerald-300 outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="h-16 px-8 rounded-2xl bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition flex items-center justify-center gap-2 shadow-xl"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-3 bg-white/15 border border-white/20 px-8 py-5 rounded-2xl backdrop-blur-md">
                <CheckCircle className="text-emerald-300" />
                <span className="text-white font-semibold">
                  Thank you! You're now part of our sustainability community.
                </span>
              </div>
            </div>
          )}

          {/* Bottom Features */}

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <Recycle className="text-emerald-200" />
              </div>

              <div>
                <h4 className="text-white font-bold">
                  Sustainable Recycling
                </h4>

                <p className="text-emerald-100 text-sm mt-1">
                  Eco-friendly plastic waste processing solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <Leaf className="text-emerald-200" />
              </div>

              <div>
                <h4 className="text-white font-bold">
                  Green Initiatives
                </h4>

                <p className="text-emerald-100 text-sm mt-1">
                  Helping businesses achieve sustainability goals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="text-emerald-200" />
              </div>

              <div>
                <h4 className="text-white font-bold">
                  Expert Assistance
                </h4>

                <p className="text-emerald-100 text-sm mt-1">
                  Dedicated support for all your recycling requirements.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}