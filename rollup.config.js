import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  plugins: [ nodeResolve({
    module: true
  }) ]
}
