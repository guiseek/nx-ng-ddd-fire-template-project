import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';

function getNav({ path, data, children = [] }: Route) {
  return {
    path,
    ...{
      label: data.label,
      icon: data.icon
    } = data,
    children: !!children.length ? children.map(getNav) : []
  }
}
interface Nav {
  label: string;
  icon: string;
  path: string;
  children: Nav[];
}

@Component({
  selector: 'seek-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  breakPoints$ = this.breakpointObserver.observe(Breakpoints.Handset);
  cards$ = this.breakPoints$.pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  navigation: Nav;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    const nav = this.router.config
    console.log(nav);

    const route = this.route.routeConfig;
    console.log(route);

    this.navigation = getNav(route);

  }

}
