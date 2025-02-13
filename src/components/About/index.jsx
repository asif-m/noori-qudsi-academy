import { styles } from '../../styles';

const About = () => {
  return (
    <div>
      <h6 className={styles.sectionHeadText}>About us</h6>
      <div>Noori Qudsi Academy is an Islamic organization dedicated to serving the muslim community based on authentic traditions of Ahl as-Sunnah wal-Jamāʻah.</div>
      <div className='py-3'></div>
      <div>Services and programs it offers include:</div>
      <div className='py-3'></div>
      <div className='flex gap-6 flex-wrap flex-row items-center'>
        <div className=" rounded overflow-hidden shadow-lg p-10 bg-yellow-300">5 Daily congregational prayers in Jamaa’t</div>
        <div className=" rounded overflow-hidden shadow-lg p-10 bg-yellow-300">Friday - Jumuah Prayer </div>
        <div className=" rounded overflow-hidden shadow-lg p-10 bg-yellow-300">Talks and lectures on Islam</div>
        <div className=" rounded overflow-hidden shadow-lg p-10 bg-yellow-300">Islamic Education for children and adults and more…</div>
      </div>
    </div>
  );
};

export default About;
