import { useEffect, useState } from "react";
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
  const [internalValue, setInternalValue] = useState("");
  const [internalChecked, setInternalChecked] = useState(checked);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setInternalValue(value), [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setInternalChecked(checked), [checked]);

  return (
    <div className="DataTracker">
      <div className="DataTrackerHeader">
        <input
          className="CheckBox"
          type="checkbox"
          checked={internalChecked}
          onChange={() => {
            onChange(variant, school.id, "");
            setInternalChecked(!internalChecked);
          }}
          onClick={(e) => e.stopPropagation()}
        />
        <label className="DataTrackerType">{dataTrackerType}</label>
      </div>
      <textarea
        className="DataTextArea"
        placeholder={dataTrackerType}
        onChange={(e) => {
          onChange(dataTrackerType, school.id, e.target.value);
          setInternalValue(e.target.value);
        }}
        onClick={(e) => e.stopPropagation()}
        value={internalValue}
      ></textarea>
    </div>
  );
};
