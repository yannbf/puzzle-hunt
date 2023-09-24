import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { publicDecrypt } from 'crypto';

const cypherText =
  '1b06033bd03f654a0f80dd785e3383a94968912173779b34307539d661c28a1434fbaf88a85535bbfd65e794d1c8624c85cbcb6911a7a9fddd3a7395fcca2eadfd61e6f01758686f644120847418a2da95e1fbb25d0dc712f0cc1b2c2502a07254407657dc9b259d8bca562724e548007b713ad8c446ddd6f08eac4924e6a68af7c69f54e69a43ee654da7484abb008c2dfbaecee91207c1d4aa189e3c5c6a6fd732f9676103bea0ca108488610a646fd565001db8496d614a9168ebfcccb129008ea775a9b1ba4137531d95f12fdd80d181cdb1ad64bd7ef7b1b6f5583b6c5c76a0a0a68d2478cb0c495a239f7f610383960c72f9b810fe2ffc95fd19cffa2f';
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
  },
});
