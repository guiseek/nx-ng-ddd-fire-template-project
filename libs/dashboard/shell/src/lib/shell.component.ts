import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  navigation: Nav;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const nav = this.router.config
    console.log(nav);

    const route = this.route.routeConfig;
    console.log(route);

    this.navigation = getNav(route);

  }

}
