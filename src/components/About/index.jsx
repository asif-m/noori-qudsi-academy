import { styles } from '../../styles';

const services = [
  { icon: "🕌", text: "5 Daily congregational prayers in Jamaa’t" },
  { icon: "🕋", text: "Friday – Jumuah Prayer" },
  { icon: "📖", text: "Talks and lectures on Islam" },
  { icon: "🎓", text: "Islamic Education for children and adults, and more…" },
];

const About = () => {
  return (
    <section>
      <p className={styles.sectionSubText}>Who we are</p>
      <h2 className={styles.sectionHeadText}>About us</h2>
      <div className="mt-3 h-1 w-14 bg-yellow-400 rounded-full" />

      <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl">
        Noori Qudsi Academy is a Masjid in Manteca, committed to serving the Muslim
        community through the authentic teachings and traditions of Ahl as-Sunnah wal-Jamāʻah.
      </p>
      <p className="mt-3 text-gray-500 text-sm font-medium">Services and programs we offer:</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div
            key={s.text}
            className="group flex flex-col items-center text-center gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
              {s.icon}
            </span>
            <p className="text-sm font-semibold text-gray-700">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
