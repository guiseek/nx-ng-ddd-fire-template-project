import { AfterContentInit, Component, ContentChildren, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MatTab } from '@angular/material/tabs';
import { TabContentDirective } from './tab/tab-content.directive';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'seek-nav-tabs',
  exportAs: 'seek-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavTabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @ViewChildren(MatTab)
  public matTabs: QueryList<MatTab>;

  @ViewChild(TabContentDirective)
  adHost: TabContentDirective;


  tabLoadTimes: Date[] = [];

  ngAfterContentInit(): void {

    setTimeout(() => {
      console.log(this.tabs);
    }, 1500)


    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  change(value) {
    console.log(value);

  }
  openTab(title: string, template: TemplateRef<any>, data?: any, isCloseable = true) {
    const newTab = this.createTabComp(title, template, data, isCloseable);

    this.tabs.reset([
      ...this.tabs.toArray(),
      newTab,
    ]);

    this.selectTab(newTab);
  }

  private createTabComp(title: string, template, data, isCloseable) {
    const { instance } = this.adHost.addComponent(TabComponent);

    instance.title = title;
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;

    return instance;
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => t.active = t === tab);
  }

  closeTab(tab: TabComponent) {
    if (!this.hasTab(tab)) {
      return;
    }
    if (this.isActiveTab(tab)) {
      this.selectTab(this.tabs.first);
    }
    this.adHost.removeComponent(tab);
    this.tabs.reset(this.tabs.filter(t => t !== tab));
  }

  hasTab(tab: TabComponent) {
    return this.tabs.toArray().some(t => t === tab);
  }

  isActiveTab(tab: TabComponent) {
    return this.getActiveTab() === tab;
  }

  closeActiveTab() {
    this.closeTab(
      this.getActiveTab()
    );
  }

  getActiveTab() {
    return this.tabs.find(tab => tab.active)
  }
  getActiveTabIndex() {
    return this.tabs.toArray().findIndex(tab => tab.active)
  }
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    console.log(index, this.tabLoadTimes[index]);
    return this.tabLoadTimes[index];
  }
}
