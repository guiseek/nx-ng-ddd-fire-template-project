module.exports = {
  name: 'auth-feature-register',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/feature-register',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
