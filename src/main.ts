import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// ↓ 追加
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router'; // ✅ 追加：ルーティング提供用
import { routes } from './app/app.routes';       // ✅ 追加：ルート定義をインポート

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),                      // ✅ ルーティング追加
    importProvidersFrom(FormsModule)            // ✅ フォーム追加（既存）
  ]
}).catch(err => console.error(err));

// ✅ GitHub Pages 対応：クエリパラメータ redirect があれば補正
const url = new URL(location.href);
const redirectPath = url.searchParams.get('redirect');
if (redirectPath) {
  history.replaceState(null, '', redirectPath);
}
