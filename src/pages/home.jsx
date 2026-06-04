import TwitterFeed from "../assets/TwitterFeed"
import InstagramFeed from "../assets/InstagramFeed";

export default function HomePage() {
    return (
    <main className="home-content">
      <section className="socials-layout">
        {/* <TwitterFeed /> */}
        <InstagramFeed />
      </section>
    </main>
    )
}