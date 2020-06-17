export interface Board {
  id: string;
  parentId: string;
  title: string;
  view: 'board' | 'list';
  // priority -> index の順に評価
  priority: number;
  index: number;
  isArchived: boolean;
  createdAt?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
  updatedAt?: Date | firebase.firestore.FieldValue | firebase.firestore.Timestamp;
}
