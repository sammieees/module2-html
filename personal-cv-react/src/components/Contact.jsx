function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit" id="submitBtn">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;

