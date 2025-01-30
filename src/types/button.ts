export interface IButton {
  label: string;
  actionType: 'button' | 'link' | 'anchor' | 'imageButton';
  url?: string;
  path?: string;
  callback?: () => void;
  grow?: number;
  style?: 'positive' | 'negative' | 'primary';
}
