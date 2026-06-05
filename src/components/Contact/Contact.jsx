// import "./Contact.css";

// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(() => {
//         toast.success("Message sent successfully!");

//         setForm({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       })
//       .catch(() => {
//         toast.error("Something went wrong.");
//       });
//   };

//   return (
//     <section id="contact" className="contact section">

//       <Toaster />

//       <div className="container">

//         <div className="section-title">
//           <h2>
//             Contact <span>Me</span>
//           </h2>
//         </div>

//         <motion.div
//           className="contact-wrapper"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >

//           <div className="contact-info">

//             <h3>Let's Build Something Amazing</h3>

//             <p>
//               Looking for a Shopify, Wordpress, Framer, Webflow
//             Wix and Squarepress developer?
//               Let's discuss your project.
//             </p>

//             <div>
//               <strong>Email:</strong>
//               <p>prathmesh.webdev@gmail.com</p>
//             </div>

//             <div>
//               <strong>Phone:</strong>
//               <p>+91 8483899345</p>
//             </div>

//             <div>
//               <strong>Location:</strong>
//               <p>Maharashtra, India</p>
//             </div>

//           </div>

//           <form onSubmit={handleSubmit}>

//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={form.subject}
//               onChange={handleChange}
//             />

//             <textarea
//               name="message"
//               placeholder="Message"
//               rows="6"
//               value={form.message}
//               onChange={handleChange}
//               required
//             />

//             <button type="submit">
//               Send Message
//             </button>

//           </form>

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default Contact;





import "./Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_5tot3iu",
        "template_03b2py4",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "dqmrGQE6LBSLprSsq"
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact section">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111827",
            color: "#fff",
            border: "1px solid #7c5cff",
          },
        }}
      />

      <div className="container">
        <div className="section-title">
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <h3>Let's Build Something Amazing</h3>

            <p>
              Looking for a Shopify, WordPress, Framer, Webflow, Wix, or
              Squarespace developer? Let's discuss your project and bring your
              ideas to life.
            </p>

            <div className="contact-item">
              <strong>Email:</strong>
              <p>prathmesh.webdev@gmail.com</p>
            </div>

            <div className="contact-item">
              <strong>Phone:</strong>
              <p>+91 8483899345</p>
            </div>

            <div className="contact-item">
              <strong>Location:</strong>
              <p>Maharashtra, India</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Project Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;