import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { UserComponent } from "./user/user.component";
import { CardComponent } from "./shared/card/card.component";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
