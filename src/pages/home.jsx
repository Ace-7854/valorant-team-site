import TwitterFeed from "../assets/TwitterFeed"
import InstagramFeed from "../assets/InstagramFeed";
import Calendar from "../assets/TeamCalendar";
import YoutubeFeature from "../assets/YoutubeFeature";

export default function HomePage() {
    return (
    <main className="home-content">
      <section className="socials-layout">
        <TwitterFeed />
        <InstagramFeed />
      </section>
      <section className="socials-layout">
        <Calendar />
        <YoutubeFeature />
      </section>
    </main>
    )
}