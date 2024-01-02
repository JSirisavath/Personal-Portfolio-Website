import { Container, Row, Col } from 'react-bootstrap';

export const QnA = () => {
  return (
    <section className="qna" id="QNA">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="qna-bx">
              <h2>QnA</h2>
              <h3>Common Questions about me!</h3>
              <p>
                <b>Q:How do you pronounce your last name? </b>
                A:
                <i>"Si-ri-sa-vat"</i>
                <i>
                  {' '}
                  - My last name came from a Lao origin background. Laos is a
                  country in Southeast Asia where there are rich and diverse
                  cultural history that is reflected in its surnames!
                </i>
              </p>
              <p>
                <b>Q:What are your hobbies besides coding?</b> A:{' '}
                <i>
                  I am an avid enjoyer to many entertainments, but I also have
                  many love to creation! I love making music, learning/playing
                  the piano, and also writing and creating melodies to beats!
                  Though, when I am not in my creative mode, I like to rewind by
                  playing video games and watch recommended videos on Youtube!
                </i>
              </p>
              <p>
                <b>Q:Why do you go by 'Jay' sometimes?</b> A:
                <i>
                  {' '}
                  I went by Jay more often starting from my old job at CVS.
                  There would be another person name 'Gerry', but also
                  pronounced the same as 'Jerry'. But one of us would be called
                  in the loudspeaker, we would get confused and both of us would
                  go up front to respond even if only one of us was needed. So
                  to clarify the confusion, I went by my nickname, Jay.{' '}
                </i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
