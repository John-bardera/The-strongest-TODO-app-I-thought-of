export interface Task {
  id?: string;
  parentId?: string;
  boardId: string;
  title: string;
  // priority -> index -> period の順に評価
  priority: number;
  index: number;
  isDone: boolean;
  period?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
  createdAt?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
  updatedAt?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
}
