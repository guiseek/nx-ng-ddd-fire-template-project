module.exports = {
  name: 'shared-util-catalog',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-catalog',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
