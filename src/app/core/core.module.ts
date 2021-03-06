import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.services';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/loggin.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppinglistService,
        RecipeService,
        DataStorageService,
        AuthService,
      // Segun el orden se ejecutan los interceptores, de arriba hacia abajo
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    ]
})
export class CoreModule {}
