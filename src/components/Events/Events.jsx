import { styles } from "../../styles";
import { recentPosts, upcomingEvents, facebookPageUrl } from "../../constants/facebookPosts";

// Extract a YouTube video id from the common URL shapes; returns null if not YouTube.
function getYouTubeId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/|live\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

// Drop duplicates (same video/post pasted in different URL shapes renders once).
function dedupe(list) {
  const seen = new Set();
  return list.filter((url) => {
    const key = getYouTubeId(url) || url;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function YouTubeCard({ id }) {
  return (
    <div className="w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function FacebookCard({ url }) {
  // Render via the plain iframe plugin instead of the Facebook JS SDK. The SDK's
  // FB.XFBML.parse() is blocked by iOS Safari's tracking prevention, so the
  // SDK-hydrated embed shows up blank on iPhone/iPad. The iframe plugin needs no
  // client-side script and renders reliably; a fallback link guarantees access
  // even when the iframe itself is blocked.
  const src = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
    url
  )}&show_text=true&width=350`;
  return (
    <div className="w-[350px] max-w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
      <iframe
        className="h-[500px] w-full"
        src={src}
        title="Facebook post"
        loading="lazy"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="block border-t border-gray-100 px-4 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-gray-50"
      >
        View on Facebook
      </a>
    </div>
  );
}

function FeedGrid({ items, center }) {
  const layout = center
    ? "mt-6 flex flex-wrap justify-center gap-6"
    : "mt-6 grid grid-cols-1 gap-6 justify-items-center lg:grid-cols-2";
  return (
    <div className={layout}>
      {items.map((url) => {
        const youTubeId = getYouTubeId(url);
        return youTubeId ? (
          <YouTubeCard key={youTubeId} id={youTubeId} />
        ) : (
          <FacebookCard key={url} url={url} />
        );
      })}
    </div>
  );
}

function FeedSection({ items, label, title, emptyState, center }) {
  const list = dedupe(items);

  if (list.length === 0 && !emptyState) return null;

  return (
    <section>
      <p className={styles.sectionSubText}>{label}</p>
      <h2 className={styles.sectionHeadText}>{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-yellow-400" />
      {list.length === 0 ? emptyState : <FeedGrid items={list} center={center} />}
    </section>
  );
}

export function UpcomingEvents() {
  return <FeedSection items={upcomingEvents} label="Join us" title="Upcoming Events" center />;
}

export function RecentPosts() {
  return (
    <FeedSection
      items={recentPosts}
      label="Stay connected"
      title="Featured"
      emptyState={
        <div className="mt-6 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100">
          <p className="text-gray-600">Follow us on Facebook for the latest updates.</p>
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-lg bg-primary px-5 py-2 font-semibold text-white transition-colors hover:bg-green-800"
          >
            Visit our Facebook Page
          </a>
        </div>
      }
    />
  );
}
