import { styles } from "../../styles";

const FacebookFeed = (props) => {
  return (
    <div className="flex justify-center">
      <iframe className="iframe"
        title="Noori Qudsi"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FNoori-Qudsi-Academy-61557104407187%2F&tabs=timeline&width=500&height=1500&small_header=true&adapt_container_width=true&hide_cover=true&small_header=true"
        width={"500px"}
        height={"1500px"}
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </div>
  );
};

export default function Events() {
  return (
    <>
      <h2 className={`${styles.sectionHeadText}`}>Events</h2>
      <div>
        <FacebookFeed />
      </div>
    </>
  );
}

