import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { eventList } from '../data/eventList';

@Component({
  selector: 'app-event-details',
  imports: [RouterLink],
  templateUrl: './event-details.html',
})
export class EventDetails {
  private route = inject(ActivatedRoute);

  private id = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('id'))),
    { initialValue: null },
  );

  event = computed(() => eventList.find((e) => e.id === this.id()));
}