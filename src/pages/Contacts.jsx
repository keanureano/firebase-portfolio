import contacts from "../cms/contacts.json";
import { SocialIcon } from "react-social-icons";

export default function Contacts() {
  return (
    <div className="w-72">
      <h1 className="title">Contact.</h1>
      <div className="flex gap-2">
        {contacts.map((contact) => {
          return (
            <SocialIcon
              key={contact.url}
              url={contact.url}
              className="social-icon"
              bgColor="#e9e9e9"
              style={{ width: 40, height: 40 }}
            />
          );
        })}
      </div>
    </div>
  );
}
