import { LoggingInterceptor } from './logging.interceptor';
import { ContactInterceptor } from './contact.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptProviders  =[
  {provide:HTTP_INTERCEPTORS, useClass:ContactInterceptor, multi:true},
  {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true}

]