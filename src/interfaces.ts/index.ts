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
  onDelete: DeleteItem
}

export interface EmployeesListProps {
  data: Data[];
  onDelete: DeleteItem;
}

export interface AddItem {
  (e: React.FormEvent<HTMLFormElement>, data: Pick<Data, 'name' | 'salary'>): void
}

export interface OnAdd {
  onAdd: AddItem
}