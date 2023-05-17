import { configureStore } from '@reduxjs/toolkit';

import myCars from './../redux/getData';

const store=configureStore(
    {
        reducer: {
          myCars:myCars,
        },
    }
)
export default store