"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Coffee, Facebook, Instagram, MapPin, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lincoln Coffee"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="Lincoln Coffee"
      description="Port Elizabeth's favorite spot for artisan roasts and cozy mornings. Visit us at Lower Valley Road."
      buttons={[
        {
          text: "See Menu",
          href: "#menu",
        },
        {
          text: "Get Directions",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cocktail-wooden-table-restaurant_23-2147936121.jpg"
      imageAlt="Lincoln Coffee shop interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Quality in Every Cup"
      metrics={[
        {
          icon: Coffee,
          label: "Coffee Varieties",
          value: "12+",
        },
        {
          icon: Users,
          label: "Happy Regulars",
          value: "500+",
        },
        {
          icon: MapPin,
          label: "Years in Valley",
          value: "5",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Cappuccino",
          price: "R35",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup_74190-1845.jpg",
        },
        {
          id: "p2",
          name: "Iced Americano",
          price: "R30",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hand-pouring-milk-coffee-glasses-with-copy-space_23-2148891796.jpg",
        },
        {
          id: "p3",
          name: "Fresh Croissant",
          price: "R25",
          imageSrc: "http://img.b2bpic.net/free-photo/cake-with-walnuts-prunes-dried-apricots-dark-wood-background_505751-5234.jpg",
        },
        {
          id: "p4",
          name: "Pour Over",
          price: "R40",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-organic-coffee-maker_23-2148463971.jpg",
        },
        {
          id: "p5",
          name: "Flat White",
          price: "R35",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-sugar-small-wooden-tray_114579-44785.jpg",
        },
        {
          id: "p6",
          name: "Hot Chocolate",
          price: "R38",
          imageSrc: "http://img.b2bpic.net/free-photo/hot-chocolate_1203-6870.jpg",
        },
      ]}
      title="Freshly Brewed Menu"
      description="Our curated selection of coffees, teas, and light treats, prepared fresh daily in Gqeberha."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Regular",
          testimonial: "The best cappuccino in the Valley! Consistent and friendly service.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-urban-cafe_158595-684.jpg",
        },
        {
          id: "t2",
          name: "Mark D.",
          role: "Coffee Enthusiast",
          testimonial: "Excellent variety of single origin roasts. A must-visit in Port Elizabeth.",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-uses-smartphone-christmas-online-shopping_169016-16942.jpg",
        },
        {
          id: "t3",
          name: "Elena R.",
          role: "Remote Worker",
          testimonial: "My go-to morning spot for work. Great vibe and strong Wi-Fi.",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-girl-freelancer-working-laptop-taking-notes-notebook-sit-alone-cafe-near-window-drink-coffee-professional-writer-make-post-online-blog-prepare-files-business-meeting-after-lunch_197531-22193.jpg",
        },
        {
          id: "t4",
          name: "David K.",
          role: "Local Business Owner",
          testimonial: "A staple in Lower Valley Road. Love the warm atmosphere.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-love-drinking-coffee-coffee-shop_158595-1574.jpg",
        },
        {
          id: "t5",
          name: "Tessa M.",
          role: "Student",
          testimonial: "Very affordable and delicious. The pastry selection is amazing too!",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-suit-drinking-coffee_23-2148230804.jpg",
        },
      ]}
      title="What Locals Say"
      description="Our customers are our biggest fans. Read why locals love Lincoln Coffee."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What are your operating hours?",
          content: "We are open daily and close at 1 pm.",
        },
        {
          id: "q2",
          title: "Do you offer vegan milk options?",
          content: "Yes, we stock almond, soy, and oat milk.",
        },
        {
          id: "q3",
          title: "Is there parking available?",
          content: "Yes, there is plenty of street parking on Lower Valley Road.",
        },
        {
          id: "q4",
          title: "Do you roast your own coffee?",
          content: "We source the finest local and international beans.",
        },
      ]}
      title="Common Questions"
      description="Find out more about our beans, hours, and parking."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={true}
      names={[
        "PE Coffee Roasters",
        "Valley Growers",
        "Local Bakery Co",
        "Gqeberha Business",
        "Eastern Cape Dairy",
        "Valley Fresh Markets",
        "Port Elizabeth Artisans",
      ]}
      title="Proudly Local"
      description="We support local suppliers and the Gqeberha community."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-animated",
      }}
      tag="Visit Us"
      title="Come Say Hello"
      description="14 Lower Valley Rd, Valley, Gqeberha, 6007. Open until 1 pm daily. Call us: 081 254 0909"
      imageSrc="http://img.b2bpic.net/free-photo/coffee-machine-grinder_1150-10944.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Lincoln Coffee"
      copyrightText="© 2025 Lincoln Coffee, Port Elizabeth"
      socialLinks={[
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
