import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterContentPipe } from './filter-content.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterContentPipe,
    HoverStyleDirective,
    CreateContentComponent,
    MessagesComponent,
    AddContentDialogComponent,
    ContentDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule,

    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: 'content', component: ContentListComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  entryComponents: [AddContentDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
