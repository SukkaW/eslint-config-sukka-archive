import genericSpacing from './rules/typescript/generic-spacing';
import importDedupe from './rules/import-dedupe';

export default {
  rules: {
    'import-dedupe': importDedupe,
    'typescript/generic-spacing': genericSpacing
  }
};
