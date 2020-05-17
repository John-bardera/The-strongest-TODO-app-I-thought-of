export interface Board {
  id: string;
  parentId: string;
  title: string;
  view: 'board' | 'list';
  index: number;
  priority: number; // priority -> index-> period の順に評価
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
}
