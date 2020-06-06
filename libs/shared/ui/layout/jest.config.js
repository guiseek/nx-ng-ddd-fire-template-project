module.exports = {
  name: 'shared-ui-layout',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/ui/layout',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
