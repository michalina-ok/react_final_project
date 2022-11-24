function Header() {
  return (
    <header>
      <h1>Your e-mails carbon footprint</h1>
      <section>
      <div className="left">
      <h2>Every email you send or receive has a carbon footprint.</h2>
      <p>This comes from the electricity used to power the computers that send and receive the mail, and the to power the servers use to store the emails and their attachments.</p>
      <p>Even spam and unread messages have a carbon footprint.</p>
      </div>
      <div className="right">
      <h3>Estimated C02 emmisions from emails in 2019</h3>
      <p>150 million tonnes</p>
    <h4>But what does this mean for you?</h4>
    <p>Have a look in your email folders, and use our carbon calculator to see the effect your email habits are having on the environment.</p>
    </div>
    </section>
    </header>
  );
}

export default Header;
