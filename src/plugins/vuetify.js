import '@fontsource/roboto/100';
import '@fontsource/roboto/100-italic';
import '@fontsource/roboto/300';
import '@fontsource/roboto/300-italic';
import '@fontsource/roboto/400';
import '@fontsource/roboto/400-italic';
import '@fontsource/roboto/500';
import '@fontsource/roboto/500-italic';
import '@fontsource/roboto/700';
import '@fontsource/roboto/700-italic';
import '@fontsource/roboto/900';
import '@fontsource/roboto/900-italic';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
  icons: {
    aliases,
    sets: { mdi },
  },
});
