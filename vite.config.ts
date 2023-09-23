import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { publicDecrypt } from 'crypto';

const cypherText =
  '3efb63a18d287336c856d85084c5bc0f28af3ddf895065c3a25e8d0cca123616e730ded31365580891a63b991c2976e35f20df582028c53177d3fa631436a35e5aef44bcc83077e278a59966d48be484311bfbdddf08b9ca2612e31784d3f4795740ae8747094a024cce5d1e0dfe7a3a0b12239635fc660aade4cb9516ae9e10aa93f26d35f735270950e0d51586e64a8ea4056c70c2455f837c4eb0e83c9d05a35c0b24a301752b97c2eb125d250e8ba322ef1a7e609b3b559c465f79df716f4734dd88cc02272f3dcfada56e2b69f6605de41b826915a9481b6af1191bbec54467b2554fcc084ba8515cb06cd8e44c87a2b6fa5ae6b299f252414e72d93ce7';
const publicKey =
  '-----BEGIN RSA PUBLIC KEY-----\n' +
  'MIIBCgKCAQEAo04hvwYZVS2I8eO/KDUOHlsExWf1EpYqoG3n25jJe4lVssM8HeKJt98HdPi5\n' +
  'G+2Dbo4t8xwVtUO5R6Gj9gS5WprJ+IhnDr7AWV0lRjKgBqNQtAGT4YXjxmWDreosK+Hvx+ty\n' +
  'eqfmEfv1BGBBfeJZhEToHEUNIhc+UgNTTdEyAOZdWHMMATvQdny4D76GvERYPfxoX6hlnKl5\n' +
  'yW7pEuLP6qdiB+v8Df1C47G6nso24sqQoDb0fVtvMbfCbznlndcSeYcmPtiMC7lyEfV4KJEd\n' +
  'weLBz0m80+8FErpt9J+4y4ClRHeOlwvYTYabTSbQPBQdXlw1eyaWzRjsAsNM8w7gLwIDAQAB\n' +
  '-----END RSA PUBLIC KEY-----\n';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {
    bonus: publicDecrypt(publicKey, Buffer.from(cypherText, 'hex')).toString(),
    global: {},
  },
});
