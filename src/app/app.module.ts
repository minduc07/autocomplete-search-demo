import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

// Native Material modules only needed for demo shell
import {
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
} from '@angular/material';

import {
  TsAutocompleteModule,
  TsAutofocusModule,
  TsButtonModule,
  TsCardModule,
  TsCheckboxModule,
  TsCopyModule,
  TsDatepickerModule,
  TsDateRangeModule,
  TsIconModule,
  TsIconButtonModule,
  TsInputModule,
  TsLinkModule,
  TsLoadingOverlayModule,
  TsLoginFormModule,
  TsMaskModule,
  TsMenuModule,
  TsNavigationModule,
  TsPaginatorModule,
  TsPipesModule,
  TsRadioGroupModule,
  TsSearchModule,
  TsSelectModule,
  TsSortModule,
  TsSpacingModule,
  TsToggleModule,
  TsTableModule,
  TsTooltipModule,
} from '@terminus/ui';

import {
  TsWindowService,
  TsDocumentService,
} from '@terminus/ngx-tools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsComponent } from './components.component';

import { AutocompleteContainerComponent } from './components/autocomplete/autocomplete.container';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutofocusComponent } from './components/autofocus/autofocus.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CopyComponent } from './components/copy/copy.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { IconComponent } from './components/icon/icon.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { InputComponent } from './components/input/input.component';
import { LinkComponent } from './components/link/link.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaskComponent } from './components/mask/mask.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RadioComponent } from './components/radio/radio.component';
import { SearchComponent } from './components/search/search.component';
import { SelectComponent } from './components/select/select.component';
import { SpacingComponent } from './components/spacing/directive/spacing.component';
import { SpacingStylesComponent } from './components/spacing/styles/spacing-styles.component';
import { TableComponent } from './components/table/table.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ValidationComponent } from './components/validation/validation.component';
import { WindowServiceComponent } from './components/window-service/window-service.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,

    // Native Material modules only needed for demo shell
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,

    TsAutocompleteModule,
    TsAutofocusModule,
    TsButtonModule,
    TsCardModule,
    TsCheckboxModule,
    TsCopyModule,
    TsDateRangeModule,
    TsDatepickerModule,
    TsIconModule,
    TsIconButtonModule,
    TsInputModule,
    TsLinkModule,
    TsLoadingOverlayModule,
    TsLoginFormModule,
    TsMaskModule,
    TsMenuModule,
    TsNavigationModule,
    TsPaginatorModule,
    TsPipesModule,
    TsRadioGroupModule,
    TsSearchModule,
    TsSelectModule,
    TsSortModule,
    TsSpacingModule,
    TsTableModule,
    TsToggleModule,
    TsTooltipModule,
  ],
  providers: [
    TsWindowService,
    TsDocumentService,
  ],
  declarations: [
    AppComponent,
    ComponentsComponent,
    AutocompleteContainerComponent,
    AutocompleteComponent,
    AutofocusComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    CopyComponent,
    DatepickerComponent,
    DateRangeComponent,
    IconComponent,
    IconButtonComponent,
    InputComponent,
    LinkComponent,
    LogInFormComponent,
    LoadingOverlayComponent,
    NavigationComponent,
    MaskComponent,
    MenuComponent,
    PaginatorComponent,
    PipesComponent,
    RadioComponent,
    SearchComponent,
    SelectComponent,
    SpacingComponent,
    SpacingStylesComponent,
    TableComponent,
    ToggleComponent,
    TooltipComponent,
    TypographyComponent,
    ValidationComponent,
    WindowServiceComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
