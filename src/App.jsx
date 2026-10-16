const players = [
  {
    number: "07",
    name: "Fuhad",
    age: 15,
    role: "Winger",
    foot: "Left foot",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Footballer moving with the ball on a pitch",
    className: "player-card--fuhad",
    description:
      "A fearless, dynamic winger with a dangerous left foot. Fuhad loves to take on his marker, attack the space behind a defence and make something happen in the final third.",
    traits: ["1v1 threat", "Direct runner", "Creative edge"],
  },
  {
    number: "04",
    name: "Emmanuel",
    age: 13,
    role: "Centre-back",
    foot: "Composed on the ball",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Football match under stadium lights",
    className: "player-card--emmanuel",
    description:
      "A modern centre-back who is comfortable receiving under pressure and starting attacks from the back. Emmanuel reads the game with maturity and is learning to make his composure a real defensive weapon.",
    traits: ["Ball-playing", "Calm under pressure", "Game reader"],
  },
  {
    number: "06",
    name: "Stephen",
    age: 18,
    role: "Midfielder",
    foot: "196 cm",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Footballer sprinting during a match",
    className: "player-card--stephen",
    description:
      "At 196 cm, Stephen brings presence and power to midfield. He has the tools to grow into a commanding, all-action player in the mould of Emre Can—and the ambition to earn that comparison.",
    traits: ["196 cm", "Powerful presence", "Big-stage ambition"],
  },
  {
    number: "08",
    name: "Quadri",
    age: 18,
    role: "Central midfielder",
    foot: "All-action engine",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Footballer controlling the ball in a stadium",
    className: "player-card--quadri",
    description:
      "A complete midfield presence: Rodri's control, Kanté's relentless energy and Seedorf's drive. Quadri can protect the back line, win the ball and carry the team forward when the moment calls for it.",
    traits: ["Ball winner", "Press-resistant", "Box-to-box range"],
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Next XI Academy home">
          <span className="brand-mark">N<span>XI</span></span>
          <span className="brand-name">NEXT XI <small>ACADEMY</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#academy">Our academy</a>
          <a href="#squad">The squad</a>
          <a href="#pathway">The pathway</a>
        </nav>
        <a className="header-cta" href="mailto:hello@nextxi.academy">
          Get in touch <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo" role="img" aria-label="Footballer on a pitch" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><span /> AFRICAN TALENT. GLOBAL AMBITION.</p>
            <h1>THE NEXT<br />GENERATION<br /><em>STARTS HERE.</em></h1>
            <p className="hero-copy">
              Big talent doesn’t wait for its moment. We help young African
              players prepare to make theirs.
            </p>
            <a className="button button--lime" href="#squad">
              Meet the players <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-side-note">IDENTIFIED HERE. READY FOR ANYWHERE.</div>
          <div className="hero-bottom">
            <span>01 / THE ACADEMY</span>
            <span className="hero-scroll">SCROLL TO DISCOVER ↓</span>
          </div>
        </section>

        <section className="intro section-wrap" id="academy">
          <div className="section-label"><span>01</span> WHO WE ARE</div>
          <div className="intro-content">
            <h2>MORE THAN<br />A PLACE TO PLAY.</h2>
            <div className="intro-text">
              <p>
                We are a football academy built around one belief: the next
                great player could come from anywhere. We spot promise early,
                develop the whole player and create a pathway for ambitious
                young talent to reach the biggest stages.
              </p>
              <p>
                With coach and scout Jabar leading the vision, every session is
                about sharper decisions, stronger character and the confidence
                to be different.
              </p>
              <a className="text-link" href="#coach">Meet the coach <ArrowIcon /></a>
            </div>
          </div>
          <div className="stat-strip">
            <div><strong>04</strong><span>ONES TO WATCH</span></div>
            <div><strong>01</strong><span>BIG SHARED DREAM</span></div>
            <div><strong>∞</strong><span>ROOM TO GROW</span></div>
            <p>THE WORK STARTS<br />LONG BEFORE KICK-OFF.</p>
          </div>
        </section>

        <section className="squad section-wrap" id="squad">
          <div className="section-heading">
            <div>
              <div className="section-label"><span>02</span> THE SQUAD</div>
              <h2>BUILT DIFFERENT.<br /><em>GOING FURTHER.</em></h2>
            </div>
            <p>Four players. Four different games.<br />One goal: the biggest stage.</p>
          </div>
          <div className="player-grid">
            {players.map((player) => (
              <article className={`player-card ${player.className}`} key={player.name}>
                <div className="player-image">
                  <img src={player.image} alt={player.imageAlt} loading="lazy" />
                  <span className="player-number">{player.number}</span>
                  <span className="player-age">{player.age} YEARS</span>
                </div>
                <div className="player-info">
                  <div className="player-title">
                    <h3>{player.name}</h3>
                    <span>{player.role}</span>
                  </div>
                  <p>{player.description}</p>
                  <div className="player-tags">
                    {player.traits.map((trait) => <span key={trait}>{trait}</span>)}
                  </div>
                  <div className="player-footnote">{player.foot}<span>↗</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="coach-section" id="coach">
          <div className="coach-image" role="img" aria-label="Coach watching training on a football pitch" />
          <div className="coach-copy">
            <div className="section-label"><span>03</span> THE EYE BEHIND THE VISION</div>
            <h2>MEET<br />COACH <em>JABAR.</em></h2>
            <p>
              An elite scout with a sharp eye for prominent African talent,
              Jabar sees more than what a player can do today. He looks for
              character, potential and the hunger to keep improving.
            </p>
            <p>
              His mission is simple: find the ones with something different,
              then help them turn that difference into their greatest strength.
            </p>
            <a className="text-link" href="mailto:hello@nextxi.academy">
              Connect with the academy <ArrowIcon />
            </a>
          </div>
          <div className="coach-quote">
            <span>“</span>
            <p>THE BEST TALENT ISN’T ALWAYS THE LOUDEST.<br />YOU HAVE TO KNOW WHAT YOU’RE LOOKING FOR.</p>
            <small>JABAR — HEAD COACH & SCOUT</small>
          </div>
        </section>

        <section className="pathway section-wrap" id="pathway">
          <div className="pathway-top">
            <div>
              <div className="section-label"><span>04</span> THE BIGGER PICTURE</div>
              <h2>LOCAL ROOTS.<br /><em>EUROPEAN HORIZONS.</em></h2>
            </div>
            <div className="pathway-copy">
              <p>
                Our ambition is to connect academy talent with opportunities
                across top European football. Through our club partnerships and
                growing network, we’re working to open doors for the right
                players at the right time.
              </p>
              <p className="pathway-note">A pathway built on preparation, trust and performance.</p>
            </div>
          </div>
          <div className="pathway-route" aria-label="Player development pathway">
            <div><span>01</span><strong>DISCOVER</strong><small>Spot the potential</small></div>
            <i aria-hidden="true">→</i>
            <div><span>02</span><strong>DEVELOP</strong><small>Build the player</small></div>
            <i aria-hidden="true">→</i>
            <div><span>03</span><strong>CONNECT</strong><small>Open the right doors</small></div>
            <i aria-hidden="true">→</i>
            <div><span>04</span><strong>DELIVER</strong><small>Own the big stage</small></div>
          </div>
        </section>

        <section className="closing">
          <div className="closing-bg" />
          <div className="closing-content">
            <div className="section-label"><span>05</span> THE MINDSET</div>
            <h2>THE URGE<br />TO BE <em>DIFFERENT.</em></h2>
            <p>
              We could stay back when others decide to. But the urge to be
              different keeps us going. Every day, every session, every step
              closer to the biggest stage.
            </p>
            <a className="button button--lime" href="mailto:hello@nextxi.academy">
              Start a conversation <ArrowIcon />
            </a>
          </div>
          <div className="closing-mark">N<span>XI</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-mark">N<span>XI</span></span>
          <span className="brand-name">NEXT XI <small>ACADEMY</small></span>
        </a>
        <span>BUILT FOR THE BIG STAGE.</span>
        <a href="mailto:hello@nextxi.academy">LET’S TALK <ArrowIcon /></a>
        <small>© 2026 NEXT XI ACADEMY</small>
      </footer>
    </>
  );
}

export default App;
