import { Container, Row, Col } from 'react-bootstrap';

export const QnA = () => {
  return (
    <section className="qna" id="QNA">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Common Questions About Me!</h2>
            <p id="QnADescription">
              Get to know me a little more from these questions! If you have any
              more that you would like me to clarify or ask additionally, I'll
              be happy to answer!
            </p>
            {/* Scrollable content here */}
            <div className="qna-bx scrollable-content">
              <p>
                <b>Q: How do you pronounce your last name? </b>
                A:
                <i>"Si-ri-sa-vat"</i>
                <i>
                  {' '}
                  - My last name came from a Lao origin background that was
                  given to me by my parents. Laos is a country in Southeast Asia
                  where there are rich and diverse cultural history that is
                  reflected in its surnames!
                </i>
              </p>

              <p>
                <b>
                  Q: What are some programming languages you've worked with?
                </b>{' '}
                A:{' '}
                <i>
                  I worked with HTML, CSS, JavaScript, Java, Python,and few
                  other frameworks from both Python and JavaScript.
                </i>
              </p>
              <p>
                <b>
                  Q: What are your top 3 skills you consider to be the most
                  proficiently in?
                </b>{' '}
                A:
                <i>
                  <br></br>
                  1. <u>Troubleshooting</u>: I excel at identifying and
                  resolving complex issues, drawing on both technical knowledge
                  and creative problem-solving abilities. <br></br> 2.{' '}
                  <u> Technical Proficiency</u>: I am well-versed in several
                  programming languages, including JavaScript, Java, and Python,
                  which also enables me to adapt to diverse technical
                  environments seamlessly. <br></br>3. <u>Leadership</u>: My
                  experience as a team leader has equipped me with the skills to
                  manage, motivate, and guide teams towards achieving collective
                  goals.
                </i>
              </p>
              <p>
                <b>Q: What are your hobbies besides coding?</b> A:{' '}
                <i>
                  I am an avid enjoyer to many entertainments, but I also have
                  many love to creation! I love making music, learning/playing
                  the piano, and also writing and creating melodies to beats!
                  Though, when I am not in my creative mode, I like to rewind by
                  playing video games and watch recommended videos on Youtube!
                </i>
              </p>
              <p>
                <b>Q: Why do you go by 'Jay' sometimes?</b> A:
                <i>
                  {' '}
                  I went by Jay more often starting from my old job at CVS.
                  There would be another person name 'Gerry', but also
                  pronounced the same as 'Jerry'. But if one of us would be
                  called in the loudspeaker, then we would both get confused and
                  both of us would go up front to respond even if only one of us
                  was needed. Thus, I went by a nickname, Jay instead.{' '}
                </i>
              </p>
              <p>
                <b>
                  Q: Do you play any sports or any other physical activities?
                </b>{' '}
                A:
                <i>
                  {' '}
                  I love to spend my time at the gym exercising. I'm also
                  interested in 'Muy thai' (Thai boxing) where not only I can
                  get in shape a lot faster, but also learn self defense!{' '}
                </i>
              </p>
              <p>
                <b>Q: Do you watch any anime?</b> A:{' '}
                <i>
                  Yes! I love watching action packed and adventure type anime! I
                  started getting into anime more when I watched, 'Naruto
                  Shippuden'. To me, story, character building, and being able
                  to relate to character's struggles and take that as a learning
                  experience to improve, is what keeps me hook on their
                  beautiful story telling. Even when there are fictional
                  characters in the show, there are some very human-like
                  characteristics noticed that I believe we can take away and
                  share with one self.
                </i>
              </p>

              <p>
                <b>Q: Do you have a podcast?</b> A:{' '}
                <i>
                  Yes! Me and my best friend started our own podcast together
                  name, 'Beyond Belief' that is both on Spotify for podcasts and
                  Youtube. We dedicate some of our free time to posting and
                  discussing ideas/ideals, philosophies, world issues, and a
                  little bit about psychology! We have serious discussions and
                  also informal discussions we like to talk about. If interested
                  in joining our discussions or any questions you want to ask,
                  please feel free and join our discord server. There, we
                  eventually will ask our audiences questions, answer questions,
                  create polls, and other awesome content to be added there!{' '}
                  <a href="https://discord.gg/eSYHqusD5t" target="_blank">
                    Join our Discord Community!
                  </a>
                </i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
