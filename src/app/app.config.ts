import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    ),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'tour-of-heroes-dc3f6',
        appId: '1:936637327018:web:f5441214888324437412d3',
        storageBucket: 'tour-of-heroes-dc3f6.appspot.com',
        apiKey: 'AIzaSyCKE8R0OWyFPVTmZwFPYgQMevwURU5h4E4',
        authDomain: 'tour-of-heroes-dc3f6.firebaseapp.com',
        messagingSenderId: '936637327018',
        measurementId: 'G-MRTP5G3W41',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideVertexAI(() => getVertexAI()),
  ],
};
