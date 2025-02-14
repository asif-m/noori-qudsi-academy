import { styles } from '../../styles';

const About = () => {
  return (
    <div className='block'>
      <h6 className={styles.sectionHeadText}>About us</h6>
      <div>Noori Qudsi Academy is an Islamic organization dedicated to serving the muslim community based on authentic traditions of Ahl as-Sunnah wal-Jamāʻah.</div>
      <div className='py-3'></div>
      <div>Services and programs it offers include:</div>
      <div className='py-3'></div>
      <div className="block">
        <div className="flex flex-wrap justify-center gap-6"> {/* Added justify-center */}
          <div className="w-64 h-48 rounded overflow-hidden shadow-lg p-6 bg-yellow-300 flex items-center justify-center text-center">
            5 Daily congregational prayers in Jamaa’t
          </div>
          <div className="w-64 h-48 rounded overflow-hidden shadow-lg p-6 bg-yellow-300 flex items-center justify-center text-center">
            Friday - Jumuah Prayer
          </div>
          <div className="w-64 h-48 rounded overflow-hidden shadow-lg p-6 bg-yellow-300 flex items-center justify-center text-center">
            Talks and lectures on Islam
          </div>
          <div className="w-64 h-48 rounded overflow-hidden shadow-lg p-6 bg-yellow-300 flex items-center justify-center text-center">
            Islamic Education for children and adults and more…
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
