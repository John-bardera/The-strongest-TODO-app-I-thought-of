export interface Task {
  id?: string;
  boardId?: string;
  parentId?: string;
  title: string;
  period?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
  // TODO: datetimeにするかどうか
  index: number;
  priority: number;
  isDone: boolean;
  createdAt?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
  updatedAt?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
}
