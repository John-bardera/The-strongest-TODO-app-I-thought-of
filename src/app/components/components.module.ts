import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DirectivesModule } from '@/directives/directives.module';
import { PipesModule } from '@/pipes/pipes.module';

import { EmptyStateComponent } from './empty-state/empty-state.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProfileFormModalComponent } from './profile-form-modal/profile-form-modal.component';
import { ScoreTableComponent } from './score/score-table/score-table.component';
import { AppButtonComponent } from './utils/app-button/app-button.component';
import { FabButtonComponent } from './utils/fab-button/fab-button.component';
import { WysiwygBodyComponent } from './wysiwyg-body/wysiwyg-body.component';

@NgModule({
  declarations: [
    AppButtonComponent,
    FabButtonComponent,
    ScoreTableComponent,
    ProductItemComponent,
    ProfileFormModalComponent,
    MemberItemComponent,
    NotificationItemComponent,
    WysiwygBodyComponent,
    EmptyStateComponent,
  ],
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, DirectivesModule, PipesModule],
  exports: [
    AppButtonComponent,
    FabButtonComponent,
    ScoreTableComponent,
    ProductItemComponent,
    ProfileFormModalComponent,
    MemberItemComponent,
    NotificationItemComponent,
    WysiwygBodyComponent,
    EmptyStateComponent,
  ],
})
export class ComponentsModule {}
