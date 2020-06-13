module.exports = {
  name: 'customer-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/customer/domain',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
