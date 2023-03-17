import overview_content from 'helpers/staticContent/product';
import styled from 'styled-components';

const Product = () => {
  return (
    <>
      <PageHeader>Product</PageHeader>
      <PageBody>
        {overview_content.map((content, index) => {
          return (
            <Section>
              <Subtitle>{content.title}</Subtitle>
              {content?.paragraphs?.map((paragraph, index) => {
                return <Paragraph>{paragraph}</Paragraph>;
              })}
            </Section>
          );
        })}
      </PageBody>
    </>
  );
};

const PageHeader = styled.h1`
  font-size: 80px;
  line-height: 84px;
  margin: 0px;
  padding: 100px 130px;
  font-weight: 700;
  color: rgb(25, 25, 27);
  background-image: linear-gradient(
    147deg,
    rgba(141, 141, 236, 0.17) 0%,
    rgba(84, 84, 212, 0) 100%
  );
`;

const PageBody = styled.div`
  padding: 20px 100px 0 100px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 30px;
  background: linear-gradient(
    147deg,
    rgba(141, 141, 236, 0.17) 0%,
    rgba(84, 84, 212, 0) 100%
  );
  border-radius: 15px;
`;

const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.primaryPink};
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.textGrey};
  line-height: 20px;
`;

export default Product;
