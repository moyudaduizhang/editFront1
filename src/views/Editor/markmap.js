import { loadJS, loadCSS } from 'markmap-common';
import { Transformer } from 'markmap-lib';

export const transformer = new Transformer();
const { scripts, styles } = transformer.getAssets();
loadCSS(styles);
loadJS(scripts);
