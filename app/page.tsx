import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, HeartPulse, Dumbbell, Flower2, MonitorPlay, Users, ShoppingBag } from "lucide-react";

const categories = [
  { name: "Nutrition", text: "Healthy recipes and meal ideas", icon: Leaf, href: "/nutrition" },
  { name: "Recovery", text: "Recover smarter. Feel better.", icon: HeartPulse, href: "/recovery" },
  { name: "Fitness", text: "Movement for every body", icon: Dumbbell, href: "/start-here" },
  { name: "Wellness", text: "Mind, body and daily habits", icon: Flower2, href: "/start-here" },
  { name: "WonderfulLife TV", text: "Videos that educate and inspire", icon: MonitorPlay, href: "/wellness-tv" },
  { name: "Community", text: "Real people. Real results.", icon: Users, href: "/community" },
  { name: "Shop", text: "Products to support your journey", icon: ShoppingBag, href: "/shop" },
];

export default function Home() {
  return (
    <main className="approved-home">
      <section className="approved-hero" aria-label="WonderfulLife premium homepage">
        <Image
          src="/images/homepage-approved.png"
          alt="WonderfulLife.ca premium wellness homepage featuring Zoey above Vancouver harbour on a bright summer afternoon"
          fill
          priority
          sizes="100vw"
          className="approved-hero-image"
        />

        <nav className="hero-hotspots" aria-label="Primary navigation">
          <Link className="hotspot hotspot-nutrition" href="/nutrition">Nutrition</Link>
          <Link className="hotspot hotspot-recovery" href="/recovery">Recovery</Link>
          <Link className="hotspot hotspot-kitchen" href="/kitchen">Kitchen</Link>
          <Link className="hotspot hotspot-youtube" href="/wellness-tv">YouTube</Link>
          <Link className="hotspot hotspot-community" href="/community">Community</Link>
          <Link className="hotspot hotspot-shop" href="/shop">Shop</Link>
          <Link className="hotspot hotspot-search" href="/search" aria-label="Search">Search</Link>
          <Link className="hotspot hotspot-account" href="/sign-in" aria-label="Account">Account</Link>
          <Link className="hotspot hotspot-cart" href="/shop" aria-label="Shopping bag">Shopping bag</Link>
          <Link className="hotspot hotspot-start" href="/start-here">Start Here</Link>
          <Link className="hotspot hotspot-meet" href="/meet-zoey">Meet Zoey</Link>
          <Link className="hotspot hotspot-journey" href="/start-here">Start Your Journey</Link>
          {categories.map((category, index) => (
            <Link
              key={category.name}
              className={`hotspot hotspot-category hotspot-category-${index + 1}`}
              href={category.href}
              aria-label={category.name}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </section>

      <section className="mobile-home" aria-label="WonderfulLife mobile homepage">
        <div className="mobile-home-image" />
        <div className="mobile-home-copy">
          <p className="eyebrow">WonderfulLife.ca</p>
          <h1>Live Your<br />Best Life.</h1>
          <p className="mobile-script">Every Day.</p>
          <p className="mobile-lead">A Zoey-led wellness destination for nutrition, recovery, healthy recipes, movement and everyday inspiration.</p>
          <div className="mobile-actions">
            <Link className="pill primary" href="/meet-zoey">Meet Zoey</Link>
            <Link className="pill" href="/start-here">Start Your Journey</Link>
          </div>
        </div>
      </section>

      <section className="premium-category-section">
        <div className="container premium-category-grid">
          {categories.map(({ name, text, icon: Icon, href }) => (
            <Link className="premium-category" key={name} href={href}>
              <Icon aria-hidden="true" />
              <strong>{name}</strong>
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-intro section">
        <div className="container split">
          <div>
            <div className="eyebrow">Your journey, beautifully simplified</div>
            <h2>Wellness that feels personal.</h2>
            <p className="lead">Explore thoughtful guidance, nourishing recipes, recovery support and daily encouragement—organized around the life you want to build.</p>
            <Link className="text-link" href="/start-here">Discover your wellness path <ArrowRight /></Link>
          </div>
          <div className="home-intro-card">
            <span>Ask Zoey</span>
            <h3>Your friendly AI wellness guide.</h3>
            <p>Get personalized suggestions, discover content and turn one small goal into a practical next step.</p>
            <Link className="pill primary" href="/ask-zoey">Start a conversation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
