import { todo } from "./Todo";

export type DataTrackerType = "Students" | "Staff" | "Date";

type DataTrackerProps = {
  dataTrackerType: DataTrackerType;
  onChange: (variant: string, id: number, value: any) => void;
  checked: boolean;
  variant: string;
  school: todo;
  value: string;
};

export const DataTracker: React.FC<DataTrackerProps> = ({
  onChange,
  dataTrackerType,
  checked,
  variant,
  school,
  value,
}) => {
  return (
    <div className="DataTracker">
      <div className="DataTrackerHeader">
        <input
          className="CheckBox"
          type="checkbox"
          checked={checked}
          onChange={() => {
            onChange(variant, school.id, "");
          }}
          onClick={(e) => e.stopPropagation()}
        />
        <label className="DataTrackerType">{dataTrackerType}</label>
      </div>
      <textarea
        className="DataTextArea"
        placeholder={dataTrackerType}
        onChange={(e) => onChange(dataTrackerType, school.id, e.target.value)}
        onClick={(e) => e.stopPropagation()}
      ></textarea>
    </div>
  );
};
