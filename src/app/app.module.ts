import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';    

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

// other imports
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    CustomPipesComponent,
    CapitalizePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
