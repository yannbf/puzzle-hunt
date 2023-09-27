import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { publicDecrypt } from 'crypto';

const cypherText =
  '99d7e3cd8e351235ac2eef8405b8a3f268d94cb855383b7c3a8ca9d27d1c6595f8897659127ecaca6cff8729d2b3e4f908ccb4941ee0c8d5d85776579ffa0e442dad02c815825e6e100cb8e04b4d24bce7deb566bfda954c3041bf77934b63621d2fe3dee805767b0880b562aa401563b7d0d8602462449d8f3a90597b2ed27402f031c12c7282d7d0e82ca7ac4792a315fef64305b0c699db112423b1141245afca4dba2feb9f351a428c46cfd5e376db6b8a58cb06fb8426947e9afc46f7e0b7860ad3cf5c45c82391097acdff30f4c492c99d2b997f88e5f57c0ad43e7114a060ca8f9010e375caa3fdc75cae972ba14c4ffb26ffb37efeea5fe07041f1f2';
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
