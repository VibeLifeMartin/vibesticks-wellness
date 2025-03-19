export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-background px-6">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background"></div>
        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold text-primary">
            Unlock Your Highest Potential 🌿
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            A journey into wellness, longevity, and cognitive evolution.
          </p>
          <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg text-lg font-semibold shadow-md hover:bg-primary transition">
            Begin Your Journey
          </button>
        </div>
      </div>
      {/* Thought-Provoking Wellness Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {[
          { title: "Mind Expansion 🧠", desc: "Learn about cognitive enhancement and neuroplasticity." },
          { title: "Longevity & Health 🌱", desc: "Optimize your body for vitality and a longer life." },
          { title: "Emotional Well-being 💖", desc: "Master your emotions and mental clarity." },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      {/* Featured Articles & Wisdom Bites */}
      <div className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-dark">Explore Deep Knowledge</h2>
        <p className="mt-2 text-gray-600">Wisdom and insights that expand your consciousness.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            { title: "The Power of Meditation 🧘", link: "#" },
            { title: "How Food Affects Your Mind 🍎", link: "#" },
          ].map((article, index) => (
            <a key={index} href={article.link} className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-primary">{article.title}</h3>
            </a>
          ))}
        </div>
      </div>
      {/* Join the Community */}
      <div className="mt-16 max-w-4xl mx-auto text-center bg-primary text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold">Join the Movement 🌍</h2>
        <p className="mt-2 text-lg">Connect with like-minded people who are evolving their reality.</p>
        <button className="mt-4 px-6 py-3 bg-secondary text-white rounded-lg text-lg font-semibold shadow-md hover:bg-white hover:text-primary transition">
          Join Now
        </button>
      </div>
    </>
  );
}