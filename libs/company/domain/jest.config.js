module.exports = {
  name: 'company-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/company/domain',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
