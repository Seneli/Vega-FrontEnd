import about_content from 'static/text/about';

const About = () => {
  return (
    <>
      <h1>Gonna be the about page</h1>
      {about_content.map((content, index) => {
        return (
          <div>
            <h2>{content.title}</h2>
            <p>{content.paragraph}</p>
          </div>
        );
      })}
    </>
  );
};

export default About;
