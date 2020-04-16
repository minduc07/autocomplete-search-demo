import { Routes } from '@angular/router';

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
import { MaskComponent } from './components/mask/mask.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
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




export const componentsList: Routes = [
  {
    path: 'autocomplete',
    component: AutocompleteContainerComponent,
    data: {
      name: 'Autocomplete',
    },
  },
  {
    path: 'autofocus',
    component: AutofocusComponent,
    data: {
      name: 'Autofocus',
    },
  },
  {
    path: 'button',
    component: ButtonComponent,
    data: {
      name: 'Button',
    },
  },
  {
    path: 'card',
    component: CardComponent,
    data: {
      name: 'Card',
    },
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
    data: {
      name: 'Checkbox',
    },
  },
  {
    path: 'copy',
    component: CopyComponent,
    data: {
      name: 'Copy',
    },
  },
  {
    path: 'datepicker',
    component: DatepickerComponent,
    data: {
      name: 'Datepicker',
    },
  },
  {
    path: 'date-range',
    component: DateRangeComponent,
    data: {
      name: 'Date Range',
    },
  },
  {
    path: 'icon',
    component: IconComponent,
    data: {
      name: 'Icon',
    },
  },
  {
    path: 'icon-button',
    component: IconButtonComponent,
    data: {
      name: 'Icon Button',
    },
  },
  {
    path: 'input',
    component: InputComponent,
    data: {
      name: 'Input',
    },
  },
  {
    path: 'link',
    component: LinkComponent,
    data: {
      name: 'Link',
    },
  },
  {
    path: 'log-in-form',
    component: LogInFormComponent,
    data: {
      name: 'Log In Form',
    },
  },
  {
    path: 'loading-overlay',
    component: LoadingOverlayComponent,
    data: {
      name: 'Loading Overlay',
    },
  },
  {
    path: 'mask',
    component: MaskComponent,
    data: {
      name: 'Mask',
    },
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: {
      name: 'Menu',
    },
  },
  {
    path: 'navigation',
    component: NavigationComponent,
    data: {
      name: 'Navigation',
    },
  },
  {
    path: 'paginator',
    component: PaginatorComponent,
    data: {
      name: 'Paginator',
    },
  },
  {
    path: 'pipes',
    component: PipesComponent,
    data: {
      name: 'Pipes',
    },
  },
  {
    path: 'radio',
    component: RadioComponent,
    data: {
      name: 'Radio',
    },
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      name: 'Search',
    },
  },
  {
    path: 'select',
    component: SelectComponent,
    data: {
      name: 'Select',
    },
  },
  {
    path: 'table',
    component: TableComponent,
    data: {
      name: 'Table',
    },
  },
  {
    path: 'toggle',
    component: ToggleComponent,
    data: {
      name: 'Toggle',
    },
  },
  {
    path: 'spacing',
    component: SpacingComponent,
    data: {
      name: 'Spacing',
    },
  },
  {
    path: 'spacing-styles',
    component: SpacingStylesComponent,
    data: {
      name: 'Spacing SCSS',
    },
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    data: {
      name: 'Tooltip',
    },
  },
  {
    path: 'typography',
    component: TypographyComponent,
    data: {
      name: 'Typography',
    },
  },
  {
    path: 'validation',
    component: ValidationComponent,
    data: {
      name: 'Validation',
    },
  },
  {
    path: 'window-service',
    component: WindowServiceComponent,
    data: {
      name: 'Window Service',
    },
  },
];
