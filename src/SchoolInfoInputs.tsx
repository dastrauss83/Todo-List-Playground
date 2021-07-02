import { todo } from "./Todo";

type SchoolInfoInputsProps = {
  onChange: (variant: string, id: number, value: any) => void;
  school: todo;
};

export const SchoolInfoInputs: React.FC<SchoolInfoInputsProps> = ({
  onChange,
  school,
}) => {
  return (
    <div className="SchoolInfoInputs">
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="School"
        onChange={(e) => onChange("schoolName", school.id, e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Contact Name"
        onChange={(e) => onChange("contactName", school.id, e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Email"
        onChange={(e) => onChange("contactEmail", school.id, e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
      <input
        className="SchoolInfoInput"
        type="text"
        placeholder="Phone"
        onChange={(e) => onChange("contactPhone", school.id, e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
