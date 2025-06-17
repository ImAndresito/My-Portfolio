import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          top: 0,
          transform: 'translateX(0%)',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ transform: 'translateX(100%)' })], {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [animate('500ms ease-out', style({ transform: 'translateX(0)' }))],
        {
          optional: true,
        }
      ),
    ]),
  ]),
]);
