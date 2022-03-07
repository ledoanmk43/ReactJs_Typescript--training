import { routerPageError } from '@view/PageError/router';
import { routerHome } from '@view/Home/router';
import { routerViewProfile } from '@view/Profile/router';
import { IRouter } from './interface';
import { routerClasses } from '@view/Classes/router';
import { routerSchoolRegister } from '@view/SchoolRegister/router';

export const privatePage: IRouter[] = [
  // routerHome,
  // routerGlobalReport,
  // routerListOfField,
  // routerViewProfile,
  // routerBeat,
  // routerPageError,
  
];

export const publicPage: IRouter[] = [
  routerHome,
  routerClasses,
  routerSchoolRegister,
  routerViewProfile,
  routerPageError,
];


