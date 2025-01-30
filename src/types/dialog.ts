export interface IDialog {
  label: string;
  actionType: 'button' | 'link' | 'anchor' | 'imageButton';
  url?: string;
  path?: string;
  image?: string;
  callback?: () => void;
}
