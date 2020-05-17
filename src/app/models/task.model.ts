export interface Task {
  id: string;
  boardId: string;
  parentId: string;
  title: string;
  period: string;
  // TODO: datetimeにするかどうか
  index: number;
  priority: number;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}
