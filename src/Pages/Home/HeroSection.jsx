export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">আমি, রাকিবুল হাসান শাওন</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">ওয়েব ডেবলপার</span>{" "}
            <br />
            ওয়ে নিয়ে কাজ করি
          </h1>
          <p className="hero--section-description">
            ফেসবুকে যোগাযোগ করতে পারেন
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">এখানে ক্লিক করুন</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/20230917_180200.00_00_25_00.Still001.png" alt="Hero Section" />
      </div>
    </section>
  );
}
