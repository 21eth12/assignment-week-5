import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { eventList } from '../data/eventList';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  templateUrl: './events.html',
})
export class Events {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  events = eventList;
  categories = ['Training', 'Seminar', 'Workshop'];
  months = [
    { value: 'aug', label: 'August' },
    { value: 'sep', label: 'September' },
  ];

  private params = toSignal(
    this.route.queryParamMap.pipe(
      map((p) => ({ category: p.get('category'), month: p.get('month') })),
    ),
    { initialValue: { category: null as string | null, month: null as string | null } },
  );

  category = computed(() => this.params().category);
  month = computed(() => this.params().month);

  filtered = computed(() =>
    this.events.filter(
      (e) =>
        (!this.category() || e.category === this.category()) &&
        (!this.month() || e.month === this.month()),
    ),
  );

  setFilter(key: 'category' | 'month', value: string | null) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [key]: value },
      queryParamsHandling: 'merge',
    });
  }

  clear() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: null, month: null },
      queryParamsHandling: 'merge',
    });
  }
}