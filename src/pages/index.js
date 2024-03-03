import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
  const workshop_info = [
    {
      image: "./assets/event1.png",
      title: "Hack: Mobile Dev w/ Flutter",
      descript:
        "Join ACM Hack for an introduction to mobile development with Flutter and Dart! You will be learning how to set up your first Flutter application and the basics of Dart. Then, you will be using the skills we learned to create your own Hangman mobile game!",
      link: "https://acmucsd.com/events/hack%3A-mobile-dev-w%2F-flutter-d6e0d8ae-f587-4bcb-9894-b2b78cefb7d3",
    },
    {
      image: "./assets/event2.png",
      title: "Advanced Chrome Extension",
      descript:
        "Join us in building on the transcript summarizer chrome extension. We will be publishing it chrome web store, sending the notes straight to your notion and improving the UI!",
      link: "https://acmucsd.com/events/advanced-chrome-extension-17edf45e-7d18-458b-b722-99978de90482",
    },
    {
      image: "./assets/event3.png",
      title: "Software Engineering Intern Panel",
      descript:
        "Interested in learning more about life as an industry software engineer? Join us for an insightful session where software engineering interns share their firsthand experiences. Discover the strategies they employed during their time at UCSD that paved the way to securing internships.",
      link: "https://acmucsd.com/events/software-engineering-intern-panel-c8df001c-a823-4f11-bee1-1422ce9b8c3c",
    },
    {
      image: "./assets/me.png",
      title: "Intro to Responsive Web Design",
      descript:
        "Join ACM Hack for an immersive workshop on responsive web design, where you'll dive into the core concepts of creating visually stunning and adaptable websites. We will cover media queries, CSS grid, flexbox, and other concepts to make your website look good on any device!",
      link: "https://acmucsd.com/events/intro-to-responsive-web-design-282dcd77-d210-48c3-b162-8050ad75393d",
    },
  ];
  return (
    <div className={styles.main}>
      <Navbar />
      <h1 className={styles.section_header}>Workshops</h1>
      <div className={styles.news_cards}>
        {workshop_info.map((workshop, index) => (
          <Card key={index} {...workshop} />
        ))}
      </div>
    </div>
  );
}
