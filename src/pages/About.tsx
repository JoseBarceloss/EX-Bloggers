import Header from '../components/Header';

export default function About() {
  return (
    <div data-testid="about-page">
      <Header />
      <h1>About</h1>
      <p>
        A blog (a truncation of &quot;weblog&quot;)
        is an informational website published on the
        World Wide Web consisting of discrete, often informal diary-style text entries
        (posts). Posts are typically displayed in reverse chronological order so that the
        most recent post appears first, at the top of the web page.
      </p>
    </div>
  );
}
