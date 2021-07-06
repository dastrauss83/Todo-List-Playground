import { useEffect, useState } from "react";
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
  const [internalValue, setInternalValue] = useState("");

  useEffect(() => setInternalValue(value), [value]);

  return (
    <div className="ContactNote">
      <label className="ContactNoteType">{contactNoteType}</label>
      <textarea
        className="ContactNotes"
        placeholder={contactNoteType}
        onChange={(e) => {
          onChange(contactNoteType, school.id, e.target.value);
          setInternalValue(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
        value={internalValue}
      ></textarea>
    </div>
  );
};
