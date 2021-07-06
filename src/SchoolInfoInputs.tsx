import { useEffect, useState } from "react";
import { todo } from "./Todo";

type SchoolInfoInputsProps = {
  onChange: (variant: string, id: number, value: any) => void;
  school: todo;
};

export const SchoolInfoInputs: React.FC<SchoolInfoInputsProps> = ({
  onChange,
  school,
}) => {
  const [internalSchoolName, setInternalSchoolName] = useState("");
  const [internalContactName, setInternalContactName] = useState("");
  const [internalContactEmail, setInternalContactEmail] = useState("");
  const [internalContactPhone, setInternalContactPhone] = useState("");

  useEffect(() => {
    setInternalSchoolName(school.schoolName);
    setInternalContactName(school.contactName);
    setInternalContactEmail(school.contactEmail);
    setInternalContactPhone(school.contactPhone);
  }, [school]);

  return (
    <div className="SchoolInfoInputs">
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="School"
        onChange={(e) => {
          onChange("schoolName", school.id, e.target.value);
          setInternalSchoolName(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
        value={internalSchoolName}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Contact Name"
        onChange={(e) => {
          onChange("contactName", school.id, e.target.value);
          setInternalContactName(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
        value={internalContactName}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Email"
        onChange={(e) => {
          onChange("contactEmail", school.id, e.target.value);
          setInternalContactEmail(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
        value={internalContactEmail}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Phone"
        onChange={(e) => {
          onChange("contactPhone", school.id, e.target.value);
          setInternalContactPhone(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
        value={internalContactPhone}
      />
    </div>
  );
};
