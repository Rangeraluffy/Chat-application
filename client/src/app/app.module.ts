import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './containers/chat/chat.component';
import { UsernameComponent } from './components/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
