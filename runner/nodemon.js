const watch = ['/app/dist/apps/' + process.env.SERVICE_NAME + '/**/*.js'];
module.exports = {
  restartable: 'rs',
  colours: true,
  watch,
  runOnChangeOnly: false,
  verbose: false,
};
