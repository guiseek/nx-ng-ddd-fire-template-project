module.exports = {
  name: 'catalog-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
