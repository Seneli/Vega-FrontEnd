import overview_content from 'helpers/text/product';
import styled from 'styled-components';

const Product = () => {
  return (
    <>
      <PageHeader>Product Overview</PageHeader>
      {overview_content.map((content, index) => {
        return (
          <PageBody>
            <Subtitle>{content.title}</Subtitle>
            <Paragraph>{content.paragraph}</Paragraph>
          </PageBody>
        );
      })}
    </>
  );
};

const PageHeader = styled.h1`
  font-size: 80px;
  line-height: 84px;
  margin: 0;
  padding: 100px;
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

const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.primaryPink};
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.textGrey};
  line-height: 20px;
`;

export default Product;
