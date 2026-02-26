function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src="/images/photo.jpg" alt="Profile photo" className="profile-pic" />
      <p>
        Hi! I'm Samantha Nicole Bogo. I'm an IT student who enjoys learning new things and improving skills.
      </p>
      <p>
        Email:{' '}
        <a href="mailto:bogosamanthanicole25@mail.com">
          bogosamanthanicole25@mail.com
        </a>
        <br />
        GitHub:{' '}
        <a href="https://github.com" target="_blank" rel="noreferrer">
          github.com
        </a>
      </p>
    </section>
  );
}

export default About;

