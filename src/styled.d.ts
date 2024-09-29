import 'styled-components';

import theme from '~/styledComponents/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof theme['color'];
    font: typeof theme['font'];
    bodyWidth: typeof theme['bodyWidth']
    margin: typeof theme['margin']
    padding: typeof theme['padding']
  }
}
