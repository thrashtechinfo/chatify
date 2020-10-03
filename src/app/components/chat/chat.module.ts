import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatComponent, UsersComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
