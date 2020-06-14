module.exports = {
  name: 'company-feature-manage',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/company/feature-manage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
