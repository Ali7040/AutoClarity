import { trigger, style, animate, transition } from '@angular/animations';

export const bounceInAnimation = trigger('bounceIn', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
    transition('void => *', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
]);
