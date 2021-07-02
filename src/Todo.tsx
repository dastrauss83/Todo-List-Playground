import { DataTracker } from "./DataTracker";
import { SchoolInfo } from "./SchoolInfo";
import { ContactNote } from "./ContactNote";
import { SchoolInfoInputs } from "./SchoolInfoInputs";
import { useEffect, useState } from "react";

export type todo = {
  id: number;

  schoolName: string;

  contactName: string;
  contactEmail: string;
  contactPhone: string;

  Students: string;
  StudentsChecked: boolean;
  Staff: string;
  StaffChecked: boolean;
  Date: string;
  DateChecked: boolean;

  Emails: string;
  "Phone Calls": string;
  "General Notes": string;
};

export type TodoProps = {
  screenState: string;
  setScreenState: React.Dispatch<React.SetStateAction<string>>;
  activeTodos: todo[];
  setActiveTodos: React.Dispatch<React.SetStateAction<Array<todo>>>;
  todo: todo;
  onChange: (variant: string, id: number, value?: any) => void;
  onClick: (e: any, variant: string, id: number) => void;
  todoList: todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Array<todo>>>;
};

export const Todo: React.FC<TodoProps> = ({
  screenState,
  setScreenState,
  todo,
  onChange,
  onClick,
  todoList,
  setTodoList,
}) => {
  const [school, setSchool] = useState<todo>({
    id: 0,

    schoolName: "",

    contactName: "",
    contactEmail: "",
    contactPhone: "",

    Students: "",
    StudentsChecked: false,
    Staff: "",
    StaffChecked: false,
    Date: "",
    DateChecked: false,

    Emails: "",
    "Phone Calls": "",
    "General Notes": "",
  });

  useEffect(() => {
    setSchool(todo);
  }, [todo, screenState, todoList, setTodoList]);

  if (screenState === "new") {
    return (
      <div className="Todo">
        <SchoolInfo school={school} />
        <SchoolInfoInputs onChange={onChange} school={school} />
        <button
          className="Button"
          onClick={(e) => onClick(e, "expand", school.id)}
        >
          Create
        </button>
      </div>
    );
  }

  if (screenState === "list") {
    return (
      <div className="Todo" onClick={(e) => onClick(e, "expand", school.id)}>
        <SchoolInfo school={school} />
        <button
          className="Button"
          onClick={(e) => onClick(e, "delete", school.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className="Todo" onClick={(e) => onClick(e, "expand", school.id)}>
      <SchoolInfo school={school} />
      <div className="DataTrackerSection">
        <DataTracker
          school={school}
          dataTrackerType="Students"
          onChange={onChange}
          value={school.Students}
          checked={school.StudentsChecked}
          variant={"StudentsChecked"}
        />
        <DataTracker
          school={school}
          dataTrackerType="Staff"
          onChange={onChange}
          value={school.Staff}
          checked={school.StaffChecked}
          variant={"StaffChecked"}
        />
        <DataTracker
          school={school}
          dataTrackerType="Date"
          onChange={onChange}
          value={school.Date}
          checked={school.DateChecked}
          variant={"DateChecked"}
        />
      </div>
      <div className="ContactNoteSection">
        <ContactNote
          school={school}
          contactNoteType="Emails"
          onChange={onChange}
          value={school.Emails}
        />
        <ContactNote
          school={school}
          contactNoteType="Phone Calls"
          onChange={onChange}
          value={school["Phone Calls"]}
        />
        <ContactNote
          school={school}
          contactNoteType="General Notes"
          onChange={onChange}
          value={school["General Notes"]}
        />
        <button
          className="Button"
          onClick={() => {
            setScreenState("list");
          }}
        >
          Collapse
        </button>
      </div>
      <SchoolInfoInputs onChange={onChange} school={school} />
    </div>
  );
};
