import { todo } from "./Todo";

export type ContactNoteType = "Emails" | "Phone Calls" | "General Notes";

type ContactNoteProps = {
  contactNoteType: ContactNoteType;
  onChange: (variant: string, id: number, value: any) => void;
  value: any;
  school: todo;
};

export const ContactNote: React.FC<ContactNoteProps> = ({
  onChange,
  contactNoteType,
  school,
  value,
}) => {
  return (
    <div className="ContactNote">
      <label className="ContactNoteType">{contactNoteType}</label>
      <input
        type="text"
        className="ContactNotes"
        placeholder={contactNoteType}
        onChange={(e) => onChange(contactNoteType, school.id, e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
