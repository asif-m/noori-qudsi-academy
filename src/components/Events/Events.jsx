import { useEffect } from "react";
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

// Load Facebook's embed SDK once, and re-parse whenever FB embeds are present.
function useFacebookEmbeds(hasFacebook) {
  useEffect(() => {
    if (!hasFacebook) return;
    if (window.FB?.XFBML) {
      window.FB.XFBML.parse();
      return;
    }
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
      document.body.appendChild(script);
    }
  }, [hasFacebook]);
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
  return (
    <div className="w-[350px] max-w-full overflow-x-auto">
      <div className="fb-post" data-href={url} data-width="350" />
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
  useFacebookEmbeds(list.some((url) => !getYouTubeId(url)));

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
