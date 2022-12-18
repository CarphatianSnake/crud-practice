export interface Data {
  id: string;
  name: string;
  salary: number | string;
  bonus: boolean;
  promotion: boolean;
}

export interface DeleteItem {
  (id: string): void
}

export interface EmployeeData extends Data {
  onDelete: DeleteItem;
  onToggle: OnToggle;
  setSalary: SetSalary;
}

export type SetSalary = React.Dispatch<React.SetStateAction<string>>;

export interface IEmployeesListItem {
  (props: EmployeeData): JSX.Element
}

export interface OnToggle {
  (id: string, propName: "bonus" | "promotion"): void
}

export interface EmployeesListProps {
  data: Data[];
  onDelete: DeleteItem;
  onToggle: OnToggle;
  setSalary: SetSalary
}

export interface IEmplyeesList {
  (props: EmployeesListProps): JSX.Element
}

export interface AddItem {
  (e: React.FormEvent<HTMLFormElement>, data: Pick<Data, "name" | "salary">): void
}

export interface OnAdd {
  onAdd: AddItem
}

export interface ISeachProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>
}

export interface ISearchPanel {
  (props: ISeachProps): JSX.Element
}

export interface IOnChangeHandle {
  (e: React.ChangeEvent<HTMLInputElement>): void
}

export interface IAppFilted {
  (props: {setFilter: React.Dispatch<React.SetStateAction<Filters>>}): JSX.Element
}

export enum Filters {
  All = "All employees",
  Promotion = "For promotion",
  Thousand = "Salary > 1000$"
}