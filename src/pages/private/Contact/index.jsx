import { Typography } from "antd";
import ContactUsForm from "../../../components/forms/contactusForm";
import "./contact.scss";

const { Title } = Typography;
const Contact = () => {
  return (
    <div id="registerPage">
      <ContactUsForm />
    </div>
  );
};

export default Contact;
