module.exports = {
  name: 'catalog-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/domain',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
